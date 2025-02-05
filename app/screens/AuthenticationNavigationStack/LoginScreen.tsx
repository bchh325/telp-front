import { View, Text, Button, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'

import { useLazySignInQuery } from '../../slices/tAuthApiSlice';
import tAuth from '@/services/telpAuth';

import { useNavigation } from 'expo-router';
import { useDispatch } from 'react-redux';
import { setUserSignedIn } from '@/app/slices/authenticationSlice';

export default function LoginScreen() {
  const dispatch = useDispatch()
  const navigation = useNavigation()

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
    //dispatch(setUserSignedIn())
  }


  const handleNavigation = () => {
    navigation.navigate("Registration")
  }

  const manualDispatch = () => {
    dispatch(setUserSignedIn())
  }

  return (
    <View>
      <Button title='Sign In' onPress={() => { handleSignIn() }} />
      <Button title='To Registration' onPress={() => { handleNavigation() }} />
      <Button title='Manual Dispatch' onPress={() => { manualDispatch() }} />
      <Text>
        Data: {data ? data.toString() : ""} {"\n"}
        isLoading: {isLoading.toString()} {"\n"}
        isFetching: {isFetching.toString()} {"\n"}
        error: {error ? error.toString() : ""} {"\n"}
        isError: {isError.toString()}

      </Text>
      <TextInput placeholder='email' value={userSignInParams.email} onChangeText={(text) => handleTextChange("email", text)} />
      <TextInput placeholder='password' value={userSignInParams.password} onChangeText={(text) => handleTextChange("password", text)} />

    </View>
  )
}