import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

import { useLazySignUpQuery, useLazySignInQuery } from '../../slices/tAuthApiSlice';
import tAuth from '@/services/telpAuth';
import { TabActions } from '@react-navigation/native';

import { useNavigation } from 'expo-router';
import { useDispatch } from 'react-redux';
import { setUserSignedIn, setUserSignedOut } from '@/app/slices/authenticationSlice';

export default function LoginScreen() {
  const dispatch = useDispatch()

  const navigation = useNavigation()
  const [triggerSignIn, { data, isLoading, isFetching, error, isError }] = useLazySignInQuery();
  const [userSignInParams, setUserSignInParams] = useState({
    email: "",
    password: ""
  })

  const handleTextChange = (key: keyof typeof userSignInParams, input: string) => {
    setUserSignInParams((prev) => ({ ...prev, [key]: input }))
  }

  const [testValue, setTestValue] = useState(true)

  const handleSignUp = () => {
    triggerSignIn(userSignInParams)
  }

  const handleSignOut = () => {
    tAuth.signOut()
  }

  const handleSignIn = () => {
    triggerSignIn(userSignInParams)
    dispatch(setUserSignedIn())
  }

  const handleCheck = () => {
    console.debug(data, isLoading, error)
    console.debug(tAuth.getCurrentUser())
  }

  const handleNavigation = () => {
    navigation.navigate("Registration")
  }

  return (
    <View>
      <Button
        title='Sign Up'
        onPress={() => { handleSignUp() }}
      ></Button>
      <Button title='Check' onPress={() => { handleCheck() }} />
      <Button title='Sign Out' onPress={() => { handleSignOut() }} />
      <Button title='Sign In' onPress={() => { handleSignIn() }} />
      <Button title='To Registration' onPress={() => { handleNavigation() }}/>
      <Text>
        Data: {data ? data.toString() : ""} {"\n"}
        isLoading: {isLoading.toString()} {"\n"}
        isFetching: {isFetching.toString()} {"\n"}
        error: { error ? error.toString() : ""} {"\n"}
        isError: {isError.toString()}

      </Text>
      <TextInput placeholder='email' value={userSignInParams.email} onChangeText={(text) => handleTextChange("email", text)}/>
      <TextInput placeholder='password' value={userSignInParams.password} onChangeText={(text) => handleTextChange("password", text)}/>

    </View>
  )
}