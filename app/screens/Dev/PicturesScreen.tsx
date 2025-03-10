import Picture from '@/app/components/Picture'
import React, { useEffect, useState } from 'react'
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PicturesHeader from '../../components/PicturesHeader'
import { useGetPaginatedPicturesQuery, useLazyGetPaginatedRefreshQuery } from '../../store/slices/springApiSlice'
import { PaginationQueryParams, PaginationResponse } from '../../types/interfaces'

export default function PicturesScreen() {
  const [isRefresh, setIsRefresh] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true)
  const [flatlistHeight, setFlatlistHeight] = useState(0)
  const [contentHeight, setContentHeight] = useState(0)
  const [placeId, setPlaceId] = useState("dev-pic")
  const [documentIdKeyCursor, setDocumentIdKeyCursor] = useState("")
  const [documentIdRefreshCursor, setDocumentIdRefreshCursor] = useState("")
  const [documentIdFutureCursor, setDocumentIdFutureCursor] = useState("")
  const [imageUrls, setImageUrls] = useState<string[]>([])

  const paginatedQuery = useGetPaginatedPicturesQuery({
    placeId: placeId,
    documentIdKeyCursor: documentIdKeyCursor,
    querySize: 15
  })

  const [triggerRefresh, refreshQuery] = useLazyGetPaginatedRefreshQuery()

  useEffect(() => {
    const updateData = (data: PaginationResponse) => {
      if (documentIdKeyCursor == "") {
        setDocumentIdRefreshCursor(data.documentIdRefreshKey)
      }
      setDocumentIdFutureCursor(data.documentIdStartKey)
      setImageUrls(prev => [...prev, ...data.urls])
    }

    if (paginatedQuery.data) {
      updateData(paginatedQuery.data)
    }
  }, [paginatedQuery.data])

  useEffect(() => {
    const updateDataRefresh = (data: PaginationResponse) => {
      setDocumentIdRefreshCursor(data.documentIdRefreshKey)
      setImageUrls(prev => [...data.urls, ...prev])
    }

    if (refreshQuery.data) {
      updateDataRefresh(refreshQuery.data)
    }
  }, [refreshQuery.data])

  useEffect(() => {
    if (contentHeight != 0 && contentHeight <= flatlistHeight && initialLoading) {
      paginate()
      setInitialLoading(false)
    }
  }, [contentHeight, flatlistHeight])

  const paginate = () => {
    setDocumentIdKeyCursor(documentIdFutureCursor)
  }

  const handleRefresh = async () => {
    const params: PaginationQueryParams = {
      placeId: placeId,
      documentIdKeyCursor: documentIdRefreshCursor,
      querySize: 5,
      isRefresh: true
    }
    triggerRefresh(params)
    setIsRefresh(refreshQuery.isFetching)
  }

  return (
    <SafeAreaView style={styles.deviceContainer}>
      <View style={{ borderColor: "blue", borderWidth: 1 }} onLayout={(layoutEvent) => { setFlatlistHeight(layoutEvent.nativeEvent.layout.height) }}>
        {imageUrls && <FlatList
          data={imageUrls}
          ListHeaderComponent={PicturesHeader}
          renderItem={Picture}
          numColumns={3}
          onEndReached={paginate}
          onEndReachedThreshold={0.5}
          stickyHeaderIndices={[0]}
          onContentSizeChange={(contentHeight) => { setContentHeight(contentHeight) }}
          refreshControl={
            <RefreshControl
              refreshing={isRefresh}
              onRefresh={handleRefresh} />
          } />}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  deviceContainer: {
    borderColor: "red",
    borderWidth: 2,
    flex: 1
  },
  contentContainer: {
    height: "100%",
    borderColor: "orange",
    borderWidth: 2
  },
  header: {
    borderColor: "orange",
    borderWidth: 2,
    width: "100%",
    height: "10%"
  }
})