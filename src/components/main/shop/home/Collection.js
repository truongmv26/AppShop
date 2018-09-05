import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Collection extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{flex: 1}}>
                    <Text style={styles.textStyle}>
                        SPRING COLLECTION
                    </Text>
                </View>
                <View style={{flex: 4}}>
                    <Image 
                        source={require('../../../../media/temp/banner.jpg')} 
                        style={styles.imageStyle} 
                    />
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
        shadowOffset: {height: 3, width: 0}, 
        shadowOpacity: 0.2
    },
    textStyle: {
        fontFamily: 'Avenir', 
        fontSize: 20, 
        color: '#A7A7A7', 
        margin: 10
    },
    imageStyle: {
        width: width - 40, 
        height: (width - 40) * 465 / 933,  
        margin: 10
    }
})