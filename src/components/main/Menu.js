import React, { Component } from 'react';
import { View, Image, TouchableHighlight } from 'react-native';

export default class Menu extends Component {
    // state = {  }
    render() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 90,
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}
            >
                <TouchableHighlight
                    style={{
                        marginLeft: 10,
                        marginTop: 20
                    }}
                    onPress={() => {
                        const { navigate } = this.props.navigation;
                        navigate('DrawerOpen');
                    }}
                >
                    <Image style={{width: 32, height: 32}} source={require('../images/menu.png')} />
                </TouchableHighlight>
            </View>
        );
    }
}