import { createSlice } from "@reduxjs/toolkit";
const Defaulvalue = {
    around:[""],
    coffeeAndRestaurent:[""],
    visitLocation:[""],
    naturalBeauty:[""],
    beachesInTheArea:[""],
    publicTranport:[""],
    airport:[""]
}
export const aroundHotelSlice = createSlice({
    name:"aroundHotel",
    initialState: {
        value:Defaulvalue
    },
    reducers:{
        resetAroundHotel:(state)=>{
            state.value = Defaulvalue;
        },
        updateAroundHotel: (state, action)=>{
            state.value.around = action.payload.value
        }
        ,updateCoffeeAndRestaurentHotel: (state, action)=>{
            state.value.coffeeAndRestaurent = action.payload.value
        }
        ,updateVisitLocationHotel: (state, action)=>{
            state.value.visitLocation = action.payload.value
        }
        ,updateNaturalBeautyHotel: (state, action)=>{
            state.value.naturalBeauty = action.payload.value
        }
        ,updateBeachesInTheAreaHotel: (state, action)=>{
            state.value.beachesInTheArea = action.payload.value
        }
        ,updatePublicTranportHotel: (state, action)=>{
            state.value.publicTranport = action.payload.value
        }
        ,updateAirportHotel: (state, action)=>{
            state.value.airport = action.payload.value
        }
    }
});
export const {resetAroundHotel, updateAroundHotel, updateAirportHotel, updateBeachesInTheAreaHotel, updateCoffeeAndRestaurentHotel, updateNaturalBeautyHotel, updatePublicTranportHotel, updateVisitLocationHotel} = aroundHotelSlice.actions;
export default aroundHotelSlice.reducer