import { configureStore } from "@reduxjs/toolkit";
import playlistFormSlice from "./playlistFormSlice";
import playlistModelSlice from "./playlistModelSlice";
import movieNameSlice from "./movieNameSlice";
import loaderSlice from "./loaderSlice";

const appStore = configureStore({
  reducer: {
    playlistForm: playlistFormSlice.reducer,
    playlistModel: playlistModelSlice.reducer,
    movieNameState : movieNameSlice.reducer,
    loader : loaderSlice.reducer,
  },
});

export default appStore;
