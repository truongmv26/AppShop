import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ListProduct extends Component {

    goBackNavigation() {
        const { navigation } = this.props;
        navigation.goBack();
    }

    goToDetail() {
        const { navigation } = this.props;
        navigation.navigate('Detail');
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <TouchableOpacity onPress={this.goBackNavigation.bind(this)}>
                        <Text>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.goToDetail.bind(this)}>
                        <Text>Go to Detail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
