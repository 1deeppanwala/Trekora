import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Card from '../components/Card';

const ItineraryScreen = () => {
  const [itinerary, setItinerary] = useState('');
  const [activities, setActivities] = useState([]);

  const addActivity = () => {
    if (itinerary.trim()) {
      setActivities([...activities, itinerary]);
      setItinerary(''); 
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Your Itinerary</Text>
      <InputField 
        value={itinerary}
        onChangeText={setItinerary}
        placeholder="Add activity..." 
      />
      <Button title="Add Activity" onPress={addActivity} />

      <View style={styles.activities}>
        {activities.map((activity, index) => (
          <Card key={index} title={activity} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  activities: {
    marginTop: 20,
  },
});

export default ItineraryScreen;
