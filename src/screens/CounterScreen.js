import React, {useReducer} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native'

const reducer = (state, action) => {

    switch(action.type){
        case 'CHANGE_COUNT':
            return {counter: state.counter + action.payload}
        default:
            return state
    }
}

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, {counter: 0})

    const increment = () => {
        dispatch({type: 'CHANGE_COUNT', payload: 1})
    }

    const decrement = () =>{
        dispatch({type: 'CHANGE_COUNT', payload: -1})
    }

    return (
        <View>
            <Button title = 'Increase' onPress = {increment}/>
            <Button title = 'Decrease' onPress = {decrement}/>
            <Text>Current Count: {state.counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default CounterScreen