import React, { Component } from "react";
import {
    View,
    Text,
    Alert,
    Vibration,
    StatusBar,
    ToolbarAndroid,
    TouchableOpacity
} from "react-native";

import ScrollableTabView, { DefaultTabBar } from "react-native-scrollable-tab-view";
import NewsFeedContainer from "../containers/newContainer";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    onActionSelected(position) {
        if (position == 0) {
            showSetting();
        }
    }

    render() {
        StatusBar.setBarStyle("light-content");
        return (
            <ScrollableTabView>
                <NewsFeedContainer tabLabel='NewsFeed' ></NewsFeedContainer>
                <TouchableOpacity tabLabel='Back' onPress={() => this.tabView.goToPage(0)}>
                    <Text>Lets go back!</Text>
                </TouchableOpacity>
            </ScrollableTabView >
        )
    }
};