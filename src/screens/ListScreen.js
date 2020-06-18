import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        {name: 'friend #1', age: '12'},
        {name: 'friend #2', age: '13'},
        {name: 'friend #3', age: '14'},
        {name: 'friend #4', age: '63'},
        {name: 'friend #5', age: '21'},
        {name: 'friend #6', age: '13'},
        {name: 'friend #7', age: '75'},
        {name: 'friend #8', age: '4'}
    ]

    const renderFriends = ({item}) => {
        return <Text style = {styles.textStyle}>{item.name} - Age: {item.age} </Text>
    }

    return (
        <FlatList 
            showsVerticalScrollIndicator = {false}
            keyExtractor = {friend => friend.name}
            data ={friends} 
            renderItem= {renderFriends}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen
