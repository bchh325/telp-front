import { View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import Picture from '../components/Picture'
import { useGetPaginatedPicturesQuery } from '../slices/springApiSlice'

export default function PicturesScreen() {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [placeId, setPlaceId] = useState("dev-pic")
  const [documentIdKeyCursor, setDocumentIdKeyCursor] = useState("")
  const { data, error, isLoading } = useGetPaginatedPicturesQuery({
    placeId: placeId,
    documentIdKeyCursor: documentIdKeyCursor,
    querySize: 40
  })



  console.debug(error)
  const response = data ? data : ""

  const handleRefresh = async () => {
    setIsRefreshing(true)
    await setTimeout(() => {
      setIsRefreshing(false)
    }, 2000)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Text>test</Text>
      </View>
      {response.urls && <FlatList
        data={response.urls}
        renderItem={Picture}
        numColumns={3}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh} />
        } />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderWidth: 0,
  },

  header: {
    borderColor: "orange",
    borderWidth: 2,
    height: 100,
    width: "100%"
  }
})