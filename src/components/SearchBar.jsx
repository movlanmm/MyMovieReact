import axios from "axios";
import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function SearchBar({ movies, setMovies }) {
 
  return (
    <div className="flex items-center ps-2 p-1 rounded-xl max-w-[30%] bg-white flex-1">
      <HiMagnifyingGlass />
      <input
        type="search"
        placeholder="Search for a Movie..."
        className="flex-1 outline-none px-1"
        onChange={(e) => searchFilter(e.target.value)}
      />
    </div>
  );
}
