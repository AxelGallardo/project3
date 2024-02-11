import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';

const ChatList = () => {
    const [searchText, setSearchText] = useState('');
    const [chats, setChats] = useState([
        {
            id: 1,
            contact: 'John Doe',
            lastMessage: 'Hello, helloHello, helloHello, hello',
            lastMessageTime: new Date(), // Incluye la hora de envío del mensaje
            unreadCount: 2,
            profileImage: require('../images/zac.jpg')
        },
        {
            id: 2,
            contact: 'Jane Smith',
            lastMessage: 'How are you?',
            lastMessageTime: new Date(Date.now() - 86400000), // Ejemplo de mensaje de un día antes
            unreadCount: 0,
            profileImage: require('../images/miley.jpg')
        },
        {
            id: 3,
            contact: 'Alice Johnson',
            lastMessage: 'Good morning, Good morning, Good morning',
            lastMessageTime: new Date(Date.now() - 172800000), // Ejemplo de mensaje de dos días antes
            unreadCount: 1,
            profileImage: require('../images/merlina.jpg')
        },
        // Agrega más elementos de chat según sea necesario
    ]);

    // Función para formatear la hora de envío del mensaje
    const formatMessageTime = (messageTime) => {
        const currentTime = new Date();
        const diffTime = Math.abs(currentTime - messageTime);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        // Si el mensaje fue enviado hace menos de una hora, muestra "Hace x minutos"
        if (diffTime < 3600000) {
            const diffMinutes = Math.ceil(diffTime / (1000 * 60));
            return `Hace ${diffMinutes} minutos`;
        }
        // Si el mensaje fue enviado hoy, muestra la hora
        else if (diffDays === 0) {
            return messageTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
        }
        // Si el mensaje fue enviado ayer, muestra "Yesterday"
        else if (diffDays === 1) {
            return 'Yesterday';
        }
        // Si el mensaje fue enviado hace más de un día pero menos de una semana, muestra el día de la semana
        else if (diffDays < 7) {
            return messageTime.toLocaleDateString('en-US', { weekday: 'long' });
        }
        // Si el mensaje fue enviado hace más de una semana, muestra la fecha
        else {
            return messageTime.toLocaleDateString('en-US');
        }
    };

    const renderItem = ({ item, index }) => (
        <TouchableOpacity style={[styles.chatItem, index !== chats.length - 1 && styles.separator]}>
            <Image source={item.profileImage} style={styles.profileImage} />
            <View style={styles.chatInfo}>
                <View style={styles.messageContainer}>
                    <Text style={styles.contactName}>{item.contact}</Text>
                    {item.unreadCount > 0 && <View style={styles.unreadBadge}><Text style={styles.unreadText}>{item.unreadCount}</Text></View>}
                    <View style={styles.messageDetails}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.lastMessage}>{item.lastMessage}</Text>
                        <Text style={styles.messageTime}>{formatMessageTime(item.lastMessageTime)}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    // Función para filtrar los chats según el texto de búsqueda
    const filteredChats = chats.filter(chat =>
        chat.contact.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.searchInputContainer}>
                    <Image source={require('../images/buscar.png')} style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        value={searchText}
                        onChangeText={setSearchText}
                        placeholder="Buscar chats..."
                        placeholderTextColor="#FFFFFF" // Cambiar el color del texto del marcador de posición a blanco
                    />
                </View>
            </View>
            <FlatList
                data={filteredChats}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    searchContainer: {
        marginBottom: 10,
    },
    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF00FF',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginRight: 10,
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        color: '#FFFFFF',
    },
    chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        minHeight: 70, // Establecer un tamaño mínimo para el contenedor del chat
        maxHeight: 70, // Establecer un tamaño máximo para el contenedor del chat
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    chatInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    messageContainer: {
        flex: 1,
    },
    messageDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    contactName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#FFFFFF', // Texto en blanco
    },
    lastMessage: {
        fontSize: 16,
        marginBottom: 2,
        flex: 1,
        color: '#FFFFFF', // Texto en blanco
    },
    messageTime: {
        fontSize: 12,
        marginLeft: 10,
        color: '#FFFFFF', // Texto en blanco
    },
    unreadBadge: {
        backgroundColor: '#FF00FF',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 2,
        position: 'absolute',
        top: -1, // Ajusta el indicador verticalmente
        right: 5,
    },
    unreadText: {
        color: '#FFFFFF',
        fontSize: 12,
    },
});

export default ChatList;
