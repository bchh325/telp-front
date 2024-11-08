import { View, Text, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'
import Icon from '@expo/vector-icons/AntDesign'
import { useState } from 'react'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export default function SearchBar() {
    const collapsibleWidth = useSharedValue(0)

    //width: `${widthAnim.value * 100}%`

    const searchCollapseStyle = useAnimatedStyle(() => {
        const interpolatedWidth = interpolate(
            collapsibleWidth.value,
            [0, 1],
            [0, 100]
        )

        return {
            width: withTiming(`${interpolatedWidth}%`, {
                duration: 250,
              }),
        }
    })

    const toggleSearch = () => {
    }

    return (
        <View style={[styles.navContainer, {}]}>
            <Icon onPress={() => { collapsibleWidth.value = collapsibleWidth.value == 0 ? 1 : 0}} style={styles.icon} name='search1' size={20} color={"white"} />
            <View style={styles.searchInputContainer}>
                <Animated.View style={[styles.collapse, searchCollapseStyle]}>
                    <TextInput style={styles.searchInput}>Testafdsadsafdsfdsafdsadfdasfdsadsasafdsafdsfdsafdas</TextInput>
                </Animated.View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navContainer: {
        marginTop: 10,
        display: "flex",
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        borderColor: "red",
        borderWidth: 0,
        width: "100%",
        paddingRight: 10,
    },
    icon: {
        padding: 10,
    },
    searchInput: {
        color: "white",
        height: "100%",
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 50,
    },
    searchInputContainer: {
        flex: 1,
        overflow: "hidden",
        borderColor: "red",
        borderWidth: 0,
    },
    collapse: {
        overflow: "hidden"
    }
})