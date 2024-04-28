import {createSlice} from '@reduxjs/toolkit'


const galleryFeatureSlice = createSlice({
    name:"galleryFeature",
    initialState:{
        galleryItem:[]
    },
    reducers:{
        addGalleryItem:(state,action)=>{
            
            state.galleryItem = action.payload
        }
    }
})

export const {addGalleryItem} = galleryFeatureSlice.actions
export default galleryFeatureSlice.reducer