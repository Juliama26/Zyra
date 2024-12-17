import React from "react";

// eslint-disable-next-line react/prop-types
export default function Button({ children }) {
  return (
    <button className="btn-primary px-4 py-2 rounded-md transition-all duration-300 ease-in-out">
      {children}
    </button>
  );
}
