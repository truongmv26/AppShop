import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Menu from '../main/Menu';

export default class ChangeInfo extends Component {
    
    static navigationOptions = () => {        
        const drawerLabel = 'ChangeInfo';
        return { drawerLabel };
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Menu {...this.props} />
                <Text style={{fontSize: 30}}>
                    Change Info Component
                </Text>
            </View>
        );
    }
}
