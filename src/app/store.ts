import { configureStore } from "@reduxjs/toolkit";

import aboutHotelReducer from '../slice/Hotel/about'
import amenitiesHotelReducer from '../slice/Hotel/amenities'
import facilitiesHotelReducer from '../slice/Hotel/facilities'
import imageHotelReducer from '../slice/Hotel/image'
import policiesHotelReducer from '../slice/Hotel/policies'
import roomHotelReducer from '../slice/Hotel/room'
import settingsHotelReducer from '../slice/Hotel/settings'
// import bedOptionReducer from '../slice/Hotel/bedOption'
//Global store
export const store = configureStore({
  reducer: {
    aboutHotel: aboutHotelReducer,
    amenitiesHotel: amenitiesHotelReducer,
    facilitiesHotel: facilitiesHotelReducer,
    imageHotel: imageHotelReducer,
    policiesHotel: policiesHotelReducer,
    roomHotel: roomHotelReducer,
    settingsHotel: settingsHotelReducer,
    // bedOption: bedOptionReducer
  },
});

