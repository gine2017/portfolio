import { useState } from "react";
import { zoomImage } from "@/utils";
import { interBody } from "@/utils";
import Image from "next/image";

export default function ImageViewer({ images = [] }) {
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const handleClick = (index) => {
    if (zoomedIndex === index) {
      setZoomedIndex(null);
    } else {
      setZoomedIndex(index);
    }
  };
  return (
    <div>
      <div
        className={`relative p-8 left-1/2 right-1/2 transform -translate-x-1/2  w-screen bg-slate-200 `}
      >
        <div className=" flex flex-row justify-center overflow-hidden gap-6 2xl:gap-8 2xl:justify-center">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-[20rem] h-[15rem] relative hover:cursor-zoom-in ${
                zoomedIndex === index ? "fixed" : ""
              }`}
            >
              <Image
                src={image.img.src}
                alt={image.altText}
                fill
                className="object-contain w-full"
                onClick={() => handleClick(index)}
              />
            </div>
          ))}
        </div>
        <p
          className={`${interBody.className} italic text-xl text-center  pt-4`}
        >
          Click on each image to enlarge
        </p>
      </div>

      {zoomedIndex !== null && (
        <div style={zoomImage(true, true)} onClick={() => setZoomedIndex(null)}>
          <Image
            src={images[zoomedIndex].img.src}
            alt={`Viewer Image ${zoomedIndex}`}
            fill
            className="object-contain w-full h-full"
          />
        </div>
      )}
    </div>
  );
}
