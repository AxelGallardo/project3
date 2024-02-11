import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Importa las imágenes de los íconos
import chatIcon from '../images/chats.png';
import walkIcon from '../images/paseo.png';
import hearingIcon from '../images/susurros.png';

const Footer = ({ changeContent }) => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.button} onPress={() => changeContent('Chat')}>
                <LinearGradient colors={['#9F05F2', '#550096']} style={styles.gradient}>
                    <Image source={chatIcon} style={styles.icon} />
                    <Text style={styles.buttonText}>Chat</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => changeContent('Paseo')}>
                <LinearGradient colors={['#9F05F2', '#550096']} style={styles.gradient}>
                    <Image source={walkIcon} style={styles.icon} />
                    <Text style={styles.buttonText}>Paseo</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => changeContent('Susurros')}>
                <LinearGradient colors={['#9F05F2', '#550096']} style={styles.gradient}>
                    <Image source={hearingIcon} style={styles.icon} />
                    <Text style={styles.buttonText}>Susurros</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
    },
    button: {
        width: 100, // Ancho suficiente para contener la palabra "Susurros"
        height: 65, // Establece un alto fijo para todos los botones
        borderRadius: 15,
        overflow: 'hidden', // Necesario para que el degradado no se vea cortado
    },
    gradient: {
        flex: 1, // Asegura que el gradiente ocupe todo el espacio dentro del botón
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'column', // Cambiado a columna para apilar ícono y texto verticalmente
        alignItems: 'center', // Alinea ícono y texto verticalmente al centro
    },
    buttonText: {
        color: 'white',
        fontSize: 12,
        marginTop: 5, // Añadido margen arriba para separar texto del ícono
    },
    icon: {
        width: 25,
        height: 25,
        marginBottom: 2, // Añadido margen abajo para separar ícono del texto
        marginRight: 0, // Añadido margen para separar el ícono del texto
    },
});

export default Footer;
