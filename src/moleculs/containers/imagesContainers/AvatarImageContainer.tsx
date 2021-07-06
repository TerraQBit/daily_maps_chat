import React from 'react';
import { StyleSheet, View } from 'react-native';
import Functions from '../../../Functions';

const styles = StyleSheet.create({
    messageContainer: {
        width: Functions.getDimHeight(13),
        height: Functions.getDimHeight(13),
        backgroundColor: '#fff',
        borderRadius: 33,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
});

const AvatarImageContainer: React.FunctionComponent = props => {
    const { children } = props;
    return (
        <View style={{ flex: 2 }}>
            <View style={styles.messageContainer}>{children}</View>
        </View>
    );
};

export default AvatarImageContainer;
