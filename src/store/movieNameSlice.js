import { createSlice } from "@reduxjs/toolkit";

const movieNameSlice = createSlice({
  name: "movieNameState",
  initialState: "",
  reducers: {
    change: (state, value) => {
      state = value;
      return state;
    },
    makeEmpty: (state) => {
      state = "";
      return state;
    },
  },
});

export const movieNameStateActions = movieNameSlice.actions;
export default movieNameSlice;