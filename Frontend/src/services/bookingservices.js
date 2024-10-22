import axios from 'axios';

const API_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=API_KEY';

const BookingService = {
  makeBooking: async (destinationId, userId, bookingDetails) => {
    try {
      const response = await axios.post(${API_URL}/create, {
        destinationId,
        userId,
        ...bookingDetails,
      });
      return response.data;
    } catch (error) {
      console.error('Error making booking:', error);
      throw error;
    }
  },

  getUserBookings: async (userId) => {
    try {
      const response = await axios.get(${API_URL}/user/${userId});
      return response.data.bookings;
    } catch (error) {
      console.error('Error fetching user bookings:', error);
      throw error;
    }
  },

  cancelBooking: async (bookingId) => {
    try {
      const response = await axios.delete(${API_URL}/${bookingId});
      return response.data;
    } catch (error) {
      console.error('Error canceling booking:', error);
      throw error;
    }
  },
};

export default BookingService;
