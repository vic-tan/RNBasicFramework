/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import MianView from './app/examples/Mian';
import {
    AppRegistry,
    StyleSheet,
    Navigator
} from 'react-native';
export default class App extends Component {
    render() {
        return (
            <Navigator initialRoute={{component:MianView}}
                       configureScene={()=>{
                 return Navigator.SceneConfigs.FadeAndroid;
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

