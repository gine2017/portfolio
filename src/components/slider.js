import { useState } from "react";
import Image from "next/image";
import { darkerGrotesque } from "@/utils";

export default function Slider({ sliderData = [] }) {
  const [sliderIndex, setSliderIndex] = useState(0);

  const onBack = () => {
    if (sliderIndex == 0) {
      const lastIndex = sliderData.length - 1;
      setSliderIndex(lastIndex);
    }
    setSliderIndex((prevIndex) => (prevIndex - 1) % sliderData.length);
  };

  const onNext = () => {
    setSliderIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  return (
    <div className="flex flex-row gap-x-6 items-center px-10 ">
      <div className="bg-purple text-white rounded-full" onClick={onBack}>
        <p className="w-12 h-12 flex justify-center items-center pr-2">
          &#9001;
        </p>
      </div>
      <div className="flex-1 flex flex-col gap-y-8">
        <div className=" w-full relative">
          <Image
            src={sliderData[sliderIndex]?.image}
            alt="image gallery"
            className="object-contain h-[20rem]"
          />
        </div>
        <p className={`text-center text-xl ${darkerGrotesque.className}`}>
          {sliderData[sliderIndex]?.subtitle}
        </p>
        <a
          className="text-center text-blue-600 visited:text-purple-600 "
          href={sliderData[sliderIndex]?.link}
        >
          {sliderData[sliderIndex]?.link}
        </a>
      </div>
      <div className="bg-purple text-white rounded-full" onClick={onNext}>
        <p className="w-12 h-12 flex justify-center items-center pl-2">
          &#9002;
        </p>
      </div>
    </div>
  );
}
