import * as ActionTypes from "./ActionTypes";

const baseUrl = "https://dev.tuten.cl:443/TutenREST/rest/user/";

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

export const bookingsRequest = () => (dispatch) => {
  dispatch(loadingBookings());

  return fetch(
    `https://dev.tuten.cl:443/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true`,
    {
      method: "GET",
      body: null,
      headers: {
        "Content-Type": "application/json",
        adminemail: "testapis@tuten.cl",
        app: "APP_BCK",
        token: "testapis@tuten.clo4ke9ihu6ds9klecoj82h0d8q2",
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

export const loadingBookings = () => ({
  type: ActionTypes.LOADING_BOOKINGS,
});

export const errorBookings = (errorMessage) => ({
  type: ActionTypes.ERROR_BOOKINGS,
  payload: errorMessage,
});
