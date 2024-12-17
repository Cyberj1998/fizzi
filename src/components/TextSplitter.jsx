import React from "react";
import clsx from "clsx";

export function TextSplitter({ text, className, wordDisplayStyle = "inline-block" }) {
  if (!text) return null;

  const words = text.split(" ");

  return words.map((word, wordIndex) => {
    const splitText = word.split("");
    return (
      <span
        className={clsx("split-word", className)}
        style={{ display: wordDisplayStyle, whiteSpace: "pre" }}
        key={`${wordIndex}-${word}`} // Corrected template literal usage
      >
        {splitText.map((char, charIndex) => {
          if (char === " ") return null; // Return null instead of a space character

          return (
            <span
              key={charIndex}
              className={`split-char inline-block split-char--${wordIndex}-${charIndex}`} // Corrected template literal usage
            >
              {char}
            </span>
          );
        })}
        {wordIndex < words.length - 1 ? (
          <span className="split-char"> </span> // Ensured proper whitespace
        ) : (
          ""
        )}
      </span>
    );
  });
}
