import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from "react-native";

import login from '../../api/login';
import saveToken from '../../api/saveToken';
import getToken from '../../api/getToken';
import global from '../global';

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onLogin = () => {
        const { email, password } = this.state;
        login(email, password).then(res => {
            global.onSignIn(res);
            this.props.goBackToMain();
            saveToken(res.token);
            alert('hhahahhahah');
        }).catch(() => {
            alert('Sai thong tin dang nhap');
            return;
        })
    }

    render() {
        const { inputStyle, bigButton, textBigButton } = styles;
        const { email, password } = this.state;
        return (
            <View>
                <TextInput 
                    style={inputStyle} 
                    placeholder="Enter your email" 
                    value={email}
                    onchangeText={text => this.setState({email: text})}
                />
                <TextInput 
                    style={inputStyle} 
                    placeholder="Enter your password" 
                    value={password}
                    secureTextEntry={true}    
                    onchangeText={text => this.setState({password: text})}
                />
                <TouchableOpacity style={bigButton} onPress={this.onLogin.bind(this)}>
                    <Text style={textBigButton}>
                        SIGN IN NOW
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default SignIn;

const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: '#fff',
        paddingLeft: 20,
        marginBottom: 10,
        borderRadius: 20,
        height: 50,
        fontSize: 20,
        fontFamily: 'Avenir'
    },
    bigButton: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 20
    },
    textBigButton: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Avenir',
    }
});