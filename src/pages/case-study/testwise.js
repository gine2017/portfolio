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
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Footer from "@/components/footer";
import CaseStudyFooter from "@/components/case-study-footer";

//images
import dashboard from "../../../assets/capstone/testwise/high-fidelity/Dashboard.png";
import kanban from "../../../assets/capstone/testwise/high-fidelity/Kanban board.png";
import newRequirement from "../../../assets/capstone/testwise/high-fidelity/New Requirement.png";
import requirementDetails from "../../../assets/capstone/testwise/high-fidelity/Requirement Details.png";
import requirementDetailsOne from "../../../assets/capstone/testwise/high-fidelity/Requirement Details-1.png";
import requirementOne from "../../../assets/capstone/testwise/high-fidelity/Requirements-1.png";

export default function TestWise() {
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
    dashboard,
    kanban,
    newRequirement,
    requirementDetails,
    requirementDetailsOne,
    requirementOne,
  ];

  return (
    <>
      <Head>
        <title>Test Wise Case Study </title>
      </Head>
      {width <= 767 ? <MobileNav updateContent={updateContent} /> : <Navbar />}

      {showContent && (
        <main className="mx-auto w-80% flex flex-col gap-y-20 mt-16 mb-48">
          <div className=" h-[35rem] w-full relative  bg-testwise-blue">
            <div className="px-4 flex flex-col md:flex-row justify-center items-center h-full gap-x-6">
              <div className=" w-[15rem] h-[15rem] md:w-[30rem] md:h-[30rem] relative">
                <Image
                  src={dashboard}
                  alt="Testwise Dashboard Image"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="w-[15rem] h-[15rem] md:w-[30rem] md:h-[30rem] relative">
                <Image
                  src={kanban}
                  alt="Testwise Kanban Image"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
          <h1
            className={`flex justify-center text-testwise-blue ${darkerGrotesqueTitle.className} text-6xl`}
          >
            Test Wise Case Study
          </h1>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h3
              className={`text-testwise-blue text-5xl ${darkerGrotesqueTitle.className}`}
            >
              Overview
            </h3>
            <div className={`text-2xl leading-relaxed ${interBody.className}`}>
              <p>
                {`Users of KDIT's Test Wise platform were constantly juggling
                multiple systems to track their work. A previous design had
                failed, leaving both clients and developers frustrated. I
                partnered with KDIT to redesign their requirements dashboard
                from scratch, focusing on understanding how people actually
                work. The result: a single, integrated dashboard that eliminated
                system-switching and turned a fragmented experience into
                something people actually want to use.`}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h3
              className={`text-testwise-blue text-5xl ${darkerGrotesqueTitle.className}`}
            >
              Design Process
            </h3>
            <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
              <div className="flex flex-col gap-y-4 md:flex-row justify-evenly">
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon
                    icon={faBookBookmark}
                    size="4x"
                    color="#1F3F70"
                  />
                  <div>
                    <p
                      className={` text-3xl text-testwise-blue mt-4 text-center  ${interBold.className}`}
                    >
                      Research
                    </p>
                    <p>Competitive Analysis</p>
                  </div>
                </div>
                <div className="flex flex-col  items-center">
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    size="4x"
                    color="#1F3F70"
                  />
                  <div>
                    <p
                      className={` text-3xl text-testwise-blue mt-4 text-center  ${interBold.className}`}
                    >
                      Ideate
                    </p>
                    <p>Wireframes</p>
                  </div>
                </div>
                <div className="flex flex-col  items-center">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    size="4x"
                    color="#1F3F70"
                  />
                  <div>
                    <p
                      className={` text-3xl text-testwise-blue mt-4 text-center ${interBold.className}`}
                    >
                      Design
                    </p>
                    <p>High Fidelity Screens</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h3
              className={`text-testwise-blue text-5xl ${darkerGrotesqueTitle.className}`}
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
                      className="object-contain w-full border-2 rounded-xl border-slate-200 "
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
            href="/extended/testwise-extended"
            className={`text-2xl text-testwise-blue flex animate ${interBold.className} hover:underline cursor-pointer`}
          >
            View the full case study here →
          </Link>
          <CaseStudyFooter casestudy="Test Wise" />
        </main>
      )}
      {showContent && <Footer width={width} />}
    </>
  );
}
