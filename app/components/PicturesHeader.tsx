import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


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