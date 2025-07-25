import React from "react";
import { interBody, interBold } from "@/utils";
import { useState, useEffect } from "react";

export default function AutoScrollNavigator({ fontColor, sections }) {
  const [active, setActive] = useState(null);
  const [navOffset, setNavOffset] = useState(0);

  // Function for smooth scrolling when clicking on a section
  const handleScroll = (sectionId, offset = 200) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActive(sectionId); // Set active state for clicked section
    }
  };

  // Function to update active section based on scroll position
  const updateActiveOnScroll = () => {
    const offset = 200; // Adjust offset to match handleScroll function

    sections.forEach((elm) => {
      const element = document.getElementById(elm.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY - offset;

        // Check if the element is in view
        if (
          window.scrollY >= elementTop &&
          window.scrollY < elementTop + rect.height
        ) {
          setActive(elm.id);
        }
      }
    });
  };

  // Attach the scroll event listener to update active section
  useEffect(() => {
    window.addEventListener("scroll", updateActiveOnScroll);
    return () => {
      window.removeEventListener("scroll", updateActiveOnScroll);
    };
  }, [sections]);

  useEffect(() => {
    const handleNavToggle = (e) => {
      setNavOffset(e.detail.open ? 265 : 0); // Adjust based on your nav height
    };

    window.addEventListener("navbarToggle", handleNavToggle);
    return () => window.removeEventListener("navbarToggle", handleNavToggle);
  }, []);

  return (
    <div
      className={`sticky z-[80] bg-bgWhite flex flex-row  border-b-2 pb-16 pt-10 justify-evenly items-center w-full h-10 text-3xl text-${fontColor} ${interBody.className}`}
      style={{ top: `${navOffset}px`, transition: "top 0.5s ease-in-out" }}
    >
      {sections.map((elm, index) => (
        <React.Fragment key={elm.id}>
          {index > 0 && (
            <div
              className={`border-t-4 border-${fontColor} xl:w-2/12 md:w-1/12 h-px`}
            ></div>
          )}
          <div
            className={`hover:cursor-pointer ${
              active === elm.id
                ? `text-${fontColor} ${interBold.className}`
                : "text-[#597891]"
            }`}
            onClick={() => handleScroll(elm.id)}
          >
            {elm.name}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
