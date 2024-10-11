import axios from 'axios';

const API_URL = 'https://backend-api.com/api/auth';  

const AuthService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(${API_URL}/login, {
        email,
        password,
      });
      
      return response.data;
    } catch (error) {
      throw new Error('Login failed. Please check your credentials.');
    }
  },

  register: async (name, email, password) => {
    try {
      const response = await axios.post(${API_URL}/register, {
        name,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw new Error('Registration failed. Please try again.');
    }
  },

  logout: () => {
  
    localStorage.removeItem('userToken');
  },
};

export default AuthService;
