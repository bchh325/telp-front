import React from 'react';

import NavigationBar from "@/app/components/NavigationBar";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import Favorites from "../screens/App/Favorites";
import HomeScreen from "../screens/App/HomeScreen";
import UserAccountScreen from "../screens/App/UserAccountScreen";
import { MainStackParamList } from "./configs/types";


export default function AppNavigator() {
    const MainNavigationStack = createNativeStackNavigator<MainStackParamList>()

    const screenOptions: NativeStackNavigationOptions = {
        headerShown: false,
        animation: "default",
        contentStyle: {
          backgroundColor: "transparent"
        },
        presentation: "modal"
      }

    const navigationObject = useNavigation();
    return (
        <>
            <MainNavigationStack.Navigator
                screenOptions={screenOptions}
                initialRouteName="Home"
            >
                <MainNavigationStack.Screen name="Home" component={HomeScreen} />
                <MainNavigationStack.Screen name="UserAccount" component={UserAccountScreen} />
                <MainNavigationStack.Screen name="Favorites" component={Favorites} />
            </MainNavigationStack.Navigator>
            <NavigationBar navigation={navigationObject} />
        </>
    )
}