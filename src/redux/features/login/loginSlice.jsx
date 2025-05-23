import { createSlice } from "@reduxjs/toolkit";
import { setToken } from "../../../utils/authHelpers";

const initialState = {
  email: "",
  rememberMe: false,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginUser(state, action) {
      const { email, rememberMe, token } = action.payload;

      state.email = email;
      state.rememberMe = rememberMe;
      state.loading = false;
      setToken(token, rememberMe);
    },
    loginError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export function fetchUserFromDB(email, password, rememberMe) {
  return async function (dispatch) {
    try {
      dispatch(loginStart());
      const res = await fetch(`http://localhost:5000/api/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      dispatch(loginUser(data));
    } catch (error) {
      dispatch(loginError(error));
    }
  };
}

export const { loginStart, loginUser, loginError } = loginSlice.actions;
export default loginSlice.reducer;
