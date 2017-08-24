import React, { Component, PropTypes } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Byline from './Byline';
import AppText from './Content';
import Thumbnail from './Thumnails';
import * as globalStyles from '../public/css/main';

export default class NewsItem extends Component {
    render() {
        const {
            style,
            imageUrl,
            title,
            author,
            location,
            description,
            onPress
    } = this.props;
        const accentColor = globalStyles.ACCENT_COLORS[
            this.props.index % globalStyles.ACCENT_COLORS.length
        ];
        return (
            <TouchableOpacity
                style={style}
                onPress={onPress}
            >
                <View>
                    <Thumbnail
                        url={imageUrl}
                        titleText={title}
                        accentColor={accentColor}
                        style={styles.thumbnail}
                    />
                    <View style={styles.content}>
                        <Byline
                            author={author}
                            location={location}
                        />
                        <AppText>
                            {description}
                        </AppText>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    thumbnail: {
        marginBottom: 5
    },
    content: {
        paddingHorizontal: 5
    }
});
