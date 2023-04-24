import { createSlice } from "@reduxjs/toolkit";

export const stateNavbarSlice = createSlice({
    name:"stateNavbar",
    initialState: {
        value: {
            about: false,
            amenities: false,
            facilities: false,
            image: false,
            policies: false,
            room: false,
            settings: false
        }
    },
    reducers:{
      AboutSucess: (state)=>{
        state.value.about = true
      },
      AmentiesSucess: (state)=>{
        state.value.amenities = true
      },
      FacilitiesSucess: (state)=>{
        state.value.facilities = true
      },
      ImageSucess: (state)=>{
        state.value.image = true
      },
      PoliciesSucess: (state)=>{
        state.value.policies = true
      },
      RoomSucess: (state)=>{
        state.value.room = true
      },
      SettingsSucess: (state)=>{
        state.value.settings = true
      },
      AboutChecking: (state)=>{
        state.value.about = false
      },
      AmentiesChecking: (state)=>{
        state.value.amenities = false
      },
      FacilitiesChecking: (state)=>{
        state.value.facilities = false
      },
      ImageChecking: (state)=>{
        state.value.image = false
      },
      PoliciesChecking: (state)=>{
        state.value.policies = false
      },
      RoomChecking: (state)=>{
        state.value.room = false
      },
      SettingsChecking: (state)=>{
        state.value.settings = false
      }
      
    }
})
export const {AboutSucess,AmentiesSucess,FacilitiesSucess,ImageSucess,PoliciesSucess,RoomSucess,SettingsSucess,AboutChecking,AmentiesChecking,FacilitiesChecking,ImageChecking,PoliciesChecking,RoomChecking,SettingsChecking} = stateNavbarSlice.actions;
export default stateNavbarSlice.reducer
