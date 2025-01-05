import { useState, useRef } from "react";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Link from "next/link";
import {
  myFont,
  darkerGrotesque,
  createImageArray,
  darkerGrotesqueBold,
} from "@/utils";
import Stats from "@/components/stats";
import Title from "@/components/title";
import Slider from "@/components/slider";
import useWindowSize from "@/hooks/useWindowSize";
import MobileNav from "@/components/mobile-nav";
import MobileSlider from "@/components/mobile-slider";
import Footer from "@/components/footer";
import CaseStudyFooter from "@/components/case-study-footer";
import AutoScrollNavigator from "@/components/auto-scoll-navigator";

//images
import heroImg from "../../../assets/capstone/gatherly/hero-bghero_2.svg";
import ladder from "../../../assets/capstone/gatherly/ladder.png";
import persona1 from "../../../assets/capstone/gatherly/persona/persona_1.png";
import persona2 from "../../../assets/capstone/gatherly/persona/persona_2.png";

import survey1 from "../../../assets/capstone/gatherly/survey/survey_1.png";
import survey2 from "../../../assets/capstone/gatherly/survey/survey_2.png";
import survey3 from "../../../assets/capstone/gatherly/survey/survey_3.png";
import survey4 from "../../../assets/capstone/gatherly/survey/survey_4.png";
import empathy from "../../../assets/capstone/gatherly/empathyMap.png";
import cultureSketch from "../../../assets/capstone/gatherly/sketches/culture_app.png";
import directorySketch from "../../../assets/capstone/gatherly/sketches/directory_Sketech.png";
import userflow from "../../../assets/capstone/gatherly/userflow.png";
import styleguide_1 from "../../../assets/capstone/gatherly/styleguide/styleguide_1.png";
import styleguide_2 from "../../../assets/capstone/gatherly/styleguide/styleguide_2.png";
import styleguide_3 from "../../../assets/capstone/gatherly/styleguide/styleguide_3.png";
import styleguide_4 from "../../../assets/capstone/gatherly/styleguide/styleguide_4.png";
import styleguide_5 from "../../../assets/capstone/gatherly/styleguide/styleguide_5.png";
import styleguide_6 from "../../../assets/capstone/gatherly/styleguide/styleguide_6.png";

import test1 from "../../../assets/capstone/gatherly/test/test_1.png";
import test2 from "../../../assets/capstone/gatherly/test/test_2.png";
import test3 from "../../../assets/capstone/gatherly/test/test_3.png";
import wireframe_1 from "../../../assets/capstone/gatherly/wireframes/wireframe_1.png";
import wireframe_2 from "../../../assets/capstone/gatherly/wireframes/wireframe_2.png";
import wireframe_3 from "../../../assets/capstone/gatherly/wireframes/wireframe_3.png";
import wireframe_4 from "../../../assets/capstone/gatherly/wireframes/wireframe_4.png";
import wireframe_5 from "../../../assets/capstone/gatherly/wireframes/wireframe_5.png";
import wireframe_6 from "../../../assets/capstone/gatherly/wireframes/wireframe_6.png";

import highFidelity1 from "../../../assets/capstone/gatherly/high-fidelity/high-fideity-1.png";
import highFidelity2 from "../../../assets/capstone/gatherly/high-fidelity/high-fideity-2.png";
import highFidelity3 from "../../../assets/capstone/gatherly/high-fidelity/high-fideity-3.png";
import highFidelity4 from "../../../assets/capstone/gatherly/high-fidelity/high-fideity-4.png";
import highFidelity5 from "../../../assets/capstone/gatherly/high-fidelity/high-fideity-5.png";
import highFidelity6 from "../../../assets/capstone/gatherly/high-fidelity/high-fideity-6.png";
import highFidelity8 from "../../../assets/capstone/gatherly/high-fidelity/high-fideity-8.png";
import highFidelity9 from "../../../assets/capstone/gatherly/high-fidelity/high-fideity-9.png";
import highFidelity10 from "../../../assets/capstone/gatherly/high-fidelity/high-fideity-10.png";
import highFidelity11 from "../../../assets/capstone/gatherly/high-fidelity/high-fideity-11.png";
import highFidelity12 from "../../../assets/capstone/gatherly/high-fidelity/high-fideity-12.png";
import highFidelity13 from "../../../assets/capstone/gatherly/high-fidelity/high-fideity-13.png";
import ImageRow from "@/components/image-row";
import ImageViewer from "@/components/image-viewer";
import ZoomableImage from "@/components/zoomable-image";

const personaImages = [persona1, persona2];
const surveyImages = [survey1, survey2, survey3, survey4];
const skethesImages = [cultureSketch, directorySketch];
const styleguideImages = [
  styleguide_1,
  styleguide_2,
  styleguide_3,
  styleguide_4,
  styleguide_5,
  styleguide_6,
];

const testImages = [test1, test2, test3];
const wireframeImages = [
  wireframe_1,
  wireframe_2,
  wireframe_3,
  wireframe_4,
  wireframe_5,
  wireframe_6,
];

const highFidelityImages = [
  highFidelity1,
  highFidelity2,
  highFidelity3,
  highFidelity4,
  highFidelity5,
  highFidelity6,
  highFidelity8,
  highFidelity9,
  highFidelity10,
  highFidelity11,
  highFidelity12,
  highFidelity13,
];
const stats = [
  {
    number: 46,
    text: "U.S Young Adults have difficulty in initiating relationships",
  },
  {
    number: 58,
    text: "U.S Adults between the ages of 18-29 are likely to face high psychological stress since Covid-19",
  },
  {
    number: 41,
    text: "4 in 10 U.S Adults have experienced high levels of psychological stress during the pandemic",
  },
];
const steps = [
  { name: "Research", id: "research" },
  { name: "Ideate", id: "ideate" },
  { name: "Design", id: "design" },
  { name: "Test", id: "test" },
];
export default function Gatherly() {
  const { width } = useWindowSize();
  const [showContent, setShowContent] = useState(true);
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

  return (
    <div>
      {width <= 767 ? <MobileNav updateContent={updateContent} /> : <Navbar />}
      {showContent && (
        <Hero
          image={heroImg}
          width={width}
          color={"#0072BB"}
          arrowClick={handleArrowClick}
        />
      )}
      {showContent && (
        <main
          className="mx-auto w-80% flex flex-col gap-y-20 mt-4 md:mt-16 mb-48"
          ref={caseStudyRef}
        >
          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(highFidelityImages)} />
          ) : (
            <Slider sliderData={createImageArray(highFidelityImages)} />
          )}
          <div className="flex flex-col gap-y-8 flex-1 md:mx-auto md:w-3/4">
            <p className={` text-gatherly-blue text-4xl ${myFont.className}`}>
              Problem Statement
            </p>
            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <p>
                This was my{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  first case study
                </span>
                , heavily{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  focused on research
                </span>
                , and completed during the{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  Springboard BootCamp
                </span>
                . Navigating adulthood has become increasingly challenging for
                young adults, especially{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  post-COVID-19
                </span>
                .
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  Social isolation
                </span>{" "}
                and{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  disconnection
                </span>{" "}
                have heightened feelings of{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  loneliness
                </span>{" "}
                and{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  anxiety
                </span>
                , significantly impacting{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  mental health
                </span>{" "}
                and{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  communication
                </span>
                . This project aimed to explore solutions to help young adults{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  build meaningful connections
                </span>{" "}
                and navigate this pivotal phase of life.
              </p>
            </div>
          </div>
          {width >= 767 && (
            <AutoScrollNavigator sections={steps} fontColor={"gatherly-blue"} />
          )}

          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              My Role
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              I served as the sole UI/UX designer for this project; therefore, I
              handled the research, design, and testing phases
            </p>
          </div>

          <div className="flex flex-col gap-y-4 md:mx-auto md:w-3/4">
            <Title
              title={"Research"}
              color="text-gatherly-blue"
              id="research"
            />
            <div
              className={`flex flex-col gap-8 text-2xl ${darkerGrotesque.className}`}
            >
              <p>
                To explore the{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  heightened stress and loneliness
                </span>{" "}
                young adults face, I conducted both{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  primary
                </span>{" "}
                and{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  secondary research
                </span>
                , setting aside assumptions to ensure an{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  unbiased approach
                </span>
                . This phase was critical in understanding the problem before
                moving to{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  ideation
                </span>{" "}
                and{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  design
                </span>
                .
              </p>
              <p>
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  Secondary Research
                </span>{" "}
                (e.g., Pew Research) revealed:
              </p>
              <ul className="list-disc ml-12">
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Psychological stress
                  </span>{" "}
                  among young adults has risen, exacerbated by the{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    COVID-19 pandemic
                  </span>
                  .
                </li>
                <li>
                  Beyond the pandemic, young adults struggle with{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    forming relationships
                  </span>{" "}
                  and managing{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    elevated stress levels
                  </span>
                  .
                </li>
              </ul>
              <p>
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  Why Both Research Types Matter
                </span>
                :
              </p>
              <ul className="list-disc ml-12">
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Secondary research
                  </span>{" "}
                  validated the problem’s scope and confirmed stressors extend
                  beyond the pandemic.
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Primary research
                  </span>{" "}
                  will uncover personal stories and pain points, driving{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    user-focused design decisions
                  </span>
                  .
                </li>
              </ul>
              <p>
                This combined approach ensures the solution addresses the core
                challenges effectively. Below are key statistical insights from
                my{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  secondary research
                </span>{" "}
                based on a Pew Research study.
              </p>
            </div>
          </div>
          <Stats statsArray={stats} color="text-gatherly-blue" />

          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Survey
            </p>
            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <div className="flex flex-col gap-8">
                <p>
                  To gain firsthand insights and validate my{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    secondary research
                  </span>
                  , I conducted a{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    user survey
                  </span>{" "}
                  to understand real-life experiences of{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    stress
                  </span>
                  . This approach helped me:
                </p>
                <ul className="list-disc ml-12">
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Confirm key findings
                    </span>{" "}
                    from secondary research with direct user feedback.
                  </li>
                  <li>
                    Identify{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      pain points, motivations
                    </span>
                    , and{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      behavior patterns
                    </span>
                    .
                  </li>
                  <li>
                    Align design decisions with{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      real user experiences
                    </span>
                    .
                  </li>
                </ul>
                <p>
                  The survey gathered{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    16 responses
                  </span>
                  , offering valuable insights that shaped the design process.
                </p>
              </div>
            </div>
          </div>
          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(surveyImages)} />
          ) : (
            <Slider sliderData={createImageArray(surveyImages)} />
          )}
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              User Interview
            </p>

            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <div className="flex flex-col gap-8">
                <p>
                  To better understand the challenges of{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    loneliness
                  </span>{" "}
                  and{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    stress
                  </span>{" "}
                  among young adults, I conducted{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    user interviews
                  </span>{" "}
                  with three participants aged 18-29 who were recent graduates
                  or had recently left college. The goal was to gain direct
                  insights into their{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    emotions
                  </span>{" "}
                  and{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    daily challenges
                  </span>{" "}
                  to inform meaningful solutions.
                </p>
                <p className="font-bold">Key questions included:</p>
                <ul className="list-disc ml-12">
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Post-graduation anxiety
                    </span>
                    :{" "}
                    {`Do you feel better or more anxious now that you've left
                    college?`}
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Student loan impact
                    </span>
                    : Do you have student loan debt, and does it feel
                    overwhelming?
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Social life changes
                    </span>
                    : Has your energy for socializing changed?
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Expanding friendships
                    </span>
                    : Do you find it hard to make new friends?
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Life changes
                    </span>
                    : What personal or physical changes have occurred since
                    graduating?
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Support groups
                    </span>
                    : Are online communities helpful? Why or why not?
                  </li>
                </ul>
                <p>
                  These interviews provided invaluable insights, ensuring that
                  solutions resonate with{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    real user needs
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
          <p
            className={`md:mx-auto md:w-3/4 text-gatherly-blue text-4xl ${myFont.className}`}
          >
            Notable Quotes from the interviews
          </p>
          <div
            className={`md:mx-auto md:w-3/4 flex flex-wrap justify-center  gap-y-8 text-gatherly-blue md:gap-x-8 text-xl md:text-3xl ${darkerGrotesqueBold.className} text-center`}
          >
            <p className="w-full">
              {`"I still feel anxious after college.. no one gives you a plan you
              have to build your own path which is hard"`}
            </p>
            <p className="w-full">
              {`"Its bit hard to make friends after college since a lot of the
              people I work with are older than me"`}
            </p>
            <p className="w-full">
              {`"Things in life have become a bit stagnant Im trying to focus on
              my own personal growth"`}
            </p>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              However
            </p>
            <p className={`text-2xl ${darkerGrotesque.className}`}>
              There was a consistent quotes about how the participants felt that
              the use online communities would be very helpful to them
            </p>
          </div>

          <div
            className={`md:mx-auto md:w-3/4 flex flex-wrap justify-center  gap-y-8 text-gatherly-blue md:gap-x-8 text-3xl ${darkerGrotesqueBold.className} text-center`}
          >
            <p className="w-full">
              {`"Would like if an online group focused on a specific activity to
              bring people together for in person or online events"`}
            </p>
            <p className="w-full">
              {`"Also would love to connect to people who have similar culture
              background in an online group"`}
            </p>
            <p className="w-full">
              {` "Would be more comfortable if the group was smaller and more
              familiar to me, especially having something like a small Ukrainian
              group"`}
            </p>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Persona
            </p>

            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <div className="flex flex-col ">
                <p>
                  {`To better understand young adults' challenges, I created a
                  persona`}
                  ,{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Camile
                  </span>
                  , based on{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    primary research
                  </span>{" "}
                  (interviews) and{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    secondary research
                  </span>{" "}
                  (Pew Research study). Camile represents a recent graduate
                  adjusting to life outside of school, encapsulating the needs
                  and motivations of young adults in similar situations.
                </p>
                <br />
                <p className="font-bold">The persona helps to:</p>
                <ul className="list-disc ml-12">
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Empathize
                    </span>
                    : Understand emotional struggles during life transitions.
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Inform Design
                    </span>
                    : Keep user needs central to design decisions.
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Validate Solutions
                    </span>
                    : Ensure solutions address real-world challenges.
                  </li>
                </ul>
                <br />
                <p>
                  This research-backed persona grounds the design process,
                  leading to more relevant and effective solutions.
                </p>
              </div>
            </div>
          </div>
          <ImageRow images={personaImages} />
          <div className="flex flex-col gap-y-14 md:mx-auto md:w-3/4">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Empathy Map
            </p>

            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <div className="flex flex-col">
                <p>
                  To deepen my understanding of user needs, I created an{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    empathy map
                  </span>
                  . This tool captures user attitudes and behaviors, ensuring
                  solutions are rooted in real insights and minimizing bias.
                </p>
                <br />
                <p className="font-bold">Key benefits of the empathy map:</p>
                <ul className="list-disc ml-12">
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      User-Centric Focus
                    </span>
                    : Keeps design decisions aligned with real experiences.
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Clarification
                    </span>
                    : Summarizes user needs, pain points, and motivations.
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Bias Reduction
                    </span>
                    : Ensures solutions are grounded in actual data.
                  </li>
                </ul>
                <br />
                <p>
                  The empathy map is a crucial tool for designing effective,
                  user-driven solutions.
                </p>
              </div>
            </div>
            <ZoomableImage image={empathy} />
          </div>
          <div className="flex flex-col gap-y-4 md:mx-auto md:w-3/4">
            <Title title={"Ideate"} color="text-gatherly-blue" id="ideate" />

            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <div className="flex flex-col">
                <p>
                  After conducting thorough research, I uncovered a{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    strong desire among users
                  </span>{" "}
                  to connect with people who share similar backgrounds and
                  interests. This insight guided me into the{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    ideation phase
                  </span>
                  , focused on crafting a viable solution.
                </p>
                <br />
                <p className="font-bold">Key techniques used:</p>
                <ul className="list-disc ml-12">
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Laddering
                    </span>
                    : To uncover deeper user motivations.
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Preliminary Sketching
                    </span>
                    : To visualize potential solutions.
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      User Flows
                    </span>
                    : To map the user journey and structure the design process.
                  </li>
                </ul>
                <br />
                <p>
                  These methods ensured the final design directly addressed user
                  needs and motivations.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:mx-auto md:w-3/4">
            <div className="flex flex-1 gap-y-8 flex-col">
              <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
                Laddering
              </p>

              <div className={` text-2xl ${darkerGrotesque.className}`}>
                <div className="flex flex-col gap-8">
                  <p>
                    To design a solution that connects{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      young adults
                    </span>{" "}
                    with similar backgrounds and interests, I focused on
                    understanding their{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      motivations
                    </span>{" "}
                    and{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      behaviors
                    </span>
                    .
                  </p>
                  <p>
                    Using{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      laddering
                    </span>
                    , I uncovered the deeper reasons behind their actions. As
                    the sole{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      UI/UX designer
                    </span>{" "}
                    {`on this project, I relied on this method to reveal users'
                    core motivations and values, ensuring my design decisions
                    aligned with their needs.`}
                  </p>
                  <p>
                    This approach fostered meaningful connections and enhanced
                    the user experience.
                  </p>
                </div>
              </div>
            </div>
            <ZoomableImage image={ladder} />
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Sketches of possible solutions
            </p>

            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <div className="flex flex-col gap-8">
                <p>
                  To address the need for connection among young adults, I
                  explored solutions that connect individuals based on shared{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    backgrounds
                  </span>{" "}
                  and{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    interests
                  </span>
                  . User interviews revealed that many felt online communities
                  could help combat{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    loneliness
                  </span>{" "}
                  and{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    stress
                  </span>
                  .
                </p>
                <div className="flex flex-col gap-4">
                  <p>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Directory App
                    </span>
                    : Connects users with{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      mental health specialists
                    </span>
                    , providing essential support and offering a platform to
                    alleviate{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      stress
                    </span>{" "}
                    beyond just online communities.
                  </p>
                  <p>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Cultural App
                    </span>
                    : Allows users to join{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      groups based on cultural backgrounds
                    </span>
                    , facilitating networking and relationship-building with
                    those who share similar experiences.
                  </p>
                </div>
                <p>
                  These concepts were developed to directly address the insights
                  from my research, ensuring users could form meaningful
                  connections.
                </p>
              </div>
            </div>
            <ImageRow images={skethesImages} />
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              However
            </p>

            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <div className="flex flex-col gap-8">
                <p>
                  User interviews highlighted the need for a{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    cultural app
                  </span>{" "}
                  to address loneliness and foster{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    connections
                  </span>
                  . This led to the idea of a solution where users can join
                  groups based on{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    shared cultural identities
                  </span>
                  , common{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    interests
                  </span>
                  , and{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    support networks
                  </span>
                  .
                </p>
                <p>
                  Expanding group options aligns with user feedback on the
                  importance of online communities, making the cultural app a
                  key tool for{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    meaningful connections
                  </span>{" "}
                  and supporting young adults.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              User Flows
            </p>

            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <div className="flex flex-col gap-8">
                <p>
                  Understanding the role of community in managing emotional
                  stress, I visualized actions for my persona,{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Camile
                  </span>
                  , in navigating adulthood.
                </p>
                <p>
                  I designed an{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    online group community app
                  </span>{" "}
                  that allows users to:
                  <ul className="list-disc ml-12">
                    <li>
                      <span
                        className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                      >
                        Form
                      </span>{" "}
                      and{" "}
                      <span
                        className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                      >
                        interact
                      </span>{" "}
                      with groups
                    </li>
                    <li>
                      <span
                        className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                      >
                        Organize events
                      </span>
                    </li>
                  </ul>
                </p>
                <p>
                  Expanding on the cultural group concept, I included broader
                  connection options to meet user needs. Using insights from
                  research, I created{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    user flows
                  </span>{" "}
                  that show how Camile and others can engage with these features
                  to foster meaningful connections and reduce loneliness.
                </p>
              </div>
            </div>
            <ZoomableImage image={userflow} />
          </div>
          <div className="flex flex-col gap-y-4 md:mx-auto md:w-3/4">
            <Title title={"Design"} color="text-gatherly-blue" id="design" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              In this stage, I{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                initiate
              </span>{" "}
              the{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                creation
              </span>{" "}
              and{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                development
              </span>{" "}
              of{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                visual components
              </span>{" "}
              based on my{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                initial sketches
              </span>
              . I start by crafting{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                wireframes
              </span>
              , followed by the construction of a{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                style guide
              </span>
              , and ultimately produce{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                high-fidelity screens
              </span>
              .
            </p>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Wireframes
            </p>

            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <div>
                <p>
                  With a clear understanding of the user and key features, I
                  created{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    low-fidelity wireframes
                  </span>{" "}
                  {`to define the app's structure. Using insights from`}{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    user flows
                  </span>{" "}
                  and sketches, I ensured the wireframes aligned with user needs
                  and expectations.
                </p>
              </div>
            </div>
            {width <= 767 ? (
              <MobileSlider sliderData={createImageArray(wireframeImages)} />
            ) : (
              <Slider sliderData={createImageArray(wireframeImages)} />
            )}
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Styleguide and UI elements
            </p>

            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <div className="flex flex-col gap-8">
                <p>
                  After defining key screens for Gatherly, I focused on branding
                  and UI components to align with its vision of fostering
                  connections.
                </p>
                <ul className="list-disc ml-12">
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Blue
                    </span>{" "}
                    was chosen as the primary color for trust and calmness,
                    promoting a sense of belonging and reducing stress.
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Purple
                    </span>
                    , as the secondary color, symbolizes introspection and
                    independence, encouraging emotional growth and community
                    interaction.
                  </li>
                  <li>
                    These colors create a welcoming, supportive experience that
                    reduces isolation.
                  </li>
                </ul>
                <p>
                  I selected{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Poppins
                  </span>{" "}
                  for typography, a modern sans-serif font that enhances
                  legibility and approachability, reinforcing the app’s goal of
                  fostering community and comfort.
                </p>
              </div>
            </div>
            {width <= 767 ? (
              <MobileSlider sliderData={createImageArray(styleguideImages)} />
            ) : (
              <Slider sliderData={createImageArray(styleguideImages)} />
            )}
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              High Fidelity Screens
            </p>

            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <div className="flex flex-col ">
                <p>
                  Based on research and ideation, I created the final
                  high-fidelity screens, ensuring each design decision was
                  aligned with user needs and insights.
                </p>
                <br />
                <ul className="list-disc ml-12">
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Group creation and joining
                    </span>
                    , fostering connections based on interests and backgrounds.
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Event creation and participation
                    </span>
                    , encouraging active community involvement.
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      In-app chat
                    </span>
                    , enabling direct communication among users.
                  </li>
                </ul>
                <br />
                <p>
                  These features address emotional stress, providing a
                  supportive environment for young adults to build community and
                  belonging.
                </p>
              </div>
            </div>
            {width <= 767 ? (
              <MobileSlider sliderData={createImageArray(highFidelityImages)} />
            ) : (
              <Slider sliderData={createImageArray(highFidelityImages)} />
            )}
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-4xl text-gatherly-blue ${myFont.className}`}>
              Prototype
            </p>

            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <p>
                After the{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  research
                </span>
                ,{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  ideation
                </span>
                , and{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  design
                </span>{" "}
                phases, I created a prototype highlighting essential user
                actions, such as:
              </p>
              <ul className="list-disc pl-5 mt-3">
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Creating groups
                  </span>
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Organizing events
                  </span>
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Exploring communities
                  </span>
                </li>
              </ul>
            </div>
            <iframe
              style={{ border: "1px solid rgba(0, 0, 0, 0.1);" }}
              className="w-full h-[40rem]"
              src="https://embed.figma.com/proto/f3XDj0RqNgIrPRiJyOnI2L/WireFrame-Capstone?page-id=40%3A985&node-id=2066-9590&node-type=frame&viewport=1533%2C-318%2C0.19&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2066%3A9590&show-proto-sidebar=1&embed-host=share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <Title title={"Test"} color="text-gatherly-blue" id="test" />

            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <div className="flex flex-col gap-6">
                <p>
                  I conducted usability tests with 10 diverse users after the
                  first iteration of high-fidelity screens to improve
                  functionality. Tests focused on key flows like creating
                  groups, organizing events, and messaging members. Feedback led
                  to these refinements:
                </p>
                <ul className="list-disc ml-12">
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Refined navigation bar
                    </span>{" "}
                    for clearer elements.
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Redesigned pages
                    </span>{" "}
                    for better clarity.
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Adjusted UI elements
                    </span>{" "}
                    to improve visibility and prevent content blocking.
                  </li>
                </ul>
                <p>
                  These updates improved usability, ensuring seamless navigation
                  and interaction.
                </p>
              </div>
            </div>
          </div>
          <ImageViewer images={testImages} />
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Whats next .. ?
            </p>
            <div
              className={`flex flex-col gap-6 text-2xl ${darkerGrotesque.className}`}
            >
              <p>
                This is my{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  first case study
                </span>
                , and I’m proud of how much I’ve learned through applying
                different{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  UX research techniques
                </span>
                . For future iterations, I plan to introduce features like a{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  friend list
                </span>
                ,{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  voice chat
                </span>{" "}
                in group chats, and the option for users to{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  purchase event admissions
                </span>{" "}
                for special occasions, such as{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  fundraisers
                </span>
                . These features will be tested to evaluate user reactions.
              </p>
              <p>
                This project is a significant milestone in leveraging my{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  technical skills
                </span>
                ,{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  design experience
                </span>
                , and newfound knowledge to create a comprehensive{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  case study
                </span>
                .
              </p>
            </div>
          </div>
          <CaseStudyFooter casestudy="Gatherly" />
        </main>
      )}
      {showContent && <Footer width={width} />}
    </div>
  );
}
