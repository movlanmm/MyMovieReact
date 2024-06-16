import React from "react";
import { RiMovie2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";

export default function Header() {
  return (
    <div className=" w-full mx-auto px-20 py-6 flex justify-between items-center mb-10 shadow-2xl sticky top-0 z-20 bg-[#070f2b]">
      <a href="#" className="flex items-center gap-2 logo">
        <RiMovie2Line className="text-4xl text-white animate-spin-slow" />
        <h1 className="text-4xl font-bold text-white ">iMovie</h1>
      </a>
      <SearchBar />
      <nav className="w-1/4">
        <ul className="flex justify-between text-white font-semibold">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <a href="#" className="link">
              About
            </a>
          </li>
          <li>
            <Link to="/watchlist" className="link">
              Watchlist
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
