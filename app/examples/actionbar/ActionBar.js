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
import ActionBarOne from './ActionBarOne';
import ActionBarTwo from './ActionBarTwo';
import ActionBarThere from './ActionBarThere';
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
export default class ActionBar extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.navContainer}>
                <ActionNavBar tag={1} title="ActionBar" navigator={this.props.navigator}/>
                <TouchableOpacity activeOpacity={0.5}
                                  onPress={()=>super.navigatorPush(ActionBarOne)}>
                    <View style={styles.btn}>
                        <Text style={{color:'white',fontSize : 15}}>标准</Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}
                                  onPress={()=>super.navigatorPush(ActionBarTwo)}>
                    <View style={styles.btn}>
                        <Text style={{color:'white',fontSize : 15}}>带一个按钮</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}
                                  onPress={()=>super.navigatorPush(ActionBarThere)}>
                    <View style={styles.btn}>
                        <Text style={{color:'white',fontSize : 15}}>带二个按钮</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }


}

const styles = StyleSheet.create({
        navContainer: {
            flex: 1,
            backgroundColor: '#F3F3F3',
        },
        btn: {
            height: 40,
            width: width * 0.92,
            backgroundColor: '#47AD1D',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 10,
            borderRadius: 5,
        },
    }
);

