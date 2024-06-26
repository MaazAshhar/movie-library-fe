import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getAllPlayList,
  getPlaylistById,
  removeMovieFromPlaylist,
} from "../services/playlistServices";
import { isLoggedIn } from "../auth";
import Header from "../components/Header";
import MovieTemplate from "../components/MovieTemplate";
import { useDispatch, useSelector } from "react-redux";
import { loaderActions } from "../store/loaderSlice";

const MoviesInPlaylist = () => {
  const params = useParams();
  const loader = useSelector((store) => store.loader);
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false);
  const [removeIcon, setRemoveIcon] = useState(false);
  const [playlistName, setPlaylistName] = useState(null);
  const [movielist, setMovielist] = useState([]);
  const fetchMovies = async () => {
    const playlistId = params.playlistId;
    setLoggedIn(isLoggedIn());
    getPlaylistById(playlistId).then((res) => {
      if (res.data && res.data.data) {
        setPlaylistName(res.data.data.name);
        setMovielist(res.data.data.movies);
      } else {
        setPlaylistName(null);
        setMovielist([]);
      }
      dispatch(loaderActions.toggleFalse());
    });
  };
  const checkForRemoveIcon = async () => {
    if (!isLoggedIn()) {
      setRemoveIcon(false);
      return;
    }
    const playlistId = params.playlistId;
    const response = await getAllPlayList();
    const allPlaylistOfCurrentUser = response?.data?.data;
    if (
      allPlaylistOfCurrentUser?.some((element) => element._id === playlistId)
    ) {
      setRemoveIcon(true);
    }
  };
  const handleRemove = async (movieName) => {
    const body = {
      playlistName,
      movieName,
    };
    const res = await removeMovieFromPlaylist(body);
    await fetchMovies();
  };
  useEffect(() => {
    fetchMovies();
    checkForRemoveIcon();
    return () => {
      dispatch(loaderActions.toggleTrue());
    };
  }, []);
  return (
    <>
      {loggedIn && <Header />}
      <div className="mt-4">
        <h3 className="font-lobster text-xl sm:text-3xl md:text-5xl mb-10 text-center">
          {playlistName && <>{playlistName}</>}
          {!playlistName && !loader && <>Access denied</>}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 place-items-center mt-4">
          {playlistName &&
            movielist.map((movie, i) => (
              <MovieTemplate
                removeIcon={removeIcon}
                key={i}
                movieData={movie.data}
                handleRemove={handleRemove}
              />
            ))}
        </div>
        {playlistName && movielist.length === 0 && (
          <h3 className="font-lobster text-lg sm:text-2xl md:text-3xl mb-10 text-center">
            Empty Playlist
          </h3>
        )}
      </div>
      {loader && (
        <div className="flex flex-row justify-center">
          <svg
            aria-hidden="true"
            className="w-24 h-24 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default MoviesInPlaylist;
