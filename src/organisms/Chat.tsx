import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import MessageContainer from '../moleculs/containers/messages/MessageContainer';
import { MESSAGES_COLORS } from '../colors';

const styles = StyleSheet.create({
    chat: {
        flex: 1,
    },
});

type Message = {
    text: string;
    owned: boolean;
    time: string;
};
type ChatProps = {
    platform: string;
};
const testMessages: Array<Message> = [
    {
        text:
            'Делаю shot как Лэмпард, взял победу как Бэкхем (Victoria)\n' +
            'Ты-ты улетаешь как Хэнкок, первый раз попав в Bando (В bando)\n' +
            'Пиздите как моя ex-hoe, кепки на вас будто Kangol (Фу-у, lean, lean)\n' +
            'На-на-набили слухами backpack, вам доносится эхо (Алло?)\n',
        owned: true,
        time: '9:35',
    },
    {
        text: 'А',
        owned: true,
        time: '9:35',
    },
    {
        text:
            'Я с улиц Иркутска — поверь мне, тут тебя кинут на деньги, ха (Вэй-вэй-вэй)\n' +
            'Порежут-порежут на семплы, не смейся, ты не на stand up, а (Чу-у, а-ха)',
        owned: false,
        time: '10:35',
    },
    {
        text:
            'А-а-алло-алло, покури ствол extendo, а (Алло-алло)\n' +
            'Куш пуш— Куш пушистый как gizmo, а (Gizmo)\n' +
            'Дел-дел-делаю пресс, как фитнесс, я пропал, будто призрак (Ghosty)\n' +
            'Сло-словил этот стресс, OBLA работал на износ (Я работал)',
        owned: true,
        time: '10:35',
    },
    {
        text:
            'Со-соблюдай со мной distance, на бите я делаю бизнес (Без камер, а)\n' +
            '\n' +
            'Сделал бабки, как скаммер, палят меня, будто сканер (Скан, скан)\n' +
            'Мувы бо— Мувы бо— Мувы большие, но я двигаюсь так, что пропал с этих камер',
        owned: false,
        time: '10:40',
    },
    {
        text: 'Ты крыса, ты сдал их, но это— но это был не экзамен (Snitch)',
        owned: true,
        time: '10:45',
    },
];

const Chat: React.FunctionComponent<ChatProps> = () => {
    const renderItem = (item: Message) => (
        <View style={{ flex: 1, alignItems: item.owned ? 'flex-end' : 'flex-start', overflow: 'hidden' }}>
            <MessageContainer
                date={item.time}
                message={item.text}
                textStyle={{
                    color: item.owned
                        ? MESSAGES_COLORS.PERSONAL_MESSAGE_TEXT_COLOR
                        : MESSAGES_COLORS.FRIEND_MESSAGE_TEXT_COLOR,
                }}
                containerStyle={{
                    backgroundColor: item.owned
                        ? MESSAGES_COLORS.PERSONAL_MESSAGE_BACKGROUND_COLOR
                        : MESSAGES_COLORS.FRIEND_MESSAGE_BACKGROUND_COLOR,
                }}
            />
        </View>
    );
    return (
        <View style={styles.chat}>
            <FlatList
                inverted={true}
                data={testMessages}
                keyExtractor={(_, index) => index + ''}
                renderItem={({ item }) => renderItem(item)}
                style={{ flex: 1 }}
            />
        </View>
    );
};

export default Chat;
