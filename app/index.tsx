import { Text, View } from "react-native";
import React from 'react'
import { AppStore, store } from "./state/store";

import { Provider, useSelector } from "react-redux";
import NavigationBar from "@/app/components/NavigationBar";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import UserAccountScreen from "./screens/MainNavigationStack/UserAccountScreen";
import { MainStackParamList, AuthStackParamList } from "./navigation_configs/types";
import Favorites from "./screens/MainNavigationStack/Favorites";
import HomeScreen from "./screens/MainNavigationStack/HomeScreen";
import LoginScreen from "./screens/AuthenticationNavigationStack/LoginScreen";
import { useState } from "react";
import RegistrationScreen from "./screens/AuthenticationNavigationStack/RegistrationScreen";

const MainNavigationStack = createNativeStackNavigator<MainStackParamList>()
const AuthNavigationStack = createNativeStackNavigator<AuthStackParamList>()

export default function Index() {
  const [loggedIn, setLoggedIn] = useState(false)
  const navigationObject = useNavigation()

  store.subscribe(() => {
    const loggedInState = store.getState().authentication.value
    //console.debug("IsLoggedIn: ", loggedInState)
    setLoggedIn(loggedInState)
  })

  
  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    animation: "none"
  }

  return (
    <Provider store={store}>
      {!loggedIn &&
        <>
          <AuthNavigationStack.Navigator
            screenOptions={screenOptions}
            initialRouteName="Login"
          >
            <AuthNavigationStack.Screen name="Login" component={LoginScreen} />
            <AuthNavigationStack.Screen name="Registration" component={RegistrationScreen} />
          </AuthNavigationStack.Navigator>
        </>
      }

      {loggedIn &&
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
      }
    </Provider>
  );
}
