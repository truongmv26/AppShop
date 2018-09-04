/** @format */

import { StatusBar } from 'react-native';
import Authentication from './authentication/Authentication';
import ChangeInfo from './changeInfo/ChangeInfo'; 
import Main from './main/Main'; 
import OrderHistory from './orderHistory/OrderHistory'; 
import { TabNavigator } from 'react-navigation';
// import { MainScreen, ChangeInfoScreen, AuthenticationScreen, OrderHistoryScreen } from './src/screenNames';

StatusBar.setHidden(true);


const routeConfigs = {
    MainScreen: {
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
const tabNavigatorConfig = {    
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'blue',
        labelStyle: {
            fontSize: 13,
        },
        style: {
            backgroundColor: 'lightgray',
            padding: -10
        },   
    },    
};
const App = TabNavigator(routeConfigs, tabNavigatorConfig);
export default App;
