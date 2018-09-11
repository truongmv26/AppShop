import React, { Component } from 'react';
import Menu from './Menu';
import Shop from './shop/Shop';
import Drawer from 'react-native-drawer';

export default class Main extends Component {

    closeControlPanel = () => {
        this.drawer.close();
    };
    openControlPanel = () => {
        this.drawer.open();
    };

    render() {
        const { navigation } = this.props;
        return (
            <Drawer
                ref={(ref) => {this.drawer = ref}}
                content={<Menu navigation={navigation}/>}
                openDrawerOffset={0.3}
                tapToClose={true}
            >
                <Shop open={this.openControlPanel.bind(this)} navigation={navigation} />
            </Drawer>
        );
    }
}
