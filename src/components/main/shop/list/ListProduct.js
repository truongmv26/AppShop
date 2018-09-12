import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity,
    StyleSheet, Dimensions, ScrollView,
    Image
} from 'react-native';

import ProductImg from '../../../../media/appIcon/maxi.jpeg';

export default class ListProduct extends Component {

    goBackNavigation() {
        const { navigation } = this.props;
        navigation.goBack();
    }

    goToDetail() {
        const { navigation } = this.props;
        navigation.navigate('Detail');
    }

    render() {

        const {
            container, header, productContainer,
            wrapper, backImage, titleStyle, productInfo,
            productImage, txtDetail, txtColor,
            txtLabel, txtPrice, txtMaterial, lastRow
        } = styles;

        return (
            <View style={container}>
                <View style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBackNavigation.bind(this)}>
                            <Image source={require('../../../../media/appIcon/backList.png')} style={backImage} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>
                            Party Dress
                        </Text>
                        <View style={{ width: 30 }} />
                    </View>
                    <ScrollView>
                        <View style={productContainer}>
                            <Image source={ProductImg} style={productImage} />
                            <View style={productInfo}>
                                <Text style={txtLabel}>Lace Sleeve Si</Text>
                                <Text style={txtPrice}>117$</Text>
                                <Text style={txtMaterial}>Silk</Text>
                                <View style={lastRow}>
                                    <Text style={txtColor}>RoyalBlue</Text>
                                    <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: 'cyan' }} />
                                    <TouchableOpacity onPress={this.goToDetail.bind(this)}>
                                        <Text style={txtDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={productContainer}>
                            <Image source={ProductImg} style={productImage} />
                            <View style={productInfo}>
                                <Text style={txtLabel}>Lace Sleeve Si</Text>
                                <Text style={txtPrice}>117$</Text>
                                <Text style={txtMaterial}>Silk</Text>
                                <View style={lastRow}>
                                    <Text style={txtColor}>RoyalBlue</Text>
                                    <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: 'cyan' }} />
                                    <TouchableOpacity>
                                        <Text style={txtDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={productContainer}>
                            <Image source={ProductImg} style={productImage} />
                            <View style={productInfo}>
                                <Text style={txtLabel}>Lace Sleeve Si</Text>
                                <Text style={txtPrice}>117$</Text>
                                <Text style={txtMaterial}>Silk</Text>
                                <View style={lastRow}>
                                    <Text style={txtColor}>RoyalBlue</Text>
                                    <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: 'cyan' }} />
                                    <TouchableOpacity>
                                        <Text style={txtDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={productContainer}>
                            <Image source={ProductImg} style={productImage} />
                            <View style={productInfo}>
                                <Text style={txtLabel}>Lace Sleeve Si</Text>
                                <Text style={txtPrice}>117$</Text>
                                <Text style={txtMaterial}>Silk</Text>
                                <View style={lastRow}>
                                    <Text style={txtColor}>RoyalBlue</Text>
                                    <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: 'cyan' }} />
                                    <TouchableOpacity>
                                        <Text style={txtDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}
const { height } = Dimensions.get('window');
const imageWidth = Image.resolveAssetSource(ProductImg).width
const imageHeight = Image.resolveAssetSource(ProductImg).height
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8',
        padding: 10
    },
    header: {
        height: height * 50 / 667,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    wrapper: {
        backgroundColor: '#fff',
        paddingHorizontal: 10
    },
    backImage: {
        width: 30,
        height: 30
    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: '#BE225D',
        fontSize: 20
    },
    productContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#FFF',
        borderTopColor: '#C9C9C9',
        padding: 10
    },
    productInfo: {
        flex: 1,
        justifyContent: 'space-between',
        marginLeft: 10
    },
    txtLabel: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#E1BF90'
    },
    txtPrice: {
        fontFamily: 'Avenir',
        color: '#BE225D',
        fontSize: 18
    },
    txtMaterial: {
        fontFamily: 'Avenir',
        fontSize: 16
    },
    lastRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    productImage: {
        width: 90,
        height: 90 * imageHeight / imageWidth
    },
    txtColor: {
        fontFamily: 'Avenir',
        fontSize: 16
    },
    txtDetail: {
        fontFamily: 'Avenir',
        color: '#BE225D',
    }
})

