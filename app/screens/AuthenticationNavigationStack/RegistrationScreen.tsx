import { View, Text, Button, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import styles from '../styles/RegistrationScreenStyle'
import { useLazySignUpQuery } from '../../slices/tAuthApiSlice';
import { useState } from 'react';
import { UserSignUpParams } from '@/app/interfaces';


export default function RegistrationScreen() {
  const navigation = useNavigation()
  const [triggerSignUp, { data, isLoading, isFetching, error, isError }] = useLazySignUpQuery();
  const [userSignUpParams, setUserSignUpParams] = useState<UserSignUpParams>({
    email: "testemail@gmail.com",
    password: "321321321321321"
  })

  const handleNavigation = () => {
    navigation.navigate("Login")
  }

  const handleSubmit = () => {
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

  return (
    <View>
      <TextInput value={userSignUpParams.email} onChangeText={(text) => { handleTextChange("email", text) }} style={styles.input} placeholder='Email' />
      <TextInput value={userSignUpParams.password} onChangeText={(text) => { handleTextChange("password", text) }} style={styles.input} placeholder='Password' />
      <Button title="Create Account" onPress={() => { handleSubmit() }} />
      <Button title="Already have an account? Login" onPress={() => { handleNavigation() }} />
      <Text>
        Data: {data ? data.toString() : ""} {"\n"}
        isLoading: {isLoading.toString()} {"\n"}
        isFetching: {isFetching.toString()} {"\n"}
        error: { error ? error.toString() : ""} {"\n"}
        isError: {isError.toString()} {"\n"}
      </Text>
    </View>
  )
}