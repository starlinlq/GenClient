import { createSlice } from "@reduxjs/toolkit";
import { user } from "../api/client";

const initialState = {
  username: "",
  isAuth: false,
  email: "",
  roles: [],
  isLoading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (
      { username, isAuth, email, roles },
      { payload: { username: name, email: mail, token, roles: rolesAuth } }
    ) => {
      if (localStorage.getItem("Authorization")) {
        localStorage.removeItem("Authorization");
      }

      const userStorage = { email: mail, isAuth: true };
      localStorage.setItem("user", JSON.stringify(userStorage));

      localStorage.setItem("Authorization", `Bearer ${token}`);
      return {
        username: name,
        isAuth: true,
        email: mail,
        roles: rolesAuth,
        isLoading: false,
      };
    },
    verifyToken: (state, { payload: { name, mail } }) => {
      return {
        ...state,
        username: name,
        email: mail,
        isAuth: true,
        isLoading: false,
      };
    },
    setLoading: (state, action) => {
      console.log(action.payload);
      return { ...state, isLoading: action.payload };
    },
    signOut: (state, action) => {
      return {
        ...state,
        username: "",
        isAuth: false,
        email: "",
        roles: [],
        isLoading: false,
      };
    },
  },
});

export const logInAuth = (userData) => async (dispatch) => {
  try {
    const { data } = await user.logIn(userData);
    console.log(data);
    dispatch(userSlice.actions.logIn(data));
  } catch (error) {
    console.log(error);
  }
};

export const getProfile = (profileId) => async (dispatch) => {};

export const { logIn, verifyToken, setLoading, signOut } = userSlice.actions;
export default userSlice.reducer;
