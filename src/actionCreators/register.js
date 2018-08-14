import axios from 'axios';
import history from '../history'
import swal from 'sweetalert';
import { api_url } from './../config';

/**
 * Register user function
 * @param{Object} - data
 * @returns{String} - Message
 */
export const register = data => {
  return dispatch => {
    const register_url = `${api_url}register`;
    dispatch({'type':'AUTH_FETCHING'});
    return axios
      .post(register_url, {
        username: data.username,
        email: data.email,
        password: data.password,
        confirm_password: data.confirm_password
      })
      .then(res => {
        const Message = res.data.message;
        dispatch({ type: 'REGISTER_SUCCESS', data: { Message } });
        swal(Message);
        history.push('/login');
      })
      .catch(error => {
        if (error.response.status === 401) {
          const Message = error.response.data.message;
          dispatch({ type: 'REGISTER_FAIL', data: { Message } });
        }
      });
  };
};
