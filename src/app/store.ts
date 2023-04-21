import { configureStore } from "@reduxjs/toolkit";
import clickValueReducer from '../slice/ClickValueSlice'

//Global store
export const store = configureStore({
  reducer: {
    //reducers are defined here
    click: clickValueReducer,
  },
});