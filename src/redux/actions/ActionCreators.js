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
