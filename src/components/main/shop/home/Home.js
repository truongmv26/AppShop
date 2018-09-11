import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeView from './HomeView';
import ProductDetail from '../detail/ProductDetail';
import ListProduct from '../list/ListProduct';

export default class Home extends Component {
    
    render() {
        console.disableYellowBox = true;
        return (
            <HomeNavigator />
        );
    }
}

const HomeNavigator = createStackNavigator({
    HomeView: {
        screen: HomeView,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },
    Detail: {
        screen: ProductDetail,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },
    List: {
        screen: ListProduct,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    }
}, {
    initialRouteName: 'HomeView'
})