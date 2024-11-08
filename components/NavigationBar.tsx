import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons';


export default function NavigationBar() {
    return (
        <View style={styles.navContainer}>
            <Text>SYM</Text>
            <Text>SYM</Text>
            <Text>SYM</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navContainer: {
        marginHorizontal: 20,
        backgroundColor: "#d90429",
        height: 50,
        borderRadius: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    }
})