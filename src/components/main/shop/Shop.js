import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Home from './home/Home';
import Cart from './cart/Cart';
import Contact from './contact/Contact';
import Search from './search/Search';


export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedTab: 'home' }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Image source={require('./images/home.png')} style={{width: 25, height: 25}} />}
                        renderSelectedIcon={() => <Image source={require('./images/home_selected.png')} style={{width: 25, height: 25}} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        renderIcon={() => <Image source={require('./images/cart.png')} style={{width: 25, height: 25}} />}
                        renderSelectedIcon={() => <Image source={require('./images/cart_selected.png')} style={{width: 25, height: 25}} />}
                        onPress={() => this.setState({ selectedTab: 'cart' })}>
                        <Cart />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        renderIcon={() => <Image source={require('./images/search.png')} style={{width: 25, height: 25}} />}
                        renderSelectedIcon={() => <Image source={require('./images/search_selected.png')} style={{width: 25, height: 25}} />}
                        onPress={() => this.setState({ selectedTab: 'search' })}>
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        renderIcon={() => <Image source={require('./images/contact.png')} style={{width: 25, height: 25}} />}
                        renderSelectedIcon={() => <Image source={require('./images/contact_selected.png')} style={{width: 25, height: 25}} />}
                        onPress={() => this.setState({ selectedTab: 'contact' })}>
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}