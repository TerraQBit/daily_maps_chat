import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    textContainer: {
        flex: 7,
        justifyContent: 'center',
    },
});

const TextContainer: React.FunctionComponent<TextContainerProps> = props => {
    const { children } = props;
    return <View style={styles.textContainer}>{children}</View>;
};

export default TextContainer;
