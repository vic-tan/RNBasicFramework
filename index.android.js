/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './app'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class RNBasicFramework extends Component {
  render() {
    return (
      <App/>
    );
  }
}
AppRegistry.registerComponent('RNBasicFramework', () => RNBasicFramework);
