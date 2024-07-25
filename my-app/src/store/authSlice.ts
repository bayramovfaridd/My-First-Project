import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: string | null;
  userName: string | null;
}

const initialState: AuthState = {
  userName: null,
  user: null,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      
      state.user = action.payload;
      state.userName=action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
