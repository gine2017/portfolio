import Image from "next/image";

export default function Hero({ image }) {
  return (
    <div className="w-full relative mt-16">
      <Image
        src={image}
        alt="Capstone Hero Image"
        // fill={true}
        // className="object-cover"
      />
    </div>
  );
}
