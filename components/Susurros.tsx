import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const Susurros = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const flatListRef = useRef(null);

    const sendMessage = () => {
        if (inputText.trim() !== '') {
            setMessages([...messages, { text: inputText, sender: 'me', time: getCurrentTime() }]);
            setInputText('');
            scrollToBottom();
        }
    };

    const getCurrentTime = () => {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const scrollToBottom = () => {
        flatListRef.current.scrollToEnd({ animated: true });
    };

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={messages}
                renderItem={({ item }) => (
                    <View style={[styles.messageContainer, item.sender === 'me' ? styles.myMessage : styles.otherMessage]}>
                        <View style={[styles.messageBubble, item.sender === 'me' ? styles.myMessageBubble : styles.otherMessageBubble]}>
                            <Text style={[styles.messageText, { color: item.sender === 'me' ? '#434754' : '#434754' }]}>{item.text}</Text>
                            <Text style={[styles.messageTime, item.sender === 'me' ? styles.myMessageTime : styles.otherMessageTime]}>{item.time}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                onContentSizeChange={scrollToBottom}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    value={inputText}
                    onChangeText={setInputText}
                    placeholder="Susurra un mensaje..."
                    placeholderTextColor="#D8A9FC" // Cambiar el color del texto del marcador de posición a blanco
                    multiline
                />
                <TouchableOpacity style={styles.sendButtonContainer} onPress={sendMessage}>
                    <Text style={styles.sendButtonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    messageContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingHorizontal: 10,
        alignItems: 'flex-end',
    },
    myMessage: {
        justifyContent: 'flex-end',
    },
    otherMessage: {
        justifyContent: 'flex-start',
    },
    messageBubble: {
        maxWidth: '80%',
        padding: 10,
        borderRadius: 10,
    },
    myMessageBubble: {
        backgroundColor: '#E1C6F8', // Color de fondo del mensaje propio
        alignSelf: 'flex-end',
        borderBottomRightRadius: 0,
    },
    otherMessageBubble: {
        backgroundColor: '#C6D0F8', // Color de fondo del mensaje del otro usuario #E1C6F8
        alignSelf: 'flex-start',
        borderBottomLeftRadius: 0,
    },
    messageText: {
        fontSize: 14,
    },
    messageTime: {
        fontSize: 10,
        marginLeft: 10,
        marginBottom: 5,
        color: '#6B6F7D', // Cambiar el color del texto de la hora a rojo
    },
    myMessageTime: {
        alignSelf: 'flex-end',
    },
    otherMessageTime: {
        alignSelf: 'flex-start',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'transparent',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    textInput: {
        flex: 1,
        backgroundColor: '#9c27b0', // Cambiar el color de fondo de la entrada de texto
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 15, // Ajuste para hacer el texto más grande
        marginRight: 10,
        marginLeft: 10,
        color: 'white', // Cambiar el color del texto a blanco
        fontSize: 16, // Hacer el texto más grande
        height: 50, // Establecer la misma altura que la entrada de texto
    },
    sendButtonContainer: {
        backgroundColor: '#3949ab',
        marginRight: 10,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 50, // Establecer la misma altura que la entrada de texto
        justifyContent: 'center',
    },
    sendButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default Susurros;
