import React from "react";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { playlistFormActions } from "../store/playlistFormSlice";
import { useNavigate } from "react-router-dom";
import CreatePlayListForm from "./CreatePlayListForm";

const PlaylistTemplate = ({ title, movieCount, playlistId, fetchPlaylist }) => {
  const navigate = useNavigate();
  const openForm = useSelector((store) => store.playlistForm);
  const dispatch = useDispatch();
  const handleCreateNewPlaylist = () => {
    dispatch(playlistFormActions.toggleTrue());
  };
  const handlePlaylistClick = async () => {
    if (playlistId) {
      navigate(`/playlist/${playlistId}`);
    } else {
      handleCreateNewPlaylist();
    }
  };
  return (
    <>
      <div
        onClick={handlePlaylistClick}
        className="flex flex-col gap-2 w-60 h-28 bg-gradient-to-tl from-gray-800 to-blue-300 justify-center items-center rounded-lg hover:cursor-pointer"
      >
        <div className={`${title ? "w-fit" : "hidden"}`}>
          <h5 className="text-xl text-red-600 font-bold">{title}</h5>
          <p className="text-gray-200 text-lg">movie count : {movieCount}</p>
        </div>
        <div className={`${title ? "hidden" : "w-fit"}`}>
          <button className="flex flex-col gap-2 items-center">
            <div className="w-fit rounded-full p-2 border border-dashed">
              <MdOutlineCreateNewFolder />
            </div>
            <p className="text-sm">Create New Playlist</p>
          </button>
        </div>
      </div>
      {openForm && !playlistId && <CreatePlayListForm fetchPlaylist={fetchPlaylist} />}
    </>
  );
};

export default PlaylistTemplate;
