import React, { Component } from 'react';
import { View, Text, FlatList, ImageBackground, Image, TouchableHighlight } from 'react-native';

import { connect } from 'react-redux';
import { onFetchPhotos } from '../actions/fetch';

import styles from '../theme/styles'


class List extends Component {
    constructor(props) {
        super(props);
    }

    // uploading pictures into the application from API
    componentDidMount() {
        this.props.FetchPhotos;
    }

    _renderItem = ({ item }) => {
        let { imageFormatMini, authorViewer, authorName, authorAvatar, transparentGrayBackground } = styles;

        return (
            <View>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Photo', {
                    URL: item.urls.regular,
                })}>
                    <ImageBackground
                        source={
                            {
                                uri: item.urls.thumb
                            }
                        }
                        style={imageFormatMini}
                    >
                        <View style={authorViewer}>
                            <Text style={transparentGrayBackground}></Text>
                            <Image
                                source={
                                    {
                                        uri: item.user.profile_image.small
                                    }
                                }

                                style={authorAvatar}
                            />
                            <Text style={authorName}>{item.user.name}</Text>
                        </View>
                    </ImageBackground>
                </TouchableHighlight>
            </View>
        )
    }

    render() {
        let { data } = this.props.fetchReducer;

        return (
            <View>
                <FlatList
                    data={data}
                    renderItem={this._renderItem}
                    numColumns={2}
                />
            </View>
        )
    }
};

const mapStateToProps = (state) => ({
    fetchReducer: state.fetchReducer,
});

const mapDispatchToProps = (dispatch) => ({
    FetchPhotos: dispatch(onFetchPhotos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);