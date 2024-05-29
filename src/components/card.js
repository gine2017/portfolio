import Image from "next/image";
import wave from "../../assets/custom_shapes/wave.svg";
import Link from "next/link";
import { myFont, darkerGrotesque } from "@/utils";

export default function Card({
  title,
  content,
  image,
  link = "/",
  style = "",
}) {
  return (
    <div
      className={`flex flex-col md:flex-row shadow-xl pb-4 md:pb-0 ${style}`}
    >
      <div className="relative">
        <Image
          src={wave}
          alt="wave shape for card"
          className="w-full object-contain rotate-90 md:rotate-0"
        />
        <div
          className="absolute top-1/2 left-1/2 w-40 h-40"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <Image src={image} className="object-contain" alt="card image" />
        </div>
      </div>
      <div className="flex flex-col gap-y-10 mt-8">
        <div className="ml-6 lg:pr-4">
          <div className={` text-3xl  ${myFont.className}`}>{title}</div>
          <div
            className={`text-lg  whitespace-pre-wrap ${darkerGrotesque.className}`}
          >
            {content}
          </div>
        </div>
        <div className="bg-orange hover:bg-[#DA8600] ml-6 w-40 h-14 rounded-3xl text-4xl text-white relative ">
          <Link href={link} className="absolute top-2 left-10 ">
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
