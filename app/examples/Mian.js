/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    View,
    Navigator,
    StatusBar,
    Dimensions,
    Text,
    AsyncStorage
} from 'react-native';


export default class Mian extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Dfdfd</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        text: {
            marginTop: 80,
            marginBottom: 10
        },

    }
);

