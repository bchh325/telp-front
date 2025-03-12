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
                <IconButton activeColor="white"  size={35} activeIcon='heart-o' inactiveIcon='heart' inactiveColor='#FF0F0F' hitSlop={10} />
                <IconButton activeColor="white" size={35} activeIcon='image' inactiveIcon='image' />
                <IconButton activeColor="white" size={35} activeIcon='info-circle' inactiveIcon='heart' />
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
        borderWidth: 0,
        flexDirection: "row",
        padding: 10,
        paddingBottom: 60
    },
    actions: {
        borderColor: "red",
        borderWidth: 0,
        marginLeft: "auto",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        rowGap: 20,
    },
    info: {
        borderColor: "red",
        borderWidth: 0,
        flex: 1
    }
})