import React, { Component } from 'react';
import Menu from './Menu';
import Shop from './shop/Shop';
import Drawer from 'react-native-drawer';
import checkLogin from '../../api/checkLogin';
import getToken from '../../api/getToken';
import global from '../global';

export default class Main extends Component {

    componentDidMount() {
        getToken().then(token => checkLogin(token))
        .then(res => global.onSignIn(res.user))
        .catch(error => {
            console.log(error);
        })
    }

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
