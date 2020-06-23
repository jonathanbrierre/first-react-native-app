import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native'


const ColorScreen = () => {

    const [colors, setColors] = useState([])

    const addColor = () => {
        setColors([...colors, randomRgb()])

    }

    const showColor = ({item}) => {
        return <View style = {{width: 100, height: 100, backgroundColor: item }}/>
    }


    return (
    <View>
        <Button title = 'Add a color' onPress = {addColor}/>
        <FlatList keyExtractor= {(item)=> item} data = {colors} renderItem = {showColor}/>
    </View>
    )
}

const randomRgb = () => {
    const red = Math.floor(Math.random()* 256)
    const green = Math.floor(Math.random()* 256)
    const blue = Math.floor(Math.random()* 256)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({})

export default ColorScreen