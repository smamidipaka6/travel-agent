import React from "react";

/**
 * ContentContainer Component
 *
 * A scrollable container for displaying AI-generated content.
 * Features:
 * - Flexible container that grows with content but enables scrolling when needed
 * - Shows a placeholder message when empty
 * - Maintains proper spacing and padding
 * - Takes children as props to display dynamic content
 *
 * @param {React.ReactNode} children - Content to be displayed in the container
 */
const ContentContainer = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      className="p-4 bg-white overflow-y-auto max-h-[calc(100vh-160px)]"
      style={{ flexGrow: 1 }}
    >
      {children || (
        // Placeholder text shown when no content is available
        <div className="text-[#767676] text-center mt-10">
          Ask about destinations in Spain to get started
        </div>
      )}
    </div>
  );
};

export default ContentContainer;
