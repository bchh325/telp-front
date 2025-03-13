import React from 'react';

import NavigationBar from "@/app/components/NavigationBar";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import Favorites from "../screens/App/Favorites";
import HomeScreen from "../screens/App/HomeScreen";
import UserAccountScreen from "../screens/App/UserAccountScreen";
import { MainStackParamList } from "./configs/types";


export default function AppNavigator() {
    const AppNavigationStack = createNativeStackNavigator<MainStackParamList>()

    const screenOptions: NativeStackNavigationOptions = {
        headerShown: false,
        animation: "default",
      }

    const navigationObject = useNavigation();
    return (
        <>
            <AppNavigationStack.Navigator
                screenOptions={screenOptions}
                initialRouteName="Home"
            >
                <AppNavigationStack.Screen name="Home" component={HomeScreen} />
                <AppNavigationStack.Screen name="UserAccount" component={UserAccountScreen} />
                <AppNavigationStack.Screen name="Favorites" component={Favorites} />
            </AppNavigationStack.Navigator>
            <NavigationBar navigation={navigationObject} />
        </>
    )
}