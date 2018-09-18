import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');
const url = 'http://192.168.64.2/api/images/type/'

export default class Category extends Component {

    goProductList() {
        const { navigation } = this.props;
        navigation.navigate('List');
    }

    render() {
        const { types } = this.props;
        return (
            <View style={styles.wrapper}>
                <View style={{ flex: 1, paddingTop: 5 }}>
                    <Text style={styles.textStyle}>
                        LIST OF CATEGORIES
                    </Text>
                </View>
                <View style={{ flex: 4, justifyContent: 'flex-end' }}>
                    <Swiper autoplayTimeout={2} autoplay={true}>
                        {types.map(data => {
                            return (
                                <TouchableOpacity onPress={this.goProductList.bind(this)}>
                            <ImageBackground
                                source={{uri: `${url}${data.image}`}}
                                style={styles.imageStyle}
                            >
                                <Text style={styles.textStyle}>{ data.name }</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                            );
                        })}
                        
                        
                    </Swiper>
                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        height: height * 0.33,
        margin: 10,
        marginBottom: 0,
        shadowColor: '#2E272B',
        shadowOffset: { height: 3, width: 0 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    textStyle: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#A7A7A7',
        margin: 10
    },
    imageStyle: {
        width: width - 40,
        height: (width - 40) / 2,
        // marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})