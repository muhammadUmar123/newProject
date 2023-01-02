import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('screen');
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
const radio_props = [
    { label: 'Female', value: 0 },
    { label: 'Male', value: 1 }
];


export default function RadioButtons({ ButtonValue,onValueChange }) {
    const [initailFormValue, ChangeFormValue] = useState(ButtonValue)

    return (
      
           
            <RadioForm
                formHorizontal={true}
                animation={true}
            >
                {/* To create radio buttons, loop through your array of options */}
                {
                    radio_props.map((obj, i) => (
                        <RadioButton labelHorizontal={true} key={i} >
                            {/*  You can set RadioButtonLabel before RadioButtonInput */}
                            <RadioButtonInput
                                obj={obj}
                                index={i}
                                isSelected={initailFormValue === i}
                                onPress={() => {ChangeFormValue(i),onValueChange(i)}}
                                borderWidth={1}
                                buttonInnerColor={'#e74c3c'}
                                buttonOuterColor={'#E54A7A'}
                                buttonSize={10}
                                buttonOuterSize={20}
                                buttonStyle={{}}
                                buttonWrapStyle={{ marginLeft: 10 }}
                            />
                            <RadioButtonLabel
                                obj={obj}
                                index={i}
                                labelHorizontal={true}
                                onPress={() => { }}
                                labelStyle={{ fontSize: 14, color: '#000' }}
                                labelWrapStyle={{}}
                            />
                        </RadioButton>
                    ))
                }
            </RadioForm>
      
    );

}


