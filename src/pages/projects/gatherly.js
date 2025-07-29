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
import highFidelity1 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity1.png";
import highFidelity2 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity2.png";
import highFidelity12 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity12.png";
import highFidelity13 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity13.png";
import highFidelity14 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity14.png";
import highFidelity15 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity15.png";
import highFidelity16 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity16.png";

export default function NaturalU() {
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
    highFidelity12,
    highFidelity14,
    highFidelity13,
    highFidelity15,
    highFidelity16,
  ];

  return (
    <>
      <Head>
        <title>Gatherly Case Study</title>
      </Head>
      {width <= 767 ? <MobileNav updateContent={updateContent} /> : <Navbar />}

      {showContent && (
        <main className="mx-auto w-80% flex flex-col gap-y-20 mt-16 mb-48">
          <div className=" h-[35rem] w-full relative  bg-gatherly-blue">
            <div className="flex justify-center items-center h-full">
              <div className="w-[20rem] h-[30rem] relative">
                <Image
                  src={highFidelity1}
                  alt="Gatherly splash screen Image"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="w-[20rem] h-[30rem] relative">
                <Image
                  src={highFidelity12}
                  alt="Gatherly Explore Page Image"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="w-[20rem] h-[30rem] relative">
                <Image
                  src={highFidelity14}
                  alt="Gatherly Profile Image"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
          <h1
            className={`flex justify-center text-gatherly-blue ${darkerGrotesqueTitle.className} text-6xl`}
          >
            Gatherly Case Study
          </h1>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h3
              className={`text-gatherly-blue text-5xl ${darkerGrotesqueTitle.className}`}
            >
              Overview
            </h3>
            <div className={`text-2xl leading-relaxed ${interBody.className}`}>
              <p>
                Young adults were struggling to build meaningful connections,
                leading to widespread social isolation and deteriorating mental
                health. Post-COVID social barriers had intensified these
                challenges, creating cycles of loneliness and anxiety during a
                pivotal life stage when social networks are crucial for personal
                and professional development. I designed Gatherly to break this
                cycle, focusing on connecting people through shared interests
                and activities in a supportive environment. The result: a
                platform that transforms social isolation into meaningful
                community connections, empowering young adults to build
                relationships that enhance their mental well-being and personal
                growth.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h3
              className={`text-gatherly-blue text-5xl ${darkerGrotesqueTitle.className}`}
            >
              Design Process
            </h3>
            <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
              <div className="flex flex-col gap-y-4 md:flex-row gap-24">
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon
                    icon={faBookBookmark}
                    size="4x"
                    color="#0072BB"
                  />
                  <div>
                    <p
                      className={` text-3xl text-gatherly-blue mt-4 text-center  ${interBold.className}`}
                    >
                      Research
                    </p>
                    <p>Pew Research Study</p>
                    <p>Survey</p>
                    <p>User Interviews</p>
                    <p>Persona</p>
                    <p>Empathy Map</p>
                  </div>
                </div>
                <div className="flex flex-col  items-center">
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    size="4x"
                    color="#0072BB"
                  />
                  <div>
                    <p
                      className={` text-3xl text-gatherly-blue mt-4 text-center  ${interBold.className}`}
                    >
                      Ideate
                    </p>
                    <p>Laddering</p>
                    <p>Sketeches</p>
                    <p>User flow</p>
                  </div>
                </div>
                <div className="flex flex-col  items-center">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    size="4x"
                    color="#0072BB"
                  />
                  <div>
                    <p
                      className={` text-3xl text-gatherly-blue mt-4 text-center ${interBold.className}`}
                    >
                      Design
                    </p>
                    <p>Wireframes</p>
                    <p>Styleguide</p>
                    <p>Components</p>
                    <p>High Fidelity Screens</p>
                    <p>Prototype</p>
                  </div>
                </div>
                <div className="flex flex-col  items-center">
                  <FontAwesomeIcon
                    icon={faComputer}
                    size="4x"
                    color="#0072BB"
                  />
                  <div>
                    <p
                      className={` text-3xl text-gatherly-blue mt-4 text-center ${interBold.className}`}
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
              className={`text-gatherly-blue text-5xl ${darkerGrotesqueTitle.className}`}
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
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h3
              className={`text-gatherly-blue text-5xl ${darkerGrotesqueTitle.className}`}
            >
              Want the full story?
            </h3>
            <div className={`text-2xl leading-relaxed ${interBody.className}`}>
              <p>
                Dive deeper into my complete design process, from initial
                research and user insights to design decisions and
                implementation details. See the methodology behind the results,
                the challenges I navigated, and the strategic thinking that
                drove each design choice
              </p>
            </div>
            <Link
              href="/extended/gatherly-extended"
              className={`text-2xl text-gatherly-blue flex animate ${interBold.className} hover:underline cursor-pointer`}
            >
              View the full case study here →
            </Link>
          </div>

          <CaseStudyFooter casestudy="Gatherly" />
        </main>
      )}
      {showContent && <Footer width={width} />}
    </>
  );
}
