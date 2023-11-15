import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
      //   console.log("debug help1");
      //   console.log(state.isLoggedIn);
      //   console.log("debug help2");
    },
    logout(state) {
      localStorage.removeItem("userId");
      state.isLoggedIn = false;
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
