import React from "react";
import DayAccordion from "./DayAccordion";

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
 * ItineraryContainer Component
 *
 * A container component for displaying the full travel itinerary.
 * Features:
 * - Scrollable container that holds all days of the itinerary
 * - Organized with DayAccordion components for each day
 * - Sample data included for demonstration
 */
const ItineraryContainer = () => {
  // Sample itinerary data
  const itineraryData = [
    {
      day: 1,
      activities: [
        {
          id: "1-1",
          name: "Park Güell",
          timeRange: "9:00 AM - 11:00 AM",
          imageUrl:
            "https://images.unsplash.com/photo-1542708993627-b6e4e5092222?q=80&w=1000",
          siteUrl: "https://parkguell.barcelona/en",
        },
        {
          id: "1-2",
          name: "Sagrada Familia",
          timeRange: "1:00 PM - 3:00 PM",
          imageUrl:
            "https://images.unsplash.com/photo-1550644884-5c153c9a0300?q=80&w=1000",
          siteUrl: "https://sagradafamilia.org/en/",
        },
        {
          id: "1-3",
          name: "Dinner at El Nacional",
          timeRange: "7:30 PM - 9:30 PM",
          imageUrl:
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000",
          siteUrl: "https://www.elnacionalbcn.com/en/",
        },
      ],
    },
    {
      day: 2,
      activities: [
        {
          id: "2-1",
          name: "Barcelona Cathedral",
          timeRange: "10:00 AM - 11:30 AM",
          imageUrl:
            "https://images.unsplash.com/photo-1511527661048-7fe73d85e9b4?q=80&w=1000",
          siteUrl: "https://catedralbcn.org/",
        },
        {
          id: "2-2",
          name: "Picasso Museum",
          timeRange: "1:00 PM - 3:00 PM",
          imageUrl:
            "https://images.unsplash.com/photo-1575223970966-76ae61ee7838?q=80&w=1000",
          siteUrl: "http://www.museupicasso.bcn.cat/en",
        },
      ],
    },
    {
      day: 3,
      activities: [
        {
          id: "3-1",
          name: "Montserrat Day Trip",
          timeRange: "9:00 AM - 6:00 PM",
          imageUrl:
            "https://images.unsplash.com/photo-1586952205040-22514ffab1a1?q=80&w=1000",
          siteUrl: "https://www.montserratvisita.com/en/",
        },
      ],
    },
  ];

  return (
    <div
      className="p-4 overflow-y-auto"
      style={{ height: "calc(100vh - 48px)" }}
    >
      {itineraryData.map((day) => (
        <DayAccordion
          key={`day-${day.day}`}
          day={day.day}
          activities={day.activities}
        />
      ))}
    </div>
  );
};

export default ItineraryContainer;
