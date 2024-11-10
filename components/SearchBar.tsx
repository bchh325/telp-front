import { View, Text, TextInput, Pressable, LayoutRectangle, LayoutChangeEvent, NativeSyntheticEvent } from 'react-native'
import React, { useEffect, useMemo, useRef } from 'react'
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
    const opacityValue = useSharedValue(0)
    const [searchWidth, setSearchWidth] = useState(0)
    const [searchIconToggle, setSearchIconToggle] = useState(true)

    if (currentNavigationState.routes[currentNavigationState.index].name != "Home") {
        collapsibleWidth.value = 0
    } else {

    }

    useEffect(() => {
        opacityValue.value = 1
    }, [])

    const searchCollapseStyle = useAnimatedStyle(() => {
        const interpolatedWidth = interpolate(
            collapsibleWidth.value,
            [0, 1],
            [searchWidth, 0]
        );

        return {
            transform: [{
                translateX: withTiming(interpolatedWidth, {
                    duration: 400,
                    easing: Easing.inOut(Easing.cubic),
                })
            }]
        }
    })

    const fadeInStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(opacityValue.value, {
                duration: 1000,
                easing: Easing.bezier(1,-0.21,1,.02)
            })
        }
    })

    const handleCollapse = () => {
        collapsibleWidth.value = collapsibleWidth.value == 0 ? 1 : 0
        setSearchIconToggle(prev => !prev)
    }

    const toggleSearchIcon = () => {
        return searchIconToggle ? "search1" : "close"
    }

    const getComponentLayout = (nativeEvent: any) => {
        const { x, y, width, height } = nativeEvent.layout
        console.debug("setting width, ", width)
        setSearchWidth(width + 10)

    }

    return (
        <Animated.View style={[styles.container, searchCollapseStyle, fadeInStyle]}>
            <Icon style={styles.icon} onPress={() => handleCollapse()} name={toggleSearchIcon()} size={20} color={"white"} />
            <View style={styles.searchContainer} onLayout={({ nativeEvent }) => { getComponentLayout(nativeEvent) }}>
                <TextInput style={styles.textInput}>Test</TextInput>
                <Pressable style={styles.submit}>
                    <Text style={{ color: "white" }}>Press</Text>
                </Pressable>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: "red",
        borderWidth: 0,
        position: "absolute",
        width: "100%",
        zIndex: 1,
        display: "flex",
        flexDirection: "row",
        paddingRight: 10,
        paddingVertical: 5,
        alignItems: "center"
    },
    icon: {
        padding: 10,
        borderColor: "green",
        borderWidth: 0,
    },
    searchContainer: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        position: "relative",
        backgroundColor: "rgba(0,0,0,0.55)",
        borderRadius: 5,
        paddingHorizontal: 10,
        borderColor: "blue",
        borderWidth: 0,
        height: "80%",
        alignItems: "center"
    },
    textInput: {
        borderColor: "pink",
        borderWidth: 0,
        color: "white",
        flex: 1,
    },
    submit: {
        borderColor: "yellow",
        borderWidth: 0,
        padding: 3
    }
})