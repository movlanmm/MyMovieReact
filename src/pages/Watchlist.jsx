import React from "react";
import WatchlistCard from "../components/WatchlistCard";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Watchlist() {
  const [watchList, setWatchlist] = useState([]);
  const [render, setrender] = useState(true);

  const getData = async () => {
    try {
      const req = await axios.get("http://localhost:3000/watchlist");
      const res = await req.data;
      setWatchlist(res);
    } catch (error) {
      console.log(error);
    }
  };

  function renderView() {
    if (watchList.length > 0) {
      return watchList.map((movie, index) => (
        <WatchlistCard
          key={index}
          movie={movie}
          setrender={setrender}
          render={render}
        />
      ));
    } else {
      return (
        <div className=" w-full h-dvh text-6xl flex items-center justify-center text-slate-300">
          Your Watchlist is Empty
        </div>
      );
    }
  }

  useEffect(() => {
    getData();
  }, [render]);

  return (
    <div className="container mx-auto flex flex-col gap-5 mb-20 min-h-dvh">
      {renderView()}
    </div>
  );
}
