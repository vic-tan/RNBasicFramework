import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Navigator,
    View
} from 'react-native';
export default class BaseComponent extends Component {
    constructor(props) {
        super(props);
    }

    fullName() {
        return 'test'
    }
}
AppRegistry.registerComponent('BaseComponent', () => BaseComponent);
