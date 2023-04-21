import { createSlice } from "@reduxjs/toolkit";

export const clickValueSlice = createSlice({
    name:"clickValue",
    initialState: {
        value: ""
    },
    reducers:{
        setClickValue: (state, action)=>{
            state.value = action.payload.value
        }
    }
})
export const {setClickValue} = clickValueSlice.actions;
export default clickValueSlice.reducer