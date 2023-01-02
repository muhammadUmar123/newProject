import React, { Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet,Dimensions } from 'react-native';
const {height,width}=Dimensions.get('screen')
function NextButton ({onPress,text}){
  
    return (
      <TouchableOpacity onPress={onPress} style={styles.navigationButton2} >
        <Text style={{ color: '#fff' }}> {text} </Text>
      </TouchableOpacity>
    );
  
}
const styles=StyleSheet.create({
    navigationButton2: {
        backgroundColor: '#E54A7A',//color
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 35,
        width: '90%',
        height: height * 0.065,
        borderRadius: 20
    }
})

export default NextButton;
