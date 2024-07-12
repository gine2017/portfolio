import Image from "next/image";

export default function Hero({ image }) {
  return (
    <div className="w-full h-screen relative mt-16">
      <Image
        src={image}
        alt="Capstone Hero Image"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
