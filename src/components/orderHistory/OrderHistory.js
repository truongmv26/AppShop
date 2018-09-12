import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class OrderHistory extends Component {
    
    static navigationOptions = () => {        
        const drawerLabel = 'Order History';
        return { drawerLabel };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <Text style={{fontSize: 30}}>
                        Order History Component
                    </Text>
                </View>
                
            </View>
        );
    }
}
