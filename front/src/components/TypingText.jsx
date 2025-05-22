import React, { useEffect, useState } from "react";
const TypingText = ({ text, speed = 100, pause = 5000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, pause);
    }
    return () => clearTimeout(timeout);
  }, [text, speed, pause, index]);
  return (
    <h1
      className="text-white font-russo typingtxt"
      style={{ WebkitTextStroke: "2px var(--color-mgreen-500)" }}
    >
      {displayedText}
    </h1>
  );
};

export default TypingText;
