import axios from 'axios';

const API_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=API_KEY';

const AuthService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      const { token, user } = response.data;
      localStorage.setItem('userToken', token);
      return { token, user };
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  signup: async (email, password, name) => {
    try {
      const response = await axios.post(`${API_URL}/signup`, { email, password, name });
      return response.data;
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('userToken');
  },

  getCurrentUser: () => {
    return localStorage.getItem('userToken');
  },
};

export default AuthService;
