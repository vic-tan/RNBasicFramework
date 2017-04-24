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
export default class ActionBarTwo extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.navContainer}>
                <ActionNavBar title="首页首页首页首页首页首页首页奔夲顺害害奔员中为为时是国"
                              tag={3}
                              imgOne={require('../../../assets/img/nav_setting.png')}
                              imgTwo={require('../../../assets/img/nav_share.png')}
                              navigator={this.props.navigator}
                              callbackBtn={(tag)=>this.callbackBtn(tag)}/>
            </View>
        );
    }

    callbackBtn(tag){
        alert(tag);
    }
}

const styles = StyleSheet.create({
        navContainer: {
            flex: 1,
            backgroundColor: '#F3F3F3',
        },
    }
);

