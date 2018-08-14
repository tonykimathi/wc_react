import axios from 'axios';
// import { browserHistory } from 'react-router';
import history from '../history'
import swal from 'sweetalert';
import { api_url, request_header } from './../config';
import { logout } from '../actions/Logout';

/**
 * Add book function
 * @param{Object} - business
 * @returns{String} - Message
 */
export const addBusiness = data => {
  return dispatch => {
    const add_business_url = `${api_url}businesses`;
    return axios
      .post(
        add_business_url,
        {
          business_name: data.business_name,
          description: data.description,
          category: data.category,
          location: data.location
        },
        { headers: request_header(data.auth_token) }
      )
      .then(res => {
        const Message = res.data.message;
        dispatch({ type: 'ADD_BUSINESS_SUCCESS', data: { Message } });
        swal(res.data.message);
        history.push('/businesses');
      })
      .catch(error => {
        if (error.response.status === 401) {
          const Message = 'session expired login to continue';
          swal(Message);
          dispatch(
            logout({ email: data.email, access_token: data.auth_token })
          );
        }
        if (error.response.status === 409) {
          const Message = error.response.data.message;
          dispatch({ type: 'ADD_BUSINESS_FAIL', data: { Message } });
        }
      });
  };
};

/**
 * Edit businessfunction
 * @param{Number} - business_id
 * @param{Object} - business
 * @returns{String} - Message
 */
export const editBusiness = data => {
  return dispatch => {
    const edit_business_url = `${api_url}businesses/${data.business_id}`;
    return axios
      .put(
        edit_business_url,
        {
          business_name: data.business_name,
          description: data.description,
          category: data.category,
          location: data.location
        },
        { headers: request_header(data.auth_token) }
      )
      .then(res => {
        const Message = res.data.message;
        dispatch({ type: 'EDIT_BUSINESS_SUCCESS', data: { Message } });
        swal(Message);
        history.push(`/businesses/${data.business_id}`);
      })
      .catch(error => {
        if (error.response.status === 401) {
          const Message = 'session expired login to continue';
          swal(Message);
          dispatch(
            logout({ email: data.email, auth_token: data.auth_token })
          );
        }
      });
  };
};

/**
 * Delete business function
 * @param{Number} - business_id
 * @returns{Object} - business
 */
export const deleteBusiness = data => {
  return dispatch => {
    const delete_business_url = `${api_url}businesses/${data.business_id}`;
    return axios
      .delete(delete_business_url, { headers: request_header(data.auth_token) })
      .then(res => {
        const Message = res.data.message;
        if (res.data.status === 204) {
          const Message = res.data.message;
          return dispatch({ type: 'DELETE_BUSINESS_SUCCESS', data: { Message } });
        }
        dispatch({ type: 'DELETE_BUSINESS_SUCCESS', data: { Message } });
        // swal(Message);
        history.push('/businesses');
      })
      .catch(error => {
        if (error.response.status === 409) {
          const Message = error.response.data.message;
          swal(Message);
        }
        if (error.response.status === 401) {
          const Message = 'session expired login to continue';
          swal(Message);
          dispatch(
            logout({ email: data.email, auth_token: data.auth_token })
          );
        }
      });
  };
};
