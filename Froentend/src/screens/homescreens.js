import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Trekora!</Text>
      <Button title="Create Itinerary" onPress={() => navigation.navigate('Itinerary')} />
      <Button title="Search Destinations" onPress={() => navigation.navigate('Search')} />
      <Button title="Booking" onPress={() => navigation.navigate('Booking')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default HomeScreen;
