import { View, Text, TextInput, Dimensions, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import styles from './styles/RegistrationScreenStyle'
import { useLazySignUpQuery } from '../../slices/tAuthApiSlice';
import { useState } from 'react';
import { UserSignUpParams } from '@/app/interfaces';
import InputField from '@/app/components/InputField';
import Button from '@/app/components/Button';
import { StackActions } from '@react-navigation/native';


export default function RegistrationScreen() {
  const windowHeight = Dimensions.get("window").height
  const statusBarHeight = StatusBar.currentHeight
  const navigation = useNavigation()
  const [triggerSignUp, { data, isLoading, isFetching, error, isError }] = useLazySignUpQuery();
  const [userSignUpParams, setUserSignUpParams] = useState<UserSignUpParams>({
    email: "",
    password: "",
    passwordConfirm: ""
  })

  const handleNavigation = () => {
    navigation.navigate("Login")
  }

  const handleSignUp = () => {
    if (userSignUpParams.email == "") {
      return
    }

    if (userSignUpParams.password == "") {
      return
    }

    try {
      triggerSignUp(userSignUpParams)
    } catch (err) {
      console.debug("Error Occurred")
    }
  }

  const handleTextChange = (key: keyof typeof userSignUpParams, input: string) => {
    setUserSignUpParams((prev) => ({ ...prev, [key]: input }))
  }

  const screenHeight = {
    height: windowHeight - (statusBarHeight ? statusBarHeight : 0)
  }

  return (
    <View style={[styles.container, screenHeight]}>
      <View style={styles.logoContainer}>

      </View>
      <View style={styles.authContainer}>
        <View style={styles.inputContainer}>
          <InputField changeKey="email" value={userSignUpParams.email} onChangeText={handleTextChange} title="Email Address" placeholder="john.doe@gmail.com" />
          <InputField secureTextEntry={true} changeKey="password" value={userSignUpParams.password} onChangeText={handleTextChange} title="Password" placeholder="Password" />
          <InputField secureTextEntry={true} changeKey="passwordConfirm" value={userSignUpParams.passwordConfirm} onChangeText={handleTextChange} title="Confirm Password" placeholder="Confirm Password" />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={handleSignUp} title="Create Account" backgroundColor='red' textColor='white' height={50} bolded={true} />
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ color: "white" }}>Already have an account? </Text>
            <Button onPress={() => { handleNavigation() }} title="Login" textColor='white' underlined={true} bolded={true} fixWidthToContent={true} />
          </View>
        </View>
      </View>
    </View>
  )
}