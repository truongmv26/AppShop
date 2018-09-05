import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

export default class Category extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{ flex: 1, paddingTop: 5 }}>
                    <Text style={styles.textStyle}>
                        LIST OF CATEGORIES
                    </Text>
                </View>
                <View style={{ flex: 4, justifyContent: 'flex-end' }}>
                    <Swiper autoplayTimeout={2} autoplay={true}>
                        <ImageBackground
                            source={require('../../../../media/temp/little.jpg')}
                            style={styles.imageStyle}
                        >
                            <Text style={styles.textStyle}>Little Dress</Text>
                        </ImageBackground>
                        <ImageBackground
                            source={require('../../../../media/temp/maxi.jpg')}
                            style={styles.imageStyle}
                        >
                            <Text style={styles.textStyle}>Maxi Dress</Text>
                        </ImageBackground>
                        <ImageBackground
                            source={require('../../../../media/temp/party.jpg')}
                            style={styles.imageStyle}
                        >
                            <Text style={styles.textStyle}>Party Dress</Text>
                        </ImageBackground>
                    </Swiper>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        height: height * 0.35,
        margin: 10,
        marginBottom: 0,
        shadowColor: '#2E272B',
        shadowOffset: { height: 3, width: 0 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    textStyle: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#A7A7A7',
        margin: 10
    },
    imageStyle: {
        width: width - 40,
        height: (width - 40) * 400 / 800,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})