import * as ActionTypes from "./ActionTypes";

const baseUrl = "https://dev.tuten.cl:443/TutenREST/rest/user/";

export const setUserEmail = (email) => ({
  type: ActionTypes.SET_USER_EMAIL,
  payload: email,
});

export const validationRequest = (email, password) => (dispatch) => {
  dispatch(loadingToken());

  return fetch(`${baseUrl}${email}`, {
    method: "PUT",
    body: null,
    headers: {
      "Content-Type": "application/json",
      password: password,
      app: "APP_BCK",
      Accept: "aplication/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(setToken(response.sessionTokenBck)))
    .catch((error) => {
      console.log("login validation", error.message);
      dispatch(errorToken(error.message));
    });
};

export const logoutRequest = () => (dispatch) => {
  dispatch(setToken(null));
};

export const setToken = (token) => ({
  type: ActionTypes.SET_TOKEN,
  payload: token,
});

export const loadingToken = () => ({
  type: ActionTypes.LOADING_TOKEN,
});

export const errorToken = (errorMessage) => ({
  type: ActionTypes.ERROR_TOKEN,
  payload: errorMessage,
});

export const bookingsRequest = (token, emailValue) => (dispatch) => {
  console.log("%c Email: %o", "font-size: 2em", emailValue);
  dispatch(loadingBookings());

  return fetch(
    `https://dev.tuten.cl:443/TutenREST/rest/user/${emailValue}/bookings?current=true`,
    {
      method: "GET",
      body: null,
      headers: {
        "Content-Type": "application/json",
        adminemail: "testapis@tuten.cl",
        app: "APP_BCK",
        token: token,
        Accept: "aplication/json",
      },
      credentials: "same-origin",
    }
  )
    .then(
      (response) => {
        if (response.ok) {
          console.log(response);
          return response;
        } else {
          let error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(setBookings(response)))
    .catch((error) => {
      console.log("bookings request: ", error.message);
      dispatch(errorBookings(error.message));
    });
};

export const setBookings = (bookings) => ({
  type: ActionTypes.SET_BOOKINGS,
  payload: bookings,
});

export const applyFilters = () => ({
  type: ActionTypes.APPLY_FILTERS,
});

export const setFilterByID = (idFilterValue) => ({
  type: ActionTypes.SET_FILTER_BY_ID,
  payload: idFilterValue,
});

export const setFilterByAddress = (addressFilterValue) => ({
  type: ActionTypes.SET_FILTER_BY_ADDRESS,
  payload: addressFilterValue,
});

export const setfilterIdGreaterEqualThan = (idGreaterEqualThanFilterValue) => ({
  type: ActionTypes.SET_FILTER_ID_GREATER_EQUAL_THAN,
  payload: idGreaterEqualThanFilterValue,
});
export const setfilterIdLessEqualThan = (idLessEqualThanFilterValue) => ({
  type: ActionTypes.SET_FILTER_ID_LESS_EQUAL_THAN,
  payload: idLessEqualThanFilterValue,
});

export const setFilterByPrice = (priceFilterValue) => ({
  type: ActionTypes.SET_FILTER_BY_PRICE,
  payload: priceFilterValue,
});

export const setfilterPriceGreaterEqualThan = (
  priceGreaterEqualThanFilterValue
) => ({
  type: ActionTypes.SET_FILTER_PRICE_GREATER_EQUAL_THAN,
  payload: priceGreaterEqualThanFilterValue,
});

export const setfilterPriceLessEqualThan = (priceLessEqualThanFilterValue) => ({
  type: ActionTypes.SET_FILTER_PRICE_LESS_EQUAL_THAN,
  payload: priceLessEqualThanFilterValue,
});

export const loadingBookings = () => ({
  type: ActionTypes.LOADING_BOOKINGS,
});

export const errorBookings = (errorMessage) => ({
  type: ActionTypes.ERROR_BOOKINGS,
  payload: errorMessage,
});
