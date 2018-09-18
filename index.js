/** @format */

import { AppRegistry, StatusBar, StyleSheet } from 'react-native';
import { name as appName } from './app.json';
import App from './src/components/App';

AppRegistry.registerComponent(appName, () => App);