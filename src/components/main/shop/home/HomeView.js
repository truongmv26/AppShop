import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import Collection from './Collection';
import TopProduct from './TopProduct';
import Category from './Category';

export default class HomeView extends Component {    

    getItems() {
        const { topProducts } = this.props;
        alert(`Items: ${JSON.stringify(topProducts)}`)
    }

    render() {
        const { navigation, types, topProducts } = this.props;
        return (
            <ScrollView style={{flex: 1, backgroundColor: '#E3E2E0'}}>
                <Collection navigation={navigation} />
                <Category navigation={navigation} types={types} />
                <TopProduct navigation={navigation} topProducts={topProducts} />
            </ScrollView>
        );
    }
    
}


/* <TouchableOpacity onPress={this.getItems.bind(this)}>
                    <Text>
                        Button
                    </Text>
                </TouchableOpacity> */