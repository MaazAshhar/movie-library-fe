import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { playlistModelActions } from "../store/playlistModelSlice";
import { addMovieToPlaylist, getAllPlayList } from "../services/playlistServices";
import { playlistFormActions } from "../store/playlistFormSlice";
import CreatePlayListForm from "./CreatePlayListForm";

const PlaylistModal = ({movieName}) => {
  const openForm = useSelector((store) => store.playlistForm);
  const dispatch = useDispatch();
  const handleCreateNewPlaylist = () => {
    dispatch(playlistFormActions.toggleTrue());
  };
  const [allPlaylist, setAllPlaylist] = useState([]);
  const fetchPlaylist = async () => {
    const res = await getAllPlayList();
    setAllPlaylist(res.data.data);
  };
  useEffect(() => {
    fetchPlaylist();
  }, []);
  const handleCloseModal = () => {
    dispatch(playlistModelActions.toggleFalse());
  };
  const handleSubmit = async(event) =>{
    event.preventDefault();
    const bodySet = new Set();
    allPlaylist.forEach(playlist => {
        const element = document.getElementById(playlist._id);
        if (!element.hasAttribute('disabled') && element.checked) {
            bodySet.add(playlist.name);
        }
    });
    const playlistName = Array.from(bodySet);
    const body = {
        movieName,
        playlistName
    }
    await addMovieToPlaylist(body);
    handleCloseModal();
    alert(`${movieName} added to playlist`);
  }
  return (
    <>
      <div
        className={`${openForm?"opacity-0 ":""}absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-[20rem] hover:backdrop-blur-3xl rounded-lg overflow-hidden shadow-md bg-gray-800`}
      >
        <div className="flex justify-end">
          <button
            className="px-2 py-1 bg-red-600 hover:bg-red-500 hover:scale-105 duration-300"
            onClick={handleCloseModal}
          >
            <IoMdClose className="sm:text-2xl" />
          </button>
        </div>
        <div className="px-4 py-3 overflow-y-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            {allPlaylist.map((item, index) => {
              const checked = item.movies.some(
                (movie) => movie.toLowerCase() === movieName.toLowerCase()
              );
              return (
                <div key={index} className="flex flex-row gap-2 items-center">
                  {checked && (
                    <input
                      type="checkbox"
                      name={item._id}
                      id={item._id}
                      checked
                      disabled
                      value={item.name}
                    />
                  )}
                  {!checked && (
                    <input type="checkbox" name={item._id} id={item._id} value={item.name} />
                  )}
                  <label htmlFor={item._id}>{item.name}</label>
                </div>
              );
            })}
            <div className="flex flex-row justify-center gap-3">
              <button
                className="bg-green-300 w-fit px-3 py-1 rounded-md text-sm text-black hover:bg-green-200"
                type="submit"
              >
                Add
              </button>
              <button
                className="bg-purple-300 w-fit px-3 py-1 rounded-md text-sm text-black hover:bg-purple-200"
                onClick={handleCreateNewPlaylist}
                type="button"
              >
                Create New Playlist
              </button>
            </div>
          </form>
        </div>
      </div>
      {openForm && <CreatePlayListForm fetchPlaylist={fetchPlaylist} />}
    </>
  );
};

export default PlaylistModal;
