import { zoomImage } from "@/utils";
import { useState } from "react";
import { darkerGrotesqueMed } from "@/utils";
import Image from "next/image";

export default function ZoomableImage({ image }) {
  const [zoomable, setZoomable] = useState(false);
  const handleZoom = () => {
    setZoomable((prev) => !prev);
  };
  return (
    <div>
      <div
        className="flex justify-center items-center w-full h-96 relative my-12"
        onClick={handleZoom}
      >
        <Image
          src={image}
          className="object-contain md:h-[30rem]"
          alt="image of user flow"
          style={zoomable ? zoomImage(true, true) : {}}
        />
      </div>
      <p
        className={`${darkerGrotesqueMed.className} italic text-xl text-center  pt-4`}
      >
        Click on the image to enlarge
      </p>
    </div>
  );
}
