import {
  GET_ALL_BUSINESSES_SUCCESS,
  GET_ONE_BUSINESS_SUCCESS,
  GET_ONE_BUSINESS_FAIL,
  FETCHING_BUSINESSES
} from '../actionCreators/constants';

const initialState = {
  businesses: [],
  pageLoading: false
};
const SingleInitialState = {
  business: {}
};

/**
 * All businesses Reducer
 */
const businesses = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_BUSINESSES:
      return {
        ...state,
        pageLoading: true
      };
    case GET_ALL_BUSINESSES_SUCCESS:
      console.log(action.data);
      return {
        ...state,
        businesses: action.data.businesses,
        pageLoading: false
      };
    default:
      return { ...state };
  }
};

/**
 * Single business related Reducer
 */
const business = (state = SingleInitialState, action) => {
  switch (action.type) {
    case GET_ONE_BUSINESS_SUCCESS:
      return {
        ...state,
        business: action.data.business,
        fetching: false,
        error: false
      };
    case GET_ONE_BUSINESS_FAIL:
      return {
        ...state,
        business: {},
        fetching: false,
        error: true,
        Message: action.data
      };
    default:
      return { ...state };
  }
};

export { businesses, business };
