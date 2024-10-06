import { useEffect, useState, useRef } from "react";
import useIntersectionObserver from "@/hooks/userIntersectionObserver";

export default function WavyText({ text = "", centerText = false }) {
  const letters = Array.from(text);
  const [isVisible, textRef] = useIntersectionObserver();

  return (
    <div
      ref={textRef}
      className={`flex ${centerText ? "justify-center" : ""}   ${
        isVisible ? "animate" : ""
      }`}
    >
      {letters.map((letter, index) => (
        <span
          className="wavy-text"
          key={index}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </div>
  );
}
