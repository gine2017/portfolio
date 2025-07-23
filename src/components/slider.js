import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { zoomImage } from "@/utils";
import { useState } from "react";
import { interBody } from "@/utils";

export default function Slider({ sliderData = [] }) {
  const [zoomStyles, setZoomStyles] = useState({});
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const handleClick = (index) => {
    if (zoomedIndex === index) {
      setZoomedIndex(null);
      setZoomStyles({});
    } else {
      setZoomedIndex(index);
      setZoomStyles(zoomImage(true, true));
    }
  };
  return (
    <div className=" ">
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderData.map((item, idx) => {
          return (
            <div
              className="mx-3 overflow-hidden py-2 cursor-zoom-in z-[70]	"
              key={idx}
              onClick={() => {
                handleClick(idx);
              }}
            >
              <Image
                src={item?.image}
                alt="gallery image"
                className="object-contain"
              />
            </div>
          );
        })}
      </Carousel>
      <p className={`${interBody.className} italic text-xl text-center  mt-4`}>
        Click on each image to enlarge
      </p>

      {zoomedIndex !== null && (
        <div style={zoomStyles} onClick={() => handleClick(zoomedIndex)}>
          <Image
            src={sliderData[zoomedIndex].image.src}
            alt={`gallery image ${zoomedIndex}`}
            fill
            className="object-contain w-full h-full"
          />
        </div>
      )}
    </div>
  );
}
