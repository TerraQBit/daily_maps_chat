import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Functions from '../../Functions';

type BackButtonProps = {
    onPress: any;
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        paddingLeft: Functions.getDimWidth(30),
        height: Functions.getDimWidth(13),
        width: Functions.getDimWidth(13),
    },
});

const BackButton: React.FunctionComponent<BackButtonProps> = props => {
    const { onPress, children } = props;
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            {children}
        </TouchableOpacity>
    );
};

export default BackButton;
