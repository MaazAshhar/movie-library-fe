import { createSlice } from "@reduxjs/toolkit";

const playlistModelSlice = createSlice({
  name: "playlistModel",
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

export const playlistModelActions = playlistModelSlice.actions;
export default playlistModelSlice;
