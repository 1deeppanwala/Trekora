const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT = 'LOGOUT';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

const initialState = {
  userInfo: null,
  loading: false,
  error: null,
};


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload, 
        loading: false,
        error: null,
      };
    case LOGOUT:
      return {
        ...state,
        userInfo: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        userInfo: action.payload, 
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};


export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const logout = () => ({
  type: LOGOUT,
});

export const registerSuccess = (userData) => ({
  type: REGISTER_SUCCESS,
  payload: userData,
});

export default userReducer;
