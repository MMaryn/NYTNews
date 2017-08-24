import React, { Component } from "react";
import {
    StyleSheet,
    NavigationExperimental
} from "react-native";

import * as globalStyles from "../public/css/main";

const { CardStack } = NavigationExperimental;

export default class Nav extends Component {
    constructor(props) {
        super(props);

        this.renderScene = this.renderScene.bind(this);
    }

    renderScene(sceneProps) {
        const route = sceneProps.scene.route;
        return (
            <route
                {...route.props}
                push={this.props.push}
                pop={this.props.pop}
            />
        )
    };

    render() {
        return (
            <CardStack
                onNavigateBack={this.props.pop}
                navigationState={this.props.navigation}
                renderScene={this.renderScene}
                style={styles.cardStack}
            />
        );
    }
};

const styles = StyleSheet.create({
    cardStack: {
        flex: 1
    }
});