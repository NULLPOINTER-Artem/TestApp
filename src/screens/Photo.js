import React, { Component } from 'react';
import { View, Image } from 'react-native';

import styles from '../theme/styles'

class Photo extends Component {
    render() {
        let { frame, imageFormatFull } = styles;

        return (
            <View style={frame}>
                <Image
                    source={{ uri: this.props.route.params.URL }}
                    resizeMode={'contain'}
                    style={imageFormatFull}
                />
            </View>
        )
    }
};

export default Photo;