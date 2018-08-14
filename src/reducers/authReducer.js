import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
  } from '../actionCreators/constants';
  
  const initialState = {
    Message: '',
    loggedIn: JSON.parse(localStorage.getItem('loggedIn')),
    username: localStorage.getItem('username'),
    access_token: localStorage.getItem('access_token'),
    email: localStorage.getItem('email'),
    error: null
  };
  export default (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          loggedIn: true,
          access_token: action.data.access_token,
          username: action.data.username,
          email: action.data.email,
          Message: 'Logged in successfully'
        };
      case LOGIN_FAIL:
        return {
          ...state,
          Message: action.data.Message,
          loggedIn: false,
          error: true
        };
      case LOGOUT_SUCCESS:
        return {
          ...state,
          Message: 'Logged out Successfully',
          access_token: null,
          username: null,
          email: null,
          loggedIn: false,
          error: null
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          Message: action.data.Message
        };
      case REGISTER_FAIL:
        return {
          ...state,
          Message: action.data.Message
        };
      default:
        return { ...state };
    }
  };