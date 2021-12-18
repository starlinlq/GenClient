import { configureStore } from "@reduxjs/toolkit";
import userReducer, { decrement, increment } from "./userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
