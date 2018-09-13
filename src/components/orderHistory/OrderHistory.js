import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';

export default class OrderHistory extends Component {

    render() {
        const { 
            wrapper, container, orderStyle, 
            textStyle, valueStyle, timeStyle, priceStyle 
        } = styles;
        return (
            <ScrollView style={wrapper}>
                <View style={container}>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Order ID:</Text>
                        <Text style={valueStyle}>ORD15</Text>
                    </View>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Order Time:</Text>
                        <Text style={timeStyle}>2018-09-12 09:24:30</Text>
                    </View>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Status:</Text>
                        <Text style={valueStyle}>Pending</Text>
                    </View>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Total:</Text>
                        <Text style={priceStyle}>132$</Text>
                    </View>
                </View>
                <View style={container}>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Order ID:</Text>
                        <Text style={valueStyle}>ORD15</Text>
                    </View>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Order Time:</Text>
                        <Text style={timeStyle}>2018-09-12 09:24:30</Text>
                    </View>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Status:</Text>
                        <Text style={valueStyle}>Pending</Text>
                    </View>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Total:</Text>
                        <Text style={priceStyle}>132$</Text>
                    </View>
                </View>
                <View style={container}>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Order ID:</Text>
                        <Text style={valueStyle}>ORD15</Text>
                    </View>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Order Time:</Text>
                        <Text style={timeStyle}>2018-09-12 09:24:30</Text>
                    </View>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Status:</Text>
                        <Text style={valueStyle}>Pending</Text>
                    </View>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Total:</Text>
                        <Text style={priceStyle}>132$</Text>
                    </View>
                </View>
                <View style={container}>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Order ID:</Text>
                        <Text style={valueStyle}>ORD15</Text>
                    </View>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Order Time:</Text>
                        <Text style={timeStyle}>2018-09-12 09:24:30</Text>
                    </View>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Status:</Text>
                        <Text style={valueStyle}>Pending</Text>
                    </View>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Total:</Text>
                        <Text style={priceStyle}>132$</Text>
                    </View>
                </View>
                <View style={container}>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Order ID:</Text>
                        <Text style={valueStyle}>ORD15</Text>
                    </View>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Order Time:</Text>
                        <Text style={timeStyle}>2018-09-12 09:24:30</Text>
                    </View>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Status:</Text>
                        <Text style={valueStyle}>Pending</Text>
                    </View>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Total:</Text>
                        <Text style={priceStyle}>132$</Text>
                    </View>
                </View>
                <View style={container}>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Order ID:</Text>
                        <Text style={valueStyle}>ORD15</Text>
                    </View>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Order Time:</Text>
                        <Text style={timeStyle}>2018-09-12 09:24:30</Text>
                    </View>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Status:</Text>
                        <Text style={valueStyle}>Pending</Text>
                    </View>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Total:</Text>
                        <Text style={priceStyle}>132$</Text>
                    </View>
                </View>
                <View style={container}>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Order ID:</Text>
                        <Text style={valueStyle}>ORD15</Text>
                    </View>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Order Time:</Text>
                        <Text style={timeStyle}>2018-09-12 09:24:30</Text>
                    </View>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Status:</Text>
                        <Text style={valueStyle}>Pending</Text>
                    </View>
                    <View style={orderStyle}>
                        <Text style={textStyle}>Total:</Text>
                        <Text style={priceStyle}>132$</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 10
    },
    container: {
        backgroundColor: '#fff',
        padding: 10,
        height: height / 5,
        width: width - 20,
        justifyContent: 'space-between',
        marginBottom: 20
    },
    orderStyle: {
        flexDirection: 'row',
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily:'Avenir',
        color: '#989898'
    },
    valueStyle: {
        textAlign: 'right',
        fontSize: 18,
        fontFamily:'Avenir',
        position: 'absolute',
        right: 0,
        color: '#4FBFA5'
    }, 
    timeStyle: {
        textAlign: 'right',
        fontSize: 18,
        fontFamily:'Avenir',
        position: 'absolute',
        right: 0,
        color: '#C2387A'
    }, 
    priceStyle: {
        textAlign: 'right',
        fontSize: 18,
        fontFamily:'Avenir',
        position: 'absolute',
        right: 0,
        color: '#BD2C70',
        fontWeight: 'bold'
    }
})

