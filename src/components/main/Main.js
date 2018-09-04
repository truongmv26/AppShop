import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Main extends Component {
    
    static navigationOptions = () => {        
        const tabBarLabel = 'Main';
        const tabBarIcon = () => (
            <Image
                source={ require('../images/main.png') }
                style={{ width: 26, height: 26, tintColor: '#4DA8EF' }}
            />
        );
        return { tabBarLabel, tabBarIcon };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F78AE0' }}>
                <Text>Main Screen</Text>
            </View>
        );
    }
}
