import { View, Text, Button } from 'react-native'
import React from 'react'

import { useLazyGetGreetingQuery } from '../slices/apiSlice'
import tAuth from '@/services/telpAuth';

export default function LoginScreen() {

  const [triggerGetGreeting, { data, isLoading, error }] = useLazyGetGreetingQuery();

  const handlePress = () => {
    tAuth.signUp("testemail@gmail.com", "password123456")
  }

  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        title='Sign Up'
        onPress={() => { handlePress() }}
      ></Button>
      <Button title='Check' onPress={() => { console.debug(data, isLoading, error) }} />
      {data ?
        <Text>
          {data.response}
          {typeof(data)}
        </Text>
        :
        <Text>
          No Data
        </Text>}
    </View>
  )
}