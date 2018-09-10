import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Authentication extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <Text style={{fontSize: 30}}>
                        Authentication Component
                    </Text>
                </View>
            </View>
        );
    }
}
