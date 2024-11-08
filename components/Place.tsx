import { View, Text, Image } from 'react-native'
import React, { useMemo } from 'react'
import { StyleSheet } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface PlaceProps {
    placeName: string //Name of a particular place
    placeRating: number //Ratings of a particular place
    imageUrl: string //Image source url
    reviewCount: number
}

export default function Place(props: PlaceProps) {
    console.debug(props.imageUrl)

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.imageUrl }} />
            <Text style={[styles.name, styles.textUniversal]} >{props.placeName}</Text>
            <View style={styles.ratingContainer}>
                <Text style={[styles.rating, styles.textUniversal]} >
                    {props.placeRating}
                </Text>
                <FontAwesome name='star' color="white" size={15} />
                <Text style={{color: "white"}}>({props.reviewCount})  </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,1)'
    },
    image: {
        position: "absolute",
        height: "100%",
        width: "100%",
        opacity: 0.4
    },
    name: {
        fontSize: 36,
        fontWeight: "bold"
    },
    ratingContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 5
    },
    rating: {
        fontSize: 16,

    },
    textUniversal: {
        color: "white",
        textAlign: "center"
    },
})