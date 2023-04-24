import { createSlice } from "@reduxjs/toolkit";
const Defaulvalue = {
  isCreditCard: false,
  creditCards: [],
  invoiceRecipient: "",
  isGenericAddress: true,
  address: "",
  isAvailability: true
}
export const settingsHotelSlice = createSlice({
          name:"settingsHotel",
          initialState: {
              value: Defaulvalue
          },
          reducers:{
          resetSettingsHotel:(state)=>{
            state.value = Defaulvalue;
          },
          updateIsCreditCard: (state, action)=>{
            state.value.isCreditCard = action.payload.value
          },
          updateCreditCards: (state, action)=>{
            state.value.creditCards = action.payload.value
          },
          updateInvoiceRecipient: (state, action)=>{
            state.value.invoiceRecipient = action.payload.value
          },
          updateIsGenericAddress: (state, action)=>{
            state.value.isGenericAddress = action.payload.value
          },
          updateAddress: (state, action)=>{
            state.value.address = action.payload.value
          },
          updateIsAvailability: (state, action)=>{
            state.value.isAvailability= action.payload.value
          },
    }
})
export const {resetSettingsHotel ,updateIsCreditCard, updateCreditCards, updateInvoiceRecipient, updateIsGenericAddress, updateAddress, updateIsAvailability} = settingsHotelSlice.actions;
export default settingsHotelSlice.reducer