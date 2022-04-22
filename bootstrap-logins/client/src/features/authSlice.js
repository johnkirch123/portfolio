import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  value: {}
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchUser: (state = null, action) => {
      state.value.push(action.payload || false);
    }
  }
});

export const { fetchUser } = authSlice.actions;
export default authSlice.reducer;
