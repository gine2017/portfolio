import { useState } from "react";
import { zoomImage } from "@/utils";
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
    <>
      <div
        className={`relative p-8 left-1/2 right-1/2 transform -translate-x-1/2 flex flex-row justify-center gap-6 2xl:gap-8 2xl:justify-center w-screen bg-slate-200 overflow-hidden`}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className={`w-[20rem] h-[15rem] relative hover:cursor-zoom-in ${
              zoomedIndex === index ? "fixed" : ""
            }`}
          >
            <Image
              src={img.src}
              alt={`Viewer Image ${index}`}
              fill
              className="object-contain w-full"
              onClick={() => handleClick(index)}
            />
          </div>
        ))}
      </div>
      {zoomedIndex !== null && (
        <div style={zoomImage(true, true)} onClick={() => setZoomedIndex(null)}>
          <Image
            src={images[zoomedIndex].src}
            alt={`Viewer Image ${zoomedIndex}`}
            fill
            className="object-contain w-full h-full"
          />
        </div>
      )}
    </>
  );
}
