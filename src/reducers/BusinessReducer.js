import {
  ADD_BUSINESS_SUCCESS,
  ADD_BUSINESS_FAIL,
  DELETE_BUSINESS_SUCCESS,
  DELETE_BUSINESS_FAIL,
  EDIT_BUSINESS_SUCCESS,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAIL
} from '../actions/constants';

const initialState = {
  Message: '',
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUSINESS_SUCCESS:
      return {
        ...state,
        Message: action.data.Message
      };
    case ADD_BUSINESS_FAIL:
      return {
        ...state,
        Message: action.data.Message,
        error: true
      };
    case DELETE_BUSINESS_SUCCESS:
      return {
        ...state,
        Message: action.data.Message,
        error: false
      };
    case DELETE_BUSINESS_FAIL:
      return {
        ...state,
        Message: action.data.Message,
        error: true
      };
    case EDIT_BUSINESS_SUCCESS:
      return {
        ...state,
        Message: action.data.Message,
        error: false
      };
    default:
      return { ...state };
      case ADD_REVIEW_SUCCESS:
      return {
        ...state,
        Message: action.data.Message
      };
    case ADD_REVIEW_FAIL:
      return {
        ...state,
        Message: action.data.Message,
        error: true
      };
  }
};
