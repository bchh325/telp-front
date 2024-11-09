import { View, Text, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'
import Icon from '@expo/vector-icons/AntDesign'
import { useState } from 'react'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useNavigationState } from '@react-navigation/native'
import { current } from '@reduxjs/toolkit'

export default function SearchBar() {
    const currentNavigationState = useNavigationState(state => state)
    const collapsibleWidth = useSharedValue(0)
    
    if (currentNavigationState.routes[currentNavigationState.index].name != "Home") {
        collapsibleWidth.value = 0
    }

    const searchCollapseStyle = useAnimatedStyle(() => {
        const interpolatedWidth = interpolate(
            collapsibleWidth.value,
            [0, 1],
            [0, 100]
        )

        return {
            width: withTiming(`${interpolatedWidth}%`, {
                duration: 200,
              }),
        }
    })

    return (
        <View style={[styles.container, {}]}>
            <Icon onPress={() => { collapsibleWidth.value = collapsibleWidth.value == 0 ? 1 : 0}} style={styles.icon} name='search1' size={20} color={"white"} />
            <View style={styles.searchInputContainer}>
                <Animated.View style={[styles.collapse, searchCollapseStyle]}>
                    <TextInput style={[styles.searchInput]}>Testafdsadsafdsfdsafdsadfdasfdsadsasafdsafdsfdsafdas</TextInput>
                </Animated.View>
            </View>
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
        paddingRight: 10,
        zIndex: 1
    },
    icon: {
        padding: 10,
    },
    searchInput: {
        color: "white",
        height: "100%",
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 50,
        borderColor: "blue",
        borderWidth: 0,
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