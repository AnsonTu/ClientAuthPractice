import axios from "axios";
import { AUTH_USER } from "./types";

//formProps consists of the email and password
export const signup = formProps => dispatch => {
  axios.post("http://localhost:3090/signup", formProps);
};
