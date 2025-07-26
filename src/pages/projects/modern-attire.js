import useWindowSize from "@/hooks/useWindowSize";
import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/navbar";
import MobileNav from "@/components/mobile-nav";
import Image from "next/image";
import { darkerGrotesqueTitle, interBody, interBold } from "@/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zoomImage } from "@/utils";
import {
  faBookBookmark,
  faLightbulb,
  faPenToSquare,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Footer from "@/components/footer";
import CaseStudyFooter from "@/components/case-study-footer";

//images
import highFidelity1 from "../../../assets/capstone/modern-attire/high-fidelity/highFidelity1.png";
import highFidelity2 from "../../../assets/capstone/modern-attire/high-fidelity/highFidelity2.png";
import highFidelity3 from "../../../assets/capstone/modern-attire/high-fidelity/highFidelity3.png";
import highFidelity4 from "../../../assets/capstone/modern-attire/high-fidelity/highFidelity4.png";
import highFidelity9 from "../../../assets/capstone/modern-attire/high-fidelity/highFidelity9.png";
import highFidelity11 from "../../../assets/capstone/modern-attire/high-fidelity/highFidelity11.png";

export default function ModernAttire() {
  const { width } = useWindowSize();
  const [showContent, setShowContent] = useState(true);
  const [zoomedOutcomeIndex, setZoomedOutcomeIndex] = useState(null);

  const updateContent = (state) => {
    setShowContent(state);
  };

  const handleClick = (index) => {
    setZoomedOutcomeIndex((prev) => (prev === index ? null : index));
  };

  const highFidelity = [
    highFidelity1,
    highFidelity2,
    highFidelity3,
    highFidelity9,
    highFidelity11,
    highFidelity4,
  ];

  return (
    <>
      <Head>
        <title>Modern Attire Case Study</title>
      </Head>
      {width <= 767 ? <MobileNav updateContent={updateContent} /> : <Navbar />}

      {showContent && (
        <main className="mx-auto w-80% flex flex-col gap-y-20 mt-16 mb-48">
          <div className=" h-[35rem] w-full relative  bg-modern-attire">
            <div className="px-4 flex flex-col md:flex-row justify-center items-center h-full gap-x-6">
              <div className="w-[15rem] h-[15rem] md:w-[30rem] md:h-[30rem] relative">
                <Image
                  src={highFidelity1}
                  alt="Gatherly splash screen Image"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="w-[15rem] h-[15rem] md:w-[30rem] md:h-[30rem] relative">
                <Image
                  src={highFidelity2}
                  alt="Gatherly Explore Page Image"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
          <h1
            className={`flex justify-center text-modern-attire ${darkerGrotesqueTitle.className} text-6xl`}
          >
            Modern Attire Case Study
          </h1>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h3
              className={`text-modern-attire text-5xl ${darkerGrotesqueTitle.className}`}
            >
              Overview
            </h3>
            <div className={`text-2xl leading-relaxed ${interBody.className}`}>
              <p>
                {`Modern Attire's web users were struggling with a complex purchasing process, leading to widespread cart abandonment and lost revenue. Analytics revealed that 50% of users abandoned before adding items to cart, while 70% of those who did add items left at registration. The cumbersome checkout flow and measurement uncertainty had created significant barriers during the critical conversion moments when customers were ready to buy. I designed a streamlined e-commerce experience to eliminate these friction points, focusing on simplified checkout flows and intuitive measurement tools that removed purchase anxiety. The result: a responsive web experience that transforms browsing frustration into confident purchases, achieving a 35% reduction in cart abandonment and 28% increase in completed sales.`}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h3
              className={`text-modern-attire text-5xl ${darkerGrotesqueTitle.className}`}
            >
              Design Process
            </h3>
            <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
              <div className="flex flex-col gap-y-4 md:flex-row gap-24">
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon
                    icon={faBookBookmark}
                    size="4x"
                    color="#010154"
                  />
                  <div>
                    <p
                      className={` text-3xl text-modern-attire mt-4 text-center  ${interBold.className}`}
                    >
                      Research
                    </p>
                    <p>Competitive Analysis</p>
                    <p>Survey</p>
                    <p>User Interviews</p>
                    <p>Persona</p>
                  </div>
                </div>
                <div className="flex flex-col  items-center">
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    size="4x"
                    color="#010154"
                  />
                  <div>
                    <p
                      className={` text-3xl text-modern-attire mt-4 text-center  ${interBold.className}`}
                    >
                      Ideate
                    </p>
                    <p>Sketeches</p>
                    <p>User flow</p>
                  </div>
                </div>
                <div className="flex flex-col  items-center">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    size="4x"
                    color="#010154"
                  />
                  <div>
                    <p
                      className={` text-3xl text-modern-attire mt-4 text-center ${interBold.className}`}
                    >
                      Design
                    </p>
                    <p>Wireframes</p>
                    <p>Styleguide</p>
                    <p> Components</p>
                    <p>High Fidelity Screens</p>
                    <p>Prototype</p>
                  </div>
                </div>
                <div className="flex flex-col  items-center">
                  <FontAwesomeIcon
                    icon={faComputer}
                    size="4x"
                    color="#010154"
                  />
                  <div>
                    <p
                      className={` text-3xl text-modern-attire mt-4 text-center ${interBold.className}`}
                    >
                      Test
                    </p>
                    <p>Usability Test</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h3
              className={`text-modern-attire text-5xl ${darkerGrotesqueTitle.className}`}
            >
              Outcome
            </h3>
            <p
              className={`${interBody.className} italic text-md text-center  pt-4`}
            >
              Click on each image to enlarge
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {highFidelity.map((img, index) => {
                return (
                  <div
                    className={`relative w-[45%]  group cursor-pointer`}
                    onClick={() => handleClick(index)}
                    key={index}
                  >
                    <Image
                      src={img}
                      alt="Test Wise final screen"
                      className="object-contain w-full  "
                      style={
                        zoomedOutcomeIndex === index
                          ? zoomImage(true, true)
                          : {}
                      }
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
                  </div>
                );
              })}
            </div>
          </div>
          <Link
            href="/extended/modernAttire-extended"
            className={`text-2xl text-modern-attire flex animate ${interBold.className} hover:underline cursor-pointer`}
          >
            View the full case study here →
          </Link>
          <CaseStudyFooter casestudy="Modern Attire" />
        </main>
      )}
      {showContent && <Footer width={width} />}
    </>
  );
}
