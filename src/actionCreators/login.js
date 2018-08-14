import axios from 'axios';
import history from '../history'
import { api_url } from './../config';

/**
 * Login user function
 * @param{Object} - data
 * @returns{Object} - user data and access token
 */
export const login = data => {
  return dispatch => {
    const login_url = `${api_url}login`;
    dispatch({'type':'AUTH_FETCHING'});
    return axios
      .post(login_url, {
        email: data.email,
        password: data.password
      })
      .then(res => {
        const auth_token = res.data.auth_token;
        const username = res.data.username;
        const email = res.data.email;
        localStorage.setItem('email', email);
        localStorage.setItem('username', username);
        localStorage.setItem('auth_token', auth_token);
        localStorage.setItem('loggedIn', true);
        dispatch({
          type: 'LOGIN_SUCCESS',
          data: {
            auth_token,
            username,
            email }
        });
        history.push('/businesses');
      })
      .catch(error => {
        if (error.response.status === 401) {
          const Message = error.response.data.message;
          dispatch({ type: 'LOGIN_FAIL', data: { Message } });
        }
      });
  };
};
