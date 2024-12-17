import React from "react";

export default function Input(props) {
  // eslint-disable-next-line react/prop-types
  const { type, placeholder } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="px-4 py-2 rounded-md outline-none border-2"
    />
  );
}
