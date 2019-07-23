/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Router from './router';
import Home from './homepage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
