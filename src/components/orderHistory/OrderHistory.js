import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Menu from '../main/Menu';

export default class OrderHistory extends Component {
    
    static navigationOptions = () => {        
        const drawerLabel = 'OrderHistory';
        return { drawerLabel };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Menu {...this.props} />
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 30}}>
                        Order History Component
                    </Text>
                </View>
                
            </View>
        );
    }
}
