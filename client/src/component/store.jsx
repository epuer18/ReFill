import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, user: null }, // Updated initial state
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload; // Updated to store user data
    },
    logout(state) {
      localStorage.removeItem("userId");
      state.isLoggedIn = false;
      state.user = null; // Clear user data on logout
    },
  },
});

export const authActions = authSlice.actions;

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
