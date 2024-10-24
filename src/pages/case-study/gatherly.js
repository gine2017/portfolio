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
          <div className="flex flex-col gap-y-8 flex-1">
            <p className={` text-gatherly-blue text-4xl ${myFont.className}`}>
              Problem Statement
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              Navigating adulthood has become increasingly difficult for{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                young adults
              </span>
              , particularly in the wake of the{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                COVID-19 pandemic
              </span>
              . The{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                isolation
              </span>{" "}
              and{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                social disconnection
              </span>{" "}
              stemming from this crisis have severely impacted their{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                mental health
              </span>
              , making it challenging to{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                communicate effectively
              </span>{" "}
              and deepening feelings of{" "}
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
              . My{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                hypothesis
              </span>{" "}
              suggests that other underlying issues may also contribute to these
              challenges. To address this, I aim to propose a{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                solution
              </span>{" "}
              that fosters{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                connections
              </span>{" "}
              among young adults, helping them navigate this{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                critical phase
              </span>{" "}
              of their lives while combating these pervasive issues.
            </p>
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              My Role
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              I served as the sole UI/UX designer for this project; therefore, I
              handled the research, design, and testing phases
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            <Title title={"Research"} color="text-gatherly-blue" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              In order to understand why young adults feel this way, I first
              needed to set aside my own perspective and conduct both
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                {" "}
                primary{" "}
              </span>{" "}
              and
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                {" "}
                secondary research{" "}
              </span>
              . Prior to initiating the
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                {" "}
                ideation{" "}
              </span>{" "}
              and
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                {" "}
                design stages{" "}
              </span>
              , it was essential for me to conduct thorough research to grasp
              the extent of the
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                {" "}
                epidemic of loneliness{" "}
              </span>{" "}
              and
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                {" "}
                stress{" "}
              </span>{" "}
              among adults. Through
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                {" "}
                secondary research{" "}
              </span>{" "}
              from
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                {" "}
                <Link
                  className={` hover:underline text-gatherly-blue ${darkerGrotesqueBold.className} `}
                  href="https://www.pewresearch.org/short-reads/2023/03/02/mental-health-and-the-pandemic-what-u-s-surveys-have-found/"
                >
                  Pew Research
                </Link>{" "}
              </span>
              , I determined that young people are increasingly plagued by
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                {" "}
                psychological stress{" "}
              </span>{" "}
              and are experiencing difficulties in
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                {" "}
                communication,{" "}
              </span>
              much of which stems from the effects of
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                {" "}
                COVID-19{" "}
              </span>
              . While this finding is not surprising, it confirms my
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                {" "}
                hypothesis{" "}
              </span>{" "}
              that I need to delve into the core issues and understand the
              factors contributing to this stress beyond the pandemic.
              Additionally, I discovered that a significant portion of young
              individuals were struggling not only with elevated stress levels
              but also with
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                {" "}
                forming relationships{" "}
              </span>
              .
            </p>
          </div>
          <Stats statsArray={stats} color="text-gatherly-blue" />

          <div className="flex flex-col gap-y-8">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Survey
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              In order to validate the secondary research and develop a
              solution, I created a user survey to gather personalized insights
              from individuals coping with stress in real life. The survey
              yielded a total of 16 responses, from which the most significant
              findings emerged. These findings include :
            </p>
          </div>
          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(surveyImages)} />
          ) : (
            <Slider sliderData={createImageArray(surveyImages)} />
          )}
          <div className="flex flex-col gap-y-8">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              User Interview
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              To further{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                explore
              </span>{" "}
              my{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                research
              </span>{" "}
              and grasp{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                potential solutions
              </span>{" "}
              to address the{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                widespread issues
              </span>{" "}
              of{" "}
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
              among{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                young adults
              </span>
              , I{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                conducted interviews
              </span>{" "}
              with three{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                participants
              </span>{" "}
              aged between{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                18 and 29
              </span>
              . These individuals were either{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                recent graduates
              </span>{" "}
              or had{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                recently departed
              </span>{" "}
              from college. The aim was to{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                gain insights
              </span>{" "}
              directly from their{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                perspectives
              </span>{" "}
              and understand their{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                daily emotions
              </span>{" "}
              and{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                challenges
              </span>
              .
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              During the interview I asked the following questions
            </p>
            <ul className={` text-2xl ${darkerGrotesque.className} list-disc`}>
              <li>
                Now that you have left college/ finished your baccalaureate
                degree do you feel better or more anxious
              </li>
              <li>
                Do you have student loan debt, if so do you feel overwhelmed by
                it
              </li>
              <li>Do feel that your social life/meter/battery has changed</li>
              <li>
                Do you find it difficult to expand upon your friendships, if so
                elaborate
              </li>
              <li>
                What specific elements/aspects of your life (whether personally
                or physically) has changed ever since graduated
              </li>
              <li>
                Do you feel that online support groups/communities are helpful ,
                if so why
              </li>
            </ul>
          </div>
          <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
            Notable Quotes from the interviews
          </p>
          <div
            className={`flex flex-wrap justify-center  gap-y-8 text-gatherly-blue md:gap-x-8 text-xl md:text-3xl ${darkerGrotesqueBold.className} text-center`}
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
          <div className="flex flex-col gap-y-8">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              However
            </p>
            <p className={`text-2xl ${darkerGrotesque.className}`}>
              There was a consistent quotes about how the participants felt that
              the use online communities would be very helpful to them
            </p>
          </div>

          <div
            className={`flex flex-wrap justify-center  gap-y-8 text-gatherly-blue md:gap-x-8 text-3xl ${darkerGrotesqueBold.className} text-center`}
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
          <div className="flex flex-col gap-y-8">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Persona
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              Based on both{" "}
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
              , I created a persona to align with my interviewees as well as the
              insights from the{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                Pew Research study
              </span>
              . The persona,{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                Camile
              </span>
              , represents a recent graduate who is newly introduced to the real
              world and is facing challenges since moving away from home and
              school. This persona helps me gain a deeper understanding of the{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                needs
              </span>
              ,{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                desires
              </span>
              , and{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                motivations
              </span>{" "}
              of young adults navigating similar life transitions.
            </p>
          </div>
          <ImageRow images={personaImages} />
          <div className="flex flex-col gap-y-14">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Empathy Map
            </p>
            <p className={`text-2xl ${darkerGrotesque.className}`}>
              {`To finalize my analysis of user needs, I developed an empathy map
        to visually represent a user's attitudes and behaviors. This will
        serve as the cornerstone of truth, guarding the product from any
        unfounded unwarranted biases.`}
            </p>
            <ZoomableImage image={empathy} />
          </div>
          <div className="flex flex-col gap-y-4">
            <Title title={"Ideate"} color="text-gatherly-blue" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              Upon completing the research phase, which included both{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                primary and secondary research
              </span>
              , I found that people strongly yearn to connect with others who
              share{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                similar backgrounds and interests
              </span>
              . To finalize a solution, I began the{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                ideation process
              </span>
              , utilizing methods such as{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                laddering, preliminary sketching,
              </span>{" "}
              and{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                user flows
              </span>{" "}
              to lay the foundation for the idea.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-1 gap-y-8 flex-col">
              <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
                Laddering
              </p>
              <p className={` text-2xl ${darkerGrotesque.className}`}>
                To build the foundation for a solution that fosters connections
                between people with similar backgrounds and interests, I needed
                to first explore the{" "}
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
                </span>{" "}
                of young adults. To do this, I employed{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  laddering
                </span>
                ,{" "}
                {`a technique that helps uncover the deeper reasons behind
                users' actions and needs.`}{" "}
                As the sole{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  UI/UX designer
                </span>{" "}
                on this project, I used various techniques to approach the
                problem from multiple angles, with laddering being a key method.
                This allowed me to delve into the underlying{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  motivations
                </span>{" "}
                and{" "}
                <span
                  className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
                >
                  values
                </span>{" "}
                {`driving users' behaviors, ensuring that the final product truly
                aligns with their needs.`}
              </p>
            </div>
            <ZoomableImage image={ladder} />
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Sketches of possible solutions
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              In understanding the{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                motivations
              </span>{" "}
              of young adults and recognizing the{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                need to connect
              </span>{" "}
              people, I began exploring ideas that would facilitate connections
              based on shared{" "}
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
              . As I concluded the{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                laddering phase
              </span>
              , I converged on two potential solutions: a{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                directory app
              </span>{" "}
              or an app dedicated to{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                cultural groups
              </span>
              . Both concepts aimed to bridge the gap and foster meaningful
              connections among users with similar experiences.
            </p>
            <ImageRow images={skethesImages} />
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              However
            </p>
            <p className={`text-2xl ${darkerGrotesque.className}`}>
              Returning to the{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                insights
              </span>{" "}
              from my research, I realized that expanding the concept of a
              dedicated{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                culture app
              </span>{" "}
              into a solution that allows users to create groups could foster
              deeper connections. These groups could revolve around shared{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                cultural
              </span>{" "}
              identities, common{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                activities
              </span>
              , or even support networks. Based on user feedback, where
              participants found online groups to be highly{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                helpful
              </span>
              , I chose the group app as the{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                optimal solution
              </span>{" "}
              for addressing the problem.
            </p>
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              User Flows
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              As I committed to developing an online group community app to
              address the growing{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                mental health challenges
              </span>{" "}
              among{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                young adults
              </span>
              , I focused on creating essential flows that would allow users to
              not only{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                form their own groups
              </span>{" "}
              but also{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                interact with existing groups
              </span>{" "}
              and{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                create events
              </span>
              . Building on the insights from both the{" "}
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
              , I then crafted user flows to visualize how users would navigate
              these key interactions.
            </p>
            <ZoomableImage image={userflow} />
          </div>
          <div className="flex flex-col gap-y-4">
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
          <div className="flex flex-col gap-y-8">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Wireframes
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              After employing both my user flows and sketches, I begin
              constructing low-fidelity wireframes to establish the foundational
              structure of my app.
            </p>
            {width <= 767 ? (
              <MobileSlider sliderData={createImageArray(wireframeImages)} />
            ) : (
              <Slider sliderData={createImageArray(wireframeImages)} />
            )}
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Styleguide and UI elements
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              To establish the foundation of the Gatherly app, I explore various
              color meanings and develop UI components to construct the style
              guide that will inform its design.
            </p>
            {width <= 767 ? (
              <MobileSlider sliderData={createImageArray(styleguideImages)} />
            ) : (
              <Slider sliderData={createImageArray(styleguideImages)} />
            )}
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              High Fidelity Screens
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              After completing the{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                ideation process
              </span>{" "}
              and finalizing key elements in the{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                design phase
              </span>
              , I moved forward to create the{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                high-fidelity screens
              </span>
              . This is where my solution fully comes together, resulting in the
              development of{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                Gatherly
              </span>
              , an app designed to{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                simplify and encourage communication
              </span>{" "}
              among people with shared{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                interests
              </span>
              ,{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                backgrounds
              </span>
              , and{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                cultures
              </span>
              . The app directly addresses issues highlighted in both my{" "}
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
              , by fostering{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                community building
              </span>{" "}
              to{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                reduce stress
              </span>
              , promote{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                relationships
              </span>
              , and offer a{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                sense of relief
              </span>{" "}
              through connecting individuals with similar experiences.
            </p>
            {width <= 767 ? (
              <MobileSlider sliderData={createImageArray(highFidelityImages)} />
            ) : (
              <Slider sliderData={createImageArray(highFidelityImages)} />
            )}
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-4xl text-gatherly-blue ${myFont.className}`}>
              Prototype
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              During this phase, I developed a{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                prototype
              </span>{" "}
              emphasizing key features such as{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                creating groups
              </span>
              ,{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                organizing events
              </span>
              , exploring{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                different communities
              </span>
              , and fostering a{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                sense of belonging
              </span>
              . My primary focus was on enhancing the{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                user experience
              </span>{" "}
              to prioritize seamless{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                networking
              </span>
              , enabling users to{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                connect effortlessly
              </span>{" "}
              with others. This approach aims to address issues of{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                loneliness
              </span>{" "}
              and{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                mental health
              </span>{" "}
              by building a{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                supportive community
              </span>{" "}
              where individuals can find{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                companionship
              </span>{" "}
              and engage meaningfully with{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                like-minded people
              </span>
              .
            </p>
            <iframe
              style={{ border: "1px solid rgba(0, 0, 0, 0.1);" }}
              className="w-full h-[40rem]"
              src="https://embed.figma.com/proto/f3XDj0RqNgIrPRiJyOnI2L/WireFrame-Capstone?page-id=40%3A985&node-id=2066-9590&node-type=frame&viewport=1533%2C-318%2C0.19&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2066%3A9590&show-proto-sidebar=1&embed-host=share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="flex flex-col gap-y-8">
            <Title title={"Test"} color="text-gatherly-blue" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              In this phase, I conducted{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                usability tests
              </span>{" "}
              involving 10 diverse users to gather insights and obtain an{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                external perspective
              </span>{" "}
              on how my design is perceived by others. In order to ensure that
              users are able to complete essential user flows, such as{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                adding groups
              </span>
              ,{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                creating events
              </span>
              , and{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                connecting with others
              </span>
              , I tested the design with these users to understand where I could
              enhance my initial design. Through this process, I was able to
              deliver a{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                more concrete design
              </span>{" "}
              that clearly demonstrated the{" "}
              <span
                className={`text-gatherly-blue ${darkerGrotesqueBold.className}`}
              >
                features
              </span>{" "}
              of the app.
            </p>
          </div>
          <ImageViewer images={testImages} />
          <div className="flex flex-col gap-y-8">
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
