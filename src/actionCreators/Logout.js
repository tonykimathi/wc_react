import axios from 'axios';
import history from '../history'
import swal from 'sweetalert';
import { api_url, request_header } from './../config';

/**
 * Clear user from logged in user from localstorage
 */
const clearUser = () => {
  localStorage.removeItem('loggedIn');
  localStorage.removeItem('username');
  localStorage.removeItem('email');
  localStorage.removeItem('auth_token');
};

/**
 * Logout user function
 * @param{Object} - data
 * @returns{String} - Message
 */
export const logout = data => {
  return dispatch => {
    const logout_url = `${api_url}logout`;
    return axios
      .post(
        logout_url,
        { email: data.email },
        { headers: request_header(data.auth_token) }
      )
      .then(res => {
        const Message = res.data.message;
        clearUser();
        dispatch({ type: 'LOGOUT_SUCCESS', data: { Message } });
        swal(Message);
        history.push('/login');
      })
      .catch(error => {
        if (error.response.status === 401) {
          const Message = 'session expired login to continue';
          dispatch({ type: 'LOGOUT_SUCCESS', data: { Message }  });
          clearUser();
          history.push('/login');
        }
      });
  };
};
