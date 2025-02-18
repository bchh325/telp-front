import { View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import Picture from '../components/Picture'

export default function PicturesScreen() {
  const data: number[] = [1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1,]
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = async () => {
    setIsRefreshing(true)
    await setTimeout(() => {
      setIsRefreshing(false)
    }, 2000)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>

      </View>
      <FlatList 
        data={data}
        renderItem={Picture}
        numColumns={3}
        refreshControl={
          <RefreshControl 
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
          />
        }/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderWidth: 1,
  },

  header: {
    borderColor: "orange",
    borderWidth: 2,
    height: "10%"
  }
})