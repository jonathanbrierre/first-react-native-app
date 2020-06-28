import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ( props ) => {
  let navigate = props.navigation.navigate

  return( 
    <View>
      <Text style={styles.text}>Hey Beautiful</Text>
      <Button 
        onPress = {()=> navigate('Components')}
        title='Bananas'
      />
      <Button 
        title = 'Image'
        onPress = {() => navigate('Image')}
      />
      <Button 
        title = 'Go to Counter Demo'
        onPress = {() => navigate('Counter')}
      />
      <Button 
        title = 'Go to Color Screen'
        onPress = {() => navigate('Colors')}
      />
      <Button 
        title = 'Go to Square Screen'
        onPress = {() => navigate('Square')}
      />
      <Button 
        title = 'Go to Text Screen'
        onPress = {() => navigate('Text')}
      />

      <TouchableOpacity onPress = {() => navigate('List')}>
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
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius:10,
    textAlign: "center",
    width: 200
  }
});

export default HomeScreen;
