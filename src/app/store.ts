import { combineReducers, configureStore } from "@reduxjs/toolkit";
import aboutHotelReducer from '../slice/Hotel/about'
import amenitiesHotelReducer from '../slice/Hotel/amenities'
import facilitiesHotelReducer from '../slice/Hotel/facilities'
import imageHotelReducer from '../slice/Hotel/image'
import policiesHotelReducer from '../slice/Hotel/policies'
import roomHotelReducer from '../slice/Hotel/room'
import settingsHotelReducer from '../slice/Hotel/settings'
import stateNavbarReducer from '../slice/Navbar/stateNavbar'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'


import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
    aboutHotel: aboutHotelReducer,
    amenitiesHotel: amenitiesHotelReducer,
    facilitiesHotel: facilitiesHotelReducer,
    imageHotel: imageHotelReducer,
    policiesHotel: policiesHotelReducer,
    roomHotel: roomHotelReducer,
    settingsHotel: settingsHotelReducer,
    stateNavbar: stateNavbarReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE],
      },
    }),
});
export const persistor = persistStore(store)