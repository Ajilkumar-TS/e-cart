import { createSlice } from "@reduxjs/toolkit"

export const cartSlice =createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        additemtocart :(state,actions)=>{
            state.push(actions.payload)
        },
        removecartitem :(state,actions)=>{
         return state.filter((item)=>item.id != actions.payload)
        },
        emptycart :(state)=>{
            return state =[]
        }
}
})
export const {additemtocart,emptycart} = cartSlice.actions

export const {removecartitem}= cartSlice.actions

export default cartSlice.reducer