import { createSlice } from "@reduxjs/toolkit";

export const policiesHotelSlice = createSlice({
    name:"policiesHotel",
    initialState: {
        value:{
          dayCanCancel: 0,
          priceAll: true,
          isInsurance: true,
          checkIn:"",
          checkOut: "",
          isChildren: true,
          isPet: true
        }
    },
    reducers:{
      updateDayCanCancel: (state, action)=>{
        state.value.dayCanCancel = action.payload.value
      },
      updatePriceAll: (state, action)=>{
        state.value.priceAll = action.payload.value
      },
      updateIsInsurance: (state, action)=>{
        state.value.isInsurance = action.payload.value
      },
      updateCheckIn: (state, action)=>{
        state.value.checkIn = action.payload.value
      },
      updateCheckOut: (state, action)=>{
        state.value.checkOut = action.payload.value
      },
      updateIsChildren: (state, action)=>{
        state.value.isChildren = action.payload.value
      },
      updateIsPet: (state, action)=>{
        state.value.isPet = action.payload.value
      }
    }
})
export const {updateDayCanCancel, updatePriceAll, updateIsInsurance, updateCheckIn, updateCheckOut, updateIsChildren, updateIsPet} = policiesHotelSlice.actions;
export default policiesHotelSlice.reducer