import {
  GET_LIST,
  LOADING_LIST,
  UPDATE_LIST,
  CREATE_LIST,
  DELETE_LIST,
  CREATE_CARD,
  DELETE_CARD,
} from "../types";

const initialState = {
  loading: false,
  lists: [],
};

export function listReducer (state = initialState, action) {
    switch (action.type) {
      
    case LOADING_LIST:
        return {
            ...state,
            loading:true,
        } 
    case GET_LIST:
        return {
            ...state,
            loading: false,
            lists: [...action.payload]
        }
    case UPDATE_LIST:
        const index = state.lists.findIndex(list => list._id === action.payload._id);
        state.lists[index].listName = action.payload.listName;
        return {
            ...state,
            lists: [...state.lists],
            loading: false,
        }
    case CREATE_LIST:
        return {
            ...state,
            lists: [...state.lists, action.payload],
            loading:false,
        } 
    case DELETE_LIST:
        const newList = state.lists.filter(list => list._id !== action.payload)
        return {
            ...state, lists: [...newList],
            loading:false
        } 
    case CREATE_CARD:
        console.log(action.payload)
        const listidx = state.lists.findIndex(list => list._id === action.payload._id);
        state.lists[listidx] = action.payload;
        return {
          ...state,
          lists: [...state.lists],
        };
    case DELETE_CARD:
        const updatedlistidx = state.lists.findIndex(list => list._id === action.payload._id);
        state.lists[updatedlistidx] = action.payload;
        return {
          ...state,
          lists: [...state.lists],
        };           
    default:
      return state;
  }
}
