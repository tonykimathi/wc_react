import axios from 'axios';
import {createBrowserHistory} from 'history';
import { api_url } from './../config';

export const login = (dispatch, data) => {
  const browserHistory = createBrowserHistory();
  const login_url = `${api_url}login`;
  axios
    .post(login_url, {
      email: data.email,
      password: data.password
    })
    .then(res => {
      const access_token = res.data.access_token;
      const username = res.data.username;
      const email = res.data.email;
      localStorage.setItem('email', email);
      localStorage.setItem('username', username);
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('loggedIn', true);
      dispatch({
        type: 'LOGIN_SUCCESS',
        data: {
          access_token,
          username,
          email
        }
      });
      browserHistory.push('/businesses');
    })
    .catch(error => {
      if (error.response.status === 401) {
        const Message = error.response.data.message;
        dispatch({ type: 'LOGIN_FAIL', data: { Message } });
      }
    });
};