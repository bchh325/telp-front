import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface PlaceProps {
    placeName: string
    placeRating: number
    reviewCount: number
}

export default function PlaceInformation(props: PlaceProps) {

    const outline = {
        borderColor: "green",
        borderWidth: 1, 
        color: "white"
    }

    return (
            <View style={styles.content}>
                <View style={styles.topContent}>
                    <View style={styles.nameLocationContainer}>
                        <Text style={styles.name}>Padekwa</Text>
                        <Text style={styles.location}>Cerritos, CA</Text>
                    </View>
                    <View style={styles.ratingsContainer}>
                        <View>
                            <Text>1 2 3 4 5 (13.1k)</Text>
                        </View>
                        <Text>$ $ $</Text>
                    </View>
                    <View style={styles.statusContainer}>
                        <Text style={styles.status}>Open until 6PM</Text>
                    </View>
                </View>
                <View style={styles.bottomContent}>
                   
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    content: {
        borderColor: "blue",
        borderWidth: 1,
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
    },
    topContent: {
        flex: 1,
        width: "100%",
        borderColor: "red",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        rowGap: 15,
    },
    nameLocationContainer: {
        borderColor: "yellow",
        borderWidth: 1,
        alignItems: "center",
    },
    ratingsContainer: {
        borderColor: "yellow",
        borderWidth: 1
    },
    statusContainer: {
        borderColor: "yellow",
        borderWidth: 1
    },
    name: {
        color: "white",
        fontWeight: "bold",
        fontSize: 36,
        lineHeight: 36,
        borderColor: "yellow",
        textAlignVertical:"center",
    },
    location: {
        color: "white",
        fontSize: 18,
        borderColor: "yellow",
        borderWidth: 0,
        lineHeight: 18
    },
    status: {
        color: "white",
    },
    bottomContent: {
        flex: 1,
        width: "100%",
        borderColor: "green",
        borderWidth: 2,
        display: "flex",
        flexDirection: "row",
    },

})