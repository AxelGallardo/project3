import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Image } from 'react-native';

const Header = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };

    const handleSettingsPress = () => {
        // Lógica para manejar el press del botón de configuración
        console.log('Botón de configuración presionado');
    };

    return (
        <View style={styles.header}>

            <View style={styles.olimpoContainer}>
                <Image source={require('../images/olimpochat.png')} style={styles.headerImage} />
            </View>
            <View style={styles.switchContainer}>
                <Switch
                    style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }] }} // Aumenta el tamaño del Switch
                    trackColor={{ false: '#767577', true: '#FF00FF' }}
                    thumbColor={isEnabled ? 'white' : '#f4f3f4'}

                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                <TouchableOpacity onPress={toggleSwitch} style={styles.switchButton}>
                    <Text style={styles.switchText}>{isEnabled ? 'Visible' : 'Oculto'}</Text>
                </TouchableOpacity>
            </View>


            <TouchableOpacity onPress={handleSettingsPress} style={styles.settingsButton}>
                <Image source={require('../images/engranaje.png')} style={styles.settingsIcon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        alignItems: 'center',
        backgroundColor: 'transparent', // Cambiado el color de fondo
        paddingVertical: 20, // Modificado para mayor espacio
        paddingHorizontal: 15, // Modificado para mayor espacio
    },
    olimpoContainer: {
        flex: 1, // Modificado para ocupar espacio restante
        alignItems: 'flex-start', // Alineado hacia la izquierda
        justifyContent: 'flex-start', // Alineado hacia la izquierda
        marginLeft: 0, // Ajuste del margen izquierdo
    },
    switchContainer: {
        flexDirection: 'column', // Cambiado a columna para apilar los elementos verticalmente
        alignItems: 'center',
    },
    switchButton: {
        paddingHorizontal: 25, // Añadido para espaciar el botón del switch
    },
    switchText: {
        color: 'white',
        marginTop: 0, // Agregado margen arriba para separar el texto del switch
        fontSize: 12, // Ajustado el tamaño de fuente
    },
    headerImage: {
        width: 150, // Ajusta el ancho de la imagen según sea necesario
        height: 30, // Ajusta el alto de la imagen según sea necesario
    },
    settingsButton: {
        padding: 10,
    },
    settingsIcon: {
        width: 24,
        height: 24,
        tintColor: 'white',
    },
});

export default Header;
