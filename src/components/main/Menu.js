import React, { Component } from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import Header from './shop/Header';

export default class Menu extends Component {

    _onOpen = () => {
        const { navigate } = this.props.navigation;
        navigate('DrawerOpen');
    }
    // state = {  }
    render() {
        return (
            <Header onOpen={this._onOpen.bind(this)} />
        );
    }
}