import axios from 'axios';

const API_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=API_KEY';

const DestinationService = {
  searchDestinations: async (query) => {
    try {
      const response = await axios.get(`${API_URL}/search`, {
        params: { query },
      });
      return response.data.destinations;
    } catch (error) {
      console.error('Error searching destinations:', error);
      throw error;
    }
  },

  getDestinationDetails: async (destinationId) => {
    try {
      const response = await axios.get(`${API_URL}/${destinationId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching destination details:', error);
      throw error;
    }
  },
};

export default DestinationService;
