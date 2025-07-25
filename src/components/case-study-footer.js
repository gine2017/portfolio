import { darkerGrotesqueTitle, interBody } from "@/utils";
import naturalU from "../../assets/natualU_logo.svg";
import friendship_illustration from "../../assets/friendship_illustration.svg";
import kdit from "../../assets/capstone/testwise/kdit-logo.svg";
import Image from "next/image";
import Link from "next/link";
import myIllustration from "../../assets/illustrations/my_illustration.svg";
import emerald from "../../assets/illustrations/Emerald.svg";
import designSystemTools from "../../assets/illustrations/design-system-tools.svg";
import modernAttire from "../../assets/modern-attire-thumbnail.svg";

export default function CaseStudyFooter({ casestudy = "" }) {
  const caseStudies = [
    {
      image: friendship_illustration,
      subtitle: "Gatherly",
      link: "/projects/gatherly",
    },
    { image: naturalU, subtitle: "NaturalU", link: "/case-study/natural-u" },
    ,
    {
      image: kdit,
      subtitle: "Test Wise",
      link: "/case-study/testwise",
    },
    {
      image: emerald,
      subtitle: "Illustrations",
      link: "/illustrations",
    },
    {
      image: myIllustration,
      subtitle: "Portfolio creation",
      link: "/portfolio",
    },
    {
      image: designSystemTools,
      subtitle: "Component Library",
      link: "/component-library",
    },
    {
      image: modernAttire,
      subtitle: "Modern Attire",
      link: "/projects/modern-attire",
    },
  ];
  return (
    <div className=" w-full flex flex-col gap-y-8">
      <div className=" w-full flex justify-start border-b-4 border-black text-4xl md:text-5xl">
        <span
          className={`text-purple bg-bgWhite pb-4 ${darkerGrotesqueTitle.className}`}
        >
          Check out more of my work
        </span>
      </div>
      <div className="flex flex-wrap justify-center justify-evenly flex-wrap">
        {caseStudies
          .filter((study) => study.subtitle != casestudy)
          .map((elm) => {
            return (
              <Link
                href={elm.link}
                key={elm.subtitle}
                rel="noopener noreferrer"
              >
                <Image
                  src={elm.image}
                  className="w-36 h-36 object-contain"
                  alt="case study image"
                />
                <p className={`text-center ${interBody.className}`}>
                  {elm.subtitle}
                </p>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
