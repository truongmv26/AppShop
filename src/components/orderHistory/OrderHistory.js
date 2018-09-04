import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class OrderHistory extends Component {
    
    static navigationOptions = () => {        
        const tabBarLabel = 'OrderHistory';
        const tabBarIcon = () => (
            <Image
                source={ require('../images/order.png') }
                style={{ width: 26, height: 26, tintColor: '#4DA8EF' }}
            />
        );
        return { tabBarLabel, tabBarIcon };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#70B688' }}>
                <Text>OrderHistory Screen</Text>
            </View>
        );
    }
}
