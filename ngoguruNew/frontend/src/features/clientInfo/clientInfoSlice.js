import {createSlice} from "@reduxjs/toolkit"

const clientInfoSlice = createSlice({
    name:"clientInfo",
    initialState:{
        clientInfoDeatils:{}
    },
    reducers:{
        addClientInfoDetails:(state,action)=>{
            // console.log(action.payload)
            state.clientInfoDeatils = action.payload
        }
    }
})

export const {addClientInfoDetails} = clientInfoSlice.actions

export default clientInfoSlice.reducer