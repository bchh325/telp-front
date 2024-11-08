import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './slices/counterSlice'
import { Button, Text, View } from 'react-native'

const clientId: String = "mCSIZccwM8C66o0xc9H8ow"
const clientSecret: String = "0aTlni2z93NuKSXGlWK6Y2vdrIizS4V7fSuWq_iw98mENZezptXrmyxRqUw8SEFTelMpte478MWaR_6BcHP5aUqgmyb5Apvx0gtPBORBa8ObLIvgYFNvipjUNTsdZ3Yx"

export function Counter() {
    const count = useSelector((state: any) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <View style={{borderColor: 'red', borderWidth: 4}}>
            <Button
                onPress={() => dispatch(increment())}
                title="Increment"
                color="#841584"
            />
            <Text>{count}</Text>
            <Button
                onPress={() => dispatch(decrement())}
                title="Decrement"
                color="#841584"
            />
        </View>
    )
}