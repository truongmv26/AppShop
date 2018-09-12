import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';

export default class ChangeInfo extends Component {
    
    static navigationOptions = () => {        
        const drawerLabel = 'Change Info';
        return { drawerLabel };
    }

    render() {
        const { container, textInputStyle, btnStyle, textBtnStyle } = styles;
        return (
            <View style={container}>
                <TextInput style={textInputStyle} />
                <TextInput style={textInputStyle} />
                <TextInput style={textInputStyle} />
                <TouchableOpacity style={btnStyle}>
                    <Text style={textBtnStyle}>CHANGE YOUR INFORMATION</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 20
    },
    textInputStyle: {
        borderColor: '#44BB9F',
        borderWidth: 2,
        width: width - 40,
        height: height / 15,
        backgroundColor: '#fff',
        marginBottom: 20,
        paddingLeft: 20,
        fontSize: 16,
        borderRadius: 20,
        fontFamily: 'Avenir',
    }, 
    btnStyle: {
        backgroundColor: '#3DB99C',
        width: width - 40,
        height: height / 15,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    textBtnStyle: {
        fontSize: 16,
        fontFamily: 'Avenir',
        color: '#fff'
    }

})