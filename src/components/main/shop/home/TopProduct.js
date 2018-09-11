import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

export default class TopProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        }
    }

    goToDetail() {
        const { navigation } = this.props;
        navigation.navigate('Detail')
    }

    render() {
        const { 
            container, titleContainer, 
            title, body, productContainer, 
            productImage, productName, productPrice 
        } = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCTS</Text>
                </View>
                <View style={body}>
                    <TouchableOpacity style={productContainer} onPress={this.goToDetail.bind(this)}>
                        <Image source={sp1} style={productImage} />
                        <Text style={productName}>Product Name</Text>
                        <Text style={productPrice}>$400</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} onPress={this.goToDetail.bind(this)}>
                        <Image source={sp2} style={productImage} />
                        <Text style={productName}>Product Name</Text>
                        <Text style={productPrice}>$250</Text>
                    </TouchableOpacity>
                    <View style={{height: 10, width: width}} />
                    <TouchableOpacity style={productContainer} onPress={this.goToDetail.bind(this)}>
                        <Image source={sp3} style={productImage} />
                        <Text style={productName}>Product Name</Text>
                        <Text style={productPrice}>$400</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} onPress={this.goToDetail.bind(this)}>
                        <Image source={sp4} style={productImage} />
                        <Text style={productName}>Product Name</Text>
                        <Text style={productPrice}>$250</Text>
                    </TouchableOpacity>
                </View>
                
            </View>            
        );
    }
}
const { width } = Dimensions.get('window');
const imageWidth = Image.resolveAssetSource(sp1).width
const imageHeight = Image.resolveAssetSource(sp1).height

const productImageWidth = (width - 60) / 2;
const productImageHeight = productImageWidth * imageHeight / imageWidth;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { height: 3, width: 0 },
        shadowOpacity: 0.2,
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,
        
    },
    title: {
        fontSize: 20,
        color: '#D8D9D5'

    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },
    productContainer: {
        width: productImageWidth,
        shadowColor: '#2E272B',
        shadowOffset: { height: 3, width: 0 },
        shadowOpacity: 0.2,
        paddingBottom: 20,
        backgroundColor: '#ECECEC'
    },
    productImage: {
        width: productImageWidth,
        height: productImageHeight
    },
    productName: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    productPrice: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        fontSize: 22,
        color: '#AE85F8'
    }
})