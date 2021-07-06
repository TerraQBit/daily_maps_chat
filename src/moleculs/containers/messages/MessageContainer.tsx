import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextContainer from './TextContainer';
import Functions from '../../../Functions';
import { GLOBAL_COLORS } from '../../../colors';

const styles = StyleSheet.create({
    messageContainer: {
        backgroundColor: GLOBAL_COLORS.WHITE,
        width: '60%',
        height: 'auto',
        paddingVertical: Functions.getDimHeight(50),
        marginHorizontal: Functions.getDimWidth(30),
        alignItems: 'flex-end',
    },
});

type MessageContainerProps = {
    message: string;
    date: string;
    textStyle: StyleSheet.Styles;
    containerStyle: StyleSheet.Styles;
};

const MessageContainer: React.FunctionComponent<MessageContainerProps> = props => {
    const { message = '', date = '', textStyle, containerStyle } = props;
    return (
        <View style={[styles.messageContainer]}>
            <TextContainer messageText={message} dateText={date} style={textStyle} containerStyle={containerStyle} />
        </View>
    );
};

export default MessageContainer;
