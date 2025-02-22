import { View, Text, StyleSheet, FlatList, RefreshControl, ViewabilityConfig, ViewToken, ViewabilityConfigCallbackPairs, ViewabilityConfigCallbackPair, FlatListComponent } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Picture from '../components/Picture'
import { useGetPaginatedPicturesQuery } from '../store/slices/springApiSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ExtendedViewTokens, PaginationResponse } from '../types/interfaces'
import PicturesHeader from '../components/PicturesHeader'

export default function PicturesScreen() {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true)
  const [flatlistHeight, setFlatlistHeight] = useState(0)
  const [contentHeight, setContentHeight] = useState(0)
  const [placeId, setPlaceId] = useState("dev-pic")
  const [documentIdKeyCursor, setDocumentIdKeyCursor] = useState("")
  const [documentIdRefreshCursor, setDocumentIdRefreshCursor] = useState("")
  const [documentIdFutureCursor, setDocumentIdFutureCursor] = useState("")
  const [imageUrls, setImageUrls] = useState<string[]>([])

  const { data, error, isLoading, isFetching } = useGetPaginatedPicturesQuery({
    placeId: placeId,
    documentIdKeyCursor: documentIdKeyCursor,
    querySize: 15
  })

  useEffect(() => {
    const updateData = (data: PaginationResponse) => {
      setDocumentIdFutureCursor(data.documentIdStartKey)
      setDocumentIdRefreshCursor(data.documentIdRefreshKey)
      setImageUrls(prev => [...prev, ...data.urls])
    }

    if (data) {
      updateData(data)
    }
  }, [data])

  useEffect(() => {
    if (contentHeight != 0 && contentHeight <= flatlistHeight && initialLoading) {
      console.debug(contentHeight)
      console.debug(flatlistHeight)
      paginate()
      setInitialLoading(false)
    }
  }, [contentHeight, flatlistHeight])

  const paginate = () => {
    setDocumentIdKeyCursor(documentIdFutureCursor)
  }

  const handleRefresh = async () => {
    setIsRefreshing(true)
    await setTimeout(() => {
      setIsRefreshing(false)
    }, 2000)
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
              refreshing={isRefreshing}
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