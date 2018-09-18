import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from "react-native";

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '', email: '', password: '', rePassword: ''
        }
    }

    render() {

        const { inputStyle, bigButton, textBigButton } = styles;

        return (
            <View>
                <TextInput 
                    style={inputStyle} 
                    placeholder="Enter your name" 
                    value={this.state.name}
                    onChangeText={text => this.setState({name: text})}
              
                />
                <TextInput 
                    style={inputStyle} 
                    placeholder="Enter your email" 
                    value={this.state.email}
                    onChangeText={text => this.setState({email: text})}
                />
                <TextInput 
                    style={inputStyle} 
                    placeholder="Enter your password" 
                    value={this.state.password}
                    secureTextEntry
                    onChangeText={text => this.setState({password: text})}
                />
                <TextInput 
                    style={inputStyle} 
                    placeholder="Re-enter your password" 
                    value={this.state.rePassword}
                    secureTextEntry
                    onChangeText={text => this.setState({rePassword: text})}
                />
                <TouchableOpacity style={bigButton}>
                    <Text style={textBigButton}>
                        SIGN UP NOW
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