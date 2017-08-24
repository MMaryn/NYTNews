import React, { Component } from "react";
import {
    View,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
    Text
} from "react-native";

import Title from "./Title";
import Content from "./Content";
import * as globalStyles from "../public/css/main";

StatusBar.setBarStyle("light-content");

const IntoScreen = ({ push }) => (
    <View style={[globalStyles.COMMON_STYLES.pageContainer,
    styles.container]}>
        <TouchableOpacity
            onPress={() => push("home")}
        >
            <Title>React Native News Reader</Title>
            <Content>Start Reading</Content>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginBottom: 0,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default IntoScreen;