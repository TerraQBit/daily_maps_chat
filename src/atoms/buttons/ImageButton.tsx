import React from 'react';
import { StyleSheet, View } from 'react-native';

type ImageContainerProps = {
    style: StyleSheet.Styles;
    children: object;
};

const ImageButton: React.FunctionComponent<ImageContainerProps> = props => {
    const { style, children } = props;
    return <View style={style}>{children}</View>;
};

export default ImageButton;
