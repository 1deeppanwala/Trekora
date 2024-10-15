import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ItineraryScreen from '../screens/ItineraryScreen';
import BookingScreen from '../screens/BookingScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ tabBarLabel: 'Home' }} 
      />
      <Tab.Screen 
        name="Itinerary" 
        component={ItineraryScreen} 
        options={{ tabBarLabel: 'Itinerary' }} 
      />
      <Tab.Screen 
        name="Booking" 
        component={BookingScreen} 
        options={{ tabBarLabel: 'Booking' }} 
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
