import React from 'react';
import { Text, StyleSheet, View } from 'react-native'


const ComponentsScreen = () => {

    const name = 'Jonathan'

    return (
    <View>
        <Text style= {styles.textStyle}>This is the components screen!</Text>
        <Text style ={styles.subHeaderStyle}> My name is {name}!</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 20
    },
    subHeaderStyle: {
        fontSize: 30,
        color: 'blue'
    }
})

export default ComponentsScreen