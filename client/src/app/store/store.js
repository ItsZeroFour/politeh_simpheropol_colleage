'use client'

import { configureStore } from '@reduxjs/toolkit'
import { headerReducer } from './header/header.slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      header: headerReducer,
      // if simple name: use one word. if more one word: [someSlice.name]: someSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware(),
  })
}


