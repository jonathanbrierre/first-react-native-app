import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native'

const ColorButtons = (props) => {

    const increment = () => {
        if(props.thisColor <255){
            props.setColor(props.color, 10)
        }
    }

    const decrement = () => {
        if(props.thisColor > 0){
            props.setColor(props.color, -10)
        }
    }
    return (
        <View>
            <Text>{props.color}</Text>
            <Button title = {`Increase ${props.color}`} onPress = {increment}/>
            <Button title = {`Decrease ${props.color}`} onPress = {decrement} /> 
        </View>
    )
}

const styles = StyleSheet.create({})

export default ColorButtons