import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {userReducer} from "./reducers/userReducer";
import {listReducer} from "./reducers/listReducer";

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
  user: userReducer,
  list: listReducer,
});


const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
