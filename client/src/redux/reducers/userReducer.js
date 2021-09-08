import {
  LOADING_USER,
  SET_AUTHENTICATED,
  SET_ERRORS,
  SET_UNAUTHENTICATED,
  SET_USER,
} from "../types";

const initialState = {
  authenticated: false,
  loading: false,
  errors: {}
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        loading: false,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case LOADING_USER:
      return{
        ...state,
        loading: true
      }  
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        ...action.payload,
      };
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };  
    default:
      return state;
  }
}
