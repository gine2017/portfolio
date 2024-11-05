import { useState } from "react";
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

export default function Gatherly() {
  const { width } = useWindowSize();
  const [showContent, setShowContent] = useState(true);

  const updateContent = (state) => {
    setShowContent(state);
  };

  return (
    <div>
      {width <= 767 ? <MobileNav updateContent={updateContent} /> : <Navbar />}
      {showContent && <Hero image={heroImg} />}
      {showContent && (
        <main className="mx-auto w-80% flex flex-col gap-y-20 mt-4 md:mt-16 mb-48">
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
                Navigating{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  adulthood{" "}
                </span>
                has become increasingly{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  challenging{" "}
                </span>
                for{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  young adults
                </span>
                , especially after the{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  COVID-19 pandemic
                </span>
                .{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  Social isolation{" "}
                </span>
                and{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  disconnection{" "}
                </span>
                have significantly impacted{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  mental health
                </span>
                , leading to difficulties in{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  communication
                </span>
                , increased{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  loneliness
                </span>
                , and{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  anxiety
                </span>
                . My goal is to create a{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  solution
                </span>
                that supports{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  young adults{" "}
                </span>
                in building{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  meaningful connections
                </span>
                , addressing these issues, and helping them better{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  navigate{" "}
                </span>
                this phase of life.
              </p>
            </div>
          </div>
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
            <Title title={"Research"} color="text-gatherly-blue" />

            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <p>
                To understand why young adults face heightened stress and
                loneliness, I conducted both{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  primary and secondary research
                </span>
                , setting aside my assumptions for an unbiased approach. This
                research phase was crucial to grasp the
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  {" "}
                  depth of the issue{" "}
                </span>
                before moving to ideation and design.
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Secondary Research{" "}
                  </span>
                  (e.g., Pew Research) confirmed that{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    psychological stress
                  </span>{" "}
                  among young adults has risen, worsened by the{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    COVID-19 pandemic
                  </span>
                  , impacting their communication abilities.
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Beyond the pandemic
                  </span>
                  , findings indicated that many young adults struggle with{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    forming relationships
                  </span>{" "}
                  and managing elevated stress levels.
                </li>
              </ul>
              <br />
              <p>
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  Importance of Both Research Types
                </span>
                :
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Secondary research
                  </span>{" "}
                  provided a broad understanding and validated the{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    extent of the problem
                  </span>
                  , supporting my hypothesis that stressors extend beyond the
                  pandemic.
                </li>
                <li>
                  {" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Primary research
                  </span>{" "}
                  will be essential for uncovering{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    personal stories
                  </span>{" "}
                  and specific pain points, shaping user-focused design
                  decisions.
                </li>
              </ul>
              <br />
              <p>
                This comprehensive approach ensures the final solution
                effectively addresses{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  core challenges
                </span>{" "}
                faced by young adults. Below are some statistical insights from
                my secondary research based on a{" "}
                <Link
                  className={` hover:underline text-gatherly-blue ${darkerGrotesqueBold.className} `}
                  href="https://www.pewresearch.org/short-reads/2023/03/02/mental-health-and-the-pandemic-what-u-s-surveys-have-found/"
                  target="_blank"
                >
                  Pew Research study
                </Link>
              </p>
            </div>
          </div>
          <Stats statsArray={stats} color="text-gatherly-blue" />

          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Survey
            </p>
            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <p>
                To validate my{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  secondary research
                </span>{" "}
                and gain firsthand insights, I designed a{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  user survey
                </span>{" "}
                aimed at understanding real-life experiences of stress. The
                survey was crucial in collecting data that reflects the needs
                and challenges faced by young adults. This approach supported my
                primary research by:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Confirming key points from secondary research
                  </span>{" "}
                  with direct user feedback.
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Identifying real user pain points
                  </span>
                  , motivations, and behavior patterns.
                </li>
                <li>
                  Informing design decisions to align with actual user
                  experiences.
                </li>
              </ul>
              <br />
              <p>
                The survey garnered{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  16 responses
                </span>
                , which highlighted essential findings that guided the design
                process.
              </p>
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
              <p>
                To deepen my{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  understanding
                </span>{" "}
                of the issues surrounding{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  loneliness and stress among young adults
                </span>
                , I conducted{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  user interviews
                </span>{" "}
                with three participants aged 18-29 who were recent graduates or
                had recently left college. These interviews aimed to gain direct
                insights into their emotions and daily challenges to inform
                potential solutions.
              </p>
              <br />
              <p>Key questions asked during the interviews included:</p>
              <ul className="list-disc pl-5">
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Post-graduation anxiety:
                  </span>{" "}
                  {`Do you feel better or more anxious now that you've left
                  college/finished your degree?`}
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Student loan impact:
                  </span>{" "}
                  Do you have student loan debt, and if so, does it feel
                  overwhelming?
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Social life changes:
                  </span>{" "}
                  Has your social life or energy for socializing changed?
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Expanding friendships:
                  </span>{" "}
                  Do you find it difficult to expand friendships? If so, how?
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Life changes:
                  </span>{" "}
                  What aspects of your life, personally or physically, have
                  changed since graduating?
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Support group utility:
                  </span>{" "}
                  Do you find online support groups or communities helpful? Why?
                </li>
              </ul>
              <br />
              <p>
                These interviews were essential for{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  understanding user perspectives
                </span>{" "}
                and shaping solutions that resonate with real needs.
              </p>
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
              <p>
                To better understand the challenges faced by young adults, I
                created a persona named{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  Camile
                </span>
                . This persona synthesizes insights from both my primary
                research, including interviews, and secondary research from the{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  Pew Research study
                </span>
                . Camile represents a recent graduate adjusting to life outside
                of school and home, encapsulating the needs and motivations of
                young adults in similar situations.
              </p>
              <br />
              <p>The purpose of creating this persona is to:</p>
              <ul className="list-disc pl-5">
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Empathize:
                  </span>{" "}
                  Understand the emotional landscape of young adults navigating
                  major life transitions.
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Inform Design:
                  </span>{" "}
                  Guide design decisions by keeping user needs at the forefront.
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Validate Solutions:
                  </span>{" "}
                  Ensure that proposed solutions resonate with real-world
                  challenges faced by users.
                </li>
              </ul>
              <br />
              <p>
                By grounding my design process in research-backed insights
                through this persona, I can create more relevant and effective
                solutions for young adults.
              </p>
            </div>
          </div>
          <ImageRow images={personaImages} />
          <div className="flex flex-col gap-y-14 md:mx-auto md:w-3/4">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Empathy Map
            </p>

            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <p>
                To enhance my understanding of user needs, I developed an{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  empathy map
                </span>
                . This tool visually captures user attitudes and behaviors,
                serving as a vital reference throughout the design process. Its
                purpose is to ensure that our solutions are rooted in user
                insights, minimizing biases that could skew our understanding.
              </p>
              <br />
              <p>{`Key reasons for the empathy map's creation include:`}</p>
              <ul className="list-disc pl-5">
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    User-Centric Focus:
                  </span>{" "}
                  It maintains a user-first approach, guiding design decisions
                  based on real experiences.
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Clarification:
                  </span>{" "}
                  It summarizes user insights, clarifying needs, pain points,
                  and motivations for the team.
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Bias Reduction:
                  </span>{" "}
                  The map prevents unfounded assumptions, ensuring solutions are
                  based on actual data.
                </li>
              </ul>
              <br />
              <p>
                Ultimately, the empathy map is essential for creating effective,
                user-centered solutions that address real user challenges.
              </p>
            </div>
            <ZoomableImage image={empathy} />
          </div>
          <div className="flex flex-col gap-y-4 md:mx-auto md:w-3/4">
            <Title title={"Ideate"} color="text-gatherly-blue" />

            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <p>
                After completing the research phase, which combined both primary
                and secondary insights, I identified a strong desire among users
                to connect with individuals who share their backgrounds and
                interests. This understanding led me to initiate the{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  ideation phase
                </span>
                , crucial for developing a viable solution.
              </p>
              <br />
              <p>
                During this phase, I employed techniques such as{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  laddering
                </span>
                , preliminary sketching, and user flows. These methods helped
                clarify user needs and structure the design process effectively,
                ensuring that the final solution directly addresses user
                motivations for connection.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:mx-auto md:w-3/4">
            <div className="flex flex-1 gap-y-8 flex-col">
              <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
                Laddering
              </p>

              <div className={` text-2xl ${darkerGrotesque.className}`}>
                <p>
                  To create a solution that connects young adults with similar
                  backgrounds and interests, understanding their motivations and
                  behaviors is crucial.
                </p>

                <p>
                  I used{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    laddering
                  </span>{" "}
                  {`to uncover the deeper reasons behind their actions. As the
                  sole UI/UX designer on this project, I employed various
                  methods to gather insights from different angles, with
                  laddering being key to revealing users' core motivations and
                  values.`}
                </p>
                <p>
                  This process ensured that my design decisions align with user
                  needs, ultimately fostering meaningful connections and
                  enhancing their experience.
                </p>
              </div>
            </div>
            <ZoomableImage image={ladder} />
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Sketches of possible solutions
            </p>

            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <p>
                To understand young adults and their need for connection, I
                explored ideas to bring people together based on shared
                backgrounds and interests. During user interviews, many
                participants expressed that online communities would be
                incredibly helpful in combating feelings of loneliness and
                stress.
              </p>
              <br />
              <p>Concepts Developed:</p>
              <p
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                Directory App:
              </p>

              <ul className="list-disc pl-5">
                <li>
                  Connects young people with{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    mental health specialists
                  </span>{" "}
                  for essential support.
                </li>
                <li>
                  Provides a platform to alleviate stress beyond just online
                  communities.
                </li>
              </ul>
              <br />
              <p
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                Cultural App:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  Allows users to join groups based on{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    cultural backgrounds
                  </span>
                  .
                </li>
                <li>
                  Facilitates networking and relationship-building with others
                  who share similar experiences.
                </li>
              </ul>

              <br />
              <p>
                These concepts directly address the needs identified in my
                research, ensuring users have opportunities to form meaningful
                connections.
              </p>
            </div>
            <ImageRow images={skethesImages} />
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              However
            </p>

            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <p>
                Based on my{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  user interviews
                </span>
                , I saw the need for a{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  dedicated cultural app
                </span>{" "}
                to address key pain points identified by my persona.
                Participants highlighted that{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  online communities
                </span>{" "}
                are valuable for alleviating{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  loneliness
                </span>{" "}
                and building{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  connections
                </span>
                . This insight solidified my decision to create a solution that
                would allow users to form and join groups centered around{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  shared cultural identities
                </span>
                ,{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  common interests
                </span>
                , and{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  support networks
                </span>
                .
              </p>
              <br />
              <p>
                By expanding the concept to include more diverse group options,
                the app directly aligns with user feedback emphasizing the
                importance of{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  online group interactions
                </span>
                . This approach makes the cultural app the most effective
                solution for fostering{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  meaningful connections
                </span>{" "}
                and supporting young adults as they navigate life challenges.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              User Flows
            </p>

            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <p>
                With a clear understanding of how{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  community
                </span>{" "}
                can aid young adults in managing{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  emotional stress
                </span>
                , I visualized actions for my persona,{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  Camile
                </span>
                , as she navigates early adulthood.
              </p>
              <p>
                I developed an{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  online group community app
                </span>{" "}
                that allows users to:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Form groups
                  </span>
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Interact
                  </span>{" "}
                  with existing ones
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Organize events
                  </span>
                </li>
              </ul>
              <br />
              <p>
                Recognizing the need for broader connections, I expanded my
                cultural group idea to include ways for users to connect beyond
                just culture, which I believe will be beneficial as well.
                Drawing on insights from my research and ideation phases, I
                crafted{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  user flows
                </span>{" "}
                that illustrate how Camile and others can engage with these key
                features, ultimately fostering meaningful connections and
                reducing feelings of{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  loneliness
                </span>
                .
              </p>
            </div>
            <ZoomableImage image={userflow} />
          </div>
          <div className="flex flex-col gap-y-4 md:mx-auto md:w-3/4">
            <Title title={"Design"} color="text-gatherly-blue" />
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
              <p>
                Now that I have a strong foundation in understanding the
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  {" "}
                  user
                </span>
                , the{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  key features
                </span>
                , and how users will interact with the app, I began constructing
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  {" "}
                  low-fidelity wireframes{" "}
                </span>
                {`to establish the app's basic structure. I utilized insights from
                my`}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  {" "}
                  user flows{" "}
                </span>
                and{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  sketches{" "}
                </span>
                to guide this process and ensure the wireframes aligned with
                user needs and expectations.
              </p>
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
              <p>
                After defining the key screens and features of{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  Gatherly
                </span>
                {`, I focused on branding and building UI components that align
                with the app's vision of fostering meaningful connections.`}
              </p>
              <br />
              <p>
                I selected{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  blue
                </span>{" "}
                as the primary color for its association with{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  trust, calmness, and connection
                </span>
                , promoting a sense of belonging and reducing feelings of stress
                among users.
              </p>
              <br />
              <p>
                For the secondary color, I chose{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  purple
                </span>
                , symbolizing{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  introspection and independence
                </span>
                , to encourage users to engage with the app in a way that
                supports emotional growth and community interaction.
              </p>
              <br />
              <p>
                These color choices are designed to create a{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  welcoming and supportive user experience
                </span>{" "}
                that encourages connection and alleviates feelings of isolation.
              </p>
              <br />
              <p>
                I opted for{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  Poppins
                </span>{" "}
                as the typography for Gatherly due to its{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  modern, geometric sans-serif design
                </span>{" "}
                that enhances{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  legibility and approachability
                </span>
                . This font choice supports a professional yet friendly feel,
                reinforcing the app’s purpose of fostering{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  community and comfort
                </span>
                .
              </p>
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
              <p>
                Informed by both the{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  research
                </span>{" "}
                and{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  ideation phases
                </span>
                , I laid the groundwork for the final{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  high-fidelity screens
                </span>
                . These foundational steps shaped my{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  UI components
                </span>{" "}
                and{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  style guide
                </span>
                , ensuring that each design decision aligned with user needs and
                insights gathered.
              </p>
              <br />
              <p>The final screens include key features such as:</p>
              <ul className="list-disc pl-5">
                <li>
                  The ability to{" "}
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    create and join groups
                  </span>
                  , facilitating shared connections based on interests and
                  backgrounds.
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Event creation and participation
                  </span>
                  , which promotes active community involvement.
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    In-app chat functionality
                  </span>
                  , supporting direct communication among users.
                </li>
              </ul>
              <br />
              <p>
                These features were developed to address the emotional stress
                highlighted in my research, providing a supportive environment
                for young adults navigating early adulthood and fostering a
                sense of{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  community and belonging
                </span>
                .
              </p>
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
            <Title title={"Test"} color="text-gatherly-blue" />

            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <p>
                I conducted usability tests with 10 diverse users after
                completing my first iteration of high-fidelity screens to
                enhance their functionality. These tests focused on key flows,
                including creating and joining groups, organizing events, and
                communicating with other members. This feedback was essential in
                refining the initial design.
              </p>
              <br />
              <p>
                These tests helped identify areas for improvement. I made the
                following changes:
              </p>
              <ul className="list-disc pl-5 ">
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Refined the navigation bar
                  </span>{" "}
                  to make elements clearer.
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Redesigned specific pages
                  </span>{" "}
                  for better clarity.
                </li>
                <li>
                  <span
                    className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                  >
                    Adjusted UI elements
                  </span>{" "}
                  {`to ensure they were more visible and didn't block content.`}
                </li>
              </ul>
              <br />
              <p>
                These changes enhanced the usability and functionality of the
                app, ensuring that users could navigate and interact seamlessly.
              </p>
            </div>
          </div>
          <ImageViewer images={testImages} />
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Whats next .. ?
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              In upcoming iterations of this project, I aim to introduce new
              features including a{" "}
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
              within group chats, and the option for users to{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                purchase event admissions
              </span>{" "}
              for special occasions such as fundraisers. These features will
              undergo{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                testing
              </span>{" "}
              to gauge user reactions to the updates. Overall, this project
              marks a{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                significant milestone
              </span>{" "}
              in leveraging my{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                technical skills
              </span>
              , past{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                design experience
              </span>
              , and{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                newfound knowledge
              </span>{" "}
              to create my comprehensive{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                case study
              </span>
              .
            </p>
          </div>
          <CaseStudyFooter casestudy="Gatherly" />
        </main>
      )}
      {showContent && <Footer />}
    </div>
  );
}
