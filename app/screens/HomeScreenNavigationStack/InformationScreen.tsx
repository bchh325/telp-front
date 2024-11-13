import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native'
import React from 'react'
import { DimensionValue } from 'react-native'

export default function InformationScreen() {
  const deviceWidth = Dimensions.get('window').width

  return (
    <View style={styles.container}>
      <FlatList
        style={{borderColor: "green", borderWidth: 2}}
        numColumns={3}
        data={[{}, {}, {}, {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]}
        renderItem={({ item }) => <Text style={{ borderWidth: 2, borderColor: "red", flex: 1, aspectRatio: 1, maxWidth: Math.floor(deviceWidth * 1/3) }}>Test</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderWidth: 2,
    height: "100%",
    width: "100%",
    display: "flex"
  },
})