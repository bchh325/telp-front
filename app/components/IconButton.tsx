import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import Icon from '@expo/vector-icons/FontAwesome'
import classNames from '../utils/classnames'

interface IconProps {
  activeIcon: keyof typeof Icon.glyphMap
  inactiveIcon: keyof typeof Icon.glyphMap
  size?: number
  color?: string
  hitSlop?: number
}

export default function IconButton({ activeIcon, inactiveIcon, size, color, hitSlop }: IconProps) {
  const [toggle, setToggle] = useState(true)

  const getToggledIcon = () => {
    return toggle ? <Icon name={activeIcon} size={size} color={color}/> : <Icon name={inactiveIcon} size={size} color={color}/>
  }

  const toggleIcon = () => {
    setToggle(prev => !prev)
  }

  const styles = StyleSheet.create({
    iconButtonContainer: {
      borderColor: "yellow",
      borderWidth: 0,
      aspectRatio: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "visible",
      width: size ? size + 10 : "auto"
    }
  })

  const pressableStyles = classNames([
    true && styles.iconButtonContainer
  ])

  return (
    <Pressable hitSlop={hitSlop} style={pressableStyles} onPress={toggleIcon}>
      {getToggledIcon()}
    </Pressable>
  )
}


