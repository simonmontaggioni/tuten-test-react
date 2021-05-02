import * as ActionTypes from "./ActionTypes";

const baseUrl = "https://dev.tuten.cl/TutenREST/rest/user/";

export const validationRequest = (email, password) => (dispatch) => {
  return fetch(`${baseUrl}${email}`, {
    method: "PUT",
    body: null,
    headers: {
      "Content-Type": "application/json",
      password: password,
      path: "APP_BCK",
      Accept: "aplication/json",
    },
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
    .then((response) => console.log(response.json))
    .then((response) => dispatch(setToken(response)))
    .catch((error) => {
      console.log("login validation", error.message);
    });
};

export const setToken = (token) => ({
  type: ActionTypes.SET_TOKEN,
});
