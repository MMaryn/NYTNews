import React, { Component } from "react";
import { Text } from "react-native";

import * as globalStyle from "../public/css/main";

const Content = ({ children, style, ...rest }) => (
    <Text style={[globalStyle.COMMON_STYLES.text, style]} {...rest}>
        {children}
    </Text>
);

export default Content;
