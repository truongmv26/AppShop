import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class ChangeInfo extends Component {
    
    static navigationOptions = () => {        
        const tabBarLabel = 'ChangeInfo';
        const tabBarIcon = () => (
            <Image
                source={ require('../images/info.png') }
                style={{ width: 26, height: 26, tintColor: '#4DA8EF' }}
            />
        );
        return { tabBarLabel, tabBarIcon };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#1E7EC6' }}>
                <Text>ChangeInfo Screen</Text>
            </View>
        );
    }
}
