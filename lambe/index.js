// import {AppRegistry} from 'react-native';
// import Feed from './src/screens/Feed';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => Feed);

import 'react-native-gesture-handler'; 
import {AppRegistry} from 'react-native';
import Navigator from './src/Navigator'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigator);