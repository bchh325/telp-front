import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import classNames from '../utils/classnames'
import IconButton from './IconButton'

export default function ActionBar() {

    const containerClasses = classNames([
        true && styles.container
    ])

    const actionClasses = classNames([
        true && styles.actions
    ])

    return (
        <View style={containerClasses}>
            <View style={actionClasses}>
                <IconButton />
                <IconButton />
                <IconButton />
                <IconButton />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1, 
        width: "100%",
        borderColor: "yellow", 
        borderWidth: 1,
        flexDirection: "row",

    },
    actions: {
        borderColor: "red",
        borderWidth: 2,
        marginLeft: "auto",
        display: "flex",
        rowGap: 40,
        marginBottom: "auto"
    }
})