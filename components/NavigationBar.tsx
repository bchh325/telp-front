import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'
import Icon from '@expo/vector-icons/AntDesign'
import { NavigationProp, NavigationState, StackNavigationState, useNavigationState } from '@react-navigation/native'
import { current } from '@reduxjs/toolkit'
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'

interface NavigationBarProps {
    navigation: any
}

export default function NavigationBar(props: NavigationBarProps) {

    const navigationObject = props.navigation
    const [currentRoute, setCurrentRoute] = useState("Home")

    const navigateTo = (screenName: string) => {
        navigationObject.navigate(screenName)
        setCurrentRoute(screenName)
    }

    const handleStyle = (screenName: string) => { 
        return (currentRoute == screenName ? { opacity: 1 } : { opacity: 0.60 }) }


    return (
        <View style={[styles.navContainer, { width: "auto" }]}>
            <Pressable onPress={() => navigateTo("Home")}>
                <Icon style={[styles.icon, handleStyle("Home")]} name='home' size={20} color={"white"} />
            </Pressable>
            <Pressable onPress={() => navigateTo("UserAccount")}>
                <Icon style={[styles.icon, handleStyle("UserAccount")]} name='user' size={20} color={"white"} />
            </Pressable>
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