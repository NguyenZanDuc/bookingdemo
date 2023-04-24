import { createSlice } from "@reduxjs/toolkit";

export const imageHotelSlice = createSlice({
    name:"imageHotel",
    initialState: {
        value: []
    },
    reducers:{
      resetImageHotel:(state)=>{
        state.value = [];
       },
      updateImage: (state, action)=>{
        state.value = action.payload.value
      }
    }
})
export const {resetImageHotel ,updateImage} = imageHotelSlice.actions;
export default imageHotelSlice.reducer