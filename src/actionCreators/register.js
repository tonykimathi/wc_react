import axios from 'axios';
import {createBrowserHistory} from 'history';
import swal from 'sweetalert';
import { api_url } from './../config';

export const register = (dispatch, data) => {
  const browserHistory = createBrowserHistory();
  const register_url = `${api_url}register`;
  axios
    .post(register_url, {
      username: data.username,
      email: data.email,
      password: data.password,
      confirm_password: data.confirmPassword
    })
    .then(res => {
      const Message = res.data.Message;
      dispatch({ type: 'REGISTER_SUCCESS', data: { Message } });
      swal(res.data.message);
      browserHistory.push('/login');
    })
    .catch(error => {
        console.log(error)
      if (error.response.status === 406) {
        const Message = error.response.data.message;
        dispatch({ type: 'REGISTER_FAIL', data: { Message } });
        swal('NOT ACCEPTABLE', Message, 'error');
      } else if (error.response.status === 409) {
        const Message = error.response.data.message;
        dispatch({ type: 'REGISTER_FAIL', data: { Message } });
        swal('ERROR!', Message, 'error');
      }
      else if (error.response.status === 401) {
        const Message = error.response.data.message;
        dispatch({ type: 'REGISTER_FAIL', data: { Message } });
        swal('ERROR!', Message, 'error');
      }
    });
};