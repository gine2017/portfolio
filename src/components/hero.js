import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Hero({ image, width, color, arrowClick }) {
  return (
    <div className="w-full h-56  md:h-screen relative mt-16">
      <Image
        src={image}
        alt="Capstone Hero Image"
        fill
        style={{ objectFit: "contain" }}
      />
      {width >= 767 && (
        <FontAwesomeIcon
          icon={faAngleDown}
          size="4x"
          className="absolute left-1/2 bottom-32 animate-bounce"
          color={color}
          onClick={arrowClick}
        />
      )}
    </div>
  );
}
