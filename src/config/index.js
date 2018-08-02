const api_url='http://localhost:5000/api/v2/auth/';
const request_header = (access_token) => {
  return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + access_token
  };
};

export {
  api_url,
  request_header
};