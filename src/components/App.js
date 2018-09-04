/** @format */

import { StatusBar, Dimensions } from 'react-native';
import Authentication from './authentication/Authentication';
import ChangeInfo from './changeInfo/ChangeInfo'; 
import Main from './main/Main'; 
import OrderHistory from './orderHistory/OrderHistory'; 
import { DrawerNavigator } from 'react-navigation';
import { MainScreen, ChangeInfoScreen, AuthenticationScreen, OrderHistoryScreen } from '../screenNames';

StatusBar.setHidden(true);
var width = Dimensions.get('window').width
var height = Dimensions.get('window').height

const routeConfigs = {
    MainScreen: {
        path: '/',
        screen: Main,
    },
    ChangeInfoScreen: {
        screen: ChangeInfo,
    },
    AuthenticationScreen: {
        screen: Authentication,
    },
    OrderHistoryScreen: {
        screen: OrderHistory,
    },
};
let drawNavigatorConfig = {
    initialRouteName: MainScreen,
    drawerWidth: width/2,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerBackgroundColor: '#49B79C',
    contentOptions: {
        activeTintColor: 'red'
    },
};
const App = DrawerNavigator(routeConfigs, drawNavigatorConfig);
export default App;
