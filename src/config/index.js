import React from 'react';
import { Button } from 'reactstrap';
const api_url = process.env.REACT_APP_api_url;
const request_header = auth_token => {
  return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + auth_token
  };
};

/**
 * Define button and page loaders to display will the fetching data
 */
const loader = (
  <Button disabled>
    loading... <i className="fa fa-refresh fa-spin" />{' '}
  </Button>
);
const pageLoader = (
  <span id="pageLoader">
    Loading <i className="fa fa-spinner fa-spin" />{' '}
  </span>
);
export { api_url, request_header, loader, pageLoader };
