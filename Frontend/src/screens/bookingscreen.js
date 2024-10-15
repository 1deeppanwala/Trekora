import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Card from '../components/Card';

const BookingScreen = () => {
  const [bookingDetails, setBookingDetails] = useState('');
  const [bookings, setBookings] = useState([]);

  const handleAddBooking = () => {
    setBookings([...bookings, bookingDetails]);
    setBookingDetails('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Your Bookings</Text>
      <InputField 
        placeholder="Enter flight/hotel details" 
        value={bookingDetails} 
        onChangeText={setBookingDetails} 
      />
      <Button title="Add Booking" onPress={handleAddBooking} />
      
      <View style={styles.bookingList}>
        {bookings.map((booking, index) => (
          <Card key={index} title={booking} />
        ))}
      </View>
    </View>
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
    textAlign: 'center',
    marginBottom: 20,
  },
  bookingList: {
    marginTop: 20,
  },
});

export default BookingScreen;
