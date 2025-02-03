import { View, Text, Button, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import styles from '../styles/RegistrationScreenStyle'
import { useLazySignUpQuery } from '../../slices/tAuthApiSlice';
import { useState } from 'react';
import { UserParams } from '@/app/interfaces';


export default function RegistrationScreen() {
  const navigation = useNavigation()
  const [triggerSignUp, { data, isLoading, isFetching, error }] = useLazySignUpQuery();
  const [userParams, setUserParams] = useState<UserParams>({
    email: "testemail@gmail.com",
    password: "321321321321321"
  })

  const handleNavigation = () => {
    navigation.navigate("Login")
  }

  const handleSubmit = () => {
    if (userParams.email == "") {
      return
    }

    if (userParams.password == "") {
      return
    }

    try {
      triggerSignUp(userParams)
    } catch (err) {
      console.debug("Error Occurred")
    }
  }

  const handleTextChange = (key: keyof typeof userParams, input: string) => {
    setUserParams((prev) => ({ ...prev, [key]: input }))
  }

  return (
    <View>
      <TextInput value={userParams.email} onChangeText={(text) => { handleTextChange("email", text) }} style={styles.input} placeholder='Email' />
      <TextInput value={userParams.password} onChangeText={(text) => { handleTextChange("password", text) }} style={styles.input} placeholder='Password' />
      <Button title="Create Account" onPress={() => { handleSubmit() }} />
      <Button title="Already have an account? Login" onPress={() => { handleNavigation() }} />
      <Text>
        Data: {data ? data.toString() : ""} {"\n"}
        isLoading: {isLoading.toString()} {"\n"}
        isFetching: {isFetching.toString()} {"\n"}
        error: { error ? error.toString() : ""}
      </Text>
    </View>
  )
}