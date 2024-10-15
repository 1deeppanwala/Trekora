import axios from 'axios';

const API_URL = 'https://third-party-booking-api.com';  

const BookingService = {
  searchFlights: async (origin, destination, date) => {
    try {
      const response = await axios.get(${API_URL}/flights, {
        params: { origin, destination, date },
      });
      return response.data;  
    } catch (error) {
      throw new Error('Failed to fetch flight data. Please try again later.');
    }
  },

  searchHotels: async (location, checkInDate, checkOutDate) => {
    try {
      const response = await axios.get(${API_URL}/hotels, {
        params: { location, checkInDate, checkOutDate },
      });
      return response.data;  
    } catch (error) {
      throw new Error('Failed to fetch hotel data. Please try again later.');
    }
  },
};

export default BookingService;
