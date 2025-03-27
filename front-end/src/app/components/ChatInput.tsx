import React, { useState } from "react";

/**
 * ChatInput Component
 *
 * A fixed input bar at the bottom of the left pane for user-AI chat interaction.
 * Features:
 * - Text input field with rounded corners
 * - Send button with Airbnb color scheme
 * - Handles form submission and clears input after sending
 * - Disables send button when input is empty
 * - Uses Airbnb's color palette for styling
 * - Provides visual feedback on focus and hover states
 *
 * @param {function} onSendMessage - Callback function triggered when a message is sent
 */
const ChatInput = ({
  onSendMessage,
}: {
  onSendMessage: (message: string) => void;
}) => {
  // State to track the current message input
  const [message, setMessage] = useState("");

  /**
   * Handles form submission
   * Prevents default form behavior, sends the message if not empty, and clears the input
   *
   * @param {React.FormEvent} e - Form event object
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="sticky bottom-0 w-full bg-white border-t border-gray-200 py-3 px-4">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        {/* Text input field */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask about destinations in Spain..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 ring-airbnb-primary focus:border-airbnb-primary transition text-airbnb-dark placeholder-airbnb-gray"
        />

        {/* Send button with paper plane icon */}
        <button
          type="submit"
          className="p-2 rounded-full bg-airbnb-primary text-white hover-airbnb-primary transition-colors disabled:opacity-50 disabled:bg-gray-400"
          disabled={!message.trim()}
          aria-label="Send message"
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
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
