import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class SearchView extends Component {

    goToDetail() {
        const { navigation } = this.props;
        navigation.navigate('Detail');
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={this.goToDetail.bind(this)}>
                    <Text>
                        Go To Detail
                    </Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 30 }}>
                    Search Component
                </Text>
            </View>
        );
    }
}