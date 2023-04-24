import { createSlice } from "@reduxjs/toolkit";
const Defaulvalue = {
    nameHotel: "",
    star: 0,
    property: "",
    nameManager: "nguyen duc",
    phoneNumber:"",
    otherPhoneNumber:"",
    nameCompany: "",
    nameToolManager: "",
    street: "",
    moreAddress: "",
    country:"Việt Nam",
    city:"",
    portalCode: 0
}
export const aboutHotelSlice = createSlice({
    name:"aboutHotel",
    initialState: {
        value:Defaulvalue
    },
    reducers:{
        resetAboutHotel:(state)=>{
            state.value = Defaulvalue;
        },
        updateNameHotel: (state, action)=>{
            state.value.nameHotel = action.payload.value
        },
        updateStarHotel:(state, action)=>{
            state.value.star = action.payload.value
        },
        updatePropertyHotel:(state, action)=>{
            state.value.property = action.payload.value
        },
        updateNameManagerHotel:(state, action)=>{
            state.value.nameManager = action.payload.value
        },
        updatePhoneNumberHotel:(state, action)=>{
            state.value.phoneNumber = action.payload.value
        },
        updateOtherPhoneNumber:(state, action)=>{
            state.value.otherPhoneNumber = action.payload.value
        },
        updateNameCompanyHotel:(state, action)=>{
            state.value.nameCompany = action.payload.value
        },
        updateNameToolManagerHotel:(state, action)=>{
            state.value.nameToolManager = action.payload.value
        },
        updateStreetHotel:(state, action)=>{
            state.value.street = action.payload.value
        },
        updateMoreAddressHotel:(state, action)=>{
            state.value.moreAddress = action.payload.value
        },
        updateCountryHotel:(state, action)=>{
            state.value.country = action.payload.value
        },
        updateCityHotel:(state, action)=>{
            state.value.city = action.payload.value
        },
        updatePortalCodeHotel:(state, action)=>{
            state.value.portalCode = action.payload.value
        },
    }
})
export const {resetAboutHotel,updateNameHotel, updateStarHotel,updatePropertyHotel, updateNameManagerHotel, updatePhoneNumberHotel,updateOtherPhoneNumber, updateNameCompanyHotel, updateNameToolManagerHotel, updateStreetHotel, updateMoreAddressHotel,updateCountryHotel, updatePortalCodeHotel, updateCityHotel} = aboutHotelSlice.actions;
export default aboutHotelSlice.reducer