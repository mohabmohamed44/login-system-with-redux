import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Lib/slices/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
