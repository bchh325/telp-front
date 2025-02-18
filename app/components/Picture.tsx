import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Picture() {
    return (
        <View style={styles.container}>
            <Text>Image</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: "green",
        borderWidth: 1,
        width: "33.33%",
        aspectRatio: 1,
    }
})