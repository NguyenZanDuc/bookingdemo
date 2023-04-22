import { createSlice } from "@reduxjs/toolkit";

export const settingsHotelSlice = createSlice({
    name:"settingsHotel",
    initialState: {
        value:{
           isCreaditCard: true,
           creditCards: [],
           invoiceRecipient: "",
           isGenericAddress: true,
           address: "",
           isAvailability: true
        }
    },
    reducers:{
          updateIsCreaditCard: (state, action)=>{
            state.value.isCreaditCard = action.payload.value
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
export const {updateIsCreaditCard, updateCreditCards, updateInvoiceRecipient, updateIsGenericAddress, updateAddress, updateIsAvailability} = settingsHotelSlice.actions;
export default settingsHotelSlice.reducer