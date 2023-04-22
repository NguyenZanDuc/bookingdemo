import { createSlice } from "@reduxjs/toolkit";

export const imageHotelSlice = createSlice({
    name:"imageHotel",
    initialState: {
        value:{
          images: []
        }
    },
    reducers:{
      updateImage: (state, action)=>{
        state.value.images = action.payload.value
      }
    }
})
export const {updateImage} = imageHotelSlice.actions;
export default imageHotelSlice.reducer