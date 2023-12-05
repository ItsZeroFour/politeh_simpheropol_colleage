import { createSlice } from "@reduxjs/toolkit";


const initialState = {}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.list = state.list || []
            state.list.push(action.payload)
        },
        removeItem: (state, action) => {
            return state.list.filter(product => product.id !== action.payload.id)
        }
    }
})


export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
