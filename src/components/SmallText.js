import React from "react";
import {
    StyleSheet,
    Text
} from "react-native";

import Content from "./Content";

const SmallText = ({ children, style, ...rest }) => (
    <Content style={[styles.small, style]} {...rest}>
        {children}
    </Content>
);

const styles = StyleSheet.create({
    small: {
        fontSize: 11
    }
});

export default SmallText; 
