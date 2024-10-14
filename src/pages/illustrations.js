import { useState } from "react";
import Navbar from "@/components/navbar";
import MobileNav from "@/components/mobile-nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useWindowSize from "@/hooks/useWindowSize";
import {
  myFont,
  darkerGrotesque,
  createImageArray,
  darkerGrotesqueBold,
} from "@/utils";

export default function Illustrations() {
  const { width } = useWindowSize();
  const [showContent, setShowContent] = useState(true);

  const updateContent = (state) => {
    setShowContent(state);
  };

  return (
    <div>
      {width <= 767 ? <MobileNav updateContent={updateContent} /> : <Navbar />}
      {showContent && (
        <main className="mx-auto w-80% flex flex-col gap-y-20 mt-4 md:mt-16 mb-48">
          <div className="flex flex-col gap-y-8 flex-1">
            <p className={` mt-12 text-purple text-5xl ${myFont.className}`}>
              Illustrations
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              One of the most important skills I have accquired during my journy
              within UI/UX design indutry was my love for creating illustraions.
              Here are some illustrations I have made for some of my own
              projects
            </p>
          </div>
        </main>
      )}
    </div>
  );
}
