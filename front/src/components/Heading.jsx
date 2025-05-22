import React from "react";

const Heading = ({ as: Tag, color, text, outline }) => {
  return (
    <Tag
      className={
        outline ? `text-white font-russo` : `text-${color}-500 font-russo `
      }
      style={{
        WebkitTextStroke: outline ? `2px var(--color-${color}-500)` : "",
      }}
    >
      {text}
    </Tag>
  );
};

export default Heading;
