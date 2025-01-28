import { useState } from "react";
import Navbar from "@/components/navbar";
import MobileNav from "@/components/mobile-nav";
import Image from "next/image";
import Footer from "@/components/footer";
import CaseStudyFooter from "@/components/case-study-footer";
import Head from "next/head";

import useWindowSize from "@/hooks/useWindowSize";
import useIntersectionObserver from "@/hooks/userIntersectionObserver";
import { myFont, darkerGrotesque } from "@/utils";

// images
import amelia from "../../assets/illustrations/Amelia.svg";
import asian from "../../assets/illustrations/asian woman.svg";
import black from "../../assets/illustrations/blk woman.svg";
import chat from "../../assets/illustrations/chat illustration.svg";
import emerald from "../../assets/illustrations/Emerald.svg";
import friendship from "../../assets/illustrations/friendship illustration.svg";
import group from "../../assets/illustrations/group illustration.svg";
import blowhorn from "../../assets/illustrations/illustration.svg";
import jaxith from "../../assets/illustrations/Jaxith.svg";
import latina from "../../assets/illustrations/latina.svg";
import logo from "../../assets/illustrations/logo.svg";
import myIllustration from "../../assets/illustrations/my_illustration.svg";
import waving from "../../assets/illustrations/waving illustrations.svg";

export default function Illustrations() {
  const { width } = useWindowSize();
  const [showContent, setShowContent] = useState(true);

  const handleIntersection = (element) => {
    element.classList.add("fade-in-up");
  };

  const imagesRef = useIntersectionObserver(handleIntersection, {
    threshold: 0.75,
  });

  const updateContent = (state) => {
    setShowContent(state);
  };

  const bgColorsClassname = [
    "bg-orange",
    "bg-purple",
    "bg-light-blue",
    "bg-light-pink",
    "bg-red",
  ];

  const allImages = [
    asian,
    amelia,
    black,
    chat,
    group,
    emerald,
    jaxith,
    friendship,
    latina,
    myIllustration,
    logo,
    waving,
    blowhorn,
  ];

  return (
    <>
      <Head>
        <title>Illustrations Page</title>
      </Head>
      {width <= 767 ? <MobileNav updateContent={updateContent} /> : <Navbar />}
      {showContent && (
        <main className="mx-auto w-80% flex flex-col gap-y-20 mt-4 md:mt-16 mb-48">
          <div className="flex flex-col gap-y-8 flex-1">
            <div className="mt-12 flex flex-row gap-x-4 items-center">
              <span className=" text-3xl md:text-4xl write">🖋️</span>
              <h1
                className={` text-purple text-3xl md:text-5xl ${myFont.className}`}
              >
                Illustrations
              </h1>
            </div>

            <p className={` text-2xl ${darkerGrotesque.className}`}>
              One of the most important skills I have acquired during my journey
              in the UI/UX design industry is my passion for creating
              illustrations. Here are some illustrations I have created for my
              personal projects.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-20 justify-center">
            {allImages.map((img, index) => (
              <div
                key={index}
                className={`md:w-1/4 illustrationImg p-8 flex justify-center items-center ${
                  bgColorsClassname[index % bgColorsClassname.length]
                }`}
                ref={(el) => (imagesRef.current[index] = el)}
              >
                <Image
                  className="max-h-full max-w-full"
                  src={img}
                  alt="illustration"
                />
              </div>
            ))}
          </div>
          <CaseStudyFooter casestudy="Illustrations" />
        </main>
      )}
      {showContent && <Footer width={width} />}
    </>
  );
}
