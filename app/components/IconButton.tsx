import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function IconButton() {
  return (
    <View style={styles.iconButtonContainer}>
      <Text style={{color: "white"}}>IconButton</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    iconButtonContainer: {
      borderColor: "yellow",
      borderWidth: 1,
      aspectRatio: 1,
      width: 50
    }
})