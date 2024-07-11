import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

export default function Slider({ sliderData = [] }) {
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
  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      swipeable={true}
      draggable={true}
      showDots={true}
      infinite={true}
      partialVisible={false}
      dotListClass="custom-dot-list-style"
    >
      {sliderData.map((item, idx) => {
        return (
          <div className="mx-3 overflow-hidden py-2" key={idx}>
            <Image
              src={item?.image}
              alt="gallery image"
              className="object-contain"
            />
          </div>
        );
      })}
    </Carousel>
  );
}
