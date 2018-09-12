import React, { Component } from 'react';
import CartView from './CartView';
import { createStackNavigator } from 'react-navigation';
import ProductDetail from '../detail/ProductDetail';

export default class Cart extends Component {
    
    render() {
        return (
            <CartNavigator />
        );
    }
}

const CartNavigator = createStackNavigator({
    CartView: {
        screen: CartView,
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
    initialRouteName: 'CartView'
})
