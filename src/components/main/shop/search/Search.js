import React, { Component } from 'react';
import SearchView from './SearchView';
import { createStackNavigator } from 'react-navigation';
import ProductDetail from '../detail/ProductDetail';

export default class Search extends Component {
    
    render() {
        return (
            <SearchNavigator />
        );
    }
}

const SearchNavigator = createStackNavigator({
    SearchView: {
        screen: SearchView,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },
    Detail: {
        screen: ProductDetail,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    }
}, {
    initialRouteName: 'SearchView'
})
