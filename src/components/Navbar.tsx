"use client";

import React from "react";

// Map nav items to the correct section IDs
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
      <div className="flex justify-between items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-3xl border border-white/30 relative overflow-hidden">
        {/* Logo */}
        <div
          className="text-black font-bold text-lg cursor-pointer"
          onClick={() => handleScroll("Home")}
        >
          Tanveer Ahmed
        </div>

        {/* Nav Menu */}
        <ul className="flex gap-6 text-black font-medium">
          {Object.keys(navMap).map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-yellow-400 transition-colors"
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
