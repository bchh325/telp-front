import { Dimensions, ImageBackground, StatusBar, StyleSheet, Text, View } from "react-native";
import React from 'react'
import { AppStore, store } from "./store/store";

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
import PlacesScreen from "./screens/HomeScreenNavigationStack/PlacesScreen";
import PicturesScreen from "./screens/PicturesScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

const MainNavigationStack = createNativeStackNavigator<MainStackParamList>()
const AuthNavigationStack = createNativeStackNavigator<AuthStackParamList>()

export default function Index() {
  const [loggedIn, setLoggedIn] = useState(true)
  const navigationObject = useNavigation()
  const windowHeight = Dimensions.get("window").height
  const statusBarHeight = StatusBar.currentHeight

  // store.subscribe(() => {
  //   const loggedInState = store.getState().authentication.value
  //   setLoggedIn(loggedInState)
  // })


  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    animation: "default",
    contentStyle: {
      backgroundColor: "transparent"
    },
    presentation: "modal"
  }

  const screenHeight = {
    height: windowHeight
  }

  return (
    <SafeAreaProvider>
      {!loggedIn &&
        <View style={[styles.imageContainer, screenHeight]}>
          <ImageBackground style={[styles.image, screenHeight]} source={require("../assets/images/background.jpg")} />
        </View>}
      <Provider store={store}>
        {!loggedIn &&
          <>
            <AuthNavigationStack.Navigator
              screenOptions={screenOptions}
              initialRouteName="Login"
            >
              <AuthNavigationStack.Screen options={{ presentation: "modal" }} name="Login" component={LoginScreen} />
              <AuthNavigationStack.Screen options={{ presentation: "modal" }} name="Registration" component={RegistrationScreen} />
            </AuthNavigationStack.Navigator>
          </>
        }

        {loggedIn &&
          <>
            <MainNavigationStack.Navigator
              screenOptions={screenOptions}
              initialRouteName="TestRoute"
            >
              <MainNavigationStack.Screen name="TestRoute" component={PicturesScreen} />
              <MainNavigationStack.Screen name="Home" component={HomeScreen} />
              <MainNavigationStack.Screen name="UserAccount" component={UserAccountScreen} />
              <MainNavigationStack.Screen name="Favorites" component={Favorites} />
            </MainNavigationStack.Navigator>
            <NavigationBar navigation={navigationObject} />
          </>
        }
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: "black",
    width: "100%",
    position: "absolute",
    zIndex: -1
  },

  image: {
    position: "absolute",
    width: "100%",
    opacity: 0.2
  }
})
