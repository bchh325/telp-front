import { View, Text, Button } from 'react-native'
import React from 'react'

import { useLazyGetGreetingQuery } from '../slices/apiSlice'

export default function LoginScreen() {

  const [triggerGetGreeting, { data, isLoading, error }] = useLazyGetGreetingQuery();

  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        title='Button'
        onPress={() => { triggerGetGreeting() }}
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