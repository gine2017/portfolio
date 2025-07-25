import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import MobileNav from "@/components/mobile-nav";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import Head from "next/head";

import useWindowSize from "@/hooks/useWindowSize";
import { darkerGrotesqueTitle, interBody, interBold } from "@/utils";

import gatherly from "../../assets/gatherly.png";
import moderAttire from "../../assets/modern_attire.png";

export default function Projects() {
  const [showContent, setShowContent] = useState(true);
  const { width } = useWindowSize();

  const updateContent = (state) => {
    setShowContent(state);
  };

  useEffect(() => {
    if (showContent) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, []);

  return (
    <>
      <Head>
        <title>Bootcamp Page</title>
      </Head>
      {width <= 767 ? <MobileNav updateContent={updateContent} /> : <Navbar />}
      {showContent && (
        <main className="mx-auto w-80% flex flex-col gap-y-20 mt-4 md:mt-16 mb-48">
          <div className="flex flex-col gap-y-8 flex-1">
            <div className="mt-12 flex flex-row gap-x-4 items-center">
              <h1
                className={` text-purple text-3xl md:text-5xl ${darkerGrotesqueTitle.className}`}
              >
                Projects
              </h1>
            </div>

            <p className={`text-2xl leading-relaxed ${interBody.className}`}>
              <span className={`text-black ${interBold.className}`}>
                Gatherly
              </span>{" "}
              - Mental Health Community App
            </p>
            <p className={`text-2xl leading-relaxed ${interBody.className}`}>
              Designed a community platform targeting{" "}
              <span className={`text-black ${interBold.className}`}>
                psychological stress in young adults
              </span>
              . Conducted{" "}
              <span className={`text-black ${interBold.className}`}>
                user interviews
              </span>{" "}
              that directly shaped design decisions, creating data-driven
              wireframes and user flows for improved mental health support.
            </p>

            <p
              className={`text-2xl leading-relaxed ${interBody.className} mt-6`}
            >
              <span className={`text-black ${interBold.className}`}>
                Modern Attire
              </span>{" "}
              - Custom Suit E-commerce
            </p>
            <p className={`text-2xl leading-relaxed ${interBody.className}`}>
              Created an intuitive{" "}
              <span className={`text-black ${interBold.className}`}>
                e-commerce experience
              </span>{" "}
              focused on conversion optimization. Developed{" "}
              <span className={`text-black ${interBold.className}`}>
                innovative measurement interface
              </span>{" "}
              with video guidance to overcome the major barrier of sizing in
              online apparel shopping.
            </p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="relative flex-1 group">
              <Link rel="noopener noreferrer" href={"/projects/gatherly"}>
                <Image src={gatherly} alt="Gatherly case study" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity"></div>
                <div
                  className={`${darkerGrotesqueTitle.className} text-center text-2xl md:text-4xl absolute inset-0 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity`}
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
                  className={`${darkerGrotesqueTitle.className} text-center text-2xl md:text-4xl  absolute inset-0 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity`}
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
