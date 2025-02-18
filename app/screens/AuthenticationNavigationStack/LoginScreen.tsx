import { View, Text, TextInput, ImageBackground, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native';

import { useLazySignInQuery } from '../../slices/tAuthApiSlice';
import styles from './styles/LoginScreenStyle';

import { useNavigation } from 'expo-router';
import { useDispatch } from 'react-redux';
import { setUserSignedIn } from '@/app/slices/authenticationSlice';
import InputField from '@/app/components/InputField';
import Button from '@/app/components/Button';
import { ActivityIndicator } from 'react-native';

export default function LoginScreen() {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const windowHeight = Dimensions.get("window").height
  const statusBarHeight = StatusBar.currentHeight

  const [triggerSignIn, { data, isLoading, isFetching, error, isError }] = useLazySignInQuery();
  const [userSignInParams, setUserSignInParams] = useState({
    email: "",
    password: ""
  })

  useEffect(() => {
    if (data) {
      dispatch(setUserSignedIn())
    }
  }, [data])

  const handleTextChange = (key: keyof typeof userSignInParams, input: string) => {
    setUserSignInParams((prev) => ({ ...prev, [key]: input }))
  }

  const handleSignIn = () => {
    if (userSignInParams.email == "" || userSignInParams.password == "") {
      return
    }

    triggerSignIn(userSignInParams)
  }

  const handleNavigation = () => {
    navigation.navigate("Registration")
  }

  const manualDispatch = () => {
    dispatch(setUserSignedIn())
  }

  const screenHeight = {
    height: windowHeight - (statusBarHeight ? statusBarHeight : 0)
  }

  const renderLoginText = () => {
      if (isFetching) {
        return <ActivityIndicator color="white" size={"small"}/>
      }
      return "Login"
  }

  return (
    <View style={[styles.container, screenHeight]}>
      <View style={styles.logoContainer}>
      </View>
      <View style={styles.authContainer}>
        <View style={styles.inputContainer}>
          <InputField changeKey="email" value={userSignInParams.email} onChangeText={handleTextChange} title="Email Address" placeholder="john.doe@gmail.com" />
          <InputField changeKey="password" value={userSignInParams.password} onChangeText={handleTextChange} title="Password" placeholder="Password" secureTextEntry={true} />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={handleSignIn} title={renderLoginText()} backgroundColor='red' textColor='white' height={50} bolded={true} />
          <Button onPress={() => { console.debug("Forgot Password") }} title="Forgot password?" textColor='white' underlined={true} bolded={true} fixWidthToContent={true} />
          <Button onPress={handleNavigation} title="Create an account" backgroundColor='white' textColor='red' height={50} bolded={true} />
        </View>
      </View>
    </View>
  )
}