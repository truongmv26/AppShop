import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Collection from './Collection';
import TopProduct from './TopProduct';
import Category from './Category';

export default class HomeView extends Component {
    
    render() {
        const { navigation } = this.props;
        return (
            <ScrollView style={{flex: 1, backgroundColor: '#E3E2E0'}}>
                <Collection />
                <Category navigation={navigation} />
                <TopProduct navigation={navigation} />
            </ScrollView>
        );
    }
}