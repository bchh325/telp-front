import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import { store } from "./store/store";

import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import AppNavigator from "./navigation/AppNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import tAuth from './services/telpAuth';
import { onAuthStateChanged } from '@react-native-firebase/auth';

export default function Index() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const windowHeight = Dimensions.get("window").height

  store.subscribe(() => {
    const loggedInState = store.getState().authentication.value
    setLoggedIn(loggedInState)
  })

  const screenHeight = {
    height: windowHeight
  }

  const background = () => {
    return (
      <View style={[styles.imageContainer, screenHeight]}>
        <ImageBackground style={[styles.image, screenHeight]} source={require("../assets/images/background.jpg")} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {loggedIn ? null : background()}
        <Provider store={store}>
          {
            loggedIn ? <AppNavigator /> : <AuthNavigator />
          }
        </Provider>
      </SafeAreaProvider>
    </NavigationContainer>
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
