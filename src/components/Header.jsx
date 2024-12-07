import React from "react";
import { assets } from "../assets/assets";

function Header() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 py-10 md:py-[10vw]">
        <p className="text-3xl md:text-5xl lg:text-6xl text-white md-8 font-semibold leading-tight text-center md:text-left">
          Simplifying Care, <br className="hidden sm:block" />
          One Click at a Time.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 text-white text-md font-light text-center md:text-left">
          <img
            className="w-20 md:w-28"
            src={assets.group_profiles}
            alt="Profiles"
          />
          <p>
            Discover a wide range of trusted doctors, view their profiles,{" "}
            <br className="hidden sm:block" />
            and schedule your appointments—all in one seamless experience.
          </p>
        </div>
        <a
          className="flex items-center gap-2 bg-white px-6 py-2 md:px-8 md:py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-all duration-300"
          href="#Filter"
        >
          Book Appointment
          <img className="w-4" src={assets.arrow_icon} alt="Arrow Icon" />
        </a>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 relative mt-6 md:mt-0">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.homedoctor2}
          alt="Header Illustration"
        />
      </div>
    </div>
  );
}

export default Header;
