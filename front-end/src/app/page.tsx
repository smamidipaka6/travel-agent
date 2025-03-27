"use client";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import ContentContainer from "./components/ContentContainer";
import ChatInput from "./components/ChatInput";
import RightNavBar from "./components/RightNavBar";
import ItineraryContainer from "./components/ItineraryContainer";

/**
 * Main Page Component
 *
 * Renders the travel agent application with a two-pane layout:
 * - Left pane: Chat interface with navigation, content display, and input
 * - Right pane: Itinerary display with collapsible day sections
 *
 * Features:
 * - State management for user-AI messages
 * - Responsive design that adapts to different screen sizes
 * - Implements the Airbnb color scheme throughout the UI
 * - Clean separation of components for better maintainability
 */
const Page = () => {
  // State to store conversation messages
  const [messages, setMessages] = useState<string[]>([]);

  /**
   * Handles sending new messages
   * Adds the user message to the messages array
   * In a real app, this would trigger an API call to an LLM
   *
   * @param {string} message - The message text entered by the user
   */
  const handleSendMessage = (message: string) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="flex h-screen border-2 border-pink-500">
      {/* Left pane - Chat interface border-r border-gray-200*/}
      <div className="w-full md:w-1/2 flex flex-col h-full border border-blue-500">

        {/* Navigation bar at the top */}
        <div className="border border-yellow-500">
          <NavBar />
        </div>

        <div className="h-full border border-green-500">
          {/* Content container for displaying messages */}
          <ContentContainer>
            {messages.length > 0 && (
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-100 rounded-lg text-[#484848]"
                  >
                    {msg}
                  </div>
                ))}
              </div>
            )}
          </ContentContainer>
        </div>

        {/* Chat input at the bottom */}
        <div className="sticky bottom-0 w-full px-4 border border-red-500">
          <ChatInput onSendMessage={handleSendMessage} />
        </div>

      </div>








      {/* Right pane - Itinerary display */}
      <div className="hidden md:flex md:w-1/2 flex-col bg-gray-50">
        {/* Right side navigation bar */}
        <RightNavBar />

        {/* Itinerary container with day accordions */}
        <ItineraryContainer />
      </div>
    </div>
  );
};

export default Page;
