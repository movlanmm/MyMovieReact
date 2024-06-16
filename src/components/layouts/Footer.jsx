import React from "react";
import { CiInstagram } from "react-icons/ci";
import { PiFacebookLogoThin } from "react-icons/pi";
import { PiTelegramLogoThin } from "react-icons/pi";

export default function () {
  return (
    <div className="w-screen bg-slate-300 bg-opacity-90 px-10 py-5 mt-20">
      <div className="socials flex w-full gap-6 text-3xl items-center justify-center mb-8">
        <CiInstagram />
        <PiFacebookLogoThin />
        <PiTelegramLogoThin />
      </div>
      <div className="links">
        <ul className="flex w-full items-center justify-center gap-10 font-thin">
          <li>
            <a href="#" className="link">Home</a>
          </li>
          <li>
            <a href="#" className="link">About</a>
          </li>
          <li>
            <a href="#" className="link">Service</a>
          </li>
          <li>
            <a href="#" className="link">Team</a>
          </li>
          <li>
            <a href="#" className="link">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
