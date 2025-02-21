import { View, Text, StyleSheet, FlatList, RefreshControl, ViewabilityConfig, ViewToken } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Picture from '../components/Picture'
import { useGetPaginatedPicturesQuery } from '../store/slices/springApiSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ExtendedViewTokens, PaginationResponse } from '../types/interfaces'

export default function PicturesScreen() {

  const [viewabilityConfig, setViewabilityConfig] = useState<ViewabilityConfig>({
    waitForInteraction: true,
    itemVisiblePercentThreshold: 10
  })

  const [isRefreshing, setIsRefreshing] = useState(false)
  const [isPaginating, setIsPaginating] = useState(false)
  const [placeId, setPlaceId] = useState("dev-pic")
  const [documentIdKeyCursor, setDocumentIdKeyCursor] = useState("")
  const [documentIdRefreshCursor, setDocumentIdRefreshCursor] = useState("")
  const [documentIdFutureCursor, setDocumentIdFutureCursor] = useState("")
  const [imageUrls, setImageUrls] = useState<string[]>([])

  const { data, error, isLoading } = useGetPaginatedPicturesQuery({
    placeId: placeId,
    documentIdKeyCursor: documentIdKeyCursor,
    querySize: 15
  })

  const imageUrlsRef = useRef(imageUrls)

  useEffect(() => {
    if (data) {
      updateData(data)
      setIsPaginating(false)
    }
  }, [data])

  useEffect(() => {
    if (isPaginating) {
      setDocumentIdKeyCursor(documentIdFutureCursor)
    }
  }, [isPaginating])

  useEffect(() => {
    imageUrlsRef.current = imageUrls
  }, [imageUrls])

  const updateData = (data: PaginationResponse) => {
    console.debug("updatingData")
    console.debug(data.documentIdStartKey)
    setDocumentIdFutureCursor(data.documentIdStartKey)
    setDocumentIdRefreshCursor(data.documentIdRefreshKey)
    setImageUrls(prev => [...prev, ...data.urls])
    imageUrlsRef.current = imageUrls
  }

  const onViewableItemsChanged = (viewToken: ExtendedViewTokens) => {
    const lastViewObject = viewToken.viewableItems[viewToken.viewableItems.length - 1]
    console.debug("LastViewObject Index:", lastViewObject.index)
    console.debug("ImageUrlRef Max Index:", imageUrlsRef.current.length - 1)
    const imageUrlsRefLength = imageUrlsRef.current.length

    if (lastViewObject?.isViewable == true && lastViewObject?.index == imageUrlsRefLength - 1) {
      console.debug("isviewable")
      setIsPaginating(true)
    }
  }

  const handleRefresh = async () => {
    setIsRefreshing(true)
    console.debug(documentIdKeyCursor)
    console.debug(documentIdFutureCursor)
    console.debug(documentIdRefreshCursor)
    await setTimeout(() => {
      setIsRefreshing(false)
    }, 2000)
  }

  const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>

        <Text>test</Text>
      </View>
      {imageUrls && <FlatList
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        data={imageUrls}
        renderItem={Picture}
        numColumns={3}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh} />
        } />}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderWidth: 1,
    flex: 1
  },

  header: {
    borderColor: "orange",
    borderWidth: 2,
    height: 100,
    width: "100%"
  }
})