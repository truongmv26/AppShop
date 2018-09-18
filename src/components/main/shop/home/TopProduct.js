import React, { Component } from 'react';
import { 
    View, Text, StyleSheet, Image, 
    Dimensions, TouchableOpacity,
    FlatList
} from 'react-native';

const url = 'http://192.168.64.2/api/images/product/'

import sp1 from '../../../../media/temp/sp1.jpeg';

export default class TopProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        }
        // this.goToDetail = this.goToDetail.bind(this)
    }

    goToDetail = product => {
        const { navigation } = this.props;
        data = {
            product: product
        }
        navigation.navigate('Detail', data)
    }

    render() {
        const { 
            container, titleContainer, 
            title, body, productContainer, 
            productImage, productName, productPrice 
        } = styles;
        const { topProducts } = this.props;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCTS</Text>
                </View>
                <FlatList 
                    contentContainerStyle={body} 
                    data={topProducts} 
                    renderItem={({item, index}) => {
                        return (
                            <TouchableOpacity style={productContainer} onPress={() => this.goToDetail(item)}>
                                <Image source={{ uri: `${url}${item.images[0]}` }} style={productImage} />
                                <Text style={productName}>{item.name.toUpperCase()}</Text>
                                <Text style={productPrice}>{item.price}$</Text>
                            </TouchableOpacity>
                        );
                    }}
                />
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
        backgroundColor: '#ECECEC',
        marginBottom: 15
    },
    productImage: {
        width: productImageWidth,
        height: productImageHeight
    },
    productName: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    productPrice: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#AE85F8'
    }
})