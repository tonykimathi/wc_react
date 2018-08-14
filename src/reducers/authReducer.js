import {
  AUTH_FETCHING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REQUEST_RESET_SUCCESS,
  REQUEST_RESET_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  PASSWORD_FETCHING
} from '../actions/constants';

const initialState = {
  Message: '',
  loggedIn: JSON.parse(localStorage.getItem('loggedIn')),
  username: localStorage.getItem('username'),
  auth_token: localStorage.getItem('auth_token'),
  email: localStorage.getItem('email'),
  error: null,
  loading: false
};

const resetInitialState = {
  error: null,
  email: localStorage.getItem('resetEmail'),
  token: localStorage.getItem('resetToken'),
  loading: false
};

/**
 * Authentication Reducer
 */
const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_FETCHING:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        auth_token: action.data.auth_token,
        username: action.data.username,
        email: action.data.email,
        Message: 'Logged in successfully',
        loading: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        Message: action.data.Message,
        loggedIn: false,
        error: true,
        loading: false
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        Message: 'Logged out Successfully',
        auth_token: null,
        username: null,
        email: null,
        loggedIn: false,
        error: null,
        loading: false
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        Message: action.data.Message,
        loading: false
      };
    case REGISTER_FAIL:
      return {
        ...state,
        Message: action.data.Message,
        error: true,
        loading: false
      };
    default:
      return { ...state };
  }
};

/**
 * Password Reset Reducer
 */
const passwordReset = (state = resetInitialState, action) => {
  switch (action.type) {
    case PASSWORD_FETCHING:
      return {
        ...state,
        loading: true
      };
    case REQUEST_RESET_SUCCESS:
      return {
        ...state,
        Message: action.data.Message,
        loading: false
      };
    case REQUEST_RESET_FAIL:
      return {
        ...state,
        Message: action.data.Message,
        error: true,
        loading: false
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        Message: action.data.Message,
        email: null,
        loading: false
      };
    case RESET_PASSWORD_FAIL:
      return {
        ...state,
        Message: action.data.Message,
        error: true,
        loading: false
      };
    default:
      return { ...state };
  }
};

export { auth, passwordReset };
