import { useState } from "react";
import Hero from "@/components/hero";
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
import sketch from "../../../assets/capstone/naturalu/naturalUSketch.png";
import userFlow from "../../../assets/capstone/naturalu/naturalU-userflow.png";
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

import Link from "next/link";
import ImageRow from "@/components/image-row";
import ZoomableImage from "@/components/zoomable-image";

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

export default function NaturalU() {
  const { width } = useWindowSize();
  const [showContent, setShowContent] = useState(true);
  const [zoomedIndex, setZoomedIndex] = useState(false);
  const [zoomable, setZoomable] = useState(false);

  const updateContent = (state) => {
    setShowContent(state);
  };
  const handleClick = (index) => {
    setZoomedIndex(zoomedIndex === index ? null : index);
  };
  const handleZoom = () => {
    setZoomable((prev) => !prev);
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
                For years, people with{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  curly or coily hair{" "}
                </span>
                have faced a{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  lack of knowledge
                </span>{" "}
                from professionals about proper hair care, along with{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  ongoing social mistreatment.
                </span>{" "}
                This project is especially personal for me—growing up, I
                struggled to{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  fit in
                </span>{" "}
                and even asked my mom to{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  chemically straighten my hair,
                </span>{" "}
                which caused it to{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  fall out.
                </span>{" "}
                That experience showed me the{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  harm of trying to change yourself{" "}
                </span>
                {`to meet others' expectations.`} In turn, I wanted to create a
                space where people can learn more about their{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  natural hair
                </span>{" "}
                and feel{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  empowered to embrace
                </span>{" "}
                who they truly are,{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  {" "}
                  without fear or shame.
                </span>{" "}
              </p>
            </div>
            <div className="flex flex-col gap-y-8 flex-1">
              <p className={` text-light-purple text-4xl ${myFont.className}`}>
                Solution
              </p>
              <p className={` text-2xl ${darkerGrotesque.className}`}>
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  {" "}
                  NaturalU
                </span>
                is an app designed to create a space for{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  open discussions
                </span>{" "}
                about natural hair, where users can{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  share videos, ask questions, and learn from one another.
                </span>{" "}
                {`Whether you're a`}{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  professional
                </span>{" "}
                or a{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  novice
                </span>{" "}
                , NaturalU offers a platform for{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  everyone
                </span>{" "}
                to engage in meaningful conversations about hair care. By{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  breaking down the social stigma
                </span>{" "}
                surrounding natural hair, the app encourages{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  open dialogue
                </span>{" "}
                and fosters a community that embraces{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  learning
                </span>{" "}
                and{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  growth.
                </span>
                NaturalU empowers users to confidently{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  embrace their natural hair
                </span>{" "}
                , helping to{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  normalize diverse hair types
                </span>{" "}
                and promote a{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  more inclusive conversation.
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-light-purple text-4xl ${myFont.className}`}>
              My Role
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              I served as the sole UI/UX designer for this project; therefore, I
              handled the research and design
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            <Title title={"Research"} color="text-light-purple" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              Before starting the{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                brainstorming
              </span>{" "}
              and{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                design
              </span>{" "}
              phases, my main goal was to{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                understand how women
              </span>{" "}
              truly feel about their{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                natural hair
              </span>{" "}
              and whether their experiences{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                mirrored my own
              </span>
              . Through my{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                research
              </span>{" "}
              , including insights from the{" "}
              <span>
                {
                  <Link
                    className={` hover:underline text-light-purple ${darkerGrotesqueBold.className} `}
                    href={
                      "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4174916/"
                    }
                  >
                    Journal of Clinical and Aesthetic Dermatology
                  </Link>
                }
              </span>{" "}
              , I discovered that many women—especially{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                Black women
              </span>{" "}
              often feel{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                frustration
              </span>{" "}
              or{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                embarrassment
              </span>{" "}
              about their natural hair. I also found a{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                striking issue
              </span>
              : many{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                healthcare professionals
              </span>
              , such as{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                doctors
              </span>{" "}
              , were{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                {`unfamiliar with their patients' natural hair types`}
              </span>{" "}
              when addressing{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                scalp-related concerns
              </span>{" "}
              . This gap in knowledge further highlighted the need for{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                open conversations
              </span>{" "}
              and{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                education
              </span>{" "}
              around natural hair.
            </p>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-0">
            <Stats statsArray={stats} color="text-light-purple" />
          </div>

          <div className="flex flex-col gap-y-8">
            <p className={`text-light-purple text-4xl ${myFont.className}`}>
              Persona
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              Based on my{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                research
              </span>
              , I created a persona named{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                Nia
              </span>
              , whose life revolves around always{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                helping others
              </span>
              . However, when it comes to doing things for{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                herself
              </span>
              , like practicing{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                self-care
              </span>{" "}
              or doing her{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                hair
              </span>
              , she often encounters{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                difficulties
              </span>{" "}
              and feels{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                defeated
              </span>
              . I developed this persona to better{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                understand
              </span>{" "}
              and align with the experiences of{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                women
              </span>{" "}
              from the{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                Journal of Clinical and Aesthetic Dermatology
              </span>
              , particularly those who face challenges with their{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                natural hair
              </span>
              .
            </p>
          </div>
          <ImageRow images={personaImages} />
          <Title title={"Ideate"} color="text-light-purple" />
          <div className="flex flex-col gap-y-8">
            <p className={`text-light-purple text-4xl ${myFont.className}`}>
              Sketches
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              Based on my{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                research
              </span>
              , where many women expressed{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                frustration
              </span>{" "}
              with caring for their{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                natural hair{" "}
              </span>
              and felt their{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                doctors lacked knowledge
              </span>{" "}
              about their{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                hair texture
              </span>
              , I wanted to include features that allow both{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                professionals{" "}
              </span>
              and
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                non-professionals{" "}
              </span>
              to{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                ask questions, visually showcase{" "}
              </span>
              hair care techniques, and{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                engage in conversations
              </span>
              . After completing the{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                research phase
              </span>
              , I focused on sketching pages and flows for the{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                NaturalU app
              </span>
              , ensuring these features addressed the challenges women face with
              natural hair, while also{" "}
              <span
                className={`text-light-purple  ${darkerGrotesqueBold.className}`}
              >
                bridging the knowledge gap
              </span>{" "}
              with professionals
            </p>
          </div>
          <ZoomableImage image={sketch} />
          <div className="flex flex-col gap-y-8">
            <p className={`text-light-purple text-4xl ${myFont.className}`}>
              User Flow
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                Based on my research
              </span>
              —where many women felt{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                frustrated with caring for their natural hair
              </span>{" "}
              and noted their{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                doctors lacked knowledge of hair texture
              </span>
              —I focused on{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                sketching pages and flows
              </span>{" "}
              for the NaturalU app. I included features that allow{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                professionals and non-professionals
              </span>{" "}
              to ask questions,{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                showcase hair care techniques
              </span>
              , and{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                engage in conversations
              </span>
              . When designing the{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                user flows
              </span>
              , I emphasized how users would navigate{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                key features
              </span>
              , like{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                asking questions
              </span>{" "}
              and using the{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                learning section
              </span>{" "}
              to better understand their hair type. This ensures{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                easy access to valuable information
              </span>{" "}
              and promotes{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                interaction and education about natural hair
              </span>
              .
            </p>
          </div>
          <ZoomableImage image={userFlow} />
          <Title title={"Design"} color="text-light-purple" />
          <div className="flex flex-col gap-y-8">
            <p className={`text-light-purple text-4xl ${myFont.className}`}>
              Style Guide and UI Components
            </p>
            <p className={`text-2xl ${darkerGrotesque.className}`}>
              To instill a sense of strength and confidence among users who may
              feel uneasy about their natural hair, I chose purple as the
              primary color for the NaturalU app. Purple symbolizes pride,
              loyalty, magic, and ambition. By integrating this color, I aimed
              to convey empowerment and remind users of the importance of their
              crowns, encouraging them to confidently explore the app’s features
              for hair care and self-discovery.
            </p>
            <p>
              Additionally, I used purple throughout various UI components,
              including buttons, navigation bars, cards, and toggles, ensuring
              visual consistency across the platform. This choice emphasizes
              functionality and aesthetics, aligning the overall user experience
              with the sense of empowerment and identity that the color
              represents. Each element serves as a cohesive part of the design,
              enhancing usability while reinforcing the app’s core message of
              embracing and celebrating natural hair.
            </p>
          </div>
          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(styleguideImages)} />
          ) : (
            <Slider sliderData={createImageArray(styleguideImages)} />
          )}

          <div className="flex flex-col gap-y-8">
            <p className={`text-light-purple text-4xl ${myFont.className}`}>
              High Fidelity Screens
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              After finalizing the{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                ideation phase
              </span>{" "}
              and solidifying the{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                design direction
              </span>
              , I began creating{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                high-fidelity screens
              </span>{" "}
              for NaturalU, focusing on its{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                core goal
              </span>
              —providing a space for users to{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                openly discuss natural hair
              </span>
              ,{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                ask questions
              </span>
              , and{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                learn from others
              </span>
              . Every design decision was made to ensure the app fosters{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                meaningful conversations
              </span>
              ,{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                educates both professionals and non-professionals
              </span>
              , and helps{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                break down the social stigma
              </span>{" "}
              surrounding{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                natural hair
              </span>
              .
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              To combat social stigma, expand hair knowledge, and help Black
              women and others feel more comfortable with their natural hair, I
              implemented the following features:
            </p>
            <ul className={` text-2xl ${darkerGrotesque.className} list-disc`}>
              <li>
                <span
                  className={`text-light-purple ${darkerGrotesqueBold.className}`}
                >
                  Interactive Q&A Forum:
                </span>{" "}
                An open space for users to ask hair care questions and share
                advice with others.
              </li>
              <li>
                <span
                  className={`text-light-purple ${darkerGrotesqueBold.className}`}
                >
                  Video Tutorials:
                </span>{" "}
                A dedicated section for sharing video content, where users and
                professionals can demonstrate styling techniques or hair care
                tips.
              </li>
              <li>
                <span
                  className={`text-light-purple ${darkerGrotesqueBold.className}`}
                >
                  Informational Articles:{" "}
                </span>
                A resource for users to learn more about different hair types,
                complete with detailed guides on hair care tailored to various
                textures and conditions.
              </li>
            </ul>
          </div>

          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(highFidelityImages)} />
          ) : (
            <Slider sliderData={createImageArray(highFidelityImages)} />
          )}

          <div className="flex flex-col gap-y-4">
            <Title title={"What's Next"} color="text-light-purple" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              In the next phases of this project, I aim to enhance the{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                designs
              </span>{" "}
              within the{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                hair discovery pages
              </span>{" "}
              to make them more{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                interactive
              </span>
              {`. Additionally, I'm considering incorporating`}{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                gamification features
              </span>{" "}
              to encourage users to{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                explore
              </span>{" "}
              and{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                learn
              </span>{" "}
              {`about different hair types. Overall, I'm proud of the`}{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                progress
              </span>{" "}
              In the next phases of this project, I aim to enhance the{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                designs
              </span>{" "}
              within the{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                hair discovery pages
              </span>{" "}
              to make them more{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                interactive
              </span>
              {` . Additionally, I'm considering incorporating`}{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                gamification features
              </span>{" "}
              to encourage users to{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                explore
              </span>{" "}
              and{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                learn
              </span>{" "}
              {`about different hair types. Overall, I'm proud of the`}{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                progress
              </span>{" "}
              {`I've made so far in bringing this app to life. My ultimate goal is
              to ensure that everyone feels`}{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                proud
              </span>{" "}
              of the{" "}
              <span
                className={`text-light-purple ${darkerGrotesqueBold.className}`}
              >
                crowns
              </span>{" "}
              they wear atop their heads.
            </p>
          </div>
          <CaseStudyFooter casestudy="NaturalU" />
        </main>
      )}
      {showContent && <Footer />}
    </div>
  );
}
