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

    const infoClasses = classNames([
        true && styles.info
    ])

    return (
        <View style={containerClasses}>
            <View style={infoClasses}>
                <Text>
                    info panel
                </Text>
                <Text>
                    info panel
                </Text>
                <Text>
                    info panel
                </Text>
                <Text>
                    info panel
                </Text>
            </View>
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
        paddingBottom: 50
    },
    actions: {
        borderColor: "red",
        borderWidth: 2,
        marginLeft: "auto",
        display: "flex",
        justifyContent: "space-evenly"
    },
    info: {
        borderColor: "red",
        borderWidth: 1,
        flex: 1
    }
})