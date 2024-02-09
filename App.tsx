import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Footer from './components/Footer';
import Chat from './components/Chat';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importa iconos de MaterialIcons





const App = () => {
  return (
    <LinearGradient

      colors={['#540095', '#9B01CF', '#4B0082']} // Tonos de fucsia y morado

      style={styles.container}>
      {/* Contenido de tu aplicación */}
      <View style={styles.container}>
        <Header />
        <Chat />
        <Footer />
      </View>
    </LinearGradient>
  );
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
