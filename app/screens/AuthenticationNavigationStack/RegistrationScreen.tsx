import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

export default function RegistrationScreen() {
  const navigation = useNavigation()

  const handleNavigation = () => {
    navigation.navigate("Login")
  }
  return (
    <View>
      <Button title="To Login" onPress={() => { handleNavigation() }}/>
    </View>
  )
}