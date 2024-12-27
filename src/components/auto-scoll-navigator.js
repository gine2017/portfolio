import React from "react";
import { darkerGrotesqueReg, darkerGrotesqueBold } from "@/utils";
import { useState, useEffect } from "react";

export default function AutoScrollNavigator({ fontColor, sections }) {
  const [active, setActive] = useState(null);

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

  return (
    <div
      className={`sticky top-[4.25rem] z-50 bg-white flex flex-row text-4xl border-b-2 pb-16 pt-10 justify-evenly items-center w-full h-10 text-${fontColor} ${darkerGrotesqueReg.className}`}
    >
      {sections.map((elm, index) => (
        <React.Fragment key={elm.id}>
          {index > 0 && (
            <div className={`border-t-4 border-${fontColor} w-2/12 h-px`}></div>
          )}
          <div
            className={`hover:cursor-pointer ${
              active === elm.id
                ? `text-${fontColor} ${darkerGrotesqueBold.className}`
                : ""
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
