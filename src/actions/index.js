import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";

//formProps consists of the email and password
export const signup = (formProps, callback) => async dispatch => {
  // Try to sign up with the credentials (formProps) provided by the user
  // If sign up is successful, redirect the user to /feature
  // Otherwise, display an error message
  try {
    const response = await axios.post(
      "http://localhost:3090/signup",
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    // Redirect the user
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Email in use" });
  }
};
