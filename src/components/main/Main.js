import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Menu from './Menu';

export default class Main extends Component {
    
    static navigationOptions = () => {        
        const drawerLabel = 'Main';
        return { drawerLabel };
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Menu {...this.props} />
            </View>
        );
    }
}
