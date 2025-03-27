import React, { useState } from "react";
import ActivityCard from "./ActivityCard";

/**
 * Activity Type
 * Defines the structure of an activity in the itinerary
 */
type Activity = {
  id: string;
  name: string;
  timeRange: string;
  imageUrl: string;
  siteUrl: string;
};

/**
 * DayAccordion Component
 *
 * An accordion-style component for displaying a single day in the travel itinerary.
 * Features:
 * - Collapsible section with day label as toggle
 * - Shows/hides activities for the day
 * - Visual indicators for expanded/collapsed state
 * - Smooth transition animations
 *
 * @param {Object} props - Component props
 * @param {number} props.day - The day number (1, 2, 3, etc.)
 * @param {Activity[]} props.activities - List of activities for this day
 */
const DayAccordion = ({
  day,
  activities,
}: {
  day: number;
  activities: Activity[];
}) => {
  // State to track if this day's content is expanded
  const [isExpanded, setIsExpanded] = useState(day === 1); // First day expanded by default

  return (
    <div className="mb-4 bg-white rounded-md shadow-sm overflow-hidden">
      {/* Day header (clickable to toggle) */}
      <button
        className="w-full p-4 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <h2 className="text-base font-semibold text-[#484848]">Day {day}</h2>

        {/* Chevron icon that rotates based on expanded state */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-[#484848] transition-transform ${
            isExpanded ? "transform rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Collapsible content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 pt-0 space-y-3">
          {activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              name={activity.name}
              timeRange={activity.timeRange}
              imageUrl={activity.imageUrl}
              siteUrl={activity.siteUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DayAccordion;
