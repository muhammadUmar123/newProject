import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, ScrollView } from 'react-native';
import RadioButtons from '../../Components/RadioButton';
import { useSelector } from 'react-redux';

const { width, height } = Dimensions.get('screen');

export default function Form({ }) {
    const user = useSelector((state) => state.user)
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={{ marginTop: height * 0.0990, }} />
            <View style={styles.picContainer} />
            <Text style={styles.user_data} >User data</Text>

            <Text style={styles.Namestyle}>Name</Text>
            <TextInput editable={false} value={user.Name} style={styles.TextinputStyle} />
            <Text style={styles.Namestyle}>Age</Text>
            <TextInput editable={false} value={user.Age} style={styles.TextinputStyle} />
            <Text style={styles.Namestyle}>Gender</Text>
            <RadioButtons ButtonValue={user.Gender} onValueChange={(v) => { }} />

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
        color: '#BCBCBC',
        padding: 15,
        borderRadius: 10,

    }
})
