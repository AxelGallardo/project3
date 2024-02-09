import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Chat = () => {
    return (
        <View style={styles.chat}>
            <Text style={styles.chatText}>Chat</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    chat: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chatText: {
        fontSize: 20,
        color: 'white',
    },
});

export default Chat;
