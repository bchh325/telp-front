import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'


export default function PicturesHeader() {

    return (
        <View style={styles.container}>
            <Text>Header</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        borderColor: "orange",
        borderWidth: 2,
        backgroundColor: "white"
    }
})