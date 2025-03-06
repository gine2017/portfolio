import Image from "next/image";
import { useState } from "react";
import { darkerGrotesque } from "@/utils";

export default function MobileSlider({ sliderData = [] }) {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleClick = (idx) => {
    setSliderIndex(idx);
  };

  return (
    <div className="flex flex-col gap-y-6">
      <div className="w-full relative">
        <Image
          src={sliderData[sliderIndex]?.image}
          alt="gallery image"
          className="object-contain"
        />
      </div>
      <div>
        <p className={`text-center text-base ${darkerGrotesque.className}`}>
          {sliderData[sliderIndex]?.subtitle}
        </p>
        <a
          rel="noopener noreferrer"
          className="text-center text-base text-blue-600 visited:text-purple-600 "
          href={sliderData[sliderIndex]?.link}
        >
          {sliderData[sliderIndex]?.link}
        </a>
      </div>

      <div className="flex overflow-x-scroll h-40 ">
        {sliderData.map((item, idx) => {
          return (
            <div
              className="w-12 h-12 flex-none mx-3 "
              onClick={() => {
                handleClick(idx);
              }}
              key={idx}
            >
              <Image
                src={item?.image}
                alt="gallery image"
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
