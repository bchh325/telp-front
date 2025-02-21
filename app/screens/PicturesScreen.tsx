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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>

        <Text>test</Text>
      </View>
      {imageUrls && <FlatList
        data={imageUrls}
        renderItem={Picture}
        numColumns={3}
        onEndReached={paginate}
        onEndReachedThreshold={0.5}
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