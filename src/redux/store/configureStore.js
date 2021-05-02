import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import initialStore from "./store";
import User from "../reducers/User";

const composeEnhancers =
  (applyMiddleware(thunk, logger),
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) || compose;

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      user: User,
    }),
    initialStore,
    composeEnhancers
  );

  return store;
};
