import axios from 'axios';

const API_URL = 'https://backend-api.com/api/destinations';  

const DestinationService = {
  getDestinations: async (filters) => {
    try {
      const response = await axios.get(`${API_URL}`, {
        params: filters,  // Send filters as query parameters
      });
      return response.data;  // Assuming API returns an array of destinations
    } catch (error) {
      throw new Error('Failed to fetch destinations. Please try again later.');
    }
  },
};

export default DestinationService;

