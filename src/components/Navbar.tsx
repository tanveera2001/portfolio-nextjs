"use client";

import React from "react";

const navMap: { [key: string]: string } = {
  Home: "hero",
  Skills: "techstack",
  Projects: "featured-project",
  Experience: "experience",
  About: "about",
  Contact: "contact",
};

const Navbar = () => {
  const handleScroll = (section: string) => {
    const id = navMap[section];
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-10 left-1/2 -translate-x-1/2 w-[38%] max-w-6xl z-50">
      <div
        className="
          flex justify-between items-center px-6 py-3
          bg-white/60 backdrop-blur-xl
          rounded-3xl
          border border-slate-200/70
          shadow-[0_10px_40px_rgba(15,23,42,0.12)]
          transition-all duration-300 ease-out
          hover:-translate-y-px
          hover:shadow-[0_14px_50px_rgba(15,23,42,0.16)]
        "
      >
        {/* Logo */}
        <div
          className="text-slate-900 font-semibold text-lg cursor-pointer hover:text-indigo-500 transition-colors"
          onClick={() => handleScroll("Home")}
        >
          Tanveer Ahmed
        </div>

        {/* Nav Menu */}
        <ul className="flex gap-6 text-slate-700 font-medium">
          {Object.keys(navMap).map((item) => (
            <li
              key={item}
              className="
                cursor-pointer
                transition-colors duration-200
                hover:text-indigo-500
              "
              onClick={() => handleScroll(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
