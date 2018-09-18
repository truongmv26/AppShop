import React, { Component } from 'react';
import CartView from './CartView';
import { createStackNavigator } from 'react-navigation';
import ProductDetail from '../detail/ProductDetail';

export default class Cart extends Component {
    
    render() {
        const CartNavigator = mainCartNavigator(this.props);
        return (
            <CartNavigator />
        );
    }
}

const mainCartNavigator = value => createStackNavigator({
    CartView: {
        screen: props => <CartView {...props} {...value} />,
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
