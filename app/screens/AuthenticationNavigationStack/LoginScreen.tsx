import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

import { useLazySignUpQuery } from '../../slices/tAuthApiSlice';
import tAuth from '@/services/telpAuth';
import { TabActions } from '@react-navigation/native';

import { useNavigation } from 'expo-router';

export default function LoginScreen() {

  const navigation = useNavigation()
  const [triggerSignUp, { data, isLoading, isFetching, error }] = useLazySignUpQuery();
  const [userParams, setUserParams] = useState({
    email: "testemail111@gmail.com",
    password: "password123456"
  })

  const [testValue, setTestValue] = useState(true)

  const handleSignUp = () => {
    triggerSignUp(userParams, false)
  }

  const handleSignOut = () => {
    tAuth.signOut()
  }

  const handleSignIn = () => {
    tAuth.signIn(userParams.email, userParams.password)
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
        IsLoading: {isLoading.toString()} {"\n"}
        IsFetching: {isFetching.toString()}
      </Text>
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