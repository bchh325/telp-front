import { View, Text, Image, Pressable, Button } from 'react-native'
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

    const outline = {
        borderColor: "green",
        borderWidth: 1, 
        color: "white"
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.imageUrl }} />
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
                    <View style={styles.infoContainer}>
                        <Text>Additional Information</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Button title={"Like"}/>
                        <Button title={"Pictures"}/>
                        <Button title={"Menu"}/>
                        <Button title={"Information"}/>
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
        borderWidth: 0,
        position: "relative",
        height: "100%",
        width: "100%",
    },
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
    image: {
        position: "absolute",
        height: "100%",
        width: "100%",
        opacity: 0.3
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
    infoContainer: {
        flex: 1,
        backgroundColor: "black",
        opacity: 0.5,
        marginBottom: "25%",
    },
    iconContainer: {
        backgroundColor: "red",
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "25%",
    }
})