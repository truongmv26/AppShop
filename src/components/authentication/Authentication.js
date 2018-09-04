import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Authentication extends Component {
    
    static navigationOptions = () => {        
        const tabBarLabel = 'Authentication';
        const tabBarIcon = () => (
            <Image
                source={ require('../images/authenticate.png') }
                style={{ width: 26, height: 26, tintColor: '#4DA8EF' }}
            />
        );
        return { tabBarLabel, tabBarIcon };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#80C645' }}>
                <Text>Authentication Screen</Text>
            </View>
        );
    }
}
