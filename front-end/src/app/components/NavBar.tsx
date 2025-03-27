import React from "react";

const NavBar = () => {
  return (
    <div className="sticky top-0 flex items-center justify-between px-4 py-3 bg-white shadow-sm z-10">
      {/* Back button with arrow icon */}
      <button className="p-1 text-[#484848] hover:text-[#FF5A5F] transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>

      {/* Main title */}
      <h1 className="text-lg font-bold text-[#484848]">
        Must-See Destinations in Spain
      </h1>

      {/* Empty div to maintain spacing after removing the Chat button */}
      <div className="w-5"></div>
    </div>
  );
};

export default NavBar;
