import React, { Component } from 'react';
import { View } from 'react-native';
import Menu from '../main/Menu';

export default class OrderHistory extends Component {
    
    static navigationOptions = () => {        
        const drawerLabel = 'OrderHistory';
        return { drawerLabel };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#70B688' }}>
                <Menu {...this.props} />
            </View>
        );
    }
}
