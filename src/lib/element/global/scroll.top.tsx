"use client";

import { useEffect, useState } from "react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed right-10 transition-all duration-300 ${
        isVisible ? "bottom-10" : "-bottom-16"
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        className={`w-[40px] h-[40px] bg-blue-01 text-white p-2 rounded-full shadow-lg hover:bg-blue-01 focus:outline-none`}
      >
        <svg
          className="pb-1"
          fill="#FFF"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="20" height="20" stroke="none" fill="#FFF" opacity="0" />

          <g transform="matrix(0.83 0 0 0.83 12 12)">
            <path
              transform=" translate(-15, -14.5)"
              d="M 27 18 L 27 20 C 27 20.386 26.777 20.738 26.428 20.904 C 26.079 21.07 25.666 21.019 25.366 20.774 L 15 12.292 L 4.633 20.774 C 4.334 21.019000000000002 3.9210000000000003 21.069000000000003 3.5709999999999997 20.904 C 3.221 20.739 3 20.386 3 20 L 3 18 C 3 17.7 3.135 17.416 3.367 17.226 L 14.367 8.225999999999999 C 14.736 7.924999999999999 15.265 7.924999999999999 15.634 8.225999999999999 L 26.634 17.226 C 26.865 17.416 27 17.7 27 18 z"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </button>
    </div>
  );
}

export default ScrollToTop;
