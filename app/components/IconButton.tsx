import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import Icon from '@expo/vector-icons/FontAwesome'
import classNames from '../utils/classnames'
import Animated, { useAnimatedStyle, useSharedValue, withSequence, withTiming, Easing } from 'react-native-reanimated'

interface IconProps {
  activeIcon: keyof typeof Icon.glyphMap
  inactiveIcon: keyof typeof Icon.glyphMap
  size?: number
  activeColor?: string
  inactiveColor? : string
  hitSlop?: number
  onPress?: Function
}

export default function IconButton({ onPress: callback, activeIcon, inactiveIcon, size, activeColor = "white", inactiveColor = "white", hitSlop }: IconProps) {
  const [toggle, setToggle] = useState(true)

  const getToggledIcon = () => {
    return toggle ? <Icon name={activeIcon} size={size} color={activeColor} /> : <Icon name={inactiveIcon} size={size} color={inactiveColor} />
  }

  const handlePress = () => {
    setToggle(prev => !prev)
    const DURATION_MS: number = 150;
    scale.value = withSequence(
      withTiming(0.85, { duration: DURATION_MS / 2, easing: Easing.inOut(Easing.linear) }),
      withTiming(1.0, { duration: DURATION_MS / 2, easing: Easing.inOut(Easing.linear) })
    )

    if (callback) {
      callback()
    }
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

  const scale = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }]
  }))

  const pressableStyles = classNames([
    true && styles.iconButtonContainer
  ])

  return (
    <Pressable hitSlop={hitSlop} style={pressableStyles} onPress={handlePress}>
      <Animated.View style={[animatedStyle]}>
        {getToggledIcon()}
      </Animated.View>
    </Pressable>
  )
}


