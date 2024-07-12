import { useState } from "react";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import {
  myFont,
  darkerGrotesque,
  darkerGrotesqueReg,
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
import highFidelity from "../../../assets/capstone/gatherly/high_fidelity_screens.png";
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
import highFidelity7 from "../../../assets/capstone/gatherly/high-fidelity/high-fideity-7.png";
import highFidelity8 from "../../../assets/capstone/gatherly/high-fidelity/high-fideity-8.png";
import highFidelity9 from "../../../assets/capstone/gatherly/high-fidelity/high-fideity-9.png";
import highFidelity10 from "../../../assets/capstone/gatherly/high-fidelity/high-fideity-10.png";
import highFidelity11 from "../../../assets/capstone/gatherly/high-fidelity/high-fideity-11.png";
import highFidelity12 from "../../../assets/capstone/gatherly/high-fidelity/high-fideity-12.png";
import highFidelity13 from "../../../assets/capstone/gatherly/high-fidelity/high-fideity-13.png";
import highFidelity14 from "../../../assets/capstone/gatherly/high-fidelity/high-fideity-14.png";
import ImageRow from "@/components/image-row";
import ImageViewer from "@/components/image-viewer";

const personaImages = [persona1, persona2];
const surveyImages = [survey1, survey2, survey3, survey4];
const skethesImages = [cultureSketch, directorySketch];
const styleguideImages = [
  styleguide_1,
  styleguide_2,
  styleguide_3,
  styleguide_4,
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
  highFidelity7,
  highFidelity8,
  highFidelity9,
  highFidelity10,
  highFidelity11,
  highFidelity12,
  highFidelity13,
  highFidelity14,
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
          <div className="flex flex-col gap-y-8 flex-1">
            <p className={` text-gatherly-blue text-4xl ${myFont.className}`}>
              Problem Statement
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              Navigating adulthood is challenging, especially for young adults
              facing{" "}
              <span
                className={`text-gatherly-blue  ${darkerGrotesqueBold.className}`}
              >
                loneliness, stress, and mental health issues
              </span>
              Post-graduate stress, post-pandemic effects, and other factors add
              to these struggles. Gatherly helps by creating{" "}
              <span
                className={`text-gatherly-blue  ${darkerGrotesqueBold.className}`}
              >
                {" "}
                communities through group activities and events
              </span>
              , bringing like-minded individuals together to combat loneliness
              and stress. This project was completed as part of the UI/UX Design
              learning platform at Springboard.
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
          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(highFidelityImages)} />
          ) : (
            <Slider sliderData={createImageArray(highFidelityImages)} />
          )}

          <div className="flex flex-col gap-y-4">
            <Title title={"Research"} color="text-gatherly-blue" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              Prior to initiating the ideation and design stages, it was
              essential for me to conduct thorough research to grasp the extent
              of the epidemic of loneliness and stress among adults. Through
              secondary research from{" "}
              <Link
                className={` hover:underline text-gatherly-blue ${darkerGrotesqueBold.className} `}
                href="https://www.pewresearch.org/short-reads/2023/03/02/mental-health-and-the-pandemic-what-u-s-surveys-have-found/"
              >
                Pew Research
              </Link>
              , I discovered that not only were young individuals experiencing
              elevated levels of stress, but there was also a significant
              portion struggling with forming relationships and managing
              financial stressors.
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
              To further explore my research and grasp potential solutions to
              address the widespread issues of loneliness and stress among young
              adults, I conducted interviews with three participants aged
              between 18 and 29. These individuals were either recent graduates
              or had recently departed from college. The aim was to gain
              insights directly from their perspectives and understand their
              daily emotions and challenges.
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
            className={`flex flex-wrap justify-center  gap-y-8 text-gatherly-blue md:gap-x-8 text-xl md:text-2xl ${darkerGrotesqueReg.className} text-center`}
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
            className={`flex flex-wrap justify-center  gap-y-8 text-gatherly-blue md:gap-x-8 text-2xl ${darkerGrotesqueReg.className} text-center`}
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
              {`To empathize with my users' requirements, I crafted this persona
              to attain a comprehensive understanding of their needs, desires,
              and motivations.`}
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
            <div className="flex justify-center items-center w-full">
              <Image
                src={empathy}
                className="object-contain md:h-[50rem]"
                alt="image of empathy map"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <Title title={"Ideate"} color="text-gatherly-blue" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              {`  Following the research phases' conclusion, I transitioned into
                brainstorming and cultivating a solution for the identified
                problem. I initiated this process by employing techniques such as
                laddering and preliminary sketching to visualize various solutions
                before finalizing an idea`}
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-1 gap-y-8 flex-col">
              <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
                Laddering
              </p>
              <p className={` text-2xl ${darkerGrotesque.className}`}>
                {` As the only UI/UX designer working on this product, I employ
                various techniques to approach the problem from multiple
                perspectives. Among these methods is laddering technique in
                order to uncover underlying motivations and values that drive
                user's behavior and needs`}
              </p>
            </div>
            <div className="flex justify-center items-center w-full h-screen relative">
              <Image
                src={ladder}
                className="object-contain md:h-[50rem]"
                alt="image of laddering"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Sketches of possible solutions
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              In concluding the laddering phases I began to converge on two
              possible solutions. A directory app or a cultural/ group app.
            </p>
            <ImageRow images={skethesImages} />
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              However
            </p>
            <p className={`text-2xl ${darkerGrotesque.className}`}>
              Based on the insights from my user interviews on how each
              participant found online groups to be helpful I chose the group
              app as the solution for the problem
            </p>
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              User Flows
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              Combing all the information I gathered during both the research
              and ideation phase I then proceeded to created use flows to
              visualize how users would complete certain flows
            </p>
            <div className="w-full relative">
              <Image
                src={userflow}
                className="object-contain md:h-[50rem]"
                alt="image of user flow"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <Title title={"Design"} color="text-gatherly-blue" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              In this stage, I initiate the creation and development of visual
              components based on my initial sketches. I start by crafting
              wireframes, followed by the construction of a style guide, and
              ultimately produce high-fidelity screens.
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
              Styleguide
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
              Upon concluding both the ideation process and finalizing certain
              elements within the design phase, I complete the creation of my
              high-fidelity screens.
            </p>
            <div className="flex justify-center items-center w-full h-screen relative">
              <Image
                src={highFidelity}
                className="object-contain "
                alt="image of high fidelity screens"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <Title title={"Test"} color="text-gatherly-blue" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              In this phase, I conducted usability tests involving 10 diverse
              users to gather insights and obtain an external perspective on how
              my design is perceived by others.
            </p>
          </div>
          <ImageViewer images={testImages} />
          <div className="flex flex-col gap-y-8">
            <p className={`text-gatherly-blue text-4xl ${myFont.className}`}>
              Whats next .. ?
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              In upcoming iterations of this project, I aim to introduce new
              features including a friend list, voice chat within group chats,
              and the option for users to purchase event admissions for special
              occasions such as fundraisers. These features will undergo testing
              to gauge user reactions to the updates. Overall, this project
              marks a significant milestone in leveraging my technical skills,
              past design experience, and newfound knowledge to create my
              comprehensive case study.
            </p>
          </div>
          <CaseStudyFooter casestudy="Gatherly" />
        </main>
      )}
      {showContent && <Footer />}
    </div>
  );
}
