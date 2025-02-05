import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

type Props = {
    title: string
    placeholder: string
    value: string
    changeKey: string
    onChangeText: Function
    secureTextEntry?: boolean
}

export default function InputField({title, placeholder, value, onChangeText, changeKey, secureTextEntry = false}: Props) {
    return (
        <View>
            <Text style={styles.text}>{title}</Text>
            <View style={styles.container}>
                <TextInput secureTextEntry={secureTextEntry} value={value} onChangeText={(text) => onChangeText(changeKey, text)} placeholderTextColor="gray" style={styles.text} placeholder={placeholder} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.80)',
        borderColor: "yellow",
        borderWidth: 0,
        display: "flex",
        justifyContent: "center",
        padding: 10,
        borderRadius: 45
    },

    text: {
        color: "white"
    }
})