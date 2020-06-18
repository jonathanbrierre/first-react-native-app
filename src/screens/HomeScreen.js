import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return( 
    <View>
      <Text style={styles.text}>Hey Sexy</Text>
      <Button 
        onPress = {()=>console.log('You touched the booty')}
        title='Booty'
      />
      <TouchableOpacity onPress = {() => console.log('Adele is the GOAT')}>
        <Text style = {styles.buttonStyle}>Hello from the other side</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttonStyle: {
    backgroundColor: 'red',
    width: 200
  }
});

export default HomeScreen;
