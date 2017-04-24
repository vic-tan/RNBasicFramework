/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import MianView from './app/examples/Mian';
import Storage from 'react-native-storage';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    AsyncStorage
} from 'react-native';
var storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
})
global.storage = storage;
export default class App extends Component {
    render() {
        return (
            <Navigator initialRoute={{component:MianView}}
                       configureScene={()=>{
                 return Navigator.SceneConfigs.PushFromRight;
             }}
                       renderScene={(route,navigator) =>{
                let Component = route.component;
                return <Component {...route.passProps} navigator={navigator}/>
            }}>
                <MianView />
            </Navigator>
        );
    }
}

