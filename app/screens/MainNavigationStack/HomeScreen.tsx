import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PagerView from 'react-native-pager-view';
import { Dimensions } from 'react-native';
import Place from '@/app/components/Place';
import { businesses_0, businesses_1 } from '@/constants/SampleData';
import SearchBar from '@/app/components/SearchBar';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import PlacesScreen from '../HomeScreenNavigationStack/PlacesScreen';
import InformationScreen from '../HomeScreenNavigationStack/InformationScreen';
import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import { HomeStackParamList } from '@/app/navigation_configs/types';


const HomeScreenNavigationStack = createMaterialTopTabNavigator<HomeStackParamList>()

export default function HomeScreen() {
  const screenOptions: MaterialTopTabNavigationOptions = {
    tabBarShowLabel: false,
    tabBarStyle: {height: 0},
  }

  //Take data logic out of Place component, move here

  return (
      <HomeScreenNavigationStack.Navigator
        screenOptions={screenOptions}
        initialRouteName="Places"
      >
        <HomeScreenNavigationStack.Screen name="Places" component={PlacesScreen} />
        <HomeScreenNavigationStack.Screen name="Information" component={InformationScreen} />
      </HomeScreenNavigationStack.Navigator>
  )
}