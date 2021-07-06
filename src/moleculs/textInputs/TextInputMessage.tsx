import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

type TextInputProps = {
    // @ts-ignore
    styleView: StyleSheet.Styles;
    // @ts-ignore
    styleInput: StyleSheet.Styles;
    onContentSize: any;
    onChangeText: (text: string) => void;
};

const TextInputMessage: React.FunctionComponent<TextInputProps> = props => {
    const { styleView, styleInput, onContentSize, onChangeText } = props;
    return (
        <View style={styleView}>
            <TextInput
                style={styleInput}
                multiline={true}
                numberOfLines={1}
                placeholder={'Сообщения'}
                onContentSizeChange={height => {
                    onContentSize(height);
                }}
                onChangeText={text => {
                    onChangeText(text);
                }}
            />
        </View>
    );
};

export default TextInputMessage;
