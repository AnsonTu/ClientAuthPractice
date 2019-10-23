import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";

//formProps consists of the email and password
export const signup = formProps => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signup",
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Email in use" });
  }
};
