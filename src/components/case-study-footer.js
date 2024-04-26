import { myFont, darkerGrotesque } from "@/utils";
import galleryPal from "../../assets/gallery-pal-logo.svg";
import naturalU from "../../assets/natualU_logo.svg";
import friendship_illustration from "../../assets/friendship_illustration.svg";
import modernAttire from "../../assets/capstone/modernattire/modern-attire-thumbnail.png";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudyFooter({ casestudy = "" }) {
  const caseStudies = [
    {
      image: friendship_illustration,
      subtitle: "Gatherly",
      link: "/case-study/gatherly",
    },
    {
      image: modernAttire,
      subtitle: "Modern Attire",
      link: "/case-study/modern-attire",
    },
    { image: naturalU, subtitle: "NaturalU", link: "/case-study/natural-u" },
    {
      image: galleryPal,
      subtitle: "Gallery Pal",
      link: "/case-study/gallery-pal",
    },
  ];
  return (
    <div className=" w-full flex flex-col gap-y-8">
      <div className=" w-full flex justify-start border-b-4 border-black text-4xl md:text-5xl">
        <span className={`text-purple bg-white pb-4 ${myFont.className}`}>
          Read more of my case studies
        </span>
      </div>
      <div className="flex flex-row justify-center justify-evenly flex-wrap">
        {caseStudies
          .filter((study) => study.subtitle != casestudy)
          .map((elm) => {
            return (
              <Link href={elm.link}>
                <Image
                  src={elm.image}
                  className="w-36 h-36 object-contain"
                  alt="case study image"
                />
                <p className={`text-center ${darkerGrotesque.className}`}>
                  {elm.subtitle}
                </p>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
