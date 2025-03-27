import React from "react";

/**
 * ActivityCard Component
 *
 * A horizontal card component to display an individual activity in the itinerary.
 * Features:
 * - Thumbnail image on the left
 * - Activity name and time range in the center
 * - "Visit site" button on the right
 * - Clean, subtle design with Airbnb color scheme
 *
 * @param {Object} props - Component props
 * @param {string} props.name - Name of the activity
 * @param {string} props.timeRange - Time range for the activity (e.g., "10:00 AM – 11:30 AM")
 * @param {string} props.imageUrl - URL for the thumbnail image
 * @param {string} props.siteUrl - URL for the "Visit site" button
 */
const ActivityCard = ({
  name,
  timeRange,
  imageUrl,
  siteUrl,
}: {
  name: string;
  timeRange: string;
  imageUrl: string;
  siteUrl: string;
}) => {
  return (
    <div className="flex items-center justify-between gap-4 p-4 rounded-md border border-gray-200 hover:bg-gray-50 transition">
      {/* Thumbnail image */}
      <div
        className="w-16 h-16 rounded-md bg-gray-200 flex-shrink-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Activity details */}
      <div className="flex-grow">
        <h3 className="font-semibold text-airbnb-dark">{name}</h3>
        <p className="text-sm text-airbnb-gray">{timeRange}</p>
      </div>

      {/* Visit site button */}
      <a
        href={siteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm rounded-full px-3 py-1 border border-gray-300 hover:bg-gray-100 transition cursor-pointer text-airbnb-dark"
      >
        Visit site
      </a>
    </div>
  );
};

export default ActivityCard;
