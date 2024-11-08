import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'
import Icon from '@expo/vector-icons/AntDesign'


export default function NavigationBar() {
    return (
        <View style={[styles.navContainer, {width: "auto"}]}>
            <Icon style={styles.icon} name='home' size={20} color={"white"}/>
            <Icon style={styles.icon} name='user' size={20} color={"white"}/>
            <Icon style={styles.icon} name='staro' size={20} color={"white"}/>
            <Icon style={styles.icon} name='staro' size={20} color={"white"}/>
            <Icon style={styles.icon} name='staro' size={20} color={"white"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    navContainer: {
        alignSelf: "center",
        backgroundColor: "#d90429",
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 50,
        display: "flex",
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        bottom: 20,
    },
    icon: {
        paddingHorizontal: 10,
    }
})