import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const authSlice = createSlice({
  name: 'isAuth',
  initialState,
  reducers: {
    Authenticated: (state) => {
      state.value = true;
      localStorage.setItem('Auth',true);
    },
    noAuthenticated: (state) => {
      state.value = false;
      localStorage.setItem('Auth',false);
    },
  },
})
export const {Authenticated, noAuthenticated} = authSlice.actions;
export default authSlice.reducer;