import { useState, useEffect } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import MobileNav from "@/components/mobile-nav";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Title from "@/components/title";
import Slider from "@/components/slider";
import MobileSlider from "@/components/mobile-slider";
import Footer from "@/components/footer";
import Image from "next/image";
import CaseStudyFooter from "@/components/case-study-footer";
import {
  myFont,
  darkerGrotesque,
  createImageArray,
  darkerGrotesqueBold,
  zoomImage,
} from "@/utils";

//images
import heroImg from "../../../assets/capstone/modernattire/modern_attire_hero.svg";
import indochino from "../../../assets/capstone/modernattire/industry analysis/indochino.png";
import joseABank from "../../../assets/capstone/modernattire/industry analysis/jos-a-bank.png";
import mensWarehouse from "../../../assets/capstone/modernattire/industry analysis/mens-warehouse.png";
import survey_1 from "../../../assets/capstone/modernattire/survey/survey_1.png";
import survey_2 from "../../../assets/capstone/modernattire/survey/survey_2.png";
import survey_3 from "../../../assets/capstone/modernattire/survey/survey_3.png";
import survey_4 from "../../../assets/capstone/modernattire/survey/survey_4.png";
import persona1 from "../../../assets/capstone/modernattire/persona/persona_v1.png";
import persona2 from "../../../assets/capstone/modernattire/persona/persona_v2.png";
import sketch1 from "../../../assets/capstone/modernattire/sketches/sketch_1.png";
import sketch2 from "../../../assets/capstone/modernattire/sketches/sketch_2.png";
import userFlow from "../../../assets/capstone/modernattire/survey/userflow.png";
import styleguide_1 from "../../../assets/capstone/modernattire/styleguide/styleguide_1.png";
import styleguide_2 from "../../../assets/capstone/modernattire/styleguide/styleguide_2.png";
import styleguide_3 from "../../../assets/capstone/modernattire/styleguide/styleguide_3.png";
import styleguide_4 from "../../../assets/capstone/modernattire/styleguide/styleguide_4.png";
import test1 from "../../../assets/capstone/modernattire/test/test_1.png";
import test2 from "../../../assets/capstone/modernattire/test/test_2.png";
import test3 from "../../../assets/capstone/modernattire/test/test_3.png";
import test4 from "../../../assets/capstone/modernattire/test/test_4.png";
import ImageRow from "@/components/image-row";

const industryAnalysis = [indochino, joseABank, mensWarehouse];
const surveyImages = [survey_1, survey_2, survey_3, survey_4];
const personaImages = [persona1, persona2];
const sketchImages = [sketch1, sketch2];
const testImages = [test1, test2, test3, test4];
const styleguideImages = [
  styleguide_1,
  styleguide_2,
  styleguide_3,
  styleguide_4,
];

export default function ModernAttire() {
  const { width } = useWindowSize();
  const [showContent, setShowContent] = useState(true);
  const [zoomedIndex, setZoomedIndex] = useState(false);
  const [zoomedPersonaIndex, setZoomedPersonaIndex] = useState(false);

  const [zoomable, setZoomable] = useState(false);

  useEffect(() => {
    if (showContent) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, []);

  const updateContent = (state) => {
    setShowContent(state);
  };
  const handleClick = (index, persona) => {
    if (persona) {
      setZoomedPersonaIndex(zoomedPersonaIndex === index ? null : index);
    } else {
      setZoomedIndex(zoomedIndex === index ? null : index);
    }
  };
  const handleZoom = () => {
    setZoomable((prev) => !prev);
  };

  return (
    <div>
      {width <= 767 ? <MobileNav updateContent={updateContent} /> : <Navbar />}
      {showContent && <Hero image={heroImg} />}
      {showContent && (
        <main className="mx-auto w-80% flex flex-col gap-y-20 mt-16 mb-48">
          <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-16 ">
            <div className="flex flex-col gap-y-8 flex-1">
              <p className={` text-modern-attire text-4xl ${myFont.className}`}>
                Problem
              </p>
              <p className={` text-2xl ${darkerGrotesque.className}`}>
                {` This project was completed as part of the UI/UX Design learning platform at Springboard.
                 Modern Attire's mobile-web shopping experience needs better usability
                 and higher conversion rates. `}{" "}
                Analytics show that{" "}
                <span
                  className={`text-modern-attire  ${darkerGrotesqueBold.className}`}
                >
                  50% of users
                </span>{" "}
                view 7 item pages but{" "}
                <span
                  className={`text-modern-attire  ${darkerGrotesqueBold.className}`}
                >
                  leave before adding items to the cart
                </span>
                . Additionally,{" "}
                <span
                  className={`text-modern-attire  ${darkerGrotesqueBold.className}`}
                >
                  70%
                </span>{" "}
                of those who add items{" "}
                <span
                  className={`text-modern-attire  ${darkerGrotesqueBold.className}`}
                >
                  abandon at the registration page.
                </span>{" "}
                The goal is to redesign the site to boost the checkout
                completion rate.
              </p>
            </div>
            <div className="flex flex-col gap-y-8 flex-1">
              <p className={`text-modern-attire  text-5xl ${myFont.className}`}>
                Solution
              </p>
              <p className={` text-2xl ${darkerGrotesque.className}`}>
                {`To tackle the customer retention challenges in the suit shopping
                experience, `}{" "}
                <span
                  className={`text-modern-attire  ${darkerGrotesqueBold.className}`}
                >
                  I focused on optimizing key features
                </span>{" "}
                like enabling guest
                {`checkout, enhancing customization tools for gathering
                measurements and integrating review viewing options.`}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-10 md:flex-row md:gap-x-40">
            <div className="flex flex-col gap-y-2 md:gap-y-4">
              <p className={`text-modern-attire text-4xl ${myFont.className}`}>
                My Role
              </p>
              <ul className="list-disc list-inside">
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  UX Design
                </li>
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  UX Research
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <p className={`text-modern-attire text-4xl ${myFont.className}`}>
                Timeline
              </p>
              <ul className="list-disc list-inside">
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  1 month
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <p className={`text-modern-attire text-4xl ${myFont.className}`}>
                Tools
              </p>
              <ul className="list-disc list-inside">
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  Pencil and Paper
                </li>
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  Figma
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <Title title={"Research"} color="text-modern-attire" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              Before initiating the ideation and design phases, I conducted a
              competitive analysis to research leading companies in the
              e-commerce sector. Following this, I conducted user interviews and
              surveys to gather insights, from which I developed a persona based
              on my findings.
            </p>
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-modern-attire text-4xl ${myFont.className}`}>
              Competitive Analysis
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              Conducted a competitive analysis to gain insights into market
              trends, identify key competitors, and understand their strategies
              to inform business decisions
            </p>
          </div>
          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(industryAnalysis)} />
          ) : (
            <Slider sliderData={createImageArray(industryAnalysis)} />
          )}
          <div className="flex flex-col gap-y-8">
            <p className={`text-modern-attire text-4xl ${myFont.className}`}>
              User Surveys
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              {`To gain insight into the consumer's perspective on the suit buying
              experience, I conducted a survey with tailored questions focusing
              on online shopping.`}
            </p>
          </div>
          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(surveyImages)} />
          ) : (
            <Slider
              sliderData={createImageArray(surveyImages)}
              zoomable={false}
            />
          )}
          <div className="flex flex-col gap-y-8">
            <p className={`text-modern-attire text-4xl ${myFont.className}`}>
              User Interview
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              After completing the survey, I interviewed individuals who aligned
              with potential user profiles based on their survey responses.
              During these interviews, I posed the following questions:
            </p>
          </div>
          <div className="flex flex-col gap-y-10 md:flex-row md:gap-x-40">
            <div className="flex flex-col gap-y-4">
              <ul className="list-disc list-inside">
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  Is there any anxiety that you feel while shopping, why
                </li>
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  What are some differences between your online shopping
                  experience and in-person shopping experience
                </li>
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  Do you have different variations of suits for different events
                </li>
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  {
                    "Are there specific elements you look for in a suit (fabric, ability to buy ties, and shoes together)"
                  }
                </li>
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  What are some decisions that you make that decide whether you
                  are going to buy online vs. mobile
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <ul className="list-disc list-inside">
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  What are some common feelings you have about shopping{" "}
                </li>
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  What are the most important elements that seal the deal with
                  you when you shop online
                </li>
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  Since suits can range from various different prices would the
                  ability to pay in installments be beneficial
                </li>
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  What elements of customizing a suit are important to you
                </li>
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  {
                    "What elements within the checkout make it easier for you to finalize your purchase (ie saved card numbers etc )"
                  }
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-modern-attire text-4xl ${myFont.className}`}>
              Persona
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              {`To better understand my users' needs, desires, and motivations, I
              developed this persona to empathize with their requirements.`}
            </p>
          </div>
          <ImageRow images={personaImages} />
          <div className="flex flex-col gap-y-4">
            <Title title={"Ideate"} color="text-modern-attire" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              After completing the research phases, I moved on to brainstorming
              and developing a solution for the identified problem. I began by
              using techniques like preliminary sketching and user flow to
              visualize different solutions before settling on a final idea.
            </p>
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-modern-attire text-4xl ${myFont.className}`}>
              Sketches
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              After completing the research phase, I dedicated time to sketching
              out ideas and flows for the Modern Attire app.
            </p>
          </div>
          <ImageRow images={sketchImages} />
          <div className="flex flex-col gap-y-8">
            <p className={`text-modern-attire text-4xl ${myFont.className}`}>
              User Flow
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              Combining all the information gathered during both the research
              and ideation phases, I proceeded to create user flows to visualize
              how users would navigate through specific processes.
            </p>
          </div>
          <div
            className="flex justify-center items-center w-full h-96 relative"
            onClick={handleZoom}
          >
            <Image
              src={userFlow}
              className="object-contain md:h-[30rem]"
              alt="image of user flow"
              style={zoomable ? zoomImage(true, true) : {}}
            />
          </div>

          <Title title={"Design"} color="text-modern-attire" />
          <div className="flex flex-col gap-y-8">
            <p className={`text-modern-attire text-4xl ${myFont.className}`}>
              Wireframes
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              I began creating and developing visual components based on my
              initial sketches during this stage. I start by designing
              wireframes, building a style guide, and producing high-fidelity
              screens.
            </p>
          </div>
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1);" }}
            className="w-full h-[40rem]"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FLBDrDV8l9fPYI4KqnmkZ9U%2FModern-Attire%3Fpage-id%3D32%253A608%26type%3Ddesign%26node-id%3D90-36%26viewport%3D302%252C232%252C0.06%26t%3DpkVg8I9WhDA1WT0S-1%26scaling%3Dscale-down%26starting-point-node-id%3D90%253A36%26mode%3Ddesign"
            allowfullscreen
          ></iframe>
          <div className="flex flex-col gap-y-8">
            <p className={`text-modern-attire text-4xl ${myFont.className}`}>
              Style guide
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              To lay the groundwork for the Modern Attire app, I delve into the
              significance of different colors and create UI components to build
              the style guide, which will guide its design.
            </p>
            {width <= 767 ? (
              <MobileSlider sliderData={createImageArray(styleguideImages)} />
            ) : (
              <Slider sliderData={createImageArray(styleguideImages)} />
            )}
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-modern-attire text-4xl ${myFont.className}`}>
              High Fidelity Screens
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              After finishing the ideation process and finalizing certain
              elements within the design phase, I created my high-fidelity
              screens.
            </p>
          </div>
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1);" }}
            className="w-full h-[40rem]"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FLBDrDV8l9fPYI4KqnmkZ9U%2FModern-Attire%3Fpage-id%3D131%253A34%26type%3Ddesign%26node-id%3D380-4886%26viewport%3D-953%252C612%252C0.04%26t%3DEyvUiHReRDI86CTk-1%26scaling%3Dscale-down%26starting-point-node-id%3D380%253A4886%26show-proto-sidebar%3D1%26mode%3Ddesign"
            allowfullscreen
          ></iframe>
          <div className="flex flex-col gap-y-4">
            <Title title={"Test"} color="text-modern-attire" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              During this phase, I conducted usability tests with various users
              to collect insights and gain an external perspective on how my
              design is perceived by others
            </p>
          </div>
          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(testImages)} />
          ) : (
            <Slider sliderData={createImageArray(testImages)} />
          )}
          <div className="flex flex-col gap-y-8">
            <p className={`text-modern-attire text-4xl ${myFont.className}`}>
              {`What's Next`}
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              In future iterations of this project, my goal is to introduce new
              features such as a sizing guide, suit profiles, and the
              incorporation of a gamification element to incentivize users to
              earn rewards. These additions will be tested to assess user
              reactions and ensure alignment with their needs.
            </p>
          </div>
          <CaseStudyFooter casestudy="Modern Attire" />
        </main>
      )}
      {showContent && <Footer />}
    </div>
  );
}
