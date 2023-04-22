import { createSlice } from "@reduxjs/toolkit";

export const amenitiesHotelSlice = createSlice({
    name:"amenitiesHotel",
    initialState: {
        value:{
          isExtraBedOption: true,
          favourite: [],
          bathRoom: [],
          mediaAndTech: [],
          foot: [],
          outSide: [],
          disabilitiesService: [],
          familyService: [],
        }
    },
    reducers:{
        updateIsExtraOption: (state, action)=>{
          state.value.isExtraBedOption = action.payload.value
        },
        updateFavourite: (state, action)=>{
          state.value.favourite = action.payload.value
        },
        updateBathRoom: (state, action)=>{
          state.value.bathRoom = action.payload.value
        },
        updateMediaAndTech: (state, action)=>{
          state.value.mediaAndTech = action.payload.value
        }
        ,updateFoot: (state, action)=>{
          state.value.foot = action.payload.value
        }
        ,updateOutSide: (state, action)=>{
          state.value.outSide = action.payload.value
        },
        updateDisabilitiesService: (state, action)=>{
          state.value.disabilitiesService = action.payload.value
        },
        updateFamilyService: (state, action)=>{
          state.value.familyService = action.payload.value
        }
    }
})
export const {updateIsExtraOption, updateFavourite, updateBathRoom, updateOutSide, updateDisabilitiesService, updateFamilyService, updateFoot, updateMediaAndTech} = amenitiesHotelSlice.actions;
export default amenitiesHotelSlice.reducer