import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  isAuth: false,
  email: "",
  authorization: [],
};

const userSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    logIn: (state) => {
      state.value += 1;
    },
    logOut: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = userSlice.actions;
export default userSlice.reducer;
