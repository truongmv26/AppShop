import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from "react-native";

class SignIn extends Component {

    render() {
        const { inputStyle, bigButton, textBigButton } = styles;
        return (
            <View>
                <TextInput style={inputStyle} placeholder="Enter your email" />
                <TextInput style={inputStyle} placeholder="Enter your password" />
                <TouchableOpacity style={bigButton}>
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