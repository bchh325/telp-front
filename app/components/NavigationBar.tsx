import Icon from '@expo/vector-icons/AntDesign'
import React, { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

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
        <View style={[styles.navContainer]}>
            <Pressable onPress={() => navigateTo("Home")}>
                <Icon style={[styles.icon, handleStyle("Home")]} name='home' size={20} color={"white"} />
            </Pressable>
            <Pressable onPress={() => navigateTo("UserAccount")}>
                <Icon style={[styles.icon, handleStyle("UserAccount")]} name='user' size={20} color={"white"} />
            </Pressable>
            <Pressable onPress={() => navigateTo("Favorites")}>
                <Icon style={[styles.icon, handleStyle("Favorites")]} name='staro' size={20} color={"white"} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    navContainer: {
        height: 50,
        alignSelf: "center",
        backgroundColor: "#d90429",
        paddingVertical: 15,
        display: "flex",
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        bottom: 0
    },
    icon: {
        paddingHorizontal: 10,
    }
})