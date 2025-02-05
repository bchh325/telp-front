import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'

import { setUserSignedOut } from '@/app/slices/authenticationSlice'
import { useDispatch } from 'react-redux'
import { useLazySignOutQuery } from '@/app/slices/tAuthApiSlice'

export default function UserAccountScreen() {
  const [triggerSignOut, { data, isLoading, isFetching, error, isError }] = useLazySignOutQuery();

  console.debug("Re-render occurred")

  useEffect(() => {
    if (data) {
      dispatch(setUserSignedOut())
    }
  }, [data])

  const handleSignOut = () => {
    triggerSignOut()
  }

  const manualDispatch = () => {
    dispatch(setUserSignedOut())
  }

  const dispatch = useDispatch()

  useEffect(() => {
    console.debug("IsError: ", isError)
    console.debug("data: ", data)
    if (data) {
      console.debug("data: ", data)
      //dispatch(setUserSignedOut())
    }
  }, [data])

  return (
    <View>
      <Text>
        Data: {data ? data.toString() : ""} {"\n"}
        isLoading: {isLoading.toString()} {"\n"}
        isFetching: {isFetching.toString()} {"\n"}
        error: {error ? error.toString() : ""} {"\n"}
        isError: {isError.toString()} {"\n"}
      </Text>
      <Button title={"Sign Out"} onPress={() => { handleSignOut() }} />
      <Button title={"Manual Dispatch"} onPress={() => { manualDispatch() }} />
    </View>
  )
}