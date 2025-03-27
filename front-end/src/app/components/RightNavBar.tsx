import React from "react";

/**
 * RightNavBar Component
 *
 * A minimal navigation bar for the right panel of the travel app.
 * Features:
 * - "Itinerary" label on the left
 * - Map icon button on the right
 * - Clean separation with bottom border
 * - Follows Airbnb color scheme
 */
const RightNavBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 bg-white">
      {/* Itinerary label */}
      <h2 className="text-lg font-semibold text-[#484848]">Itinerary</h2>

      {/* Map icon button */}
      <button
        className="hover:bg-gray-100 rounded-full p-2 transition-colors text-[#484848]"
        aria-label="View map"
      >
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
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6-3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default RightNavBar;
