import {createSlice} from "@reduxjs/toolkit"

const authenFeaturesSlice = createSlice({
    name:"authenFeaturesSlice",
    initialState:{
        isAuthenUser:false,
        isAdmin:false,
        isAuthenClient:false
    },
    reducers:{
        addAuthen:(state,action)=>{
            state.isAuthenUser = action.payload
        },
        addAuthenAdmin:(state,action)=>{
            state.isAdmin = action.payload
        },
        addAuthenClient:(state,action)=>{
            state.isAuthenClient = action.payload
        }
    }
})

export const {addAuthen, addAuthenAdmin,addAuthenClient} = authenFeaturesSlice.actions

export default authenFeaturesSlice.reducer