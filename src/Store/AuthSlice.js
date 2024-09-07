import { createSlice } from "@reduxjs/toolkit";

const initialState={ status:false,mode:false}


const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        toggle:(state,action)=>{state.status=!state.status},
        toggleMode:(state,action)=>{state.mode=!state.mode},
        
    }
})

export const {toggle,toggleMode} =authSlice.actions
export default authSlice.reducer

