import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput, Image } from 'react-native';
import SignIn from './SignIn';
import SignUp from './SignUp';

const { width } = Dimensions.get('window')

export default class Authentication extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true
        }
    }

    _onSignIn = () => {
        this.setState({ isSignIn: true })
    }

    _onSignUp = () => {
        this.setState({ isSignIn: false })
    }

    render() {
        const {
            container, controlStyle,
            btnSignInStyle, btnSignUpStyle
        } = styles;

        const styleBtnSignIn = this.state.isSignIn ? styles.activeStyle : styles.inactiveStyle
        const styleBtnSignUp = this.state.isSignIn ? styles.inactiveStyle : styles.activeStyle

        const btnJSX = this.state.isSignIn ? <SignIn /> : <SignUp />
        return (
            <View style={container}>
                <View />
                {btnJSX}
                <View style={controlStyle}>
                    <TouchableOpacity style={btnSignInStyle} onPress={this._onSignIn}>
                        <Text style={styleBtnSignIn}>
                            SIGN IN
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignUpStyle} onPress={this._onSignUp}>
                        <Text style={styleBtnSignUp}>
                            SIGN UP
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#41AE8B',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingBottom: 20
    },
    controlStyle: {
        width: width - 60,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    btnSignInStyle: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 15,
        flex: 1,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginRight: 1
    },
    btnSignUpStyle: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 15,
        flex: 1,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginLeft: 1
    },
    activeStyle: {
        color: '#41AE8B',
        fontSize: 18,
        fontFamily: 'Avenir'
    },
    inactiveStyle: {
        color: '#D7D7D7',
        fontSize: 18,
        fontFamily: 'Avenir'
    },
    
})
