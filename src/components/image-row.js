import { useState } from "react";
import { zoomImage } from "@/utils";
import Image from "next/image";

export default function ImageRow({ images = [] }) {
  const [zoomedIndex, setZoomedIndex] = useState(false);

  const handleClick = (index) => {
    setZoomedIndex(zoomedIndex === index ? null : index);
  };
  return (
    <div className="flex gap-8">
      {images.map((img, index) => (
        <div
          className="relative flex-1 h-[20rem] hover:cursor-zoom-in"
          style={zoomedIndex === index ? zoomImage(true, true) : {}}
          onClick={() => handleClick(index)}
        >
          <Image
            src={img.src}
            fill
            alt={` Image Row ${index}`}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
