import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addCart:(state,action)=>{
            state.items.push(action.payload)
        },
        clearCart:(state,action)=>{
            state.items=[]
        }
    }

})

export const {addCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;