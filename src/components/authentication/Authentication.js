import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Menu from '../main/Menu';

export default class Authentication extends Component {
    
    static navigationOptions = () => {        
        const drawerLabel = 'Authentication';
        return { drawerLabel };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#80C645' }}>
                <Menu {...this.props} />
            </View>
        );
    }
}
