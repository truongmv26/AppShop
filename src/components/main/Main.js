import React, { Component } from 'react';
// import { View, Text, Image, TouchableHighlight } from 'react-native';
import Menu from './Menu';
import Shop from './shop/Shop';
import Drawer from 'react-native-drawer';

export default class Main extends Component {
    static navigationOptions = {
        header: null,
    };

    closeControlPanel = () => {
        this.drawer.close();
    };
    openControlPanel = () => {
        this.drawer.open();
    };

    componentDidMount() {
        this.openControlPanel()
    }

    render() {
        const { navigation } = this.props;
        return (
            <Drawer
                ref={(ref) => {this.drawer = ref}}
                content={<Menu navigation={navigation}/>}
                openDrawerOffset={0.3}
                tapToClose={true}
            >
                <Shop open={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }
}
