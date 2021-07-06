import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GLOBAL_COLORS } from '../../colors';

const styles = StyleSheet.create({
    textView: {
        width: 'auto',
    },
    text: {
        fontWeight: 'bold',
        color: GLOBAL_COLORS.WHITE,
    },
});

type NameTextProps = {
    text: string;
    fontSize: number;
    height: number;
};

const AvatarText: React.FunctionComponent<NameTextProps> = props => {
    const { text = '', fontSize, height } = props;
    return (
        <View style={[styles.textView, { height }]}>
            <Text style={[styles.text, { fontSize }]}>{text}</Text>
        </View>
    );
};

export default AvatarText;
