import { createSlice } from "@reduxjs/toolkit";
const Defaulvalue = {
                  typeRoom: "Phòng giường đôi",
                  nameRoom: "",
                  nameOption: "",
                  smoking: "",
                  numberRoom: 1,
                  bedsOption: [{typeBed: "Phòng đơn", number: 1}],
                  numberPeople: 0,
                  roomSize: 0,
                  price: 0
                }
export const roomHotelSlice = createSlice({
    name:"roomHotel",
    initialState: {
        value: Defaulvalue
    },
    reducers:{
          resetRoomHotel:(state)=>{
            state.value = Defaulvalue;
          },
          updateTypeRoom: (state, action)=>{
            state.value.typeRoom = action.payload.value
          },
          updateNameRoom: (state, action)=>{
            state.value.nameRoom = action.payload.value
          },
          updateNameOption: (state, action)=>{
            state.value.nameOption = action.payload.value
          },
          updateSmoking: (state, action)=>{
            state.value.smoking = action.payload.value
          },
          updateNumberRoom: (state, action)=>{
            state.value.numberRoom = action.payload.value
          },
          updateBedOption: (state, action)=>{
            state.value.bedsOption = action.payload.value
          },
          updateNumberPeople: (state, action)=>{
            state.value.numberPeople = action.payload.value
          },
          updateRoomSize: (state, action)=>{
            state.value.roomSize = action.payload.value
          },
          updatePrice: (state, action)=>{
            state.value.price = action.payload.value
          }
    }
})
export const {resetRoomHotel ,updateTypeRoom ,updateNameOption, updateNameRoom, updateSmoking, updateNumberPeople, updateNumberRoom,updateBedOption, updateRoomSize, updatePrice} = roomHotelSlice.actions;
export default roomHotelSlice.reducer