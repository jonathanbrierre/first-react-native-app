import React, {useState} from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native'
import ColorButtons from '../Components/ColorButtons';


const SquareScreen = () => {

    const [red, setRed] = useState(0)
    const [blue, setBlue] = useState(0)
    const [green, setGreen] = useState(0)


    const setColor = (color, int) => {
        if(color === 'Red'){
            setRed(red + int)
        }else if(color === 'Blue'){
            setBlue(blue +int)
        }else if(color === 'Green'){
            setGreen(green + int)
        }
    }

    console.log(green)
    return (
        <View>
            <ColorButtons color = 'Red' setColor = {setColor} thisColor = {red}/>
            <ColorButtons color = 'Green' setColor = {setColor} thisColor = {green}/>
            <ColorButtons color = 'Blue' setColor = {setColor} thisColor = {blue}/>
            <View style = {{width: 100, height: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SquareScreen