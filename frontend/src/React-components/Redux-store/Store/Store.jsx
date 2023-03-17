import { configureStore } from '@reduxjs/toolkit'
import visibleReducer from '../../Redux-slices/visibleSlice'
export const store = configureStore({
  reducer: {
    visibility:visibleReducer,
  },
})