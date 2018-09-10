import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native';

var { height } = Dimensions.get('window');

export default class Header extends Component {
    render() {
        return (
            <View style={{ height: height / 7, backgroundColor: '#3CB99C', justifyContent: 'space-around' }}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <TouchableOpacity onPress={this.props.onOpen} style={{marginLeft: 10}}>
                        <Image source={require('../../../media/appIcon/ic_menu.png')} style={{width: 30, height: 30}} />
                    </TouchableOpacity>
                    <Text style={{color: 'white', fontFamily: 'Avenir', fontSize: 22,}}>Wearing a Dress</Text>
                    <Image source={require('../../../media/appIcon/ic_logo.png')} style={{width: 30, height: 30, marginRight: 10}} />
                </View>
                <TextInput 
                    style={{ padding: 5, marginLeft: 10, marginRight: 10 , marginTop: -5,backgroundColor: 'white', height: height / 20 }} 
                    placeholder="What do you want to buy?" 
                >
                </TextInput>
            </View>
        );
    }
}