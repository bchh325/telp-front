import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Picture from '../components/Picture'

export default function PicturesScreen() {
  const data: number[] = [1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1,]

  return (
    <View style={styles.container}>
      <View style={styles.header}>

      </View>
      <FlatList 
        data={data}
        renderItem={Picture}
        numColumns={3}/>
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