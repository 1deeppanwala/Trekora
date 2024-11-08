const axios = require('axios');

const API_URL = 'https://your-booking-api.com/api'; 
const BookingService = {

  searchBookings: async (criteria) => {
    try {
      const response = await axios.get(${API_URL}/search, { params: criteria });
      return response.data; 
    } catch (error) {
      throw new Error('Booking search failed. Please try again.');
    }
  },

  
  makeBooking: async (bookingDetails) => {
    try {
      const response = await axios.post(${API_URL}/book, bookingDetails);
      return response.data;
    } catch (error) {
      throw new Error('Booking failed. Please check your details and try again.');
    }
  },

  
  cancelBooking: async (bookingId) => {
    try {
      const response = await axios.delete(${API_URL}/book/${bookingId});
      return response.data;
    } catch (error) {
      throw new Error('Cancellation failed. Please try again.');
    }
  },
};

module.exports = BookingService;
