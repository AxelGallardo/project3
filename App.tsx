import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Footer from './components/Footer';
import Chat from './components/Chat';
import Paseo from './components/Paseo';
import Susurros from './components/Susurros';

const App = () => {
  const [content, setContent] = useState('Chat');

  const changeContent = (selectedContent) => {
    setContent(selectedContent);
  };

  const renderContent = () => {
    switch (content) {
      case 'Chat':
        return <Chat />;
      case 'Paseo':
        return <Paseo />;
      case 'Susurros':
        return <Susurros />;
      default:
        return null;
    }
  };

  return (
    <LinearGradient
      colors={['#540095', '#9B01CF', '#4B0082']}
      style={styles.container}>
      <Header />
      <View style={styles.content}>
        {renderContent()}
      </View>
      <Footer changeContent={changeContent} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default App;
