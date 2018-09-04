import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Cart extends Component {
    
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                <Text style={{fontSize: 30}}>
                    Cart Component
                </Text>
            </View>
        );
    }
}