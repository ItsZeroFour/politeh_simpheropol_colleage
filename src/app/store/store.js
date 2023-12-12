'use client'

import { configureStore } from '@reduxjs/toolkit'
import { headerReducer } from './header/header.slice'
import { postsApi } from './header/api/home/posts.api'

export const makeStore = () => {
  return configureStore({
    reducer: {
      header: headerReducer,
      [postsApi.reducerPath]: postsApi.reducer
      // if simple name: use one word. if more one word: [someSlice.name]: someSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postsApi.middleware),
  })
}


