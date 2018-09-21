import React, { Component } from 'react';
import {
    View, Text, Image,
    Dimensions, StyleSheet,
    TouchableOpacity
} from 'react-native';
import global from '../global';

const { width } = Dimensions.get('window');
export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
        global.onSignIn = this.onSignIn.bind(this);
    }

    onSignIn(user) {
        this.setState({user: user})
    }

    goAuthentication() {
        const { navigation } = this.props;
        navigation.navigate('Authentication')
    }

    goOrderHistory() {
        const { navigation } = this.props;
        navigation.navigate('OrderHistory')
    }

    goChangeInfo() {
        const { navigation } = this.props;
        navigation.navigate('ChangeInfo')
    }

    render() {
        const { 
            container, profile, btnStyle, 
            btnText, btnSignInStyle, 
            loginContainer, username 
        } = styles;

        const logoutJSX = (
            <View>
                <TouchableOpacity style={btnSignInStyle} onPress={this.goAuthentication.bind(this)}>
                    <Text style={btnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );

        const loginJSX = (
            <View style={loginContainer}>
                <Text style={username}>{this.state.user ? this.state.user.name : ''}</Text>
                <View>
                    <TouchableOpacity style={btnStyle} onPress={this.goChangeInfo.bind(this)}>
                        <Text style={btnText}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnStyle} onPress={this.goOrderHistory.bind(this)}>
                        <Text style={btnText}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnStyle}>
                        <Text style={btnText}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>
        );

        const mainJSX = this.state.user ? loginJSX : logoutJSX;

        return (
            <View style={container}>
                <Image source={require('../../media/temp/profile.png')} style={profile} />
                { mainJSX }
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089',
        borderRightWidth: 2,
        borderColor: '#fff',
        alignItems: 'center',
    },
    profile: {
        height: 120,
        width: 120,
        borderRadius: 60,
        marginVertical: 30,
    },
    btnSignInStyle: {
        backgroundColor: '#fff',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: width * 0.7 - 20,
    },
    btnStyle: {
        backgroundColor: '#fff',
        height: 60,
        justifyContent: 'center',
        paddingLeft: 20,
        borderRadius: 5,
        width: width * 0.7 - 20,
        marginBottom: 10
    },
    btnText: {
        color: '#34B089',
        fontFamily: 'Avenir',
        fontSize: 20
    },
    loginContainer: {
        flex: 1, 
        justifyContent: 'space-between', 
        alignItems: 'center',
    },
    username: {
        color: '#fff', 
        fontFamily: 'Avenir', 
        fontSize: 18
    }
})

