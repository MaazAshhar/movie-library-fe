import { createSlice } from "@reduxjs/toolkit";

const playlistFormSlice = createSlice({
  name: "playlistForm",
  initialState: false,
  reducers: {
    toggle: (state) => {
      return (state = !state);
    },
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

export const playlistFormActions = playlistFormSlice.actions;
export default playlistFormSlice;
