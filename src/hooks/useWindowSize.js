import { useState, useEffect } from "react";

// Custom hook to get the window size
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Check if window object is defined (client side)
    if (typeof window !== "undefined") {
      // Function to update window size
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };

      // Add event listener for window resize
      window.addEventListener("resize", handleResize);

      // Call handleResize once to initialize window size
      handleResize();

      // Cleanup function to remove event listener
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return windowSize;
};

export default useWindowSize;
