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
import Image from "next/image";
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
import Link from "next/link";

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
];

const personaImages = [persona1, persona2];

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

const updateContent = (state) => {
  setShowContent(state);
};

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
          <div className="flex flex-col gap-y-8 md:flex-row gap-x-16 ">
            <div className="flex flex-col gap-y-8 flex-1">
              <p className={` text-light-purple text-4xl ${myFont.className}`}>
                Problem
              </p>
              <p className={` text-2xl ${darkerGrotesque.className}`}>
                {`For years, people with curly or coily hair have `}{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  struggled with self-confidence, hair care know-how, and facing
                  unfair treatment.
                </span>
                {`
                Today, they're constantly mindful of their appearance, fearing
                their hair might not fit in or be accepted in certain settings.
                `}
              </p>
            </div>
            <div className="flex flex-col gap-y-8 flex-1">
              <p className={` text-light-purple text-4xl ${myFont.className}`}>
                Solution
              </p>
              <p className={` text-2xl ${darkerGrotesque.className}`}>
                NaturalU is an application designed to{" "}
                <span
                  className={`text-light-purple  ${darkerGrotesqueBold.className}`}
                >
                  {" "}
                  empower users to inquire, educate themselves, and engage in
                  collaborative discussions regarding all aspects of hair care
                </span>{" "}
                By fostering an environment that encourages learning,
                interaction, and awareness of diverse hair types, NaturalU aims
                to support individuals in feeling confident to embrace their
                natural hair without fear of discrimination.
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
              {`Before diving into the brainstorming and design stages, it was
              crucial for me to grasp how hair issues impact people beyond my
              own experiences. In my research from the `}
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
              </span>
              {` I found that many women, especially black
              women, often felt frustrated or embarrassed about their natural
              hair. The study also revealed an interesting fact: a significant
              number of physicians weren't familiar with their patients' hair
              types when discussing scalp-related problems.`}
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
              Based on the data obtained from my research phase I create this
              persona to visualize a user that would utilize this app{" "}
            </p>
          </div>
          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(personaImages)} />
          ) : (
            <Slider sliderData={createImageArray(personaImages)} />
          )}
          <Title title={"Ideate"} color="text-light-purple" />
          <div className="flex flex-col gap-y-8">
            <p className={`text-light-purple text-4xl ${myFont.className}`}>
              Sketches
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              After the conclusion of my research phase I take time to sketch
              out ideas and flows for the Natural U app
            </p>
          </div>
          <div className="flex justify-center items-center w-full h-screen relative">
            <Image
              src={sketch}
              alt="sketches of screens"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-light-purple text-4xl ${myFont.className}`}>
              User Flow
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              Taking into account all the information I gathered during the
              research phase, I then moved on to creating user flows to
              visualize how users would navigate through specific processes.{" "}
            </p>
          </div>
          <div className="flex justify-center items-center w-full h-screen relative">
            <Image
              src={userFlow}
              alt="image of user flow"
              style={{ objectFit: "contain" }}
            />
          </div>
          <Title title={"Design"} color="text-light-purple" />
          <div className="flex flex-col gap-y-8">
            <p className={`text-light-purple text-4xl ${myFont.className}`}>
              Style Guide
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              To instill a sense of pride and confidence among users who may
              feel uneasy about their hair, I made sure to select purple as the
              primary color for the NaturalU app. Purple symbolizes pride,
              loyalty, magic, and ambition. This color, along with others,
              serves to remind users of the significance of the crown they wear
              atop their heads and encourages them to embrace it proudly.{" "}
            </p>
          </div>
          <div className="flex justify-center items-center w-full h-screen relative">
            <Image
              src={styleguide}
              className="object-contain"
              alt="image of style guide"
            />
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-light-purple text-4xl ${myFont.className}`}>
              High Fidelity Screens
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              After finalizing the ideation phase and making progress in the
              design phase, I start creating high-fidelity screens for NaturalU.
            </p>
          </div>

          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(highFidelityImages)} />
          ) : (
            <Slider sliderData={createImageArray(highFidelityImages)} />
          )}

          <div className="flex flex-col gap-y-4">
            <Title title={"What's Next"} color="text-light-purple" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              {`In the next phases of this project, I aim to enhance the designs
              within the hair discovery pages to make them more interactive.
              Additionally, I'm considering incorporating gamification features
              to encourage users to explore and learn about different hair
              types. Overall, I'm proud of the progress I've made so far in
              bringing this app to life. My ultimate goal is to ensure that
              everyone feels proud of the crowns they wear atop their heads.`}
            </p>
          </div>
          <CaseStudyFooter casestudy="NaturalU" />
        </main>
      )}
      {showContent && <Footer />}
    </div>
  );
}
