import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import InputField from '../components/InputField';
import Button from '../components/Button';
import Card from '../components/Card';

const BookingScreen = () => {
  const [destination, setDestination] = useState('');
  const [bookingDetails, setBookingDetails] = useState([]);
  
  const handleBooking = () => {
    if (destination.trim()) {
      setBookingDetails([...bookingDetails, destination]);
      setDestination('');
      Alert.alert('Booking Successful', Your booking for ${destination} has been confirmed!);
    } else {
      Alert.alert('Error', 'Please enter a destination.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Book Your Trip</Text>
      <InputField 
        value={destination}
        onChangeText={setDestination}
        placeholder="Enter Destination" 
      />
      <Button title="Book Now" onPress={handleBooking} />
      
      <View style={styles.bookings}>
        {bookingDetails.map((detail, index) => (
          <Card key={index} title={detail} />
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
  bookings: {
    marginTop: 20,
  },
});

export default BookingScreen;
