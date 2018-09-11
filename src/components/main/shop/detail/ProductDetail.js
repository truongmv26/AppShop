import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ProductDetail extends Component {
    
    goBackNavigation() {
        const { navigation } = this.props;
        navigation.goBack();
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.goBackNavigation.bind(this)}>
                    <Text>Back</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}
