import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

type Props = {
    item: Object
}

export default function Picture({ item }: Props) {
    console.debug(item.toString())
    console.debug("string item ")
    return (
        <View style={styles.container}>
            <Image src={item.toString()} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "33.33%",
        aspectRatio: 1,
    },

    image: {
        borderColor: "black",
        borderWidth: 1,
        width: "100%",
        height: "100%",        
    }
})