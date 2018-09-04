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
            <View style={{ flex: 1 }}>
                <Menu {...this.props} />
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <Text style={{fontSize: 30}}>
                        Authentication Component
                    </Text>
                </View>
            </View>
        );
    }
}
