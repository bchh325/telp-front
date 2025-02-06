import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { Component, ReactElement } from 'react'

type Props = {
    height?: number
    backgroundColor?: string
    textColor: string
    title: string | ReactElement
    bolded?: boolean
    underlined?: boolean
    fixWidthToContent?: boolean
    onPress: Function
}

export default function Button({ 
    height, 
    backgroundColor, 
    textColor,
    title, 
    bolded, 
    underlined, 
    fixWidthToContent, 
    onPress }: Props) {
    
    const containerStyle = {
        height: height,
        backgroundColor: backgroundColor ? backgroundColor : undefined,
        alignSelf: fixWidthToContent ? "center" as "center" : undefined
    }

    const textStyle = {
        color: textColor,
        fontWeight: bolded ? "bold" as "bold" : undefined,
        textDecorationLine: underlined ? "underline" as "underline" : undefined
    }

    return (
        <Pressable onPress={() => {onPress()}} style={[styles.container, containerStyle]}>
            <Text style={[styles.text, textStyle, {alignSelf: "center"}]}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        borderRadius: 45,
    },

    text: {
        textAlign: "center",
    }
})