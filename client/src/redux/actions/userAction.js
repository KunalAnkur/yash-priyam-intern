import axios from "axios";
import {
  LOADING_UI,
  SET_ERRORS,
  SET_USER,
  LOADING_USER,
  SET_UNAUTHENTICATED,
} from "../types";


export const signupUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("http://localhost:8000/api/signup", userData)
    .then((res) => {
      setAuthorizationHeader(res.data.idToken);
      dispatch({ type: SET_USER, payload: res.data });
      history.push("/");
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("http://localhost:8000/api/login", userData)
    .then((res) => {
      setAuthorizationHeader(res.data.idToken);
      dispatch(getUserData());
      history.push("/");
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

export const getUserData = () => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get("http://localhost:8000/api/user")
    .then((res) => {
      dispatch({ type: SET_USER, payload: res.data });
    })
    .catch((e) => {
      console.log(e);
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("idToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
};

const setAuthorizationHeader = (token) => {
  const mashDBToken = `Bearer ${token}`;
  localStorage.setItem("idToken", mashDBToken);
  axios.defaults.headers.common["Authorization"] = mashDBToken;
};
