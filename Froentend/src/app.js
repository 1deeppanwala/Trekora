import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Font from 'expo-font'; 
import AppLoading from 'expo-app-loading';

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'CustomFont': require('./assets/fonts'), 
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFonts(); 
  }, []);

  if (!fontLoaded) {
    return <AppLoading />; 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.customText}>Hello with Custom Font!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customText: {
    fontFamily: 'CustomFont', 
    fontSize: 24,
  },
});

export default App;
