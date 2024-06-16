import React from "react";
import { IoIosBookmark } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function MovieCard({ movie, setrender, render }) {
  const [watchList, setWathlist] = useState([]);

  const getWatchlist = async () => {
    try {
      const req = await axios.get("http://localhost:3000/watchlist", {
        params: {
          id: movie.id,
        },
      });
      const res = await req.data;
      setWathlist(...res);
    } catch (error) {
      console.log(error);
    }
  };

  const postData = async (data) => {
    if (watchList) {
      try {
        await axios.delete(`http://localhost:3000/watchlist/${data.id}`);
        await axios.patch(`http://localhost:3000/movies/${data.id}`, {
          add: false,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.post("http://localhost:3000/watchlist", data);
        await axios.patch(`http://localhost:3000/movies/${movie.id}`, {
          add: true,
        });
      } catch (error) {
        console.log(error);
      }
    }

    setrender(!render);
  };

  const upcomingRender = () => {
    if (movie.ComingSoon) {
      return (
        <div className="text-sm px-1 text-white font-semibold bg-green-500 rounded-full absolute top-4 left-2">
          Coming Soon
        </div>
      );
    } else {
      return;
    }
  };

  useEffect(() => {
    getWatchlist();
  }, [render]);

  return (
    <div>
      <div className="card-body w-[400px] h-[600px] shadow-2xl pb-3 rounded-2xl relative">
        <Link to={`/details/${movie.id}`}>
          <div className="card-img w-full h-[250px] ">
            <img
              src={movie.Poster}
              className="rounded-t-2xl h-full w-full object-fill"
            />
          </div>
          <div className="card mt-2 p-5">
            <div className="card-info">
              <p className="text-2xl text-white mb-3">{movie.Title}</p>
              <ul className="card-gen flex text-slate-500 w-full truncate">
                <li>{movie.Rated} /</li>
                <li>{movie.Runtime} /</li>
                <li>{movie.Genre}</li>
              </ul>
            </div>
            <div className="card-summary mt-3 flex flex-col justify-between">
              <div className="summary-head  flex justify-between items-center">
                <span className="text-xl text-white">Summary</span>
                <ul className="flex text-red-600 gap-2 text-sm">
                  <li>IMDB:{movie.imdbRating}</li>
                  <li>Date:{movie.Released}</li>
                </ul>
              </div>
              <div className="card-desc mt-2 text-slate-500 h-[100px] overflow-scroll">
                {movie.Plot}
              </div>
              <div className="card-actors mt-2">
                <p className="movie-actors text-sm text-white">
                  {movie.Actors}
                </p>
              </div>
            </div>
          </div>
        </Link>
        <button
          className="absolute top-4 right-4 text-white text-3xl"
          onClick={() => {
            postData(movie);
          }}
        >
          <IoIosBookmark style={{ color: movie.add ? "red" : "white" }} />
        </button>
        {upcomingRender()}
      </div>
    </div>
  );
}
