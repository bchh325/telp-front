import { View, Text, Image, Pressable } from 'react-native'
import React, { useMemo } from 'react'
import { StyleSheet } from 'react-native'
import Icon from '@expo/vector-icons/AntDesign';

interface PlaceProps {
    placeName: string
    placeRating: number
    imageUrl: string
    reviewCount: number
}

export default function Place(props: PlaceProps) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.imageUrl }} />
            <View style={styles.informationContainer}>
                <View style={{ width: "70%", borderColor: "red", borderWidth: 0 }}>
                    <Text style={[styles.name, styles.textUniversal]} >{props.placeName}</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={[styles.rating, styles.textUniversal]} >
                            {props.placeRating}
                        </Text>
                        <Icon name='star' color="white" size={15} />
                        <Text style={{ color: "white" }}>({props.reviewCount})</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,1)',
        borderColor: "red",
        borderWidth: 0
    },
    informationContainer: {
        borderColor: "red",
        borderWidth: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
    },
    buttonContainer: {
        borderColor: "green",
        borderWidth: 0,
        flex: 1,
        display: "flex",
        height: "100%",
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    buttonIcon: {
        opacity: 1,
        borderColor: "red",
        borderWidth: 0,
        alignSelf: "center",
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
        columnGap: 5,
    },
    rating: {
        fontSize: 16,

    },
    textUniversal: {
        color: "white",
        textAlign: "center"
    },
})