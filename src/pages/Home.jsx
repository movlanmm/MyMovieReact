import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import Pagenation from "../components/Pagenation";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [render, setrender] = useState(false);
  const [start, setstart] = useState(0);
  const [end, setend] = useState(6);

  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/movies?_start=${start}&_end=${end}`
      );
      const req = await res.data;
      setMovies(req);
    } catch (err) {
      console.log(err);
    }
  };

  const getSeries = async () => {
    try {
      const req = await axios.get("http://localhost:3000/movies", {
        params: {
          Type: "series",
        },
      });
      setSeries(req.data);
    } catch (error) {
      console.log(error);
    }
  };

  const duplicate = [...series, ...series];

  useEffect(() => {
    getSeries();
  }, [render]);

  useEffect(() => {
    getData();
  }, [render, start]);

  return (
    <div className="mb-36">
      <div className="container mx-auto text-4xl text-white font-bold mb-5">
        Series
      </div>
      <div className="overflow-hidden">
        <div className="flex  animate-scroll gap-10">
          {duplicate.map((series, index) => (
            <MovieCard
              key={index}
              movie={series}
              setrender={setrender}
              render={render}
            />
          ))}
        </div>
      </div>
      <div className="container mx-auto text-4xl text-white font-bold mb-5">
        All
      </div>
      <div className="grid grid-cols-3 gap-10 mx-auto container">
        {movies.map((movie, index) => {
          return (
            <MovieCard
              key={index}
              movie={movie}
              setrender={setrender}
              render={render}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-center mt-10">
        <Pagenation
          start={start}
          setstart={setstart}
          end={end}
          setend={setend}
        />
      </div>
    </div>
  );
}
