import { createSlice } from "@reduxjs/toolkit";
const Defaulvalue = {
  isExtraBedOption: true,
  favourite: [],
  inside: [],
  bathRoom: [],
  mediaAndTech: [],
  service: [],
  foot: [],
  outSide: [],
  disabilitiesService: [],
  familyService: [],
}
export const amenitiesHotelSlice = createSlice({
    name:"amenitiesHotel",
    initialState: {
        value: Defaulvalue
    },
    reducers:{
        resetAmenitiesHotel:(state)=>{
        state.value = Defaulvalue;
       },
        updateIsExtraOption: (state, action)=>{
          state.value.isExtraBedOption = action.payload.value
        },
        updateFavourite: (state, action)=>{
          state.value.favourite = action.payload.value
        },
        updateInside: (state, action)=>{
          state.value.inside = action.payload.value
        },
        updateBathRoom: (state, action)=>{
          state.value.bathRoom = action.payload.value
        },
        updateMediaAndTech: (state, action)=>{
          state.value.mediaAndTech = action.payload.value
        },
        updateService: (state, action)=>{
          state.value.service = action.payload.value
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
export const {resetAmenitiesHotel ,updateIsExtraOption, updateFavourite,updateInside, updateBathRoom, updateOutSide,updateService, updateDisabilitiesService, updateFamilyService, updateFoot, updateMediaAndTech} = amenitiesHotelSlice.actions;
export default amenitiesHotelSlice.reducer