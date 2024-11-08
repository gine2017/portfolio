import { darkerGrotesqueReg, darkerGrotesqueBold } from "@/utils";
import { useState } from "react";

export default function AutoScrollNavigator({ fontColor, sections }) {
  const [active, setActive] = useState(null);
  const handleScroll = (sectionId, offset = 200) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the position of the element and subtract the offset
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActive(sectionId);
    }
  };

  return (
    <div
      className={`sticky top-[4.25rem]  z-50 bg-white flex flex-row text-4xl border-b-2 pb-16 pt-10 justify-evenly items-center w-full h-10 text-${fontColor} ${darkerGrotesqueReg.className}`}
    >
      {sections.map((elm, index) => {
        return (
          <>
            {index > 0 && (
              <div
                className={` border-t-4 border-${fontColor} w-full w-2/12 -h-px`}
              ></div>
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
          </>
        );
      })}
    </div>
  );
}
