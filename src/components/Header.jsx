import React, { useRef, useState } from "react";
import { IoMdMenu, IoMdSearch } from "react-icons/io";
import { doLogout } from "../auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { movieNameStateActions } from "../store/movieNameSlice";

const Header = () => {
    const movie = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = (event) => {
      event.preventDefault();
      movie.current.value = movie.current.value.trim();
      if(movie.current.value === '')return false;
      dispatch(movieNameStateActions.change(movie.current.value));
      movie.current.value="";
      navigate('/search');
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  // log out current user
  const handleLogOut = ()=>{
    doLogout(()=>navigate('/'));
  }
  const navigationClick = (path)=>{
    navigate(path);
  }
  return (
    <>
      {/* search section */}
      <div className="p-4 bg-gray-800 flex flex-row justify-between items-center relative">
        {/* Menu Section for large Screen */}
        <div className="hidden sm:flex flex-row gap-4">
          <p className="hover:text-red-500 hover:scale-105 duration-300 hover:cursor-pointer" onClick={()=>navigationClick('/home')}>
            Home
          </p>
          <p className="hover:text-red-500 hover:scale-105 duration-300 hover:cursor-pointer" onClick={()=>navigationClick('/playlist')}>
            My Playlist
          </p>
        </div>
        {/* Menu Section for small screen */}
        <div onClick={handleMenuClick} className="sm:hidden">
        <IoMdMenu className="text-2xl" />
        </div>
        {/* search and log out section  */}
        <div className="flex flex-row gap-4">
          <form onSubmit={handleClick} className="flex flex-row gap-4">
            <div className="group relative">
              <input
                className="p-2 bg-inherit border rounded-md w-fit sm:w-[20rem]"
                type="text"
                name="movie"
                ref={movie}
                placeholder="Enter movie name"
                required
              />
              <button
                type="submit"
                className="absolute hover:rotate-90 hover:text-red-500 duration-300 top-1/2 -translate-y-1/2 right-2"
              >
                <IoMdSearch className="text-3xl" />
              </button>
            </div>
          </form>
          <button onClick={handleLogOut} className="hidden sm:block bg-red-600 text-white hover:scale-105 hover:bg-red-500 duration-300 rounded-md px-4 py-2">
            Log Out
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col gap-4 px-4 py-3 bg-gray-800 ">
          <p className="hover:text-red-500 hover:scale-105 duration-300" onClick={()=>navigationClick('/home')}>
            Home
          </p>
          <p className="hover:text-red-500 hover:scale-105 duration-300" onClick={()=>navigationClick('/playlist')}>
            My Playlist
          </p>
          <button onClick={handleLogOut} className="w-fit text-sm bg-red-600 text-white hover:scale-105 hover:bg-red-500 duration-300 rounded-md px-4 py-2">
            Log Out
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
