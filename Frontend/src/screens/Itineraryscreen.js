import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Card from '../components/Card';

const ItineraryScreen = () => {
  const [itinerary, setItinerary] = useState('');
  const [activities, setActivities] = useState([]);

  const handleAddActivity = () => {
    setActivities([...activities, itinerary]);
    setItinerary('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Your Itinerary</Text>
      <InputField 
        placeholder="Add destination/activity" 
        value={itinerary} 
        onChangeText={setItinerary} 
      />
      <Button title="Add" onPress={handleAddActivity} />
      
      <View style={styles.itineraryList}>
        {activities.map((activity, index) => (
          <Card key={index} title={activity} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  itineraryList: {
    marginTop: 20,
  },
});

export default ItineraryScreen;
