import axios from "axios";
import React from "react";
import { IoIosBookmark } from "react-icons/io";

export default function WatchlistCard({ movie,setrender,render }) {
  const removeData = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/watchlist/${id}`);
      await axios.patch(`http://localhost:3000/movies/${id}`, {
        add: false,
      });
    } catch (error) {
      console.log(error);
    }
    setrender(!render)
  };

  return (
    <div>
      <div className="card-body w-full h-[200px] flex items-start shadow-2xl rounded-2xl relative">
        <div className="card-img w-[20%] me-5 h-full ">
          <img src={movie.Poster} className="rounded-2xl h-full w-[100%]" />
        </div>
        <div className="card w-[60%]">
          <div className="card-info">
            <p className="text-2xl text-white mb-3">{movie.Title}</p>
            <ul className="card-gen flex text-slate-500 w-full">
              <li>{movie.Rated} /</li>
              <li>{movie.Runtime} /</li>
              <li>{movie.Genre}</li>
            </ul>
          </div>
          <div className="card-summary mt-3 flex flex-col justify-between">
            <div className="summary-head  flex justify-between items-center">
              <ul className="flex text-red-600 gap-2 text-sm">
                <li>IMDB: {movie.imdbRating}</li>
                <li>Date: {movie.Released}</li>
              </ul>
            </div>
            <div className="card-desc mt-2 text-slate-500 text-ellipsis overflow-scroll">
              {movie.Plot}
            </div>
            <div className="card-actors mt-2">
              <p className="movie-actors text-sm text-white">{movie.Actors}</p>
            </div>
          </div>
        </div>
        <button
          className="absolute top-4 left-4 text-white text-3xl"
          onClick={() => {
            removeData(movie.id);
          }}
        >
          <IoIosBookmark style={{ color: "red" }} />
        </button>
      </div>
    </div>
  );
}
