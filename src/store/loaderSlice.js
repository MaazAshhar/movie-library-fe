import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: true,
  reducers: {
    toggleTrue: (state) => {
      state = true;
      return state;
    },
    toggleFalse: (state) => {
      state = false;
      return state;
    },
  },
});

export const loaderActions = loaderSlice.actions;
export default loaderSlice;