import React, { Component } from 'react';
import { View, Image } from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Home from './home/Home';
import Cart from './cart/Cart';
import Contact from './contact/Contact';
import Search from './search/Search';
import Header from './Header';


export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedTab: 'home' }
    }

    openMenu() {
        const { open } = this.props;
        open();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <Header onOpen={this.openMenu.bind(this)} />
                </View>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Image source={require('../../../media/appIcon/home0.png')} style={{ width: 25, height: 25 }} />}
                        renderSelectedIcon={() => <Image source={require('../../../media/appIcon/home.png')} style={{ width: 25, height: 25 }} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        renderIcon={() => <Image source={require('../../../media/appIcon/cart0.png')} style={{ width: 25, height: 25 }} />}
                        renderSelectedIcon={() => <Image source={require('../../../media/appIcon/cart.png')} style={{ width: 25, height: 25 }} />}
                        onPress={() => this.setState({ selectedTab: 'cart' })}>
                        <Cart />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        renderIcon={() => <Image source={require('../../../media/appIcon/search0.png')} style={{ width: 25, height: 25 }} />}
                        renderSelectedIcon={() => <Image source={require('../../../media/appIcon/search.png')} style={{ width: 25, height: 25 }} />}
                        onPress={() => this.setState({ selectedTab: 'search' })}>
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
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