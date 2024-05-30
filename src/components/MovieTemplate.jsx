import React, { useState } from 'react';
import { CiMenuKebab } from 'react-icons/ci';
import { FaStar } from "react-icons/fa";
import { IoMdClose } from 'react-icons/io';

const MovieTemplate = ({movieData,removeIcon,handleRemove}) => {
  const [expand,setExpand] = useState(false);
  const handleClose = ()=>{
    setExpand(false);
  }
  const handleOpen = ()=>{
    setExpand(true);
  }
  return (
    <div className="flex flex-col w-72 bg-gray-800 overflow-hidden rounded-lg shadow-md relative">
      {/* remove icon */}
      {
        removeIcon && <div className='z-10 absolute right-2 top-2 flex flex-col gap-1 items-end'>
          {expand && <IoMdClose className={`text-2xl hover:cursor-pointer`} onClick={handleClose} />}
          {!expand && <div><CiMenuKebab className={`text-2xl hover:cursor-pointer hover:text-red-500`} onClick={handleOpen} /></div>}
          <div onClick={()=>handleRemove(movieData.Title)} className={`${expand ? "block " : "hidden "}hover:cursor-pointer hover:text-red-500`} >Remove From Playlist</div>
        </div>
      }
      {/* poster */}
      <img className={`w-full h-[360px] ${expand ? "opacity-20" : ""}`} src={movieData.Poster} alt="Something wrong" />
      {/* movie details */}
      <div className="flex flex-col p-4 gap-1">
        <div className="flex flex-row justify-between">
          <h4 className="font-semibold text-xl">{movieData.Title}</h4>
          <p>{movieData.Runtime}</p>
        </div>
        <div className="flex flex-row gap-2">
            {movieData.Genre.split(' ').map((genre,index)=>(
                <p className="text-gray-300 text-sm" key={index}>{genre}</p>
            ))}
        </div>
        <div className="flex flex-row gap-2 items-center">
            <FaStar className="text-yellow-300" />
            <span>{movieData.imdbRating}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieTemplate