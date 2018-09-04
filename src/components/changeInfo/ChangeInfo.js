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
            <View style={{ flex: 1, backgroundColor: '#1E7EC6' }}>
                <Menu {...this.props} />
            </View>
        );
    }
}
