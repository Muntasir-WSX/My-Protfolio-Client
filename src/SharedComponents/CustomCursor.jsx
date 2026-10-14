import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "A" ||
        e.target.closest("button") ||
        e.target.closest("a") ||
        e.target.classList.contains("cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 rounded-full transition-transform duration-100 ease-out hidden md:block ${
        isHovered
          ? "w-10 h-10 border-2 border-emerald-600 bg-emerald-500/20 scale-125"
          : "w-6 h-6 border border-emerald-500/60 bg-emerald-500/10"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) ${isHovered ? "scale(1.2)" : "scale(1)"}`,
      }}
    />
  );
};

export default CustomCursor;