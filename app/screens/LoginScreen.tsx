import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

import { useLazySignUpQuery } from '../slices/tAuthApiSlice';
import tAuth from '@/services/telpAuth';

export default function LoginScreen() {

  const [triggerSignUp, { data, isLoading, error }] = useLazySignUpQuery();
  const [userParams, setUserParams] = useState({
    email: "testemail1@gmail.com",
    password: "password123456"
  })

  const [testValue, setTestValue] = useState(true)

  const handleSignUp = () => {
    triggerSignUp(testValue)
  }

  const handleSignOut = () => {
    tAuth.signOut()
  }

  const handleSignIn = () => {
    tAuth.signIn(userParams.email, userParams.password)
  }

  return (
    <View>
      <Text>LoginScreen Test</Text>
      <Button
        title='Sign Up'
        onPress={() => { handleSignUp() }}
      ></Button>
      <Button title='Check' onPress={() => { console.debug(data, isLoading, error) }} />
      <Button title='Sign Out' onPress={() => { handleSignOut() }} />
      <Button title='Sign In' onPress={() => { handleSignIn() }} />
      {data ?
        <Text>
          {}
          {typeof(data)}
        </Text>
        :
        <Text>
          No Data
        </Text>}
    </View>
  )
}