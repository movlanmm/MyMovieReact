import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Details() {
  const { productId } = useParams();

  const [movie, setMovie] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/movies", {
        params: {
          id: productId,
        },
      });
      const req = await res.data;
      setMovie(...req);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-start w-[60%] mb-36">
      <iframe
        width="100%"
        height="500px"
        src={movie.trailer}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="movie-info mt-5">
        <div className="overview text-white">
          <h1 className="font-bold text-3xl">Overiew</h1>
          <p className="text-slate-400">{movie.Plot}</p>
          <div className="actors mt-5">
            <h1 className="font-bold text-3xl">Actors</h1>
            <p className="text-slate-400">{movie.Actors}</p>
          </div>
          <div className="genres mt-5">
            <h1 className="font-bold text-3xl">Genre</h1>
            <ul className="flex gap-3 mt-5">
              {movie.Genre}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
