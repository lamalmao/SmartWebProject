import { configureStore } from '@reduxjs/toolkit'
import visibleReducer from '../../Redux-slices/visibleSlice'
import authSlise from '../../Redux-slices/authSlise'
export const store = configureStore({
  reducer: {
    visibility:visibleReducer,
    isAuth:authSlise
  },
})
