import React from "react";
import PlaylistModal from "../../components/PlaylistModal";
import Header from "../../components/Header";
import HomeBody from "../../components/HomeBody";
import { useSelector } from "react-redux";

const Home = () => {
    const openModal = useSelector(store=>store.playlistModel);
  
  return (
    <div>
      <Header />
      {/* <div className="flex flex-row flex-wrap gap-2 justify-center  items-center">
            <MovieTemplate />
            <MovieTemplate />
            <MovieTemplate />
            <MovieTemplate />
            <MovieTemplate />
        </div> */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 place-items-center mt-4">
        <MovieTemplate />
        <MovieTemplate />
        <MovieTemplate />
        <MovieTemplate />
        <MovieTemplate />
      </div> */}
      {/* <div className={styles.homeBody + " p-4"}>
        <h3 className={styles.homeBodyHeading +" text-3xl sm:text-5xl md:text-7xl mb-10 text-center"}>
          Welcome to Movie Library
        </h3>
        <div className="flex flex-row justify-center">
          <div className={styles.homeBodyContent +" w-fit flex flex-col gap-2 items-start"}>
            <p className="flex flex-row items-center justify-center gap-4 text-sm sm:text-2xl text-blue-200">
              <span>
                <FaArrowRightLong />
              </span>
              <span>Create your own Playlist</span>
            </p>
            <p className="flex flex-row items-center justify-center gap-4 text-sm sm:text-2xl text-blue-200">
              <span>
                <FaArrowRightLong />
              </span>
              <span>Share with your friends</span>
            </p>
          </div>
        </div>
      </div> */}
      <div className="mt-4">
        <HomeBody className={`${openModal ? "hidden": "block"}`} />
      {openModal && <PlaylistModal />}
      </div>
    </div>
  );
};

export default Home;
