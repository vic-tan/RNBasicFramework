/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import ListFooterRefreshView from './ListFooterRefreshView';
import ListRefreshErrorView from './ListRefreshErrorView';
import ListRefreshHttpUitls from './ListRefreshHttpUitls';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Image,
    StatusBar,
    View,
    TextInput,
    Text,
    ActivityIndicator,
    ListView,
    Platform
} from 'react-native';
import {PullList} from 'react-native-pull';
var {width, height} = Dimensions.get('window');
var ToastUtils = require('../../utils/ToastUtils');
export default class ListRefreshView extends Component {
    constructor(props) {
        super(props);
        this.dataSource = [];
        this.refreshMap = new Map();
        this.state = {
            sid: '',
            map: new Map(),
            pageNumber: 1,
            footerState: ListRefreshHttpUitls.footerStateHide(),//0:表示无， 1加载中 2,已没有更多了
            isFirstLoading: ListRefreshHttpUitls.footerStateIsfirstLoading(),//true ,第一次加载，false,加载更多
            parentViewState: ListRefreshErrorView.parentViewStateShow(),
            childViewState: ListRefreshErrorView.childViewStateLoading(),
            list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.dataSource),
        };
    }

    componentDidMount() {
        if (this.props.map != null) {
            this.props.map.forEach((value, index) => {//value为值，index实际上就是key
                this.refreshMap.set(index, value);
            });
        }
        storage.load({
            key: 'user',
        }).then(ret => {
            this.setState({
                sid: ret.sid,
                isFirstLoading: ListRefreshHttpUitls.footerStateIsfirstLoading(),
            });
        }).catch(err => {
        });
        this.onStartRequest();
    }

    againRefresh() {
        this.onStartRequest();
    }

    onStartRequest() {
        this.request(ListRefreshHttpUitls.refreshStateStart(), (map, set) => {
            if (set == null) {
                this.setPrompt(ListRefreshErrorView.parentViewStateShow(), ListRefreshErrorView.childViewStateNetWordError());
            } else if (set.code !== '0000') {
                this.setPrompt(ListRefreshErrorView.parentViewStateShow(), ListRefreshErrorView.childViewStateLoadingError());
            } else if (set.data.list.length <= 0) {
                this.setPrompt(ListRefreshErrorView.parentViewStateShow(), ListRefreshErrorView.childViewStateNoData());
            } else {
                this.setPrompt(ListRefreshErrorView.parentViewStateHide(), ListRefreshErrorView.childViewStateHide());
            }
        })
    }


    onPullRelease(resolve) {
        this.request(ListRefreshHttpUitls.refreshStatePull(), () => {
            resolve();
        })
    }

    loadMore() {
        this.request(ListRefreshHttpUitls.refreshStateMore(), (map, set) => {
        });
    }


    setPrompt(parentViewState, childViewState) {
        this.setState({
            parentViewState: parentViewState,
            childViewState: childViewState,
        });
    }

    /**
     * @param isPullRelease  0.表示默认第一次加载 1、为下拉，2、 加载更多
     * @param callback
     */
    request(isPullRelease, callback) {
        if (isPullRelease == ListRefreshHttpUitls.refreshStateMore() && (this.state.isFirstLoading || this.state.footerState == 0 || this.state.footerState == 2)) {
            return;
        }
        this.refreshMap.set('pageNumber', isPullRelease <= 1 ? 1 : this.state.pageNumber);
        ListRefreshHttpUitls.pullRequest(this.props.url, this.refreshMap, (map, set) => {
            this.requestOk(isPullRelease, map, set, callback);
        });
    }

    requestOk(isPullRelease, map, set, callback) {
        if (set == null) {
            if (isPullRelease == ListRefreshHttpUitls.refreshStatePull() || isPullRelease == ListRefreshHttpUitls.refreshStateStart()) {
            }
            callback(map, set);
            return
        }
        if (set.code == '0000') {
            if (isPullRelease == ListRefreshHttpUitls.refreshStatePull() || isPullRelease == ListRefreshHttpUitls.refreshStateStart()) {
                this.dataSource = [];
            }
            for (var i = 0; i < set.data.list.length; i++) {
                this.dataSource.push(set.data.list[i]);
            }
            this.setState({
                list: this.state.list.cloneWithRows(this.dataSource),
                isFirstLoading: ListRefreshHttpUitls.getIsFirstLoading(map, set),
                footerState: ListRefreshHttpUitls.getFooterState(map, set),
                pageNumber: ListRefreshHttpUitls.getPageNumber(isPullRelease, map, set),
            });
        } else {
            if (isPullRelease == ListRefreshHttpUitls.refreshStatePull()) {
                ToastUtils.toastShort(set.msg);//上拉下拉有异常只提示就行，不用像第一次进来显示不同界面
            } else if (isPullRelease == ListRefreshHttpUitls.refreshStateMore()) {
                ToastUtils.toastShort(set.msg);
                this.setState({
                    footerState: ListRefreshHttpUitls.footerStateError(),
                });
            }
        }
        callback(map, set);
    }


    render() {
        return (
            <View style={styles.container}>
                {this.showView()}
            </View>
        );
    }


    showView() {
        if (this.state.parentViewState) {
            return (
                <ListRefreshErrorView parentViewState={this.state.parentViewState}
                                      childViewState={this.state.childViewState}
                                      callbackParent={this.againRefresh.bind(this)}/>)
        } else {
            return (
                <PullList
                    dataSource={this.state.list}
                    renderRow={this.childRow.bind(this)}
                    onPullRelease={this.onPullRelease.bind(this)}
                    onEndReached={this.loadMore.bind(this)}
                    onEndReachedThreshold={10}
                    enableEmptySections={true}
                    removeClippedSubviews={false}
                    renderFooter={this.renderFooter.bind(this)}
                />
            )
        }

    }


    childRow(rowData, sectionID, rowID, highlightRow) {
        return this.props.callbackParentRow(rowData, sectionID, rowID, highlightRow);
    }

    renderFooter() {
        return (
            <ListFooterRefreshView isFirstLoading={this.state.isFirstLoading} footerState={this.state.footerState}/>
        );

    }


}

const styles = StyleSheet.create({
        container: {
            flex: 1,
        },

    }
);
