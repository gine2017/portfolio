import { useState } from "react";
import Navbar from "@/components/navbar";
import MobileNav from "@/components/mobile-nav";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import CaseStudyFooter from "@/components/case-study-footer";
import Head from "next/head";

import useWindowSize from "@/hooks/useWindowSize";
import useIntersectionObserver from "@/hooks/userIntersectionObserver";
import {
  myFont,
  darkerGrotesque,
  darkerGrotesqueBold,
  myFontBold,
} from "@/utils";

import gatherly from "../../assets/gatherly.png";
import moderAttire from "../../assets/modern_attire.png";

export default function Projects() {
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
  return (
    <>
      <Head>
        <title>Projects Page</title>
      </Head>
      {width <= 767 ? <MobileNav updateContent={updateContent} /> : <Navbar />}
      {showContent && (
        <main className="mx-auto w-80% flex flex-col gap-y-20 mt-4 md:mt-16 mb-48">
          <div className="flex flex-col gap-y-8 flex-1">
            <div className="mt-12 flex flex-row gap-x-4 items-center">
              <h1
                className={` text-purple text-3xl md:text-5xl ${myFont.className}`}
              >
                Projects
              </h1>
            </div>

            <p className={` text-2xl ${darkerGrotesque.className}`}>
              My{" "}
              <span className={`text-black ${darkerGrotesqueBold.className}`}>
                Springboard UX bootcamp
              </span>{" "}
              reinforced critical design fundamentals through two key projects.
              For{" "}
              <span className={`text-black ${darkerGrotesqueBold.className}`}>
                Gatherly
              </span>
              , I addressed{" "}
              <span className={`text-black ${darkerGrotesqueBold.className}`}>
                mental health challenges
              </span>{" "}
              by creating a community app targeting psychological stress in
              young adults. This project honed my{" "}
              <span className={`text-black ${darkerGrotesqueBold.className}`}>
                research skills
              </span>{" "}
              through user interviews that directly shaped design decisions,
              resulting in data-driven wireframes, prototypes, and user flows.
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              With{" "}
              <span className={`text-black ${darkerGrotesqueBold.className}`}>
                Modern Attire
              </span>
              , I designed an{" "}
              <span className={`text-black ${darkerGrotesqueBold.className}`}>
                e-commerce experience
              </span>{" "}
              for custom suits, focusing on conversion optimization. The project
              strengthened my{" "}
              <span className={`text-black ${darkerGrotesqueBold.className}`}>
                UI principles
              </span>{" "}
              by developing intuitive checkout flows and creating an innovative
              measurement interface with video guidance to overcome a major
              barrier in online apparel shopping.
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              These projects transformed my approach to UX by connecting{" "}
              <span className={`text-black ${darkerGrotesqueBold.className}`}>
                research insights
              </span>{" "}
              directly to interface solutions that address real user needs. The
              hands-on experience of moving from research to wireframes to
              interactive prototypes grounded my design process in solid
              fundamentals that I apply to every project.
            </p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="relative flex-1 group">
              <Link rel="noopener noreferrer" href={"/projects/gatherly"}>
                <Image src={gatherly} alt="Gatherly case study" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity"></div>
                <div
                  className={`${myFontBold.className} text-center text-2xl md:text-4xl absolute inset-0 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity`}
                >
                  Gatherly <br /> Build community
                </div>
              </Link>
            </div>
            <div className="relative flex-1 group">
              <Link rel="noopener noreferrer" href={"/projects/modern-attire"}>
                <Image
                  src={moderAttire}
                  alt="Moder Attire case study page"
                  className="max-h-full max-w-full"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity"></div>
                <div
                  className={`${myFontBold.className} text-center text-2xl md:text-4xl  absolute inset-0 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity`}
                >
                  Modern Attire
                  <br /> Elegant suits
                </div>
              </Link>
            </div>
          </div>
        </main>
      )}
      {showContent && <Footer width={width} />}
    </>
  );
}
