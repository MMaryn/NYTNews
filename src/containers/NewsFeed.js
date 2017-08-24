import React, { Component } from 'react';
import {
    ListView,
    StyleSheet,
    View,
    Modal,
    TouchableOpacity,
    WebView,
    RefreshControl,
    ActivityIndicator,
    NetInfo,
} from 'react-native';

import NewsItem from '../components/NewsItem';
import SmallText from '../components/SmallText';
import * as globalStyles from '../public/css/main';
import Content from "../components/Content";

export default class NewsFeed extends Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1.title !== row2.title
        });
        this.state = {
            dataSource: this.ds.cloneWithRows(props.news),
            initialLoading: true,
            modalVisible: false,
            refreshing: false,
            connect: true
        };

        this.renderRow = this.renderRow.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
        this.onModalOpen = this.onModalOpen.bind(this);
        this.refresh = this.refresh.bind(this);
        this.handleConnectivityChange = this.handleConnectivityChange.bind(this);
    }

    componentWillMount() {
        NetInfo.isConnected.addEventListener("change",
            this.handleConnectivityChange);
        this.refresh();
    }

    componentWillUnMount() {
        NetInfo.isConnected.addEventListener("change",
            this.handleConnectivityChange);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.news),
            initialLoading: false
        });
    }

    handleConnectivityChange(isConnected) {
        this.setState({
            connect: isConnected
        });
        if (isConnected) {
            this.refresh();
        }
    }

    onModalClose() {
        this.setState({
            modalVisible: false,
            modalUrl: undefined
        });
    }

    onModalOpen(url) {
        this.setState({
            modalVisible: true,
            modalUrl: url
        });
    }

    refresh() {
        if (this.props.loadNews) {
            this.props.loadNews();
        }
    }

    renderModal() {
        return (
            <Modal
                animationType="slide"
                visible={this.state.modalVisible}
                onRequestClose={this.onModalClose}
            >
                <View style={styles.modalContent}>
                    <TouchableOpacity
                        onPress={this.onModalClose}
                        style={styles.closeButton}
                    >
                        <SmallText>Close</SmallText>
                    </TouchableOpacity>
                    <WebView
                        scalesPageToFit
                        source={{ uri: this.state.modalUrl }}
                    />
                </View>
            </Modal>
        );
    }

    renderRow(rowData, ...rest) {
        const index = parseInt(rest[1], 10);
        return (
            <NewsItem
                onPress={() => this.onModalOpen(rowData.url)}
                style={styles.newsItem}
                index={index}
                {...rowData}
            />
        );
    }

    render() {
        const {
      listStyles = globalStyles.COMMON_STYLES.pageContainer,
            showLoadingSpinner
    } = this.props;
        const { initialLoading, refreshing, dataSource } = this.state;
        console.log(this.props);

        if (!this.state.connect) {
            return (
                <View>
                    <Content>No Conection</Content>
                </View>
            )
        }

        return (
            (initialLoading && showLoadingSpinner
                ? (
                    <View style={[listStyles, styles.loadingContainer]}>
                        <ActivityIndicator
                            animating
                            size="small"
                            {...this.props}
                        />
                    </View>
                ) : (
                    <View style={styles.container}>
                        <ListView
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={this.refresh}
                                />
                            }
                            enableEmptySections
                            dataSource={dataSource}
                            renderRow={this.renderRow}
                            style={listStyles}
                        />
                        {this.renderModal()}
                    </View>
                )
            )
        );
    }
}


const styles = StyleSheet.create({
    newsItem: {
        marginBottom: 20
    },
    container: {
        flex: 1
    },
    loadingContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 20,
        backgroundColor: globalStyles.BG_COLOR
    },
    closeButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row'
    }
});
