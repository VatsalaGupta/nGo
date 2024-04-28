import {createSlice} from '@reduxjs/toolkit'


const newsFeaturesSlice = createSlice({
    name:"news",
    initialState:{
        // latestNotification:[{news:"Welcome to NgoGuru."},{news:"News Repeat."}],
        updationList:{
            updationList1:[],
            latestNotification:[]
        },
        // [{listItem:"List update data 1"},{listItem:"List update data 2"},{listItem:"List update data 3"},{listItem:"List update data 4"}]
    },
    reducers:{
        addList:(state,action)=>{
            // console.log(action.payload)
            state.updationList.updationList1 = action.payload
        },
        addNotification:(state,action)=>{
            state.updationList.latestNotification = action.payload
        }
    }

})

export const {addList,addNotification} = newsFeaturesSlice.actions;
export default newsFeaturesSlice.reducer