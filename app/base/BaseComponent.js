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

    navigatorPush(component) {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({component: component});
        }
    }

    navigatorPop() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
}
AppRegistry.registerComponent('BaseComponent', () => BaseComponent);
