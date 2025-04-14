import { useState, useRef } from "react";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
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
import ImageRow from "@/components/image-row";
import ImageViewer from "@/components/image-viewer";
import ZoomableImage from "@/components/zoomable-image";
import Head from "next/head";
import Image from "next/image";

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

import test1 from "../../../assets/capstone/gatherly/test/test_1.png";
import test2 from "../../../assets/capstone/gatherly/test/test_2.png";
import test3 from "../../../assets/capstone/gatherly/test/test_3.png";
import wireframe_1 from "../../../assets/capstone/gatherly/wireframes/wireframe_1.png";
import wireframe_2 from "../../../assets/capstone/gatherly/wireframes/wireframe_2.png";
import wireframe_3 from "../../../assets/capstone/gatherly/wireframes/wireframe_3.png";
import wireframe_4 from "../../../assets/capstone/gatherly/wireframes/wireframe_4.png";
import wireframe_5 from "../../../assets/capstone/gatherly/wireframes/wireframe_5.png";
import wireframe_6 from "../../../assets/capstone/gatherly/wireframes/wireframe_6.png";
import wireframe_7 from "../../../assets/capstone/gatherly/wireframes/wireframe_7.png";
import wireframe_8 from "../../../assets/capstone/gatherly/wireframes/wireframe_8.png";
import wireframe_9 from "../../../assets/capstone/gatherly/wireframes/wireframe_9.png";

import highFidelity1 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity1.png";
import highFidelity2 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity2.png";
import highFidelity3 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity3.png";
import highFidelity4 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity4.png";
import highFidelity5 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity5.png";
import highFidelity6 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity6.png";
import highFidelity7 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity7.png";
import highFidelity8 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity8.png";
import highFidelity9 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity9.png";
import highFidelity10 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity10.png";
import highFidelity11 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity11.png";
import highFidelity12 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity12.png";
import highFidelity13 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity13.png";
import highFidelity14 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity14.png";
import highFidelity15 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity15.png";
import highFidelity16 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity16.png";
import highFidelity17 from "../../../assets/capstone/gatherly/high-fidelity/highFidelity17.png";

const personaImages = [persona1, persona2];
const surveyImages = [survey1, survey2, survey3, survey4];
const skethesImages = [cultureSketch, directorySketch];
const styleguideImages = [
  { img: styleguide_1, altText: "Explanation of color palette" },
  { img: styleguide_2, altText: "Typography" },
  { img: styleguide_3, altText: "UI Components" },
];

const testImages = [
  { img: test1, altText: "First Test results" },
  { img: test2, altText: "Second Test results" },
  { img: test3, altText: "Third Test results" },
];
const wireframeImages = [
  wireframe_1,
  wireframe_2,
  wireframe_3,
  wireframe_4,
  wireframe_5,
  wireframe_6,
  wireframe_7,
  wireframe_8,
  wireframe_9,
];

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
  highFidelity10,
  highFidelity11,
  highFidelity12,
  highFidelity13,
  highFidelity14,
  highFidelity15,
  highFidelity16,
  highFidelity17,
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
    <>
      <Head>
        <title> Gatherly Case Study Page</title>
      </Head>
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
          <h1
            className={`flex justify-center text-gatherly-blue  ${myFont.className} text-6xl`}
          >
            Gatherly Case Study
          </h1>
          <div className="flex flex-col gap-y-8 md:flex-row gap-x-16 ">
            <div className="flex flex-col gap-y-8 flex-1">
              <h2 className={`text-gatherly-blue text-5xl ${myFont.className}`}>
                Problem
              </h2>
              <p
                className={`text-2xl ${darkerGrotesqueBold.className} text-gatherly-blue `}
              >
                Young adults struggle to build meaningful connections, leading
                to social isolation and deteriorating mental health.
              </p>
              <p className={`text-2xl ${darkerGrotesque.className}`}>
                Post-COVID-19, social isolation has{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  intensified
                </span>{" "}
                feelings of loneliness and anxiety among young adults. This
                isolation significantly impacts mental{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  health
                </span>{" "}
                and communication{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  abilities
                </span>
                , creating barriers to forming meaningful{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  connections
                </span>{" "}
                during this pivotal life stage when social networks are
                especially{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  important
                </span>{" "}
                for personal and professional development.
              </p>
            </div>
            <div className="flex flex-col gap-y-8 flex-1">
              <h2 className={`text-gatherly-blue text-5xl ${myFont.className}`}>
                Solution
              </h2>
              <p
                className={`text-2xl ${darkerGrotesqueBold.className} text-gatherly-blue `}
              >
                A community app that facilitates meaningful connections through
                shared interests and activities.
              </p>
              <p className={`text-2xl ${darkerGrotesque.className}`}>
                Gatherly is a platform where young adults can create and join{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  groups
                </span>{" "}
                based on shared interests, organize{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  events
                </span>
                , and build new{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  relationships
                </span>{" "}
                in a supportive environment. The app helps users overcome social
                barriers by connecting them with like-minded individuals for{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  networking
                </span>
                , friendship, and community building, ultimately reducing
                isolation and improving mental well-being.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 w-full md:mx-auto">
            <h2 className={`text-gatherly-blue text-5xl ${myFont.className}`}>
              My Role
            </h2>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              I served as the sole UI/UX designer for this project; therefore, I
              handled the research, design, and testing phases
            </p>
          </div>
          <div className="flex flex-col gap-y-8 w-full md:mx-auto md:w-3/4 ">
            <h2 className={`text-gatherly-blue text-5xl ${myFont.className}`}>
              Solution in Action
            </h2>
            <div className="flex flex-col md:flex-row md:items-center border-b-4 ">
              <Image
                src={highFidelity12}
                alt="discovery page with interest filters"
                className="scale-75"
              />
              <div>
                <h3
                  className={`text-gatherly-blue text-4xl ${myFont.className} mb-4`}
                >
                  Discovery Page with Interest Filters
                </h3>
                <p className={`text-2xl ${darkerGrotesque.className} mb-4`}>
                  Combats isolation by helping users find communities that align
                  with their personal interests, making the initial connection
                  process less intimidating
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center border-b-4">
              <div>
                <h3
                  className={`text-gatherly-blue text-4xl ${myFont.className} mb-4`}
                >
                  Group Home Page
                </h3>
                <p className={`text-2xl ${darkerGrotesque.className} mb-4`}>
                  Fosters belonging through shared spaces where members can
                  interact, share experiences, and develop relationships within
                  a structured community
                </p>
              </div>
              <Image
                src={highFidelity17}
                alt="group home page"
                className="scale-75"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center">
              <Image
                src={highFidelity15}
                alt="events page"
                className="scale-75"
              />
              <div>
                <h3
                  className={`text-gatherly-blue text-4xl ${myFont.className} mb-4`}
                >
                  Events Page
                </h3>
                <p className={`text-2xl ${darkerGrotesque.className} `}>
                  Facilitates meaningful connections by offering various events,
                  allowing users to strengthen bonds with group members and
                  transform digital relationships into deeper social connections
                </p>
              </div>
            </div>
          </div>
          {width >= 767 && (
            <AutoScrollNavigator sections={steps} fontColor={"gatherly-blue"} />
          )}
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
                . This methodical exploration was essential to deeply understand
                the problem before moving to{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  solution ideation
                </span>
                .
              </p>
              <p>
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  Secondary Research Findings
                </span>
                :
              </p>
              <ul className="list-disc ml-12">
                <li>
                  My analysis of{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Pew Research studies
                  </span>{" "}
                  {`revealed concerning trends about young adults' social
                  wellbeing.`}
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Psychological stress
                  </span>{" "}
                  among young adults has risen significantly, exacerbated by the{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    COVID-19 pandemic
                  </span>
                  .
                </li>
                <li>
                  Beyond the pandemic, young adults consistently struggle with{" "}
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
                  {`validated the problem's scope and confirmed stressors extend
                  beyond the pandemic.`}
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Primary research
                  </span>{" "}
                  through{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    surveys and interviews
                  </span>{" "}
                  uncovered personal stories and pain points, driving{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    user-focused design decisions
                  </span>
                  .
                </li>
              </ul>
              <p>
                This combined approach ensured the solution would address both{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  widespread trends
                </span>{" "}
                and{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  individual experiences
                </span>
                . Below are key statistical insights from my{" "}
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
            <h3 className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Survey
            </h3>
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
                    social disconnection
                  </span>{" "}
                  and{" "}
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
                      specific pain points
                    </span>
                    ,{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      motivations
                    </span>
                    , and{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      behavior patterns
                    </span>{" "}
                    in social connection.
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
                  {` , revealing critical insights about young adults'`}{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    post-college experiences
                  </span>
                  :
                </p>
                <p>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Key Findings:
                  </span>
                </p>
                <ul className="list-disc ml-12">
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      56%
                    </span>{" "}
                    of participants reported their routines changed{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      drastically after college
                    </span>
                    .
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      All respondents
                    </span>{" "}
                    experienced{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      anxiety
                    </span>{" "}
                    after leaving college, distributed evenly (
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      31% each
                    </span>
                    ) across very anxious, mildly anxious, and a little bit
                    anxious.
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      56%
                    </span>{" "}
                    of participants engaged in social activities only{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      1-3 times per week
                    </span>
                    .
                  </li>
                </ul>
                <p>
                  These findings confirmed that post-college transition
                  represents a{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    crucial intervention point
                  </span>{" "}
                  where young adults need support establishing new social
                  connections while addressing their{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    anxiety
                  </span>{" "}
                  around relationship formation.
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
            <h3 className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              User Interview
            </h3>

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
          <h3
            className={`md:mx-auto md:w-3/4 text-gatherly-blue text-4xl ${myFont.className}`}
          >
            Notable Quotes from the interviews
          </h3>
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
            <h3 className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              However
            </h3>
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
            <h3 className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Persona
            </h3>

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
            <h3 className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Empathy Map
            </h3>

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
                  interests. The{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    complexity of emotions
                  </span>{" "}
                  revealed in my interviews, from{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    post-college anxiety
                  </span>{" "}
                  to the desire for{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    culturally similar connections
                  </span>
                  {`, suggested that surface-level design solutions wouldn't
                  address users' deeper needs. These insights guided me into the`}{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    ideation phase
                  </span>
                  , focused on crafting a solution that addressed both{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    practical
                  </span>{" "}
                  and{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    emotional aspects
                  </span>{" "}
                  of connection.
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
                    : To uncover deeper user motivations beyond initial
                    statements.
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Preliminary Sketching
                    </span>
                    : To visualize potential solutions and test different
                    interaction models.
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      User Flows
                    </span>
                    : To map the user journey and structure the design process
                    with user goals at the center.
                  </li>
                </ul>
                <br />
                <p>
                  These methods ensured the final design directly addressed not
                  just what users{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    said they wanted
                  </span>
                  , but what they{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    truly needed
                  </span>{" "}
                  to form meaningful connections.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:mx-auto md:w-3/4">
            <div className="flex flex-1 gap-y-8 flex-col">
              <h3 className={`text-gatherly-blue text-4xl ${myFont.className}`}>
                Laddering
              </h3>
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
                      deeper motivations
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
                    Through{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      laddering
                    </span>
                    {`, I uncovered that users' preference for`}{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      {`'smaller groups'`}
                    </span>{" "}
                    actually reflected deeper needs for{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      recognition
                    </span>{" "}
                    and{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      validation
                    </span>
                    . As the sole{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      UI/UX designer
                    </span>{" "}
                    {`on this project, this method revealed core values that directly shaped Gatherly's community size limits and matching features.`}
                  </p>
                  <p>
                    {`This approach ensured design decisions addressed users'`}{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      fundamental emotional needs
                    </span>{" "}
                    rather than surface-level preferences, creating a foundation
                    for{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      meaningful connections
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
            <ZoomableImage image={ladder} />
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h3 className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Sketches of possible solutions
            </h3>
            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <div className="flex flex-col gap-8">
                <p>
                  Building on insights from my{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    research
                  </span>{" "}
                  and{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    laddering process
                  </span>
                  {`, I explored solutions addressing young adults' need for
                  meaningful connection. The interviews revealed not just a
                  desire for connection, but specifically for communities where
                  users feel`}{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    recognized
                  </span>{" "}
                  and{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    validated
                  </span>{" "}
                  through shared experiences.
                </p>

                <p>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Solution Concepts:
                  </span>
                </p>

                <ul className="list-disc ml-12">
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Directory App:
                    </span>{" "}
                    Connects users with{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      mental health specialists
                    </span>
                    , providing essential support for managing stress and
                    anxiety that{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      58%
                    </span>{" "}
                    of young adults reported experiencing since COVID-19.
                  </li>

                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Cultural Community App:
                    </span>{" "}
                    Enables users to join{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      smaller, intimate groups
                    </span>{" "}
                    {`based on cultural backgrounds and interests, directly
                    addressing the interview insight that users would "be more
                    comfortable in`}{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      smaller, familiar groups{" "}
                    </span>
                    where they can feel recognized.
                  </li>
                </ul>

                <p>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Research Connections:
                  </span>
                </p>

                <ul className="list-disc ml-12">
                  <li>
                    These concepts directly address{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      isolation
                    </span>{" "}
                    that{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      56%
                    </span>{" "}
                    of survey participants reported experiencing
                  </li>

                  <li>
                    Both solutions focus on the{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      deeper emotional needs
                    </span>{" "}
                    uncovered during laddering
                  </li>

                  <li>
                    Each concept offers different approaches to fostering{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      meaningful relationships
                    </span>{" "}
                    among young adults
                  </li>
                </ul>
              </div>
            </div>
            <ImageRow images={skethesImages} />
          </div>

          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h3 className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              User Flows
            </h3>
            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <div className="flex flex-col gap-8">
                <p>
                  After evaluating both concepts, the{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Cultural Community App
                  </span>{" "}
                  emerged as the stronger solution, directly addressing user
                  insights about finding{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    comfort
                  </span>{" "}
                  through shared{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    cultural backgrounds
                  </span>{" "}
                  during life transitions.
                </p>

                <p>
                  I visualized how my persona,{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Camile
                  </span>
                  , would navigate the app as she adjusts to post-college life.
                  The community app design allows users to:
                </p>

                <ul className="list-disc ml-12">
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Form intimate groups
                    </span>{" "}
                    based on cultural identity or interests, addressing the
                    deeper need for recognition uncovered in laddering
                  </li>

                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Interact within communities
                    </span>{" "}
                    through discussions and support
                  </li>

                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Organize events
                    </span>{" "}
                    to transform online connections into in-person relationships
                  </li>
                </ul>

                <p>
                  I created{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    user flows
                  </span>{" "}
                  {`mapping Camile's journey to discover, join, and engage with
                  these communities. These flows ensured the design would help
                  overcome the connection barriers that`}{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    46%
                  </span>{" "}
                  of young adults struggle with, according to my research.
                </p>
              </div>
            </div>

            <ZoomableImage image={userflow} />
          </div>
          <div className="flex flex-col gap-y-4 md:mx-auto md:w-3/4">
            <Title title={"Design"} color="text-gatherly-blue" id="design" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                Translating research insights
              </span>{" "}
              {`into a tangible product, I began designing an interface that would
              address young adults' need for`}{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                meaningful connections
              </span>
              . My process moved from{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                wireframes
              </span>{" "}
              establishing core functionality, through a{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                unified style guide
              </span>
              , to{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                high-fidelity screens
              </span>
              . Each step was guided by the{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                emotional
              </span>{" "}
              and{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                practical needs
              </span>{" "}
              identified in my research.
            </p>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h3 className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Wireframes
            </h3>
            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <div>
                <p>
                  With a clear understanding of{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    {`young adults' challenges`}
                  </span>{" "}
                  in forming connections, I created{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    low-fidelity wireframes
                  </span>{" "}
                  {`to define Gatherly's structure. These wireframes specifically
                  addressed key user needs by:`}
                </p>

                <ul className="list-disc ml-12 mt-4">
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Simplifying group discovery
                    </span>{" "}
                    to overcome the{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      46%
                    </span>{" "}
                    {`of young adults' difficulty in initiating relationships`}
                  </li>

                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Creating intimate group spaces
                    </span>{" "}
                    that fulfilled the desire for recognition and validation
                    uncovered during{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      laddering
                    </span>
                  </li>

                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Designing event organization features
                    </span>{" "}
                    to facilitate the transition from online to in-person
                    connections
                  </li>
                </ul>

                <p className="mt-4">
                  The wireframe structure emerged directly from my{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    user flows
                  </span>
                  , ensuring each screen supported{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    {`Camile's journey`}
                  </span>{" "}
                  from discovering relevant communities to actively
                  participating in meaningful group interactions.
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
            <h3 className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Styleguide and UI elements
            </h3>
            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <div className="flex flex-col gap-8">
                <p>
                  After defining the key screens for Gatherly, I developed a{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    visual identity
                  </span>{" "}
                  that would support young adults seeking connection during
                  transitional life stages. My color and typography choices
                  directly addressed the{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    emotional needs
                  </span>{" "}
                  revealed in my research:
                </p>
                <ul className="list-disc ml-12">
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Blue
                    </span>{" "}
                    was chosen as the primary color for its associations with
                    trust and calmness, helping address the anxiety that{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      31%
                    </span>{" "}
                    of survey respondents reported experiencing after college.
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Purple
                    </span>
                    , as the secondary color, symbolizes introspection and
                    independence, qualities that support users as they navigate
                    new social connections while maintaining their identity.
                  </li>
                  <li>
                    The color palette creates a{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      welcoming, supportive environment
                    </span>{" "}
                    that visually counteracts the isolation{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      56%
                    </span>{" "}
                    of participants experienced.
                  </li>
                </ul>
                <p>
                  I selected{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Poppins
                  </span>{" "}
                  as the primary typeface, a modern, approachable sans-serif
                  that enhances legibility across devices while conveying the{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    friendly, supportive community spirit
                  </span>{" "}
                  that interview participants expressed wanting in online
                  groups.
                </p>
              </div>
            </div>
            <ImageViewer images={styleguideImages} />
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h3 className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              High Fidelity Screens
            </h3>
            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <div className="flex flex-col ">
                <p>
                  The final{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    high-fidelity screens
                  </span>{" "}
                  {`translate research insights into a cohesive user experience
                  that directly addresses young adults'`}{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    connection challenges
                  </span>
                  . Key features include:
                </p>
                <br />
                <ul className="list-disc ml-12">
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Culturally-focused group discovery and creation
                    </span>
                    , responding to interview feedback that users would love to
                    connect to people with{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      similar cultural backgrounds
                    </span>
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Intimate community spaces
                    </span>{" "}
                    with limited membership, addressing the preference for
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      {" "}
                      smaller, familiar groups{" "}
                    </span>
                    uncovered during laddering
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Streamlined event organization
                    </span>{" "}
                    to help transition online relationships to in-person
                    connections, combating the limited social engagement (
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      1-3 times weekly
                    </span>
                    ) reported by 56% of survey participants
                  </li>
                </ul>
                <br />
                <p>
                  Each screen was designed to reduce{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    barriers to meaningful connection
                  </span>{" "}
                  while providing the recognition and validation users sought,
                  creating a supportive environment where young adults can build{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    community
                  </span>{" "}
                  during post-college transitions.
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
            <h3 className={`text-4xl text-gatherly-blue ${myFont.className}`}>
              Prototype
            </h3>
            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <p>
                With{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  research insights
                </span>{" "}
                and{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  design decisions
                </span>{" "}
                aligned, I created an{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  interactive prototype
                </span>{" "}
                {`that brings Gatherly's core functionality to life. The prototype
                demonstrates how users can:`}
              </p>
              <ul className="list-disc pl-5 mt-3">
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Discover and create cultural groups
                  </span>
                  , addressing the{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    46%
                  </span>{" "}
                  of young adults who struggle with initiating relationships and
                  the expressed desire for culturally-similar connections
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Join intimate communities
                  </span>{" "}
                  with built-in conversation features, fostering the sense of
                  recognition and validation uncovered during laddering
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Organize and participate in events
                  </span>
                  , helping transition online connections to in-person
                  relationships, combating the limited social engagement
                  reported by{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    56%
                  </span>{" "}
                  of survey participants
                </li>
              </ul>
              <p className="mt-3">
                The prototype bridges the gap between concept and
                implementation, allowing users to experience how Gatherly
                creates{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  meaningful connections
                </span>{" "}
                {`through a design that's responsive to their`}{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  emotional and practical needs
                </span>{" "}
                during post-college transitions.
              </p>
            </div>
            <iframe
              style={{ border: "1px solid rgba(0, 0, 0, 0.1);" }}
              className="w-full h-[40rem]"
              title="Embedded Gatherly Figma Prototype"
              src="https://embed.figma.com/proto/f3XDj0RqNgIrPRiJyOnI2L/WireFrame-Capstone?page-id=40%3A985&node-id=2066-9590&node-type=frame&viewport=1533%2C-318%2C0.19&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2066%3A9590&show-proto-sidebar=1&embed-host=share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <Title title={"Test"} color="text-gatherly-blue" id="test" />
            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <div className="flex flex-col gap-6">
                <p>
                  To validate my design decisions, I conducted{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    usability tests
                  </span>{" "}
                  with 10 diverse participants, focusing on how well the
                  prototype addressed the{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    connection challenges
                  </span>{" "}
                  identified in my research. Participants tested key flows like
                  creating cultural groups, organizing events, and engaging with
                  community members.
                </p>
                <p>User feedback led to several important refinements:</p>
                <ul className="list-disc ml-12">
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Refined navigation bar
                    </span>{" "}
                    to create clearer pathways to community discovery,
                    addressing the difficulty{" "}
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      46%
                    </span>{" "}
                    of young adults face in initiating connections
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Redesigned group pages
                    </span>{" "}
                    to better highlight cultural elements and shared interests,
                    reinforcing the sense of belonging users sought in smaller,
                    familiar groups
                  </li>
                  <li>
                    <span
                      className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                    >
                      Adjusted UI elements
                    </span>{" "}
                    to improve visibility of event creation features,
                    encouraging the transition from online to in-person
                    interactions that survey participants lacked
                  </li>
                </ul>
                <p>
                  These refinements enhanced the{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    user experience
                  </span>{" "}
                  by directly addressing the emotional and practical barriers to
                  connection uncovered throughout my research.
                </p>
              </div>
            </div>
          </div>
          <ImageViewer images={testImages} />
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h2 className={`text-gatherly-blue text-5xl ${myFont.className}`}>
              Whats next .. ?
            </h2>
            <div
              className={`flex flex-col gap-6 text-2xl ${darkerGrotesque.className}`}
            >
              <p>
                As my{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  first comprehensive case study
                </span>
                , Gatherly represents significant growth in my{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  UX research
                </span>{" "}
                and{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  design capabilities
                </span>
                . The process taught me how thorough research leads to{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  meaningful solutions
                </span>{" "}
                for real human challenges.
              </p>
              <p>
                {`For future iterations, I'm exploring features that further
                address the`}{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  core needs
                </span>{" "}
                identified in my research:
              </p>
              <ul className="list-disc ml-12">
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Friend connections within groups
                  </span>{" "}
                  to help users build more intimate relationships within larger
                  cultural communities
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Voice chat functionality
                  </span>{" "}
                  to provide additional modes of connection for users who may
                  feel anxiety in text-only environments
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Event ticketing options
                  </span>{" "}
                  for special occasions like{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    fundraisers
                  </span>
                  , helping communities extend their impact beyond social
                  connection
                </li>
              </ul>
              <p>
                Each potential feature will be evaluated against the{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  foundational insights
                </span>{" "}
                {`about young adults' connection needs that drove this project
                from research through design.`}
              </p>
              <p>
                This project demonstrates how I leverage{" "}
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
                , and{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  user-centered research
                </span>{" "}
                to create solutions that address meaningful human challenges.
              </p>
            </div>
          </div>
          <CaseStudyFooter casestudy="Gatherly" />
        </main>
      )}
      {showContent && <Footer width={width} />}
    </>
  );
}
