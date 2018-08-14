import axios from 'axios';
import history from '../history'
import swal from 'sweetalert';
import { api_url, request_header } from './../config';

export const addReview = data => {
    return dispatch => {
        const add_review_url = `${api_url}businesses/${data.business_id}/reviews`;
        return axios
          .post(
              add_review_url,
              {review_name: data.review_name,
               body: data.body
              },
              { headers: request_header(data.auth_token) } )
          .then(res => {
              const Message = res.data.message;
              dispatch({ type: 'ADD_REVIEW_SUCCESS', data: { Message } });
              swal(Message);
              history.push('/businesses/${id}')
          .catch(error => {
              if (error.response.status === 403) {
                  const Message = 'You cannot review a business you own';
                  swal(Message);
                  dispatch({type: 'ADD_REVIEW_FAIL', data: { Message } })
                };
            });    
        });
    };
};
  