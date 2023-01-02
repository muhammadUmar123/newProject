import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, ScrollView, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import NextButton from '../../Components/NextButton';
import { update_user_detail } from '../../Redux/Actions'

const { width, height } = Dimensions.get('screen');

import RadioButtons from '../../Components/RadioButton';

export default function Form({ navigation }) {
    const [initailFormValue, ChangeFormValue] = useState(0)
    const [Name, setName] = useState('')
    const [Age, setAge] = useState('')
    const dispatch = useDispatch()
    let regx = /^[1-9]?[0-9]{1}$|^100$/
    function validate() {
        if (regx.test(Age)) {
            if (Name == "") {
                alert('Enter Valid Name')
                return
            } else {
                dispatch(update_user_detail({
                    'Name': Name,
                    'Age': Age,
                    'Gender': initailFormValue
                }))
                navigation.navigate('UserRecord')
            }
        } else {
            alert('Enter Valid Age')
            return
        }
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={{ marginTop: height * 0.0990, }} />
            <View style={styles.picContainer} />
            <Text style={styles.user_data} >Complete your profile</Text>

            <Text style={styles.Namestyle}>Name</Text>
            <TextInput onChangeText={(e) => setName(e)} placeholder='Enter your full name' style={styles.TextinputStyle} />
            <Text style={styles.Namestyle}>Age</Text>
            <TextInput onChangeText={(e) => setAge(e)} keyboardType='numeric' placeholder='Enter your age' style={styles.TextinputStyle} />
            <Text style={styles.Namestyle}>Gender</Text>
            <RadioButtons ButtonValue={0} onValueChange={(v) => ChangeFormValue(v)} />
            <View style={{ height: 30 }} />


            <NextButton text='Next' onPress={() => validate()} />
            {height < 700 && Platform.OS != 'android' ?
                <View style={{ height: 90 }} /> : null}
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    picContainer: {
        width: width * 0.39,
        alignSelf: 'center',
        marginVertical: 15,
        height: height * 0.20,
        backgroundColor: '#D9D9D9'
    },
    user_data: {
        marginVertical: 20,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    Namestyle: {
        marginTop: 20,
        marginBottom: 10
    },
    TextinputStyle: {
        color: '#B1B1B1',
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#F3F8FB'
    }
})
