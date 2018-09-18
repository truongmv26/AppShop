import React, { Component } from 'react';
import { View, Image } from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Home from './home/Home';
import Cart from './cart/Cart';
import Contact from './contact/Contact';
import Search from './search/Search';
import Header from './Header';
import global from '../../global';
import getHomeData from '../../../api/getData';
import getCart from '../../../api/getCart';
import saveCart from '../../../api/saveCart';

export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            types: [],
            topProducts: [],
            cartArray: []
        }
        global.addProductToCart = this.addProductToCart.bind(this);
        global.increaseQuantity = this.increaseQuantity.bind(this);
        global.decreaseQuantity = this.decreaseQuantity.bind(this);
        global.removeProduct = this.removeProduct.bind(this);
    }

    componentDidMount() {
        getHomeData().then(resJson => {
            this.setState({
                types: resJson.type,
                topProducts: resJson.product
            })
        })
        getCart().then(cartArray => this.setState({ cartArray: cartArray }))
    }


    addProductToCart = product => {
        var inCart = [];
        this.state.cartArray.map(e => {
            inCart.push(e.product.id);
        })
        if (inCart.includes(product.id)) {
            alert("This product has already in your cart.");
            return;
        }
        this.setState({
            cartArray: this.state.cartArray.concat({ product: product, quantity: 1 })
        }, () => {
            saveCart(this.state.cartArray)
        })
    }

    increaseQuantity = product => {
        const newCart = this.state.cartArray.map(e => {
            if (e.product.id !== product.id) return e;
            return {product: e.product, quantity: e.quantity + 1}
        })
        this.setState({
            cartArray: newCart
        }, () => {
            saveCart(this.state.cartArray)
        })
    }

    decreaseQuantity = product => {
        const newCart = this.state.cartArray.map(e => {
            if (e.product.id !== product.id) return e;
            return {product: e.product, quantity: e.quantity - 1}
        })
        this.setState({
            cartArray: newCart
        }, () => {
            saveCart(this.state.cartArray)
        })
    }

    removeProduct = product => {
        const newCart = this.state.cartArray.filter(e => e.product.id !== product.id);
        this.setState({
            cartArray: newCart
        }, () => {
            saveCart(this.state.cartArray)
        })
    }

    openMenu() {
        const { open } = this.props;
        open();
    }

    render() {

        const { types, selectedTab, topProducts, cartArray } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <View>
                    <Header onOpen={this.openMenu.bind(this)} />
                </View>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Image source={require('../../../media/appIcon/home0.png')} style={{ width: 25, height: 25 }} />}
                        renderSelectedIcon={() => <Image source={require('../../../media/appIcon/home.png')} style={{ width: 25, height: 25 }} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <Home types={types} topProducts={topProducts} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'cart'}
                        title="Cart"
                        renderIcon={() => <Image source={require('../../../media/appIcon/cart0.png')} style={{ width: 25, height: 25 }} />}
                        renderSelectedIcon={() => <Image source={require('../../../media/appIcon/cart.png')} style={{ width: 25, height: 25 }} />}
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                        badgeText={cartArray.length}>
                        <Cart cartArray={cartArray} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'search'}
                        title="Search"
                        renderIcon={() => <Image source={require('../../../media/appIcon/search0.png')} style={{ width: 25, height: 25 }} />}
                        renderSelectedIcon={() => <Image source={require('../../../media/appIcon/search.png')} style={{ width: 25, height: 25 }} />}
                        onPress={() => this.setState({ selectedTab: 'search' })}>
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'contact'}
                        title="Contact"
                        renderIcon={() => <Image source={require('../../../media/appIcon/contact0.png')} style={{ width: 25, height: 25 }} />}
                        renderSelectedIcon={() => <Image source={require('../../../media/appIcon/contact.png')} style={{ width: 25, height: 25 }} />}
                        onPress={() => this.setState({ selectedTab: 'contact' })}>
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}