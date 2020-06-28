import React from 'react';
import {useState} from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

const TextScreen = () => {

    const [input, setInput] = useState('')

    const errorMessage = () => {
        return input.length > 5 ? 
            null : <Text>Your password must be more than 5 characters</Text>
    }
    return (
    <View>
        <TextInput 
            style ={styles.input}
            autoCapitalize = 'none'
            autoCorrect = {false}
            value = {input}
            onChangeText = {setInput}
        />
        <Text>{errorMessage()}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen