import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import initialStore from "./store";
import Email from "../reducers/Email";
import Token from "../reducers/Token";
import Bookings from "../reducers/Bookings";

const configureStore = () => {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(
    combineReducers({
      email: Email,
      token: Token,
      bookings: Bookings,
    }),
    initialStore,
    composedEnhancers
  );

  return store;
};

export default configureStore;
