import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App: React.FC = () => {
  return (
    <LinearGradient
      colors={['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']}
      style={styles.container}
    >
      {/* Contenido de tu aplicación */}
      <View style={styles.content}>
        <Text>Hola, este es tu contenido.</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    // Estilos para tu contenido
  },
});

export default App;
