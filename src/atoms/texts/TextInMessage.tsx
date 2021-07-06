import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Functions from '../../Functions';

const styles = StyleSheet.create({
    textView: {
        marginTop: Functions.getDimWidth(50),
        marginBottom: Functions.getDimWidth(50),
        marginHorizontal: Functions.getDimWidth(50),
        flexDirection: 'column',
    },
    text: {
        fontSize: Functions.getDimWidth(28),
    },
    textDate: {
        alignSelf: 'flex-end',
        fontSize: Functions.getDimWidth(35),
    },
});

type TextInMessageProps = {
    text: string;
    textDate: string;
    style: StyleSheet.Styles;
};

const TextInMessage: React.FunctionComponent<TextInMessageProps> = props => {
    const { text = '', textDate = '', style } = props;
    return (
        <View style={styles.textView}>
            <Text style={[styles.text, style]}>{text}</Text>
            <Text style={[styles.textDate, style]}>{textDate}</Text>
        </View>
    );
};

export default TextInMessage;
