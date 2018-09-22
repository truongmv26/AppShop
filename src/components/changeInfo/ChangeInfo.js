import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';

export default class ChangeInfo extends Component {

    constructor(props) {
        super(props);
        const { name, phone, address } = props.navigation.state.params.user;
        this.state = {
            txtName: name,
            txtPhone: phone,
            txtAddress: address
        }
    }  

    render() {
        const { container, textInputStyle, btnStyle, textBtnStyle } = styles;
        const { user } = this.props.navigation.state.params;
        return (
            <View style={container}>
                <TextInput 
                    style={textInputStyle} 
                    value={user.name}
                    onchangeText={text => this.setState({txtName: text})}
                />
                <TextInput 
                    style={textInputStyle} 
                    value={user.phone}
                    onchangeText={text => this.setState({txtPhone: text})}
                />
                <TextInput 
                    style={textInputStyle} 
                    value={user.address}
                    onchangeText={text => this.setState({txtAddress: text})}
                />
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