/** @format */
import { StatusBar, Image } from 'react-native';
import React, { Component } from 'react';
import ChangeInfo from './changeInfo/ChangeInfo';
import Authentication from './authentication/Authentication';
import Main from './main/Main';
import OrderHistory from './orderHistory/OrderHistory';
import { createStackNavigator } from 'react-navigation';

StatusBar.setHidden(true);

const App = createStackNavigator({
    Main: {screen: Main},
    Authentication: {screen: Authentication},
    ChangeInfo: {screen: ChangeInfo},
    OrderHistory: {screen: OrderHistory},
}, {
    navigationOptions: {
        headerTitle: 'Wearing a Dress',
        headerStyle: {
            backgroundColor: '#41AE8B'
        },
        headerTitleStyle: {
            fontSize: 24,
            fontFamily: 'Avenir',
            color: '#fff'
        },
        headerTintColor: '#fff',
        headerBackTitle: ' ',
        headerRight: <Image source={require('../media/appIcon/ic_logo.png')} style={{marginRight: 5}} />
        
    }
})

export default App;