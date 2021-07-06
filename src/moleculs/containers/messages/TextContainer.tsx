import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextInMessage from '../../../atoms/texts/TextInMessage';

type TextContainerProps = {
    messageText: string;
    dateText: string;
    style: StyleSheet.Styles;
    containerStyle: StyleSheet.Styles;
};

const styles = StyleSheet.create({
    textContainer: {
        height: 'auto',
        width: 'auto',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
});

const TextContainer: React.FunctionComponent<TextContainerProps> = props => {
    const { dateText = '', messageText = '', style, containerStyle } = props;
    return (
        <View style={[styles.textContainer, containerStyle]}>
            <TextInMessage text={messageText} style={style} textDate={dateText} />
        </View>
    );
};

export default TextContainer;
