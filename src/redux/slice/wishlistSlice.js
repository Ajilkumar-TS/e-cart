import { createSlice } from "@reduxjs/toolkit"

export const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
       addwishlistitem : (state,action)=>{
        state.push(action.payload)
       },
       removewishlisitem :(state,action)=>{
        return state.filter((item)=>item.id != action.payload)
       }
        
    }
})
export const { addwishlistitem } = wishlistSlice.actions

export const { removewishlisitem } = wishlistSlice.actions

export default wishlistSlice.reducer