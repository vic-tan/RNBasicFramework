/**
 * 状态栏基类，标准类型，只带一个返回和一个标题
 * Created by tanlifei on 2017/3/3.
 */
import React, {Component} from 'react';
import BaseComponent from '../../../base/BaseComponent';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Image,
    StatusBar,
    View,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';
var {width, height} = Dimensions.get('window');
var nav_back = require('../../../../assets/img/nav_back.png');
var titleWidth = width * 0.5;
var titleMargin = (width - titleWidth) * 0.5;


export default class BaseActionNavBar extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            title: '',//标题
            tag: 1,
            imgOne: '',
            imgTwo: '',
        };
    }


    render() {
        return (
            <View style={styles.navContainer}>
                <StatusBar hidden={false} backgroundColor='#47AD1D'/>
                <View style={styles.layout}>
                    {this.renderNavBarSelect()}
                </View>
            </View>
        );
    }

    renderNavBarSelect() {
        switch (this.props.tag) {
            case 1:
                return (this.renderNavBarStandard());
            case 2:
                return (this.renderNavBarImgOne());
            case 3:
                return (this.renderNavBarImgTwo());

        }
    }

    renderNavBarStandard() {
        return (
            <View style={styles.layotView}>
                <TouchableOpacity activeOpacity={0.5} onPress={()=>super.navigatorPop()}>
                    <Image source={nav_back} style={styles.back}/>
                </TouchableOpacity>
                <View style={styles.titleLoyout}>
                    <Text style={styles.title} numberOfLines={1}>{this.props.title}</Text>
                </View>
            </View>
        );
    }

    renderNavBarImgOne() {
        return (
            <View style={styles.layotView}>
                <TouchableOpacity activeOpacity={0.5} onPress={()=>super.navigatorPop()}>
                    <Image source={nav_back} style={styles.back}/>
                </TouchableOpacity>
                <View style={styles.titleLoyout}>
                    <Text style={styles.title} numberOfLines={1}>{this.props.title}</Text>
                </View>
                <View style={styles.imgOneLayout}>
                    <TouchableOpacity activeOpacity={0.5} onPress={()=>this.callBtnOne(1)}>
                        <Image source={this.props.imgOne} style={styles.imgOne}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    renderNavBarImgTwo() {
        return (
            <View style={styles.layotView}>
                <TouchableOpacity activeOpacity={0.5} onPress={()=>super.navigatorPop()}>
                    <Image source={nav_back} style={styles.back}/>
                </TouchableOpacity>
                <View style={styles.titleLoyout}>
                    <Text style={styles.title} numberOfLines={1}>{this.props.title}</Text>
                </View>
                <View style={styles.imgOneLayout}>
                    <View style={styles.imgLayotView}>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>this.callBtnOne(1)}>
                            <Image source={this.props.imgOne} style={styles.imgOne}/>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.5} onPress={()=>this.callBtnOne(2)}>
                            <Image source={this.props.imgTwo} style={styles.imgOne}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    callBtnOne(tag) {
        this.props.callbackBtn(tag);
    }

}


const styles = StyleSheet.create({
        navContainer: {
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        layout: {
            backgroundColor: '#47AD1D',
        },
        layotView: {
            height: 48,
            marginTop: Platform.OS == 'ios' ? 20 : 0,
            width: width,
            flexDirection: 'row',
            alignItems: 'center',
        },
        back: {
            width: 50,
            height: 40,
            paddingLeft: 25,
            paddingRight: 25,
        },
        titleLoyout: {
            width: titleWidth,
            marginLeft: titleMargin,
            marginRight: titleMargin,
            position: 'absolute',
            top: 12.5,
            alignItems: 'center',

        },
        title: {
            fontSize: 17,
            color: 'white',
            alignSelf: 'center',
        },

        imgOneLayout: {
            position: 'absolute',
            right: 0,
            alignItems: 'flex-end',
        },
        imgLayotView: {
            marginRight: 8,
            flexDirection: 'row',
            alignItems: 'center',
        },
        imgOne: {
            width: 45,
            height: 48,
        },
    }
);

