import React from 'react'

import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./configs/types";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegistrationScreen from "../screens/Auth/RegistrationScreen";


export default function AuthNavigator() {
    const AuthNavigationStack = createNativeStackNavigator<AuthStackParamList>()

    const screenOptions: NativeStackNavigationOptions = {
        headerShown: false,
        animation: "default",
        contentStyle: {
            backgroundColor: "transparent"
        },
        presentation: "modal"
    }

    return (

        <AuthNavigationStack.Navigator screenOptions={screenOptions} initialRouteName="Login">
            <AuthNavigationStack.Screen options={{ presentation: "modal" }} name="Login" component={LoginScreen} />
            <AuthNavigationStack.Screen options={{ presentation: "modal" }} name="Registration" component={RegistrationScreen} />
        </AuthNavigationStack.Navigator>

    )
}