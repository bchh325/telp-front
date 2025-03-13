import PlaceDetails from '@/app/components/PlaceDetails';
import SearchBar from '@/app/components/SearchBar';
import { businesses_2 } from '@/constants/SampleData';
import React, { useState } from 'react';
import { Button, Image, ImageStyle, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import PagerView from 'react-native-pager-view';
import classNames from '@/app/utils/classnames';
import ActionBar from '@/app/components/ActionBar';
import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActionBarParamList } from '@/app/navigation/configs/types';
import PicturesScreen from '../Dev/PicturesScreen';
import TestScreen from '../Dev/TestScreen';


export default function HomeScreen() {
  const ActionBarStack = createNativeStackNavigator<ActionBarParamList>()

  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    animation: "default",
  }


  const [toggleColor, setToggleColor] = useState(false)
  const sampleData = businesses_2

  const classes = classNames([
    true && styles.container,
  ])

  console.debug(classes)
  return (
    <ActionBarStack.Navigator screenOptions={screenOptions} initialRouteName="Feed">
      <ActionBarStack.Screen name="Pictures" component={PicturesScreen} />
      <ActionBarStack.Screen name="Feed" component={TestScreen} />
    </ActionBarStack.Navigator>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,1)',
    position: "relative",
    height: "100%",
    width: "100%",

  },
  image: {
    position: "absolute",
    height: "100%",
    width: "100%",
    opacity: 0.3
  },
  other: {
    backgroundColor: "black"
  },
  test: {
    borderColor: "green",
  }
})