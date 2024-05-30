import React from 'react';
import styles from "./styles/HomeBody.module.css";
import { FaArrowRightLong } from 'react-icons/fa6';

const HomeBody = ({className}) => {
  return (
    <div className={`${className}`}>
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
      </div>
  )
}

export default HomeBody