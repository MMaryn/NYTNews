import React from "react";
import {
    Image,
    View,
    StyleSheet
} from "react-native";

import Title from "./Title";

const Thumnail = ({ style, titleText, accentColor, url }) => {
    const imageStyle = {
        backgroundColor: `${accentColor}77`
    };

    const TitleComponent = <Title>{titleText}</Title>

    return (
        <View style={[styles.container, { borderColor: accentColor }, style]}>
            {url.length > 0 ? (
                <Image
                    style={[styles.image, imageStyle]}
                    source={{
                        uri: url
                    }}
                >
                    {TitleComponent}
                </Image>
            ) : (
                    <View
                        style={[styles.image, imageStyle]}
                    >
                        {TitleComponent}
                    </View>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 3,
        borderStyle: "solid"
    },
    image: {
        height: 300,
        justifyContent: "flex-end"
    },
    title: {
        padding: 5
    }
});

export default Thumnail;
