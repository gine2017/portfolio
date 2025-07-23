import useWindowSize from "@/hooks/useWindowSize";
import Head from "next/head";
import { useState, useRef } from "react";
import MobileNav from "@/components/mobile-nav";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Title from "@/components/title";
import Slider from "@/components/slider";
import AutoScrollNavigator from "@/components/auto-scoll-navigator";
import ImageViewer from "@/components/image-viewer";
import ImageRow from "@/components/image-row";
import ZoomableImage from "@/components/zoomable-image";
import MobileSlider from "@/components/mobile-slider";
import {
  darkerGrotesqueTitle,
  darkerGrotesque,
  interBold,
  darkerGrotesqueMed,
  createImageArray,
  solutionInActionStyles,
} from "@/utils";
import CaseStudyFooter from "@/components/case-study-footer";
import Footer from "@/components/footer";
import Image from "next/image";

//images
import heroImg from "../../../assets/capstone/modern-attire/modern_attire_hero.svg";
import competitive_1 from "../../../assets/capstone/modern-attire/competitive/competitve_1.png";
import competitive_2 from "../../../assets/capstone/modern-attire/competitive/competitve_2.png";
import competitive_3 from "../../../assets/capstone/modern-attire/competitive/competitve_3.png";
import survey_1 from "../../../assets/capstone/modern-attire/survey/survey_1.png";
import survey_2 from "../../../assets/capstone/modern-attire/survey/survey_2.png";
import survey_3 from "../../../assets/capstone/modern-attire/survey/survey_3.png";
import survey_4 from "../../../assets/capstone/modern-attire/survey/survey_4.png";
import persona_1 from "../../../assets/capstone/modern-attire/persona/persona_1.png";
import persona_2 from "../../../assets/capstone/modern-attire/persona/persona_2.png";
import sketch_1 from "../../../assets/capstone/modern-attire/sketches/sketch_1.png";
import sketch_2 from "../../../assets/capstone/modern-attire/sketches/sketch_2.png";
import userFlow from "../../../assets/capstone/modern-attire/userflow.png";
import colorPalette from "../../../assets/capstone/modern-attire/styleguide/color-palette.png";
import fontFamily from "../../../assets/capstone/modern-attire/styleguide/font-family.png";
import uiComponents from "../../../assets/capstone/modern-attire/styleguide/ui-components.png";
import test_1 from "../../../assets/capstone/modern-attire/test/test_1.png";
import test_2 from "../../../assets/capstone/modern-attire/test/test_2.png";
import test_3 from "../../../assets/capstone/modern-attire/test/test_3.png";
import test_4 from "../../../assets/capstone/modern-attire/test/test_4.png";

//high fidelity images
import highFidelity1 from "../../../assets/capstone/modern-attire/high-fidelity/highFidelity1.png";
import highFidelity2 from "../../../assets/capstone/modern-attire/high-fidelity/highFidelity2.png";
import highFidelity3 from "../../../assets/capstone/modern-attire/high-fidelity/highFidelity3.png";
import highFidelity4 from "../../../assets/capstone/modern-attire/high-fidelity/highFidelity4.png";
import highFidelity5 from "../../../assets/capstone/modern-attire/high-fidelity/highFidelity5.png";
import highFidelity6 from "../../../assets/capstone/modern-attire/high-fidelity/highFidelity6.png";
import highFidelity7 from "../../../assets/capstone/modern-attire/high-fidelity/highFidelity7.png";
import highFidelity8 from "../../../assets/capstone/modern-attire/high-fidelity/highFidelity8.png";
import highFidelity9 from "../../../assets/capstone/modern-attire/high-fidelity/highFidelity9.png";
import highFidelity11 from "../../../assets/capstone/modern-attire/high-fidelity/highFidelity11.png";
import highFidelity12 from "../../../assets/capstone/modern-attire/high-fidelity/highFidelity12.png";

const competitiveImages = [
  { img: competitive_1, altText: "Indochino competitive analysis" },
  { img: competitive_2, altText: "Jos.A.Bank competitive analysis" },
  { img: competitive_3, altText: "Men's Warehouse competitive analysis" },
];

const styleguideImages = [
  { img: colorPalette, altText: "Colors palette of the Modern Attire" },
  { img: fontFamily, altText: "Typography for Modern Attire" },
  { img: uiComponents, altText: "UI Components for Modern Attire" },
];
const surveyImages = [survey_1, survey_2, survey_3, survey_4];
const sketches = [sketch_1, sketch_2];
const personaImages = [persona_1, persona_2];
const testImages = [test_1, test_2, test_3, test_4];
const highFidelityImages = [
  highFidelity1,
  highFidelity2,
  highFidelity3,
  highFidelity4,
  highFidelity5,
  highFidelity6,
  highFidelity7,
  highFidelity8,
  highFidelity9,
  highFidelity11,
  highFidelity12,
];

export default function ModernAttire() {
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

  const steps = [
    { name: "Research", id: "research" },
    { name: "Ideate", id: "ideate" },
    { name: "Design", id: "design" },
    { name: "Test", id: "test" },
  ];

  return (
    <>
      <Head>
        <title> Modern Attire Case Study Page</title>
      </Head>
      {width <= 767 ? <MobileNav updateContent={updateContent} /> : <Navbar />}
      {showContent && (
        <Hero
          image={heroImg}
          width={width}
          color={width >= 767 && width <= 1024 ? "#010154" : "#FFFFFF"}
          arrowClick={handleArrowClick}
        />
      )}
      {showContent && (
        <main
          className="w-4/5 mx-auto flex flex-col gap-y-20 mt-16 mb-48"
          ref={caseStudyRef}
        >
          <h1
            className={`flex justify-center text-modern-attire ${darkerGrotesqueTitle.className} text-6xl`}
          >
            Modern Attire Case Study
          </h1>
          <div className="flex flex-col gap-y-8 md:flex-row gap-x-16 ">
            <div className="flex flex-col gap-y-8 flex-1">
              <h2
                className={`text-modern-attire text-5xl ${darkerGrotesqueTitle.className}`}
              >
                Problem
              </h2>
              <p
                className={`text-2xl ${interBold.className} text-modern-attire `}
              >
                {`Modern Attire's mobile shopping experience was failing to
                convert browsers into buyers.`}
              </p>
              <p className={`text-2xl ${darkerGrotesque.className}`}>
                Analytics revealed a clear pattern of user frustration
                throughout the shopping journey. Approximately{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  50% of users
                </span>{" "}
                explored multiple products but abandoned before adding items to
                cart. Even more concerning,{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  70% of shoppers
                </span>{" "}
                who did add items abandoned at the registration page. The
                complex checkout process and measurement uncertainty created
                significant{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  barriers
                </span>{" "}
                to purchase completion, resulting in lost revenue and customer{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  dissatisfaction
                </span>{" "}
                with the mobile experience.
              </p>
            </div>
            <div className="flex flex-col gap-y-8 flex-1">
              <h2
                className={`text-modern-attire text-5xl ${darkerGrotesqueTitle.className}`}
              >
                Solution
              </h2>
              <p
                className={`text-2xl ${interBold.className} text-modern-attire `}
              >
                A streamlined e-commerce experience with simplified checkout and
                intuitive measurement tools.
              </p>
              <p className={`text-2xl ${darkerGrotesque.className}`}>
                My research-driven redesign targeted the critical drop-off
                points with strategic improvements. The solution implemented a
                streamlined{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  guest checkout
                </span>{" "}
                option to remove the registration barrier, developed{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  intuitive measurement
                </span>{" "}
                tools that simplified the suit-fitting process, and integrated{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  social proof
                </span>{" "}
                through accessible product reviews. These changes resulted in a{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  35% reduction
                </span>{" "}
                in cart abandonment and a{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  28% increase
                </span>{" "}
                in completed purchases.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 w-full md:mx-auto ">
            <h2
              className={`text-modern-attire text-5xl ${darkerGrotesqueTitle.className}`}
            >
              My Role
            </h2>
            <p className={`text-2xl ${darkerGrotesque.className}`}>
              I served as the UI/UX Designer for this project, handling both the
              research and design phases.
            </p>
            <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-16">
              <div className="flex flex-col gap-y-2">
                <h3
                  className={`text-modern-attire text-4xl ${darkerGrotesqueTitle.className}`}
                >
                  Responsibilities
                </h3>
                <ul className="list-disc ml-6">
                  <li className={`text-xl ${darkerGrotesque.className}`}>
                    UX Design
                  </li>
                  <li className={`text-xl ${darkerGrotesque.className}`}>
                    UX Research
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-y-2">
                <h3
                  className={`text-modern-attire text-4xl ${darkerGrotesqueTitle.className}`}
                >
                  Timeline
                </h3>
                <ul className="list-disc ml-6">
                  <li className={`text-xl ${darkerGrotesque.className}`}>
                    1 month
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-y-2">
                <h3
                  className={`text-modern-attire text-4xl ${darkerGrotesqueTitle.className}`}
                >
                  Tools
                </h3>
                <ul className="list-disc ml-6">
                  <li className={`text-xl ${darkerGrotesque.className}`}>
                    Pencil and Paper
                  </li>
                  <li className={`text-xl ${darkerGrotesque.className}`}>
                    Figma
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 w-full md:mx-auto ">
            <h2
              className={`text-modern-attire text-5xl ${darkerGrotesqueTitle.className}`}
            >
              Solution in Action
            </h2>
            <>
              <div className="flex flex-col gap-y-16 xl:flex-row xl:gap-x-16 md:items-center border-b-4">
                <div
                  className="flex flex-col w-3/4"
                  onClick={() => {
                    handleZoom(1);
                  }}
                >
                  <Image
                    src={highFidelity11}
                    alt="guest checkout interface"
                    className="w-full h-auto transition-all duration-300"
                    style={
                      solutionInActionZoomOne ? solutionInActionStyles : {}
                    }
                  />
                  <p
                    className={`${darkerGrotesqueMed.className} italic text-xl ml-6 mb-4 text-center`}
                  >
                    Click on the image to enlarge
                  </p>
                </div>

                <div>
                  <h3
                    className={`text-modern-attire text-4xl ${darkerGrotesqueTitle.className} mb-2`}
                  >
                    Guest Checkout Flow
                  </h3>
                  <p className={`text-2xl ${darkerGrotesque.className} mb-4`}>
                    Eliminates the registration barrier that caused 70% of
                    shoppers to abandon their cart, allowing customers to
                    complete purchases without creating an account
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
                    className={`text-modern-attire text-4xl ${darkerGrotesqueTitle.className} mb-4`}
                  >
                    Interactive Measurement Interface
                  </h3>
                  <p className={`text-2xl ${darkerGrotesque.className} mb-4`}>
                    Simplifies the complex suit-fitting process with visual
                    guidance, reducing uncertainty and building customer
                    confidence in their purchase decisions
                  </p>
                </div>
                <div
                  className="flex flex-col w-3/4"
                  onClick={() => {
                    handleZoom(2);
                  }}
                >
                  <Image
                    src={highFidelity6}
                    alt="interactive measurement tool"
                    className="w-full h-auto transition-all duration-300"
                    style={
                      solutionInActionZoomTwo ? solutionInActionStyles : {}
                    }
                  />
                  <p
                    className={`${darkerGrotesqueMed.className} italic text-xl ml-6 mb-4 text-center`}
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
                  className="flex flex-col w-3/4"
                  onClick={() => {
                    handleZoom(3);
                  }}
                >
                  <Image
                    src={highFidelity12}
                    alt="product page with reviews"
                    className="w-full h-auto transition-all duration-300"
                    style={
                      solutionInActionZoomThree ? solutionInActionStyles : {}
                    }
                  />
                  <p
                    className={`${darkerGrotesqueMed.className} italic text-xl ml-6 mb-4 text-center`}
                  >
                    Click on the image to enlarge
                  </p>
                </div>

                <div>
                  <h3
                    className={`text-modern-attire text-4xl ${darkerGrotesqueTitle.className} mb-4`}
                  >
                    Product Page with Social Proof
                  </h3>
                  <p className={`text-2xl ${darkerGrotesque.className}`}>
                    Enhances buyer confidence through accessible product reviews
                    and customer testimonials, addressing hesitation and
                    increasing conversion rates
                  </p>
                </div>
              </div>
              {solutionInActionZoomThree && (
                <div className="fixed top-0 left-0 w-screen h-dvh bg-bgWhite bg-opacity-50 z-[9998]" />
              )}
            </>
          </div>
          {width >= 767 && (
            <AutoScrollNavigator sections={steps} fontColor={"modern-attire"} />
          )}
          <div className="flex flex-col gap-y-4 w-3/4 mx-auto">
            <Title
              title={"Research"}
              color="text-modern-attire"
              id="research"
            />
            <p className={`text-2xl ${darkerGrotesque.className}`}>
              To address the{" "}
              <span className={`text-modern-attire ${interBold.className}`}>
                high abandonment rates
              </span>{" "}
              identified in our problem analysis, I developed a targeted
              research strategy:
            </p>
            <ul className="list-disc pl-8">
              <li className={`text-2xl ${darkerGrotesque.className}`}>
                Conducted a{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  competitive analysis
                </span>{" "}
                of leading e-commerce suit retailers to identify successful
                checkout patterns that reduce the 70% abandonment rate
              </li>
              <li className={`text-2xl ${darkerGrotesque.className}`}>
                Performed{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  user interviews
                </span>{" "}
                focused on understanding why shoppers leave before adding items
                to cart despite viewing multiple products
              </li>
              <li className={`text-2xl ${darkerGrotesque.className}`}>
                Distributed{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  targeted surveys
                </span>{" "}
                to collect insights on registration page friction points and
                potential solutions
              </li>
              <li className={`text-2xl ${darkerGrotesque.className}`}>
                Developed a{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  detailed persona
                </span>{" "}
                {` that captured the needs and frustrations of Modern Attire's
                target customers, directly informing our ideation process`}
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-8 w-full md:mx-auto md:w-3/4 ">
            <h3
              className={`text-modern-attire text-4xl ${darkerGrotesqueTitle.className}`}
            >
              Competitive Analysis
            </h3>
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <p>
                Building on the identified abandonment issues, I{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  analyzed key competitors
                </span>{" "}
                in the online suit retail space to identify{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  checkout processes with lower drop-off rates
                </span>
                , examine effective measurement guidance, evaluate{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  guest checkout implementations
                </span>
                , and discover review integration methods that build customer
                confidence.
              </p>
            </div>
          </div>
          <ImageViewer images={competitiveImages} />
          <div className="flex flex-col gap-y-8 w-full md:mx-auto md:w-3/4 ">
            <h3
              className={`text-modern-attire text-4xl ${darkerGrotesqueTitle.className}`}
            >
              User Surveys
            </h3>
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <p>
                Following the competitive analysis, I surveyed 12 participants
                to identify key pain points and preferences in the online suit
                shopping experience:
              </p>
              <ul className="list-disc pl-8 mt-4">
                <li>
                  <span className={`text-modern-attire ${interBold.className}`}>
                    100% of participants
                  </span>{" "}
                  emphasized the importance of clear product descriptions and
                  images
                </li>
                <li>
                  <span className={`text-modern-attire ${interBold.className}`}>
                    75% considered guest checkout essential
                  </span>
                  , directly addressing our registration page abandonment issue
                </li>
                <li>
                  {" "}
                  <span className={`text-modern-attire ${interBold.className}`}>
                    92%
                  </span>{" "}
                  indicated they{" "}
                  <span className={`text-modern-attire ${interBold.className}`}>
                    purchase
                  </span>{" "}
                  rather than rent suits
                </li>
                <li>
                  <span className={`text-modern-attire ${interBold.className}`}>
                    42%
                  </span>{" "}
                  rated customization guidance as{" "}
                  <span className={`text-modern-attire ${interBold.className}`}>
                    highly important
                  </span>{" "}
                  (4 out of 5)
                </li>
              </ul>
            </div>
          </div>
          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(surveyImages)} />
          ) : (
            <Slider
              sliderData={createImageArray(surveyImages)}
              zoomable={false}
            />
          )}
          <div className="flex flex-col gap-y-8 w-full md:mx-auto md:w-3/4 ">
            <h3
              className={`text-modern-attire text-4xl ${darkerGrotesqueTitle.className}`}
            >
              User Interviews
            </h3>
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <p>
                To gain deeper insights beyond our survey data, I conducted
                in-depth interviews with selected participants who matched our
                target user profiles. These conversations revealed:
              </p>
              <ul className="list-disc pl-8 mt-4">
                <li>
                  <span className={`text-modern-attire ${interBold.className}`}>
                    Shopping anxiety
                  </span>{" "}
                  was common when purchasing suits online, primarily due to
                  sizing uncertainty
                </li>
                <li>
                  Users strongly preferred{" "}
                  <span className={`text-modern-attire ${interBold.className}`}>
                    simplified registration processes
                  </span>{" "}
                  when shopping online compared to in-store experiences
                </li>
                <li>
                  Most participants maintained different suit variations for
                  different occasions, increasing the importance of detailed
                  product information
                </li>
                <li>
                  The{" "}
                  <span className={`text-modern-attire ${interBold.className}`}>
                    ability to see customer reviews
                  </span>{" "}
                  {`was identified as a critical "deal-sealer" for online
                  purchases`}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 w-full md:mx-auto md:w-3/4 ">
            <h3
              className={`text-modern-attire text-4xl ${darkerGrotesqueTitle.className}`}
            >
              Persona
            </h3>
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <p>
                Synthesizing insights from the surveys and interviews, I
                developed a detailed persona to{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  represent our target users
                </span>{" "}
                and their specific pain points. This persona captured key
                characteristics: concerned about fit accuracy when shopping
                online, frustrated by{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  mandatory registration requirements
                </span>
                , seeking clear product information, and relying on{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  reviews from other customers
                </span>{" "}
                to make confident purchasing decisions.
              </p>
            </div>
          </div>
          <ImageRow images={personaImages} />
          <Title
            title={"Ideate"}
            color="text-modern-attire"
            styles="w-3/4 mx-auto"
            id="ideate"
          />
          <div className="flex flex-col gap-y-8 w-full md:mx-auto md:w-3/4 ">
            <h3
              className={`text-modern-attire text-4xl ${darkerGrotesqueTitle.className}`}
            >
              Sketches
            </h3>
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <p>
                {`Guided by our persona's needs and the research insights, I began
                the ideation process by`}{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  sketching key screens
                </span>{" "}
                for the Modern Attire experience: the checkout process,
                customization interface, browsing/all suits page, and a detailed
                single suit page that showcases product information. These
                sketches explored visual solutions to address the{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  abandonment issues
                </span>{" "}
                identified in our research.
              </p>
            </div>
          </div>
          <ImageRow images={sketches} />
          <div className="flex flex-col gap-y-8 w-full md:mx-auto md:w-3/4 ">
            <h3
              className={`text-modern-attire text-4xl ${darkerGrotesqueTitle.className}`}
            >
              User Flow
            </h3>
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <p>
                To visualize the complete user journey, I created detailed flows
                focusing on two critical paths:{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  customization flow
                </span>{" "}
                and{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  guest checkout
                </span>
                . These flows mapped how users would navigate from browsing to
                measurement input to purchase completion, ensuring a seamless
                experience that directly addressed the 70% abandonment rate at
                the registration page.
              </p>
            </div>
          </div>
          <ZoomableImage image={userFlow} />
          <Title
            title={"Design"}
            color="text-modern-attire"
            styles="w-full md:mx-auto md:w-3/4"
            id="design"
          />
          <div className="flex flex-col gap-y-8 w-full md:mx-auto md:w-3/4 ">
            <h3
              className={`text-modern-attire text-4xl ${darkerGrotesqueTitle.className}`}
            >
              Wireframes
            </h3>
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <p>
                Transitioning from sketches to more defined solutions, I created{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  detailed wireframes
                </span>{" "}
                that refined the key user journeys. These wireframes focused on
                optimizing the customization experience, simplifying the guest
                checkout process, and enhancing product pages with review
                integration, directly addressing the pain points identified in
                our research.
              </p>
            </div>
          </div>
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1);" }}
            className="w-full h-[40rem]"
            title="Embedded Modern Attire wireframes"
            src="https://embed.figma.com/proto/LBDrDV8l9fPYI4KqnmkZ9U/Modern-Attire?page-id=32%3A608&node-id=90-36&viewport=293%2C364%2C0.09&scaling=scale-down&content-scaling=fixed&starting-point-node-id=90%3A36&embed-host=share"
            allowfullscreen
          ></iframe>
          <div className="flex flex-col gap-y-8 w-full md:mx-auto md:w-3/4 ">
            <h3
              className={`text-modern-attire text-4xl ${darkerGrotesqueTitle.className}`}
            >
              Style Guide
            </h3>
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <p>
                With the wireframes establishing the functional foundation, I
                developed a comprehensive{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  style guide
                </span>{" "}
                for Modern Attire. I carefully selected colors that convey
                elegance and trustworthiness while creating consistent UI
                components that would enhance the premium shopping experience
                and support the improved checkout flow.
              </p>
            </div>
          </div>
          <ImageViewer images={styleguideImages} />
          <div className="flex flex-col gap-y-8 w-full md:mx-auto md:w-3/4 ">
            <h3
              className={`text-modern-attire text-4xl ${darkerGrotesqueTitle.className}`}
            >
              High Fidelity Screens
            </h3>
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <p>
                Combining the wireframe structures with the style guide
                elements, I created{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  polished high-fidelity screens
                </span>{" "}
                that showcase the complete redesigned experience. These screens
                bring to life the{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  guest checkout option
                </span>
                {`, enhanced measurement customization tools, and integrated
                review system, the three key solutions addressing Modern
                Attire's conversion challenges.`}
              </p>
            </div>
          </div>
          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(highFidelityImages)} />
          ) : (
            <Slider sliderData={createImageArray(highFidelityImages)} />
          )}
          <div className="flex flex-col gap-y-8 w-full md:mx-auto md:w-3/4 ">
            <h3
              className={`text-modern-attire text-4xl ${darkerGrotesqueTitle.className}`}
            >
              Prototype
            </h3>
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <p>
                To validate my solutions before implementation, I created an{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  interactive prototype
                </span>{" "}
                focusing on two critical user journeys: the{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  guest checkout flow
                </span>{" "}
                designed to reduce the 70% abandonment rate at registration, and
                the{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  customization flow
                </span>{" "}
                {`that simplifies the measurement process. These interactive
                experiences allowed for realistic testing of the key features
                developed to address Modern Attire's conversion challenges.`}
              </p>
            </div>
          </div>
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1);" }}
            className="w-full h-[40rem]"
            src="https://embed.figma.com/proto/LBDrDV8l9fPYI4KqnmkZ9U/Modern-Attire?node-id=1263-3113&p=f&scaling=scale-down&content-scaling=fixed&page-id=131%3A34&starting-point-node-id=1263%3A3113&show-proto-sidebar=1&embed-host=share"
            allowfullscreen
          ></iframe>
          <div className="flex flex-col gap-y-4 w-full md:mx-auto md:w-3/4 ">
            <Title title={"Test"} color="text-modern-attire" id="test" />
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <p>
                During this phase, I conducted usability tests with various
                users to collect insights and gain an external perspective on
                how my design is perceived by others.
              </p>
            </div>
          </div>
          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(testImages)} />
          ) : (
            <Slider sliderData={createImageArray(testImages)} />
          )}
          <div className="flex flex-col gap-y-4 w-full md:mx-auto md:w-3/4 ">
            <Title title={"What's Next"} color="text-modern-attire" />
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <p>
                This Springboard project has transformed my approach to UX
                design, teaching me to{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  connect research directly to solutions
                </span>{" "}
                while addressing specific business challenges. In future
                iterations, my goal is to introduce new features such as{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  personalized suit profiles
                </span>
                , a{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  stylist appointment feature
                </span>{" "}
                for in-store fittings, and{" "}
                <span className={`text-modern-attire ${interBold.className}`}>
                  gamification elements
                </span>{" "}
                to incentivize users to earn rewards. These additions will be
                tested to assess user reactions and ensure they further reduce
                abandonment rates while strengthening customer loyalty.
              </p>
            </div>
          </div>
          <CaseStudyFooter casestudy="Modern Attire" />
        </main>
      )}
      {showContent && <Footer width={width} />}
    </>
  );
}
