import Image from "next/image";
import wave from "../../assets/custom_shapes/wave.svg";
import Link from "next/link";
import { myFont, darkerGrotesque, darkerGrotesqueMed } from "@/utils";

export default function Card({
  title,
  content,
  image,
  link = "/",
  style = "",
}) {
  return (
    <div
      className={`flex flex-col md:flex-row shadow-xl pb-4 md:pb-0 w-full ${style}`}
    >
      <div className="relative ">
        <Image
          src={wave}
          alt="wave shape for card"
          className="w-full object-contain rotate-90 md:rotate-0"
        />
        <div
          className="absolute top-1/2 left-1/2 w-56 md:w-40"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <Image src={image} className="object-contain" alt="card image" />
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-y-10 mt-8 md:relative">
        <div className="ml-6 lg:pr-4 flex flex-col gap-y-4">
          <div className={`text-3xl ${myFont.className}`}>{title}</div>
          <div
            className={`text-lg whitespace-pre-wrap ${darkerGrotesque.className} md:text-2xl md:whitespace-normal`}
          >
            {content}
          </div>
        </div>
        <div
          className={`mx-auto ${darkerGrotesqueMed.className} bg-orange hover:bg-[#DA8600] w-52 h-11 rounded-[1.5rem] text-4xl text-white md:absolute md:bottom-6 md:right-6`}
        >
          <Link
            href={link}
            rel="noopener noreferrer"
            className="flex justify-center"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
