/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import BaseComponent from '../../base/BaseComponent';
import ActionNavBar from '../../common/component/actionbar/ActionNavBar';
import {
    AppRegistry,
    StyleSheet,
    Image,
    View,
    Navigator,
    StatusBar,
    Dimensions,
    Text,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

var {width, height} = Dimensions.get('window');
export default class ActionBarOne extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.navContainer}>
                <ActionNavBar
                    tag={1}
                    title="首页首页首页首页首页首页首页奔夲顺害害奔员中为为时是国"
                    navigator={this.props.navigator}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        navContainer: {
            flex: 1,
            backgroundColor: '#F3F3F3',
        },
    }
);

