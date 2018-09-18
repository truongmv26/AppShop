import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeView from './HomeView';
import ProductDetail from '../detail/ProductDetail';
import ListProduct from '../list/ListProduct';

export default class Home extends Component {

    render() {
        console.disableYellowBox = true;
        const HomeNavigator = mainHomeNavigator(this.props);
        return (
            <HomeNavigator />
        );
    }
}

const mainHomeNavigator = value => createStackNavigator({
    HomeView: {
        screen: props => <HomeView {...props} {...value} />,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },
    Detail: {
        screen: props => <ProductDetail {...props} {...value} />,
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