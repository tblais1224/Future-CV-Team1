import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

//Register User,
//get the user data from the form
//history allows redirect to login after registering a user
//dispatch takes form and sends it to all reducers in store, all data returned is then collected
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/user/register", userData)
    //redirects the user to the login page
    .then(res => history.push("/login"))
    //dispatch() returns whatever the store returns from the reducers
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

//login the user and get the authentication token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/user/login", userData)
    .then(res => {
      //save the auth token to to the users local storage

      //below is returned after succesful auth and jwttoken creation
      //res.json({ success: true, token: "Bearer " + token })
      const { token } = res.data;
      //set the token to localstorage (localstorage only stores string)
      localStorage.setItem("jwtToken", token);
      //set jwt token to the auth header from "../utils/setAuthToken.js"
      setAuthToken(token);
      //decode the jwt token to get the users data
      const decoded = jwt_decode(token);
      //set the current user to the data from the decoded token
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//set the logged in user, 
//send the users data from the decoded token to the reduce
export const setCurrentUser = decodedTokenData => {
  return { type: SET_CURRENT_USER, payload: decodedTokenData };
};


//logout the user
export const logoutUser = () => dispatch => {
    //remove the token from the localstorage
    localStorage.removeItem("jwtToken")
    //delete the auth token in the headers
    setAuthToken(false)
    //setting the current user to an empty object will set the isAuth state to be false
    dispatch(setCurrentUser({}))
}