import { createSlice } from "@reduxjs/toolkit";

export const facilitiesHotelSlice = createSlice({
    name:"facilitiesHotel",
    initialState: {
        value:{
           park: "Không",
           isPrivate: true,
           isInside: true,
           isReservation: true,
           haveBreakFast: "Không",
           type: "Á",
           language: ["Tiếng Việt"],
           bestFacility: [],
        }
    },
    reducers:{
          updatePark: (state, action)=>{
            state.value.park = action.payload.value
          },
          updateIsPrivate: (state, action)=>{
            state.value.isPrivate = action.payload.value
          },
          updateIsInside: (state, action)=>{
            state.value.isInside = action.payload.value
          },
          updateIsReservation: (state, action)=>{
            state.value.isReservation = action.payload.value
          },
          updateHaveBreakFast: (state, action)=>{
            state.value.haveBreakFast = action.payload.value
          },
          updateType: (state, action)=>{
            state.value.type = action.payload.value
          },
          updateLanguage: (state, action)=>{
            state.value.language = action.payload.value
          },
          updateBestFacility: (state, action)=>{
            state.value.bestFacility = action.payload.value
          },
    }
})
export const {updatePark, updateIsPrivate, updateIsInside, updateIsReservation, updateHaveBreakFast, updateType, updateLanguage, updateBestFacility} = facilitiesHotelSlice.actions;
export default facilitiesHotelSlice.reducer