import React, { useEffect, useState } from 'react';
import { Image, Platform, StatusBar, StyleSheet, View } from 'react-native';
import ChatPanel from './src/organisms/ChatPanel';
import Chat from './src/organisms/Chat';
import { GLOBAL_COLORS } from './src/colors';
import BackButton from './src/atoms/buttons/BackButton';
import Functions from './src/Functions';
import AvatarImageContainer from './src/moleculs/containers/imagesContainers/AvatarImageContainer';
import AvatarTextContainer from './src/moleculs/containers/textContainers/AvatarTextContainer';
import AvatarText from './src/atoms/texts/AvatarText';

const styles = StyleSheet.create({
    chatPanelView: {
        justifyContent: 'flex-end',
        flex: 10,
        overflow: 'hidden',
        backgroundColor: GLOBAL_COLORS.WHITE,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
    statusBar: {
        backgroundColor: GLOBAL_COLORS.WHITE,
    },
    mainView: {
        flex: 1,
        backgroundColor: GLOBAL_COLORS.MESSAGE_BACKGROUND_COLOR,
    },
    headerView: {
        height: Functions.getDimHeight(11),
        alignItems: 'center',
        flexDirection: 'row',
    },
    imageGoBack: {
        height: Functions.getDimWidth(13),
        width: Functions.getDimWidth(13),
    },
    textView: {
        flex: 7,
        justifyContent: 'center',
    },
    avatar: {
        height: Functions.getDimHeight(15),
        width: Functions.getDimHeight(15),
        borderRadius: 40,
    },
});

const App: React.FunctionComponent = () => {
    const [platform, setPlatform] = useState('');
    const onPress = () => {
        console.log('you clicked on back button');
    };
    useEffect(() => {
        if (Platform.OS === 'android') {
            setPlatform('android');
        } else {
            setPlatform('ios');
        }
    }, [platform]);
    return (
        <>
            <View style={styles.mainView}>
                <StatusBar backgroundColor={GLOBAL_COLORS.MESSAGE_BACKGROUND_COLOR} barStyle={'light-content'} />
                <View style={styles.headerView}>
                    <BackButton
                        onPress={() => {
                            onPress();
                        }}
                    >
                        <Image
                            source={require('./src/moleculs/images/arrow_go_back_ios_version.png')}
                            style={styles.imageGoBack}
                        />
                    </BackButton>
                    <AvatarImageContainer>
                        <Image source={require('./src/moleculs/images/girl.png')} style={styles.avatar} />
                    </AvatarImageContainer>
                    <AvatarTextContainer>
                        <AvatarText
                            text={'Kyle Saunders'}
                            fontSize={Functions.getDimWidth(20)}
                            height={Functions.getDimWidth(13)}
                        />
                        <AvatarText
                            text={'online'}
                            fontSize={Functions.getDimWidth(40)}
                            height={Functions.getDimWidth(22)}
                        />
                    </AvatarTextContainer>
                </View>
                <View style={styles.chatPanelView}>
                    <Chat platform={platform} />
                    <ChatPanel platform={platform} />
                </View>
            </View>
        </>
    );
};

export default App;
