import React, {useState} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native'

const CounterScreen = () => {

    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () =>{
        setCounter(counter - 1)
    }

    return (
        <View>
            <Button title = 'Increase' onPress = {increment}/>
            <Button title = 'Decrease' onPress = {decrement}/>
            <Text>Current Count: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default CounterScreen