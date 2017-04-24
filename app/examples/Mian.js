/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import BaseComponent from '../base/BaseComponent';
import ActionBar from '../examples/actionbar/ActionBar';
import ListView from '../examples/listview/ListView';
import ActionNavBar from '../common/component/actionbar/ActionNavBar';
import UrlConstant from '../common/constant/UrlConstant';
import HttpUitls from '../common/utils/HttpUitls';

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
export default class Mian extends BaseComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this._login();
    }

    render() {
        return (
            <View style={styles.navContainer}>
                <ActionNavBar tag={1} title="首页首页首页首页首页首页首页奔夲顺害害奔员中为为时是国" navigator={this.props.navigator}/>
                <TouchableOpacity activeOpacity={0.5}
                                  onPress={()=>super.navigatorPush(ActionBar)}>
                    <View style={styles.eixtBtn}>
                        <Text style={{color:'white',fontSize : 15}}>actionBar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}
                                  onPress={()=>super.navigatorPush(ListView)}>
                    <View style={styles.eixtBtn}>
                        <Text style={{color:'white',fontSize : 15}}>ListView</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    _login() {
        let map = new Map()
        map.set('appSystem', 'Android 6.0.1');
        map.set('password', 'OHwueBJ1TjaHhZIUHDMIwQ==');
        map.set('language', 'Hzh_CN');
        map.set('login_id', 'lanting');
        map.set('client_type', 6);
        map.set('company_name', '测试部');
        HttpUitls.postFrom(UrlConstant.USER_LOGIN, map, (set) => this._callback(set))
    }

    _callback(set) {
        if (set != null) {
            if (set.code == '0000') {
                storage.save({
                    key: 'user',
                    rawData: {
                        head_photo: set.data.head_photo,
                        sid: set.data.sid,
                        user: set.data,
                    },
                    expires: null
                });
            }
        }
    }
}

const styles = StyleSheet.create({
        navContainer: {
            flex: 1,
            backgroundColor: '#F3F3F3',
        },
        eixtBtn: {
            height: 40,
            width: width * 0.92,
            backgroundColor: '#47AD1D',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 5,
        },
    }
);

