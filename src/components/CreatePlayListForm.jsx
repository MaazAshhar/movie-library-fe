import React, { useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { playlistFormActions } from '../store/playlistFormSlice';
import { createEmptyPlaylist } from '../services/playlistServices';

const CreatePlayListForm = ({fetchPlaylist}) => {
    const playlistName = useRef();
    const isPrivate = useRef();
    const openForm = useSelector(store=>store.playlistForm);
    const dispatch = useDispatch();
    const handleClose = ()=>{
      dispatch(playlistFormActions.toggleFalse());
    }
    const handleSubmit = async(event) => {
        event.preventDefault();
        const body = {
            playlistName: playlistName.current.value,
            isPrivate: isPrivate.current.checked
        };
        const res = await createEmptyPlaylist(body);
        if(!res){
            alert(`Playlist with name ${body.playlistName} already exist`);
        }
        await fetchPlaylist();
        handleClose();
    }
    return (
      <div>
        {openForm && (
          <div className="rounded-lg overflow-hidden absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] sm:w-[25rem] pb-4 bg-gray-800">
            <div className="flex justify-end">
              <button
                className="px-2 py-1 bg-red-600 hover:bg-red-500 hover:scale-105 duration-300"
                onClick={handleClose}
              >
                <IoMdClose className="sm:text-2xl" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 px-3 py-4'>
                <div className='flex flex-col'>
                    <label htmlFor="playlistName">Playlist Name</label>
                    <input ref={playlistName} className='bg-inherit border rounded p-2' type="text" name="playlistName" id="playlistName" required placeholder='Enter playlist name' />
                </div>
                <div className="flex flex-row gap-2 item-center">
                    <input ref={isPrivate} className='' type="checkbox" name="isPrivate" id="isPrivate" />
                    <label htmlFor="isPrivate my-auto">Private</label>
                </div>
                <button className='bg-green-300 w-fit px-3 py-2 rounded-md text-black hover:bg-green-200 self-center' type="submit">Create</button>
            </form>
          </div>
        )}
      </div>
    );
}

export default CreatePlayListForm