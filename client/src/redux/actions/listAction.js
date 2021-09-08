import axios from "axios";
import { CREATE_CARD, CREATE_LIST, DELETE_CARD, DELETE_LIST, GET_LIST, LOADING_LIST, UPDATE_CARD, UPDATE_LIST } from "../types";

export const createList = () => (dispatch) => {
  dispatch({ type: LOADING_LIST });
  axios
    .post("/api/list")
    .then((res) => {
      dispatch({ type: CREATE_LIST, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getList = (userData) => (dispatch) => {
  dispatch({ type: LOADING_LIST });
  axios
    .get("/api/list", userData)
    .then((res) => {
      dispatch({ type: GET_LIST, payload: res.data });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const deleteList = (listID) => (dispatch) => {
  dispatch({ type: LOADING_LIST }); 
  dispatch({ type: DELETE_LIST, payload: listID });
  axios
    .delete(`/api/list/${listID}`)
    .then((res) => {
        console.log(res)
     
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateList = (listInfo) => (dispatch) => {
  dispatch({ type: LOADING_LIST });
  axios
    .put("/api/list", listInfo)
    .then((res) => {
      dispatch({ type: UPDATE_LIST, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createCard = (userData) => (dispatch) => {
//   console.log(userData);
    axios
    .post("/api/card", userData)
    .then((res) => {
      dispatch({ type: CREATE_CARD, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteCard = (listID,cardID) => (dispatch) => {
  axios
    .delete(`/api/card/${listID}/${cardID}`)
    .then((res) => {
      dispatch({ type: DELETE_CARD, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateCard = (cardInfo) => (dispatch) => {
  axios
    .put("/api/card", cardInfo)
    .then((res) => {
      dispatch({ type: UPDATE_CARD, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};