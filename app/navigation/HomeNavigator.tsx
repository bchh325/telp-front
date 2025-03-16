import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import PicturesScreen from '../screens/Home/PicturesScreen'
import { ActionBarParamList } from './configs/types'
import FeedScreen from '../screens/Home/FeedScreen'

export default function HomeNavigator() {
  const ActionBarStack = createNativeStackNavigator<ActionBarParamList>()

  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    animation: "default",
  }

  return (
      <ActionBarStack.Navigator screenOptions={screenOptions} initialRouteName="Feed">
          <ActionBarStack.Screen name="Pictures" component={PicturesScreen} />
          <ActionBarStack.Screen name="Feed" component={FeedScreen} />
      </ActionBarStack.Navigator>

  )
}