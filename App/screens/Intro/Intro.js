
import React, { useRef, useState, } from 'react';
import { StatusBar, Animated, TouchableOpacity, Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import NextButton from '../../Components/NextButton';

import Intro_Screens_Txt from './Intro_screenTxt'
const { width, height } = Dimensions.get('screen');



const Indicator = ({ scrollx }) => {

    return (
        <View style={styles.indicatorStyles}>
            {
                Intro_Screens_Txt.map((_, i) => {

                    const inputRange = [(i - 1) * width, i * width, (i + 1) * width]
                    const scale = scrollx.interpolate({
                        inputRange,
                        outputRange: [0.8, 1, 0.8],
                        extrapolate: 'clamp'
                    })
                    const opacity = scrollx.interpolate({
                        inputRange,
                        outputRange: [0.4, 1, 0.4],
                        extrapolate: 'clamp'
                    })
                    return (

                        <Animated.View
                            key={`indicator-${i}`}
                            style={{
                                height: 10,
                                width: 10,
                                opacity,
                                backgroundColor: '#E74779',
                                margin: 4,
                                borderRadius: 10,
                                transform: [{
                                    scale
                                }]
                            }}
                        />



                    )
                })
            }
        </View>
    )
}

export default function Intro({ navigation }) {
    const ScrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef(FlatList);
    const [buttonIndex, setButtonIndex] = useState(0)

    const nextPress = index => {

        if (index < 2) {
            flatListRef?.current?.scrollToIndex({
                animated: true,
                index: index + 1
            });
            setButtonIndex(index + 1)
        } else {
            navigation.replace('Form')
        }
    };
    const backPress = index => {
        if (buttonIndex == 2) {
            flatListRef?.current?.scrollToIndex({
                animated: true,
                index: index - 1
            });
        } else if (index >= 1) {
            flatListRef?.current?.scrollToIndex({
                animated: true,
                index: index - 1
            });
            setButtonIndex(index - 1)
        }
    };

    async function SkipIntro() {
        navigation.replace('Form')


    }


    return (

        <View style={styles.container}>
            <StatusBar hidden />

            <Animated.FlatList

                data={Intro_Screens_Txt}
                ref={flatListRef}
                horizontal
                scrollEnabled={false}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: ScrollX } } }],
                    { useNativeDriver: true }
                )}
                keyExtractor={item => item.text}
                renderItem={({ item, index }) => (

                    <>
                        <View style={{ width, height }}>
                            <View style={{ flex: 1, padding: 20 }}>

                                <View style={styles.skip_back_container}>

                                    {item.back &&
                                        <View style={{ flex: 1, }}>
                                            <Text onPress={() => backPress(index)} style={styles.backButton}>Back</Text>
                                        </View>
                                    }
                                    {item.skip &&
                                        <View style={{ flex: 1, }} >
                                            <Text onPress={() => SkipIntro()} style={styles.skipButton}>Skip</Text>
                                        </View>}

                                </View>
                                <View style={styles.picContainer} />

                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.containerHeading}>{item.heading}</Text>
                                    <Text style={{ textAlign: 'center' ,color:'#7F7E83'}}>{item.text}</Text>
                                </View>
                            </View>
                        </View>
                    </>
                )}
            />
            <Indicator scrollx={ScrollX} />
            {buttonIndex < 2 ?
                <TouchableOpacity onPress={() => nextPress(buttonIndex)} style={styles.navigationButton1} />

                :

                <NextButton text="Start" onPress={() => nextPress(buttonIndex)} />
            }
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    indicatorStyles: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 120,
        flexDirection: 'row'
    },
    skip_back_container: {
        flexDirection: 'row',
        marginVertical: 15,
        justifyContent: "space-between",
        alignItems: "center"
    },
    backButton: {
        color: '#d3d3d3',
        fontWeight: '700',
        width: 50
    },
    skipButton: {
        color: '#d4d4d9',
        fontWeight: '700',
        textAlign: 'right',
        width: 50,
        alignSelf: 'flex-end'
    },
    picContainer: {
        width: width * 0.69,
        alignSelf: 'center',
        marginVertical: 15,
        height: height * 0.40,
        backgroundColor: '#D9D9D9'
    },
    containerHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 35,
        marginBottom: 20
    },
    navigationButton1: {
        backgroundColor: '#E74779',//color
        alignSelf: 'center',
        marginBottom: 35,
        width: 70,
        height: 70,
        borderRadius: 40
    },
    navigationButton2: {
        backgroundColor: '#E74779',//color
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 35,
        width: '90%',
        height: height * 0.089,
        borderRadius: 20
    }

});