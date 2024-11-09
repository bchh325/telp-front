import { View, Text, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'
import Icon from '@expo/vector-icons/AntDesign'
import { useState } from 'react'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useNavigationState } from '@react-navigation/native'
import { current } from '@reduxjs/toolkit'
import { Easing } from 'react-native-reanimated'

export default function SearchBar() {
    const currentNavigationState = useNavigationState(state => state)
    const collapsibleWidth = useSharedValue(0)
    const deviceWidth: number = Dimensions.get('window').width

    if (currentNavigationState.routes[currentNavigationState.index].name != "Home") {
        collapsibleWidth.value = 0
    }

    const searchCollapseStyle = useAnimatedStyle(() => {
        const interpolatedWidth = interpolate(
            collapsibleWidth.value,
            [0, 1],
            [0, 1]
        );
        return {
            transform: [{
                scaleX: withTiming(interpolatedWidth, {
                    duration: 300,
                    easing: Easing.inOut(Easing.cubic),
                })
            }]
        }
    })

    return (
        <View style={[styles.container, {}]}>
            <View style={styles.searchInputContainer}>
                <Animated.View style={[styles.collapse]}>
                    <Animated.View style={[searchCollapseStyle, {justifyContent: "flex-end"}]}>
                        <TextInput style={[styles.searchInput]}></TextInput>
                    </Animated.View>
                </Animated.View>
            </View>
            <Icon onPress={() => { collapsibleWidth.value = collapsibleWidth.value == 0 ? 1 : 0 }} style={styles.icon} name='search1' size={20} color={"white"} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        display: "flex",
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        borderColor: "red",
        borderWidth: 0,
        width: "100%",
        paddingLeft: 10,
        zIndex: 1
    },
    icon: {
        padding: 10,
        zIndex: 2,
        overflow: "hidden",
        borderColor: "red",
        borderWidth: 0
    },
    searchInput: {
        color: "white",
        height: "100%",
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderColor: "blue",
        borderWidth: 0,
        borderRadius: 15,
        paddingHorizontal: 20
    },
    searchInputContainer: {
        flex: 1,
        borderColor: "red",
        borderWidth: 0,
    },
    collapse: {
        overflow: "hidden",
        borderColor: "red",
        borderWidth: 0
    }
})