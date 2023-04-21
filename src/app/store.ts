import { configureStore } from "@reduxjs/toolkit";
import clickValueReducer from '../slice/ClickValueSlice'
import aboutHotelReducer from '../slice/Hotel/about'

//Global store
export const store = configureStore({
  reducer: {
    //reducers are defined here
    click: clickValueReducer,
    aboutHotel: aboutHotelReducer
  },
});