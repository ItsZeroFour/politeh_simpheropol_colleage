const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
    hovered: [],
}

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        addHovered: (state, action) => {
            return state.hovered.push(action.payload)
        },

        removeHovered: (state, action) => {
            return state.hovered.filter(link => link === action.payload)
        },
    },
})

export const headerReducer = headerSlice.reducer
export const headerActions = headerSlice.actions

