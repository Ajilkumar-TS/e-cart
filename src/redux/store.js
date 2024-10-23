import { configureStore } from "@reduxjs/toolkit";
import  wishlistSlice  from "./slice/wishlistSlice";
import  cartSlice  from "./slice/cart.Slice";




const store = configureStore({
   reducer:{
        wishlist : wishlistSlice,
        CartItem : cartSlice
        
    }
})
export default store