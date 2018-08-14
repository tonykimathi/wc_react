import axios from 'axios';
import swal from 'sweetalert';
import { api_url } from './../config';

/**
 * Get all businesses function
 * @returns{Object} - businesses
 * @returns{String} - Message
 */
const getAllBusinesses = () => {
  return dispatch => {
    dispatch({'type': 'FETCHING_BUSINESSES'});
    const all_businesses_url = `${api_url}businesses`;
    return axios
      .get(all_businesses_url)
      .then(res => {
        const businesses = res.data.all_businesses;
        dispatch({ type: 'GET_ALL_BUSINESSES_SUCCESS', data: { businesses } });
      })
      .catch(error => {
        if (error.response.status === 204) {
          const message = error.response.data.message;
          swal('Error!!', message, 'error');
        }
      });
  };
};

/**
 * Get single business function
 * @param{Number} - business_id
 * @returns{Object} - business
 * @returns{String} - Message
 */
const getSingleBusiness = id => {
  const single_business_url = `${api_url}businesses/${id}`;
  return dispatch => {
    return axios
      .get(single_business_url)
      .then(res => {
        const business = res.data.single_business;
        if (res.data.status === 204) {
          const Message = res.data.message;
          return dispatch({ type: 'GET_ONE_BUSINESS_FAIL', data: Message });
        }
        console.log(business)
        dispatch({ type: 'GET_ONE_BUSINESS_SUCCESS', data: {business} });
      })
      .catch(error => {
        if (error.response.status === 401) {
          const Message = error.response.data.message;
          return dispatch({ type: 'GET_ONE_BUSINESS_FAIL', data: Message });
        }
      });
  };
};

export { getAllBusinesses, getSingleBusiness };
