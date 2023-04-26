import { createSlice } from "@reduxjs/toolkit";
const defaultValue ={
  about: false,
  amenities: false,
  facilities: false,
  image: false,
  policies: false,
  room: false,
  settings: false
}
export const stateNavbarSlice = createSlice({
    name:"stateNavbar",
    initialState: {
        value: defaultValue
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
      },
      resetNavbar: (state)=>{
        state.value = defaultValue;
      }
    }
})
export const {AboutSucess,AmentiesSucess,FacilitiesSucess,ImageSucess,PoliciesSucess,RoomSucess,SettingsSucess,AboutChecking,AmentiesChecking,FacilitiesChecking,ImageChecking,PoliciesChecking,RoomChecking,SettingsChecking, resetNavbar} = stateNavbarSlice.actions;
export default stateNavbarSlice.reducer
