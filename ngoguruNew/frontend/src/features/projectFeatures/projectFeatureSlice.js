import {createSlice} from '@reduxjs/toolkit'


const projectFeatureSlice = createSlice({
    name:"projectFeature",
    initialState:{
        projectItem:[]
    },
    reducers:{
        addProjectItem:(state,action)=>{
            state.projectItem = action.payload
        }
    }
})

export const {addProjectItem} = projectFeatureSlice.actions
export default projectFeatureSlice.reducer