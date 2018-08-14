import axios from 'axios';
import swal from 'sweetalert';
import { api_url } from './../config';
import history from '../history'

const reset_url = `${api_url}reset-password`;

/**
 * Request password reset link function
 * @param{Email} - user registered email
 * @returns{String} - Message
 */

export const requestReset = data => {
  return dispatch => {
    dispatch({'type': 'PASSWORD_FETCHING'});
    return axios
      .post(reset_url, {
        email: data.email
      })
      .then(res => {
        const Message = res.data.message;
        dispatch({
          type: 'REQUEST_RESET_SUCCESS',
          data: {
            Message
          }
        });
        swal('Success', Message);
      })
      .catch(error => {
        if (error.response.status === 400) {
          const Message = 'No user registered with this email.';
          dispatch({ type: 'REQUEST_RESET_FAIL', data: { Message } });
        }
      });
  };
};


/**
 * Reset password function
 * @param{new_password} - user new password
 * @returns{String} - Message
 */
export const resetPassword = data => {
  const reset_password_url = `${reset_url}?token=${data.token}`;
  return dispatch => {
    return axios
      .post(reset_password_url, {
        email: data.email,
        new_password: data.new_password,
        confirm_new_password: data.confirm_new_password
      })
      .then(res => {
        const Message = res.data.message;
        dispatch({
          type: 'RESET_PASSWORD_SUCCESS',
          data: {
            Message
          }
        });
        localStorage.removeItem('resetToken');
        localStorage.removeItem('resetEmail');
        swal('Success', Message);
        history.push('/login');
      })
      .catch(error => {
        if (error.response.status === 401) {
          const Message = 'Link expired request a new link';
          dispatch({ type: 'RESET_PASSWORD_FAIL', data: { Message } });
          history.push('/requestreset');
          swal(Message);
        } else if (error.response.status === 400) {
          const Message =
            'Exceeded timeout, open the link again or request another.';
          dispatch({ type: 'RESET_PASSWORD_FAIL', data: { Message } });
        } else if (error.response.status === 403) {
          const Message = error.response.data.Message;
          dispatch({ type: 'RESET_PASSWORD_FAIL', data: { Message } });
        }
      });
  };
};
