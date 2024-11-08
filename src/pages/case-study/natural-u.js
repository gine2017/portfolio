import { useState } from "react";
import Hero from "@/components/hero";
import Link from "next/link";
import {
  myFont,
  darkerGrotesque,
  darkerGrotesqueBold,
  createImageArray,
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

//images
import naturalUHero from "../../../assets/capstone/naturalu/natural-u-hero-img.svg";
import persona1 from "../../../assets/capstone/naturalu/natural-u-persona-1.png";
import persona2 from "../../../assets/capstone/naturalu/natural-u-persona-2.png";
import sketch1 from "../../../assets/capstone/naturalu/sketch1.png";
import sketch2 from "../../../assets/capstone/naturalu/sketch2.png";
import userFlow from "../../../assets/capstone/naturalu/UserFlowNaturalU.png";
import styleguide from "../../../assets/capstone/naturalu/naturaluU-styleguide.png";
import components from "../../../assets/capstone/naturalu/components.png";

import screen1 from "../../../assets/capstone/naturalu/screens/screen_1.png";
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

  const updateContent = (state) => {
    setShowContent(state);
  };

  return (
    <div>
      {width <= 767 ? <MobileNav updateContent={updateContent} /> : <Navbar />}
      {showContent && <Hero image={naturalUHero} />}
      {showContent && (
        <main className="w-4/5 mx-auto flex flex-col gap-y-20 mt-16 mb-48">
          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(highFidelityImages)} />
          ) : (
            <Slider sliderData={createImageArray(highFidelityImages)} />
          )}
          <div className="flex flex-col gap-y-8 md:flex-row gap-x-16 ">
            <div className="flex flex-col gap-y-8 flex-1">
              <p className={` text-light-purple text-4xl ${myFont.className}`}>
                Problem
              </p>
              <p className={` text-2xl ${darkerGrotesque.className}`}>
                For{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  years
                </span>
                , people with{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  curly and coily hair
                </span>{" "}
                have faced a significant gap in knowledge from professionals on
                proper hair care, alongside{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  societal stigma
                </span>
                . This project is deeply{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  personal
                </span>{" "}
                to me as I grew up feeling the pressure to fit in, leading me to
                chemically straighten my hair, which damaged it and resulted in
                hair loss. That experience highlighted the harm of conforming to
                external expectations. My goal with this project is to create a
                space where individuals can{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  learn
                </span>{" "}
                about their natural hair and feel{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  confident
                </span>{" "}
                embracing their true selves, free from fear or shame.
              </p>
            </div>
            <div className="flex flex-col gap-y-8 flex-1">
              <p className={` text-light-purple text-4xl ${myFont.className}`}>
                Solution
              </p>
              <p className={`text-2xl ${darkerGrotesque.className}`}>
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  NaturalU
                </span>{" "}
                is designed to create a{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  supportive platform
                </span>{" "}
                for open conversations about{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  natural hair
                </span>
                , allowing users to share videos, ask questions, and learn from
                each other. Whether a{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  professional
                </span>{" "}
                or a beginner, everyone can engage in{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  meaningful discussions
                </span>{" "}
                and gain valuable insights into hair care. By addressing the{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  social stigma
                </span>{" "}
                surrounding natural hair,{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  NaturalU
                </span>{" "}
                fosters a{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  community
                </span>{" "}
                that promotes open dialogue, learning, and growth. The app
                empowers users to confidently embrace and celebrate their{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  natural hair
                </span>
                , normalizing diverse hair types and promoting{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  inclusivity
                </span>
                .
              </p>
            </div>
          </div>
          <AutoScrollNavigator sections={steps} fontColor={"light-purple"} />
          <div className="flex flex-col gap-y-8 w-full md:mx-auto md:w-3/4 ">
            <p className={`text-light-purple text-4xl ${myFont.className}`}>
              My Role
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              I served as the sole UI/UX designer for this project; therefore, I
              handled the research and design
            </p>
          </div>
          <div className="flex flex-col gap-y-4 w-3/4 mx-auto">
            <Title title={"Research"} color="text-light-purple" id="research" />
            <div>
              <p className={`text-2xl ${darkerGrotesque.className}`}>
                Before brainstorming and designing, my main objective was to
                understand how women, particularly Black women, feel about their
                natural hair and whether their experiences reflected my own.
              </p>
              <br />
              <p className={` text-2xl ${darkerGrotesque.className}`}>
                Key findings included from primary research from the{" "}
                <Link
                  className={` hover:underline text-light-purple ${darkerGrotesqueBold.className} `}
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4174916/"
                  target="_blank"
                >
                  {" "}
                  Journal of Clinical and Aesthetic Dermatology
                </Link>
              </p>
              <ul
                className={`list-disc pl-5 text-2xl ${darkerGrotesque.className}`}
              >
                <li>
                  <span
                    className={`text-light-purple text-2xl ${darkerGrotesqueBold.className}`}
                  >
                    Frustration and embarrassment about natural hair{" "}
                  </span>
                </li>
                <li className="text-2xl">
                  <span
                    className={`text-light-purple ${darkerGrotesqueBold.className}`}
                  >
                    {`Healthcare professionals' limited knowledge`}{" "}
                  </span>
                  of natural hair types when addressing{" "}
                  <span
                    className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                  >
                    scalp-related care
                  </span>
                </li>
              </ul>
              <br />
              <p className={`text-2xl ${darkerGrotesque.className}`}>
                These insights highlighted the need for open dialogue and better
                education surrounding natural hair.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-0 md:mx-auto">
            <Stats statsArray={stats} color="text-light-purple" />
          </div>

          <div className="flex flex-col gap-y-8 w-full md:mx-auto md:w-3/4 ">
            <p className={`text-light-purple text-4xl ${myFont.className}`}>
              Persona
            </p>
            <p className={`text-2xl ${darkerGrotesque.className}`}>
              Based on my research, I developed a persona named{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                Nia
              </span>{" "}
              to represent the struggles faced by many women, especially{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                Black women
              </span>
              , regarding their natural hair. This persona is rooted in insights
              from the{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                Journal of Clinical and Aesthetic Dermatology
              </span>
              , revealing common feelings of{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                frustration
              </span>{" "}
              and{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                embarrassment
              </span>{" "}
              about natural hair. Additionally, the{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                limited knowledge
              </span>{" "}
              among healthcare professionals regarding various hair types
              underscored the importance of deeply understanding user needs.
            </p>

            <p className={`text-2xl ${darkerGrotesque.className}`}>
              Nia embodies the challenges women face when prioritizing
              themselves, such as practicing{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                self-care
              </span>{" "}
              or managing their hair. This persona was instrumental in shaping
              my ideation and decision-making process by:
            </p>

            <ul
              className={`list-disc pl-5 text-2xl ${darkerGrotesque.className}`}
            >
              <li>
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  Empathizing with core user pain points
                </span>
                : The persona helped me internalize the emotional and practical
                challenges these women experience, ensuring my design choices
                were{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  user-centric
                </span>
                .
              </li>
              <li>
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  Guiding feature prioritization
                </span>
                : Knowing that users like Nia often feel overwhelmed or defeated
                by self-care routines influenced my decision to create features
                that promote{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  support
                </span>{" "}
                and{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  encouragement
                </span>
                .
              </li>
              <li>
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  Tying research to solutions
                </span>
                : The persona emphasized the need for{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  educational
                </span>{" "}
                and{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  interactive components
                </span>{" "}
                in the app, fostering an environment where users could engage
                confidently and learn in a relatable way.
              </li>
            </ul>

            <p className={`text-2xl ${darkerGrotesque.className}`}>
              This foundation ensured that my design approach resonated with
              real user experiences and addressed specific issues found in my
              research.
            </p>
          </div>
          <div className="md:mx-auto md:w-3/4">
            <ImageRow images={personaImages} />
          </div>

          <Title
            title={"Ideate"}
            color="text-light-purple"
            styles="w-3/4 mx-auto"
            id="ideate"
          />
          <div className="flex flex-col gap-y-8 w-full md:mx-auto md:w-3/4 ">
            <p className={`text-light-purple text-4xl ${myFont.className}`}>
              Sketches
            </p>
            <p className={`text-2xl ${darkerGrotesque.className}`}>
              Based on my research and the persona of Nia, I aim to tackle the
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                {" "}
                frustration{" "}
              </span>
              and
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                {" "}
                embarrassment{" "}
              </span>
              many women, particularly Black women, experience regarding their
              natural hair, along with the limited knowledge many healthcare
              professionals have about different hair types.
            </p>

            <p className={`text-2xl ${darkerGrotesque.className}`}>
              {`To create a more supportive and informative space, I'm sketching
              features for the`}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                {" "}
                NaturalU{" "}
              </span>
              app that will:
            </p>

            <ul
              className={`list-disc pl-5 text-2xl ${darkerGrotesque.className}`}
            >
              <li>
                <span
                  className={`text-light-purple ${darkerGrotesqueBold.className}`}
                >
                  Encourage users to ask questions{" "}
                </span>
                about hair care, making it easy to get personalized advice.
              </li>
              <li>
                <span
                  className={`text-light-purple ${darkerGrotesqueBold.className}`}
                >
                  Showcase videos demonstrating techniques
                </span>
                , providing fun and practical tips.
              </li>
              <li>
                <span
                  className={`text-light-purple ${darkerGrotesqueBold.className}`}
                >
                  Offer informative content{" "}
                </span>
                on various hair types, helping users feel more confident and
                informed.
              </li>
            </ul>

            <p className={`text-2xl ${darkerGrotesque.className}`}>
              These educational and interactive features are designed to
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                {" "}
                empower{" "}
              </span>
              users like Nia, turning their experiences from
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                {" "}
                frustration{" "}
              </span>
              into
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                {" "}
                confidence{" "}
              </span>
              .
            </p>
          </div>
          <div>
            <div className="md:mx-auto md:w-3/4">
              <ImageRow images={sketchImages} />
            </div>
          </div>

          <div className="flex flex-col gap-y-8 w-3/4 mx-auto">
            <p className={`text-light-purple text-4xl ${myFont.className}`}>
              User Flow
            </p>
            <p className={`text-2xl ${darkerGrotesque.className}`}>
              Now that I have a clear understanding of the{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                features
              </span>{" "}
              {`needed to address users'`}{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                frustration
              </span>{" "}
              and{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                embarrassment
              </span>{" "}
              about their natural hair while enhancing educational resources, I
              began to visualize the key{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                tasks
              </span>{" "}
              and{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                decisions
              </span>{" "}
              that users like Nia would encounter in the NaturalU app. By
              identifying specific scenarios that Nia may face, I created a{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                user flow
              </span>{" "}
              from her perspective. This ensures that the design focuses on
              essential tasks that facilitate learning and empower users in
              their hair care journey.
            </p>
          </div>
          <ZoomableImage image={userFlow} />
          <Title
            title={"Design"}
            color="text-light-purple"
            styles="w-full md:mx-auto md:w-3/4 "
            id="design"
          />
          <div className="flex flex-col gap-y-8 w-full md:mx-auto md:w-3/4 ">
            <p className={`text-light-purple text-4xl ${myFont.className}`}>
              Style Guide and UI Components
            </p>
            <p className={`text-2xl ${darkerGrotesque.className}`}>
              {`After defining the app's key screens and features, I focused on
              branding as well as building UI components`}{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                NaturalU
              </span>{" "}
              to reflect{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                ambition
              </span>
              ,{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                independence
              </span>
              ,{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                confidence
              </span>
              ,{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                fun
              </span>
              ,{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                comfort
              </span>
              , and{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                introspection
              </span>
              .
            </p>

            <p className={`text-2xl ${darkerGrotesque.className}`}>
              I chose{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                purple
              </span>{" "}
              as the primary color for its associations with{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                independence
              </span>{" "}
              and{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                self-reflection
              </span>
              , encouraging users to embrace their natural hair and enhance
              their confidence.
            </p>

            <p className={`text-2xl ${darkerGrotesque.className}`}>
              As a secondary color, I selected{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                orange
              </span>{" "}
              to evoke{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                comfort
              </span>{" "}
              and{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                fun
              </span>
              , inviting users to engage with the app in an interactive way.
            </p>
            <p className={`text-2xl ${darkerGrotesque.className}`}>
              These color choices are intended to create an empowering user
              experience that fosters confidence and a positive relationship
              with natural beauty.
            </p>
            <p className={`text-2xl ${darkerGrotesque.className}`}>
              I chose{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                Nunito
              </span>{" "}
              as the typography for NaturalU because its rounded sans-serif
              design conveys a{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                warm
              </span>{" "}
              and{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                friendly
              </span>{" "}
              tone. This inviting style not only enhances clarity but also
              reflects the supportive personality of the{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                NaturalU{" "}
              </span>
              brand, making users feel{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                comfortable
              </span>{" "}
              and engaged.
            </p>
          </div>
          <div className="md:mx-auto md:w-3/4">
            <ImageRow images={styleguideImages} />
          </div>

          <div className="flex flex-col gap-y-8 w-full md:mx-auto md:w-3/4 ">
            <p className={`text-light-purple text-4xl ${myFont.className}`}>
              High Fidelity Screens
            </p>
            <p className={`text-2xl ${darkerGrotesque.className}`}>
              After utilizing my ideation and research phases to inform my
              design decisions, I established a clear style guide and defined UI
              components. This groundwork enabled me to create my final
              high-fidelity screens for the NaturalU app. I ensured these
              screens featured essential elements such as:
            </p>

            <ul
              className={`list-disc pl-5 text-2xl ${darkerGrotesque.className}`}
            >
              <li>
                <span
                  className={`text-light-purple ${darkerGrotesqueBold.className}`}
                >
                  Interactive Q&A Forum
                </span>
              </li>
              <li>
                <span
                  className={`text-light-purple ${darkerGrotesqueBold.className}`}
                >
                  Video Tutorials
                </span>
              </li>
              <li>
                <span
                  className={`text-light-purple ${darkerGrotesqueBold.className}`}
                >
                  Informational Articles
                </span>
              </li>
            </ul>

            <p className={`text-2xl ${darkerGrotesque.className}`}>
              This approach not only enhances user engagement but also addresses
              the core needs identified during my research, making my designs
              both user-centered and effective.
            </p>
          </div>

          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(highFidelityImages)} />
          ) : (
            <Slider sliderData={createImageArray(highFidelityImages)} />
          )}

          <div className="flex flex-col gap-y-4 w-full md:mx-auto md:w-3/4 ">
            <Title title={"What's Next"} color="text-light-purple" />
            <p className={`text-2xl ${darkerGrotesque.className}`}>
              {`I'm excited about the progress I've made on the`}{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                NaturalU
              </span>{" "}
              app and the potential it has to empower users to embrace their
              natural hair. As I move forward, my next phases will focus on
              enhancing the hair discovery pages to make them more interactive.
            </p>

            <p className={`text-2xl ${darkerGrotesque.className}`}>
              I plan to incorporate additional features, including:
            </p>

            <ul
              className={`list-disc pl-5 text-2xl ${darkerGrotesque.className}`}
            >
              <li>
                <span
                  className={`text-light-purple ${darkerGrotesqueBold.className}`}
                >
                  Personal hair journals
                </span>{" "}
                for tracking hair journeys
              </li>
              <li>
                <span
                  className={`text-light-purple ${darkerGrotesqueBold.className}`}
                >
                  Supportive message displays
                </span>{" "}
                to motivate users
              </li>
              <li>
                <span
                  className={`text-light-purple ${darkerGrotesqueBold.className}`}
                >
                  Hair quizzes
                </span>{" "}
                for personalized insights
              </li>
              <li>
                <span
                  className={`text-light-purple ${darkerGrotesqueBold.className}`}
                >
                  Gamification elements
                </span>{" "}
                to encourage exploration and learning about various hair types
              </li>
            </ul>

            <p className={`text-2xl ${darkerGrotesque.className}`}>
              Ultimately, I want this app to create a welcoming space where
              users can feel comfortable learning about themselves.{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                Knowledge
              </span>{" "}
              is a powerful tool, and I hope to inspire people to take pride in
              their natural crowns once the app is launched.
            </p>
          </div>
          <CaseStudyFooter casestudy="NaturalU" />
        </main>
      )}
      {showContent && <Footer />}
    </div>
  );
}
