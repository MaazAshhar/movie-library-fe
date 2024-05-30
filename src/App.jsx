import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./pages/Login";
import Signup from './pages/Signup';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/private/Home';
import { Bounce, ToastContainer } from 'react-toastify';
import Playlist from './pages/private/Playlist';
import MoviesInPlaylist from './pages/MoviesInPlaylist';
import Search from './pages/private/Search';

const App = () => {
  return (
    <div className="bg-gray-600 min-h-screen text-white">
      <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/playlist/:playlistId" element={<MoviesInPlaylist />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App