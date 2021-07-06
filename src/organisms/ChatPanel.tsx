import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import ImageButton from '../atoms/buttons/ImageButton';
import TextInputMessage from '../moleculs/textInputs/TextInputMessage';
import Functions from '../Functions';

const size = Functions.getDimWidth(17);

type ChatPanelProps = {
    platform: string;
};

const styles = StyleSheet.create({
    textInputView: {
        flex: 10,
        borderColor: '#F5F5F5',
        height: Functions.getDimWidth(10),
        justifyContent: 'flex-end',
    },
    imageContainer: {
        flex: 1,
        borderColor: '#ffffff',
        marginLeft: Functions.getDimWidth(40),
        paddingBottom: Functions.getDimWidth(40),
        justifyContent: 'flex-end',
    },
    mainView: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textInput: {
        fontSize: 15,
        height: Functions.getDimWidth(10),
        paddingLeft: Functions.getDimWidth(40),
        color: '#292929',
    },
    smileImage: {
        borderColor: '#F5F5F5',
        paddingRight: Functions.getDimWidth(30),
        marginLeft: 0,
    },
    microphoneOrSendMessageImage: {
        marginLeft: 0,
        marginRight: Functions.getDimWidth(30),
    },
});

const ChatPanel: React.FunctionComponent<ChatPanelProps> = props => {
    const { platform } = props;
    const [mainSize, setMainSize] = useState(Dimensions.get('window').width / 9);
    const [stateInput, setStateInput] = useState(true);
    const [message, setMessage] = useState('');
    const platformAndroid = 'android';
    const additionalStyles = StyleSheet.create({
        textInputView: {
            marginHorizontal: platform === platformAndroid ? Functions.getDimWidth(40) : 0,
            marginLeft: platform === platformAndroid ? 0 : Functions.getDimWidth(40),
            borderWidth: platform === platformAndroid ? 0 : 2,
            borderBottomLeftRadius: platform === platformAndroid ? 0 : 20,
            borderTopLeftRadius: platform === platformAndroid ? 0 : 20,
            backgroundColor: platform === platformAndroid ? '#ffffff' : '#F5F5F5',
        },
        imageContainer: {
            borderWidth: platform === platformAndroid ? 0 : 2,
        },
        mainView: {
            marginBottom: platform === platformAndroid ? 0 : Functions.getDimWidth(20),
        },
        smileImage: {
            borderWidth: platform === platformAndroid ? 0 : 2,
            borderBottomRightRadius: platform === platformAndroid ? 0 : 20,
            borderTopRightRadius: platform === platformAndroid ? 0 : 20,
            backgroundColor: platform === platformAndroid ? '#ffffff' : '#F5F5F5',
        },
    });
    const OnContentSize = (event: { nativeEvent: { contentSize: { height: number } } }) => {
        if (stateInput) {
            setStateInput(false);
        } else if (event.nativeEvent.contentSize.height < Functions.getDimHeight(5)) {
            setMainSize(event.nativeEvent.contentSize.height);
            console.log(mainSize);
        }
    };
    return (
        <View style={[styles.mainView, additionalStyles.mainView, { height: mainSize }]}>
            <ImageButton style={[styles.imageContainer, additionalStyles.imageContainer]}>
                <Image
                    style={{ width: size, height: size }}
                    source={require('../moleculs/images/add_files_image.png')}
                />
            </ImageButton>
            <TextInputMessage
                styleInput={[styles.textInput, { height: mainSize }]}
                styleView={[styles.textInputView, additionalStyles.textInputView, { height: mainSize }]}
                onContentSize={OnContentSize}
                onChangeText={message => {
                    setMessage(message);
                }}
            />
            <ImageButton
                style={[
                    styles.imageContainer,
                    additionalStyles.imageContainer,
                    additionalStyles.smileImage,
                    styles.smileImage,
                ]}
            >
                <Image style={{ width: size, height: size }} source={require('../moleculs/images/smile_image.png')} />
            </ImageButton>
            {message === '' ? (
                <ImageButton
                    style={[
                        styles.imageContainer,
                        additionalStyles.imageContainer,
                        styles.microphoneOrSendMessageImage,
                    ]}
                >
                    <Image
                        style={{ width: size, height: size }}
                        source={require('../moleculs/images/microphone_image.png')}
                    />
                </ImageButton>
            ) : (
                <ImageButton
                    style={[
                        styles.imageContainer,
                        additionalStyles.imageContainer,
                        styles.microphoneOrSendMessageImage,
                    ]}
                >
                    <Image
                        style={{ width: size, height: size }}
                        source={require('../moleculs/images/send_message.png')}
                    />
                </ImageButton>
            )}
        </View>
    );
};

export default ChatPanel;

/*


/-----------------------------------------ChatPanel for IOS--------------------------------------/

import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import ImageButton from "./containers/ImageButton";
import TextInputMessage from "./textInputs/TextInputMessage";

let size = Dimensions.get('window').width/17;

type ChatPanelProps = {
}

const styles = StyleSheet.create({
  textInputView: {
    flex: 10,
    marginHorizontal: Dimensions.get('window').width/40,
    height: Dimensions.get('window').width/10,
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    marginLeft: Dimensions.get('window').width/30,
    paddingBottom: Dimensions.get('window').width/40,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mainView: {
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    width: Dimensions.get('window').width/1.05,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textInput: {
    fontSize: Dimensions.get('window').height/50,
    height: Dimensions.get('window').width/10,
    justifyContent: 'center',
    color: '#292929',
  },
});

const ChatPanel: React.FunctionComponent<ChatPanelProps> = (props) => {
  const [mainSize, setMainSize] = useState(Dimensions.get('window').width/9);
  const [stateInput, setStateInput] = useState(true);
  const [message, setMessage] = useState('');
  const OnContentSize = (event: { nativeEvent: { contentSize: { height: number; }; }; }) => {
    if (stateInput){
      setStateInput(false)
    }
    else if (mainSize < Dimensions.get('window').height/5){
      setMainSize(event.nativeEvent.contentSize.height)
      console.log(mainSize)
    }
  }
  return(
    <View style={[styles.mainView , {height: mainSize}]}>
      <ImageButton style={styles.imageContainer}>
        <Image style={{width: size, height: size}} source={require('./images/add_files_image.png')}/>
      </ImageButton>
      <TextInputMessage styleInput={[styles.textInput, {height: mainSize}]}
                        styleView={[styles.textInputView, {height: mainSize}]}
                        onContentSize={OnContentSize}
                        onChangeText={(message) => {setMessage(message)} }/>
      <ImageButton style={[styles.imageContainer, {marginRight: Dimensions.get('window').width/60, marginLeft: 0}]}>
        <Image style={{width: size, height: size}} source={require('./images/smile_image.png')}/>
      </ImageButton>
      {message === '' ? <ImageButton style={[styles.imageContainer, {marginLeft: 0, marginRight: Dimensions.get('window').width/30}]}>
                          <Image style={{width: size, height: size}} source={require('./images/microphone_image.png')}/>
                        </ImageButton>
                      : <ImageButton style={[styles.imageContainer, {marginLeft: 0, marginRight: Dimensions.get('window').width/30}]}>
                          <Image style={{width: size, height: size}} source={require('./images/send_message.png')}/>
                        </ImageButton>
      }
    </View>
  );
}

export default ChatPanel;
 */
