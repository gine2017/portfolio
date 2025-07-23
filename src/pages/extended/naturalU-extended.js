import { useState, useRef } from "react";
import Hero from "@/components/hero";
import Link from "next/link";
import Image from "next/image";
import {
  darkerGrotesqueTitle,
  interBody,
  interBold,
  createImageArray,
  solutionInActionStyles,
} from "@/utils";
import Title from "@/components/title";
import Stats from "@/components/stats";
import Slider from "@/components/slider";
import MobileSlider from "@/components/mobile-slider";
import Navbar from "@/components/navbar";
import MobileNav from "@/components/mobile-nav";
import Footer from "@/components/footer";
import useWindowSize from "@/hooks/useWindowSize";
import CaseStudyFooter from "@/components/case-study-footer";
import Head from "next/head";

//images
import naturalUHero from "../../../assets/capstone/naturalu/natural-u-hero-img.svg";
import persona1 from "../../../assets/capstone/naturalu/natural-u-persona-1.png";
import persona2 from "../../../assets/capstone/naturalu/natural-u-persona-2.png";
import sketch1 from "../../../assets/capstone/naturalu/sketch1.png";
import sketch2 from "../../../assets/capstone/naturalu/sketch2.png";
import userFlow from "../../../assets/capstone/naturalu/UserFlowNaturalU.png";
import styleguide from "../../../assets/capstone/naturalu/naturaluU-styleguide.png";
import components from "../../../assets/capstone/naturalu/components.png";

import screen1 from "../../../assets/capstone/naturalu/screens/screen1.png";
import screen2 from "../../../assets/capstone/naturalu/screens/screen2.png";
import screen3 from "../../../assets/capstone/naturalu/screens/screen3.png";
import screen4 from "../../../assets/capstone/naturalu/screens/screen4.png";
import screen5 from "../../../assets/capstone/naturalu/screens/screen5.png";
import screen6 from "../../../assets/capstone/naturalu/screens/screen6.png";
import screen7 from "../../../assets/capstone/naturalu/screens/screen7.png";
import screen8 from "../../../assets/capstone/naturalu/screens/screen8.png";
import screen9 from "../../../assets/capstone/naturalu/screens/screen9.png";
import screen10 from "../../../assets/capstone/naturalu/screens/screen10.png";
import screen11 from "../../../assets/capstone/naturalu/screens/screen11.png";
import screen12 from "../../../assets/capstone/naturalu/screens/screen12.png";
import screen13 from "../../../assets/capstone/naturalu/screens/screen13.png";
import screen14 from "../../../assets/capstone/naturalu/screens/screen14.png";
import screen15 from "../../../assets/capstone/naturalu/screens/screen15.png";
import screen16 from "../../../assets/capstone/naturalu/screens/screen16.png";
import screen17 from "../../../assets/capstone/naturalu/screens/screen17.png";
import screen18 from "../../../assets/capstone/naturalu/screens/screen18.png";
import screen19 from "../../../assets/capstone/naturalu/screens/screen19.png";
import screen20 from "../../../assets/capstone/naturalu/screens/screen20.png";

import ImageRow from "@/components/image-row";
import ZoomableImage from "@/components/zoomable-image";
import AutoScrollNavigator from "@/components/auto-scoll-navigator";

const highFidelityImages = [
  screen1,
  screen2,
  screen3,
  screen4,
  screen5,
  screen6,
  screen7,
  screen8,
  screen9,
  screen10,
  screen11,
  screen12,
  screen13,
  screen14,
  screen15,
  screen16,
  screen17,
  screen18,
  screen19,
  screen20,
];

const personaImages = [persona1, persona2];
const styleguideImages = [styleguide, components];
const sketchImages = [sketch1, sketch2];

const stats = [
  {
    number: 74,
    text: "Black women felt frustrated by their hair",
  },
  {
    number: 47,
    text: "Black women felt embarrassed by their hair",
  },
  {
    number: 68,
    text: "Black women felt that their doctors did not have a good understanding of their hair",
  },
  {
    number: 41,
    text: "Black women report chemically straightening their hair between the ages of 1-15",
  },
];

const steps = [
  { name: "Research", id: "research" },
  { name: "Ideate", id: "ideate" },
  { name: "Design", id: "design" },
];

export default function NaturalU() {
  const { width } = useWindowSize();
  const [showContent, setShowContent] = useState(true);
  const [solutionInActionZoomOne, setsolutionInActionZoomOne] = useState(false);
  const [solutionInActionZoomTwo, setsolutionInActionZoomTwo] = useState(false);
  const [solutionInActionZoomThree, setsolutionInActionZoomThree] =
    useState(false);
  const caseStudyRef = useRef(null);

  const updateContent = (state) => {
    setShowContent(state);
  };

  const handleArrowClick = () => {
    const offset = -100;
    const elementPosition =
      caseStudyRef.current.getBoundingClientRect().top + window.scrollY;
    const targetPosition = elementPosition + offset;

    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };
  const handleZoom = (index) => {
    if (index === 1) {
      setsolutionInActionZoomOne((prev) => !prev);
    } else if (index === 2) {
      setsolutionInActionZoomTwo((prev) => !prev);
    } else {
      setsolutionInActionZoomThree((prev) => !prev);
    }
  };

  return (
    <>
      <Head>
        <title> NaturalU Case Study Page</title>
      </Head>
      {width <= 767 ? <MobileNav updateContent={updateContent} /> : <Navbar />}
      {showContent && (
        <Hero
          image={naturalUHero}
          width={width}
          color={width >= 767 && width <= 1024 ? "#6E30FF" : "#FFFFFF"}
          arrowClick={handleArrowClick}
        />
      )}
      {showContent && (
        <main
          className="w-4/5 mx-auto flex flex-col gap-y-20 mt-16 mb-48"
          ref={caseStudyRef}
        >
          <h1
            className={`flex justify-center text-naturalu-purple  ${darkerGrotesqueTitle.className} text-6xl`}
          >
            NaturalU Case Study
          </h1>
          <div className="flex flex-col gap-y-8 md:flex-row gap-x-16 ">
            <div className="flex flex-col gap-y-8 flex-1">
              <h2
                className={`text-naturalu-purple text-5xl ${darkerGrotesqueTitle.className}`}
              >
                Problem
              </h2>
              <p
                className={`text-2xl ${interBold.className} text-naturalu-purple `}
              >
                Black women lack proper education about natural hair care while
                facing social pressure to alter their appearance.
              </p>
              <p className={`text-2xl leading-relaxed ${interBody.className}`}>
                Natural hair care suffers from inadequate{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  education
                </span>{" "}
                about proper techniques and persistent{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  societal pressure
                </span>{" "}
                to alter natural textures. These forces create cycles of hair{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  damage
                </span>{" "}
                and diminished{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  self-acceptance
                </span>
                , particularly affecting{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  Black communities
                </span>{" "}
                where chemical treatments have historically been promoted over
                natural styles.
              </p>
            </div>
            <div className="flex flex-col gap-y-8 flex-1">
              <h2
                className={`text-naturalu-purple text-5xl ${darkerGrotesqueTitle.className}`}
              >
                Solution
              </h2>
              <p
                className={`text-2xl ${interBold.className} text-naturalu-purple `}
              >
                NaturalU creates an educational community platform for Black
                women to embrace their natural hair.
              </p>
              <p className={`text-2xl leading-relaxed ${interBody.className}`}>
                NaturalU is a platform designed to foster open{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  education
                </span>{" "}
                and{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  conversations
                </span>{" "}
                about natural hair. Users can share{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  videos
                </span>
                {`, ask questions, and learn from each other, whether they're`}{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  professionals
                </span>{" "}
                or beginners. The app addresses the{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  social stigma
                </span>{" "}
                surrounding natural hair, promoting a community of{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  inclusivity
                </span>{" "}
                and open dialogue. It empowers users to confidently{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  embrace
                </span>{" "}
                and celebrate their natural hair and normalizes diverse hair
                types.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-y-8 w-full md:mx-auto">
            <h2
              className={`text-naturalu-purple text-5xl ${darkerGrotesqueTitle.className}`}
            >
              My Role
            </h2>
            <p className={` text-2xl leading-relaxed ${interBody.className}`}>
              I served as the sole UI/UX designer for this project; therefore, I
              handled the research and design
            </p>
          </div>
          <div className="flex flex-col gap-y-8 w-full md:mx-auto md:w-3/4 ">
            <h2
              className={`text-naturalu-purple text-5xl ${darkerGrotesqueTitle.className}`}
            >
              Solution in Action
            </h2>
            <>
              <div className="flex flex-col gap-y-16 xl:flex-row xl:gap-x-16 md:items-center border-b-4 ">
                <div
                  className="flex flex-col"
                  onClick={() => {
                    handleZoom(1);
                  }}
                >
                  <Image
                    src={screen20}
                    alt="coily hair education page"
                    className="w-full h-auto transition-all duration-300"
                    style={
                      solutionInActionZoomOne ? solutionInActionStyles : {}
                    }
                  />
                  <p
                    className={`${interBody.className} italic text-xl mb-4 text-center`}
                  >
                    Click on the image to enlarge
                  </p>
                </div>

                <div>
                  <h3
                    className={`text-naturalu-purple text-4xl ${darkerGrotesqueTitle.className} mb-4`}
                  >
                    Hair Type Education Hub
                  </h3>
                  <p
                    className={`text-2xl leading-relaxed ${interBody.className} mb-8`}
                  >
                    Addresses the education gap by providing detailed,
                    accessible information about specific hair types
                  </p>
                </div>
              </div>
              {solutionInActionZoomOne && (
                <div className="fixed top-0 left-0 w-screen h-dvh bg-bgWhite bg-opacity-50 z-[9998]" />
              )}
            </>
            <>
              <div className="flex flex-col gap-y-16 xl:flex-row xl:gap-x-16 md:items-center border-b-4">
                <div>
                  <h3
                    className={`text-naturalu-purple text-4xl ${darkerGrotesqueTitle.className} mb-4`}
                  >
                    Community Knowledge Exchange
                  </h3>
                  <p
                    className={`text-2x leading-relaxed ${interBody.className}`}
                  >
                    Creates a supportive space where users can ask questions and
                    receive advice from both professionals and peers
                  </p>
                </div>
                <div
                  className="flex flex-col"
                  onClick={() => {
                    handleZoom(2);
                  }}
                >
                  <Image
                    src={screen17}
                    alt="answered question page"
                    className="w-full h-auto transition-all duration-300"
                    style={
                      solutionInActionZoomTwo ? solutionInActionStyles : {}
                    }
                  />
                  <p
                    className={`${interBody.className} italic text-xl mb-4 text-center`}
                  >
                    Click on the image to enlarge
                  </p>
                </div>
              </div>
              {solutionInActionZoomTwo && (
                <div className="fixed top-0 left-0 w-screen h-dvh bg-bgWhite bg-opacity-50 z-[9998]" />
              )}
            </>
            <>
              <div className="flex flex-col gap-y-16 xl:flex-row xl:gap-x-16 md:items-center">
                <div
                  className="flex flex-col"
                  onClick={() => {
                    handleZoom(3);
                  }}
                >
                  <Image
                    src={screen14}
                    alt="video discovery page"
                    className="w-full h-auto transition-all duration-300"
                    style={
                      solutionInActionZoomThree ? solutionInActionStyles : {}
                    }
                  />
                  <p
                    className={`${interBody.className} italic text-xl text-center`}
                  >
                    Click on the image to enlarge
                  </p>
                </div>

                <div>
                  <h3
                    className={`text-naturalu-purple text-4xl ${darkerGrotesqueTitle.className} mb-4`}
                  >
                    Visual Learning Discovery
                  </h3>
                  <p
                    className={`text-2xl leading-relaxed ${interBody.className}`}
                  >
                    Enables visual learning and representation through diverse
                    hair examples, normalizing different hair types
                  </p>
                </div>
              </div>
              {solutionInActionZoomThree && (
                <div className="fixed top-0 left-0 w-screen h-dvh bg-bgWhite bg-opacity-50 z-[9998]" />
              )}
            </>
          </div>
          {width >= 767 && (
            <AutoScrollNavigator
              sections={steps}
              fontColor={"naturalu-purple"}
            />
          )}
          <div className="flex flex-col gap-y-4 w-3/4 mx-auto">
            <Title
              title={"Research"}
              color="text-naturalu-purple"
              id="research"
            />
            <div className={`text-2xl ${interBody.className}`}>
              <p className={`text-2xl leading-relaxed ${interBody.className}`}>
                Before designing, I aimed to understand how{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  Black women
                </span>{" "}
                feel about their{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  natural hair
                </span>{" "}
                and if their experiences mirrored my own. Key findings from
                primary research published in the{" "}
                <Link
                  className={` hover:underline text-naturalu-purple ${interBold.className} `}
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4174916/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Journal of Clinical and Aesthetic Dermatology
                </Link>{" "}
                included:
              </p>
              <ul className="list-disc ml-12">
                <li>
                  <span
                    className={`text-naturalu-purple ${interBold.className}`}
                  >
                    Frustration
                  </span>{" "}
                  and{" "}
                  <span
                    className={`text-naturalu-purple ${interBold.className}`}
                  >
                    embarrassment
                  </span>{" "}
                  with natural hair.
                </li>
                <li>
                  Limited knowledge from{" "}
                  <span
                    className={`text-naturalu-purple ${interBold.className}`}
                  >
                    healthcare professionals
                  </span>{" "}
                  on natural hair types, especially in scalp care.
                </li>
              </ul>
              <p>
                These insights emphasized the need for{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  open dialogue
                </span>{" "}
                and better{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  education
                </span>{" "}
                on natural hair.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-0 md:mx-auto">
            <Stats statsArray={stats} color="text-naturalu-purple" />
          </div>

          <div className="flex flex-col gap-y-8 w-full md:mx-auto md:w-3/4 ">
            <h3
              className={`text-naturalu-purple text-4xl ${darkerGrotesqueTitle.className}`}
            >
              Persona
            </h3>
            <div className={`text-2xl leading-relaxed ${interBody.className}`}>
              <p>
                I developed{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  Nia
                </span>{" "}
                , a persona based on my research, to represent the challenges
                many{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  Black women
                </span>{" "}
                face with their{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  natural hair
                </span>{" "}
                . Insights from the{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  Journal of Clinical and Aesthetic Dermatology
                </span>{" "}
                revealed frustration and embarrassment, and a lack of knowledge
                among{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  healthcare professionals
                </span>{" "}
                about diverse hair types.
              </p>
              <ul className="list-disc ml-12">
                <li>
                  <span
                    className={`text-naturalu-purple ${interBold.className}`}
                  >
                    Empathizing
                  </span>{" "}
                  with user pain points.
                </li>
                <li>
                  <span
                    className={`text-naturalu-purple ${interBold.className}`}
                  >
                    Prioritizing features
                  </span>{" "}
                  for overwhelmed users.
                </li>
                <li>
                  Focusing on{" "}
                  <span
                    className={`text-naturalu-purple ${interBold.className}`}
                  >
                    educational
                  </span>{" "}
                  and{" "}
                  <span
                    className={`text-naturalu-purple ${interBold.className}`}
                  >
                    interactive components
                  </span>
                  .
                </li>
              </ul>
              <p>
                This approach ensured the design addressed real user needs and
                aligned with my research.
              </p>
            </div>
          </div>
          <div className="md:mx-auto md:w-3/4">
            <ImageRow images={personaImages} />
          </div>

          <Title
            title={"Ideate"}
            color="text-naturalu-purple"
            styles="w-3/4 mx-auto"
            id="ideate"
          />
          <div className="flex flex-col gap-y-8 w-full md:mx-auto md:w-3/4 ">
            <h3
              className={`text-naturalu-purple text-4xl ${darkerGrotesqueTitle.className}`}
            >
              Sketches
            </h3>
            <div className={`text-2xl leading-relaxed ${interBody.className}`}>
              <p>
                Using the persona of{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  Nia
                </span>
                , my research focuses on addressing the{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  frustration
                </span>{" "}
                and{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  embarrassment
                </span>{" "}
                many{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  Black women
                </span>{" "}
                feel about their{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  natural hair
                </span>
                , along with the{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  limited knowledge
                </span>{" "}
                of diverse hair types among{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  healthcare professionals
                </span>
                .
              </p>
              <p>
                For the{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  NaturalU app
                </span>
                , I’m designing features to:
              </p>
              <ul className="list-disc ml-12">
                <li>
                  Enable users to ask questions for{" "}
                  <span
                    className={`text-naturalu-purple ${interBold.className}`}
                  >
                    personalized advice
                  </span>
                  .
                </li>
                <li>
                  Provide{" "}
                  <span
                    className={`text-naturalu-purple ${interBold.className}`}
                  >
                    videos
                  </span>{" "}
                  with practical tips and techniques.
                </li>
                <li>
                  Offer{" "}
                  <span
                    className={`text-naturalu-purple ${interBold.className}`}
                  >
                    informative content
                  </span>{" "}
                  on diverse hair types to boost confidence.
                </li>
              </ul>
              <br />
              <p>
                These{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  educational and interactive features
                </span>{" "}
                aim to empower users, turning frustration into confidence.
              </p>
            </div>
          </div>
          <div>
            <div className="md:mx-auto md:w-3/4">
              <ImageRow images={sketchImages} />
            </div>
          </div>

          <div className="flex flex-col gap-y-8 w-3/4 mx-auto">
            <h3
              className={`text-naturalu-purple text-4xl ${darkerGrotesqueTitle.className}`}
            >
              User Flow
            </h3>
            <div className={`text-2xl leading-relaxed ${interBody.className}`}>
              <p>
                With a clear understanding of the{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  features
                </span>{" "}
                needed to tackle{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  frustration
                </span>{" "}
                and{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  embarrassment
                </span>{" "}
                around{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  natural hair
                </span>{" "}
                and enhance{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  education
                </span>
                , I visualized the key tasks and decisions for users like{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  Nia
                </span>
                . By identifying specific scenarios she may face, I crafted a{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  user flow
                </span>{" "}
                to focus on essential tasks that promote learning and empower
                users in their hair care journey.
              </p>
            </div>
          </div>
          <ZoomableImage image={userFlow} />
          <Title
            title={"Design"}
            color="text-naturalu-purple"
            styles="w-full md:mx-auto md:w-3/4 "
            id="design"
          />
          <div className="flex flex-col gap-y-8 w-full md:mx-auto md:w-3/4 ">
            <h3
              className={`text-naturalu-purple text-4xl ${darkerGrotesqueTitle.className}`}
            >
              Style Guide and UI Components
            </h3>
            <div className={`text-2xl leading-relaxed ${interBody.className}`}>
              <p>
                After defining key screens and features, I focused on{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  branding
                </span>{" "}
                and building{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  UI components
                </span>{" "}
                for NaturalU to reflect{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  ambition
                </span>
                ,{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  independence
                </span>
                ,{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  confidence
                </span>
                ,{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  fun
                </span>
                , and{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  comfort
                </span>
                .
              </p>
              <br />
              <p>
                I chose{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  {`deep violet (#6E30FF)`}
                </span>{" "}
                as the primary color for its connection to{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  independence
                </span>{" "}
                and{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  self-reflection
                </span>
                , encouraging users to embrace their natural hair with
                confidence. As a secondary color,{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  {`vibrant pink-red (#E6004D)`}
                </span>{" "}
                evokes{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  energy
                </span>{" "}
                and{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  boldness
                </span>
                , fostering an interactive and empowering experience.
              </p>
              <br />
              <p>
                For typography, I selected{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  Nunito
                </span>{" "}
                for its rounded, sans-serif design, which conveys a{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  warm
                </span>{" "}
                and{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  friendly tone
                </span>
                ,{" "}
                {`enhancing clarity and reflecting the app's supportive
                personality.`}
              </p>
            </div>
          </div>
          <div className="md:mx-auto md:w-3/4">
            <ImageRow images={styleguideImages} />
          </div>

          <div className="flex flex-col gap-y-8 w-full md:mx-auto md:w-3/4 ">
            <h3
              className={`text-naturalu-purple text-4xl ${darkerGrotesqueTitle.className}`}
            >
              High Fidelity Screens
            </h3>
            <div className={`text-2xl leading-relaxed ${interBody.className}`}>
              <p>
                After using research and ideation to guide my design decisions,
                I created a{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  style guide
                </span>{" "}
                and defined{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  UI components
                </span>
                , leading to the final high-fidelity screens for NaturalU. These
                screens include:
              </p>
              <ul className="list-disc ml-12">
                <li>
                  <span
                    className={`text-naturalu-purple ${interBold.className}`}
                  >
                    Interactive Q&A Forum
                  </span>
                </li>
                <li>
                  <span
                    className={`text-naturalu-purple ${interBold.className}`}
                  >
                    Video Tutorials
                  </span>
                </li>
                <li>
                  <span
                    className={`text-naturalu-purple ${interBold.className}`}
                  >
                    Informational Articles
                  </span>
                </li>
              </ul>
              <br />
              <p>
                This ensures{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  user engagement
                </span>{" "}
                while addressing core needs identified in research, making the
                design{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  user-centered
                </span>{" "}
                and{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  effective
                </span>
                .
              </p>
            </div>
          </div>

          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(highFidelityImages)} />
          ) : (
            <Slider sliderData={createImageArray(highFidelityImages)} />
          )}

          <div className="flex flex-col gap-y-4 w-full md:mx-auto md:w-3/4 ">
            <Title title={"What's Next"} color="text-naturalu-purple" />
            <div className={`text-2xl leading-relaxed ${interBody.className}`}>
              <p>
                {`I'm proud of the progress on the`}{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  NaturalU app
                </span>{" "}
                and its potential to empower users to embrace their natural
                hair. My next steps include enhancing the{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  hair discovery pages
                </span>{" "}
                to make them more interactive and conducting{" "}
                <span className={`text-naturalu-purple ${interBold.className}`}>
                  usability testing
                </span>{" "}
                with users to refine the experience.
              </p>
              <p>Planned features:</p>
              <ul className="list-disc ml-12">
                <li>
                  <span
                    className={`text-naturalu-purple ${interBold.className}`}
                  >
                    Personal hair journals
                  </span>{" "}
                  to track hair journeys
                </li>
                <li>
                  <span
                    className={`text-naturalu-purple ${interBold.className}`}
                  >
                    Supportive messages
                  </span>{" "}
                  to motivate users
                </li>
                <li>
                  <span
                    className={`text-naturalu-purple ${interBold.className}`}
                  >
                    Hair quizzes
                  </span>{" "}
                  for personalized insights
                </li>
                <li>
                  <span
                    className={`text-naturalu-purple ${interBold.className}`}
                  >
                    Gamification
                  </span>{" "}
                  to encourage exploration and learning
                </li>
              </ul>
              <br />
              <p>
                The goal is to create a welcoming space where users feel
                confident, inspired, and proud of their natural crowns.
              </p>
            </div>
          </div>
          <CaseStudyFooter casestudy="NaturalU" />
        </main>
      )}
      {showContent && <Footer width={width} />}
    </>
  );
}
