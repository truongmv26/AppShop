/** @format */
import { StatusBar } from 'react-native';
import ChangeInfo from './changeInfo/ChangeInfo';
import Authentication from './authentication/Authentication';
import Main from './main/Main';
import OrderHistory from './orderHistory/OrderHistory';
import { createStackNavigator } from 'react-navigation';

StatusBar.setHidden(true);

const App = createStackNavigator({
    Main: {screen: Main},
    Authentication: {screen: Authentication},
    ChangeInfo: {screen: ChangeInfo},
    OrderHistory: {screen: OrderHistory},
})

export default App;