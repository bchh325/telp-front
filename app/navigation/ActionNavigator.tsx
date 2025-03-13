import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import PicturesScreen from '../screens/Dev/PicturesScreen'
import { ActionBarParamList } from './configs/types'
import TestScreen from '../screens/Dev/TestScreen'

export default function PictureNavigator() {
  const ActionBarStack = createNativeStackNavigator<ActionBarParamList>()

  const screenOptions: NativeStackNavigationOptions = {
      headerShown: false,
      animation: "default",
      contentStyle: {
          backgroundColor: "transparent"
      },
      presentation: "modal"
  }

  return (

      <ActionBarStack.Navigator screenOptions={screenOptions} initialRouteName="Feed">
          <ActionBarStack.Screen name="Pictures" component={PicturesScreen} />
          <ActionBarStack.Screen name="Feed" component={TestScreen} />
      </ActionBarStack.Navigator>

  )
}