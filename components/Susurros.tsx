import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const Susurros = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const sendMessage = () => {
        if (inputText.trim() !== '') {
            setMessages([...messages, { text: inputText, sender: 'me' }]);
            setInputText('');
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                renderItem={({ item }) => (
                    <View style={item.sender === 'me' ? [styles.myMessage, { backgroundColor: '#9c27b0' }] : styles.otherMessage}>
                        <Text style={[styles.messageText, { color: 'white' }]}>{item.text}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
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
    myMessage: {
        alignSelf: 'flex-end',
        borderRadius: 10,
        marginVertical: 5,
        marginRight: 10,
        padding: 10,
        maxWidth: '80%',
    },
    otherMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#E5E5EA',
        borderRadius: 10,
        marginVertical: 5,
        marginLeft: 10,
        padding: 10,
        maxWidth: '80%',
    },
    messageText: {
        fontSize: 16,
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
        paddingVertical: 10,
        marginRight: 10,
        color: 'white', // Cambiar el color del texto a blanco
    },
    sendButtonContainer: {
        backgroundColor: '#3949ab',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 49, // Establecer la misma altura que la entrada de texto
        justifyContent: 'center',
    },
    sendButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default Susurros;
