import useWindowSize from "@/hooks/useWindowSize";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Navbar from "@/components/navbar";
import MobileNav from "@/components/mobile-nav";
import CaseStudyFooter from "@/components/case-study-footer";
import Footer from "@/components/footer";
import {
  darkerGrotesqueTitle,
  darkerGrotesque,
  interBold,
  createImageArray,
} from "@/utils";
import Hero from "@/components/hero";
import MobileSlider from "@/components/mobile-slider";
import Slider from "@/components/slider";
import ZoomableImage from "@/components/zoomable-image";

//images
import uiComponentHero from "../../assets/capstone/ui-component/ui-component-banner.svg";
import vidTutorial1 from "../../assets/capstone/ui-component/presentation/vidTutorial1.png";
import vidTutorial2 from "../../assets/capstone/ui-component/presentation/vidTutorial2.png";
import vidTutorial3 from "../../assets/capstone/ui-component/presentation/vidTutorial3.png";
import vidTutorial4 from "../../assets/capstone/ui-component/presentation/vidTutorial4.png";
import vidTutorial5 from "../../assets/capstone/ui-component/presentation/vidTutorial5.png";
import technicalSetup from "../../assets/capstone/ui-component/vscode.png";
import storybook1 from "../../assets/capstone/ui-component/storybook/storybook1.png";
import storybook2 from "../../assets/capstone/ui-component/storybook/storybook2.png";
import storybook3 from "../../assets/capstone/ui-component/storybook/storybook3.png";
import storybook4 from "../../assets/capstone/ui-component/storybook/storybook4.png";
import storybook5 from "../../assets/capstone/ui-component/storybook/storybook5.png";
import avatar from "../../assets/capstone/ui-component/implementation/avatar.png";
import button from "../../assets/capstone/ui-component/implementation/button.png";
import card from "../../assets/capstone/ui-component/implementation/card.png";
import hero from "../../assets/capstone/ui-component/implementation/hero.png";
import profilePage from "../../assets/capstone/ui-component/profile.png";

const vidImages = [
  vidTutorial1,
  vidTutorial2,
  vidTutorial3,
  vidTutorial4,
  vidTutorial5,
];

const storybookImages = [
  storybook1,
  storybook2,
  storybook3,
  storybook4,
  storybook5,
];

const implementationImages = [avatar, button, card, hero];

export default function DesignSystem() {
  const [showContent, setShowContent] = useState(true);
  const { width } = useWindowSize();
  const caseStudyRef = useRef(null);

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
        <title>Component Library Case Study</title>
      </Head>
      {width <= 767 ? <MobileNav updateContent={updateContent} /> : <Navbar />}
      {showContent && (
        <Hero
          image={uiComponentHero}
          width={width}
          color={"#0084D1"}
          arrowClick={handleArrowClick}
        />
      )}
      {showContent && (
        <main
          className="w-4/5 mx-auto flex flex-col gap-y-20 mt-16 mb-48"
          ref={caseStudyRef}
        >
          <h1
            className={`flex justify-center text-center text-component-library ${darkerGrotesqueTitle.className} text-6xl`}
          >
            Bridging Design & Code: React, Storybook & TailwindCSS
          </h1>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h2
              className={`text-component-library text-5xl md:text-3xl ${darkerGrotesqueTitle.className}`}
            >
              Building Blocks for Digital Experiences
            </h2>
            <p className={`text-2xl ${darkerGrotesque.className}`}>
              In college, I created this tutorial to demonstrate how modern
              frontend architecture enables{" "}
              <span className={`text-component-library ${interBold.className}`}>
                scalable UI development
              </span>{" "}
              . By combining{" "}
              <span className={`text-component-library ${interBold.className}`}>
                React
              </span>
              ,
              <span className={`text-component-library ${interBold.className}`}>
                TailwindCSS
              </span>
              , and{" "}
              <span className={`text-component-library ${interBold.className}`}>
                Storybook
              </span>
              , I showed how to build a
              <span className={`text-component-library ${interBold.className}`}>
                {" "}
                component library
              </span>{" "}
              that serves as the foundation for{" "}
              <span className={`text-component-library ${interBold.className}`}>
                consistent user interfaces
              </span>{" "}
              and ultimately a functional profile page.
            </p>
          </div>

          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h2
              className={`text-component-library text-5xl ${darkerGrotesqueTitle.className}`}
            >
              Educational Purpose & Audience
            </h2>
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              This tutorial guided fellow computer science students through{" "}
              <span className={`text-component-library ${interBold.className}`}>
                component-based architecture
              </span>{" "}
              principles. Starting with fundamental concepts, I aimed to show
              how{" "}
              <span className={`text-component-library ${interBold.className}`}>
                isolated UI elements
              </span>{" "}
              could be systematically developed, documented, and later assembled
              into a
              <span className={`text-component-library ${interBold.className}`}>
                {" "}
                cohesive profile page
              </span>{" "}
              while maintaining design consistency.
            </div>
            {width <= 767 ? (
              <MobileSlider sliderData={createImageArray(vidImages)} />
            ) : (
              <Slider sliderData={createImageArray(vidImages)} />
            )}
          </div>

          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h2
              className={`text-component-library text-5xl ${darkerGrotesqueTitle.className}`}
            >
              Technical Foundation
            </h2>
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              The first step in our journey was establishing a solid{" "}
              <span className={`text-component-library ${interBold.className}`}>
                technical foundation
              </span>
              . I set up a project integrating{" "}
              <span className={`text-component-library ${interBold.className}`}>
                React
              </span>{" "}
              for component architecture,
              <span className={`text-component-library ${interBold.className}`}>
                TailwindCSS
              </span>{" "}
              for efficient styling, and
              <span className={`text-component-library ${interBold.className}`}>
                {" "}
                Storybook
              </span>{" "}
              for isolated development and documentation, creating an
              environment where we could
              <span className={`text-component-library ${interBold.className}`}>
                {" "}
                build and test components
              </span>{" "}
              independently before combining them.
            </div>
            <ZoomableImage image={technicalSetup} />
          </div>

          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h2
              className={`text-component-library text-5xl ${darkerGrotesqueTitle.className}`}
            >
              Component Development Journey
            </h2>
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              With our foundation in place, we began creating the essential
              building blocks:{" "}
              <span className={`text-component-library ${interBold.className}`}>
                buttons
              </span>{" "}
              for user actions,
              <span className={`text-component-library ${interBold.className}`}>
                {" "}
                cards
              </span>{" "}
              for content containers,{" "}
              <span className={`text-component-library ${interBold.className}`}>
                avatars
              </span>{" "}
              for user identification, and
              <span className={`text-component-library ${interBold.className}`}>
                {" "}
                hero sections
              </span>{" "}
              for visual impact. Each component was designed with
              <span className={`text-component-library ${interBold.className}`}>
                {" "}
                reusability
              </span>{" "}
              in mind, with proper props for customization and complete
              documentation in Storybook.
            </div>
            {width <= 767 ? (
              <MobileSlider sliderData={createImageArray(storybookImages)} />
            ) : (
              <Slider sliderData={createImageArray(storybookImages)} />
            )}
          </div>

          <div
            className={`flex flex-col gap-y-8 md:mx-auto md:w-3/4 text-2xl ${darkerGrotesque.className}`}
          >
            <h2
              className={`text-component-library text-5xl ${darkerGrotesqueTitle.className}`}
            >
              Documentation with Storybook
            </h2>
            <p>
              As each component was built, we documented its variants and use
              cases in{" "}
              <span className={`text-component-library ${interBold.className}`}>
                Storybook
              </span>
              . This step was crucial, creating{" "}
              <span className={`text-component-library ${interBold.className}`}>
                living documentation
              </span>{" "}
              that served as both a{" "}
              <span className={`text-component-library ${interBold.className}`}>
                development environment
              </span>{" "}
              and{" "}
              <span className={`text-component-library ${interBold.className}`}>
                reference guide
              </span>
              {`, ensuring each component's purpose and capabilities were clear
              before integration.`}
            </p>
            {width <= 767 ? (
              <MobileSlider
                sliderData={createImageArray(implementationImages)}
              />
            ) : (
              <Slider sliderData={createImageArray(implementationImages)} />
            )}
          </div>

          <div
            className={`flex flex-col gap-y-8 md:mx-auto md:w-3/4 text-2xl ${darkerGrotesque.className}`}
          >
            <h2
              className={`text-component-library text-5xl ${darkerGrotesqueTitle.className}`}
            >
              From Components to Interfaces
            </h2>
            <p>
              The final step demonstrated how our{" "}
              <span className={`text-component-library ${interBold.className}`}>
                isolated components
              </span>{" "}
              could be assembled into a functional{" "}
              <span className={`text-component-library ${interBold.className}`}>
                profile page
              </span>
              . By leveraging our{" "}
              <span className={`text-component-library ${interBold.className}`}>
                component library
              </span>{" "}
              and adding an{" "}
              <a
                href="https://api.npoint.io/b7869167c6757876a385"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-component-library ${interBold.className} underline`}
              >
                API call
              </a>{" "}
              to fetch user data, we transformed individual UI elements into a{" "}
              <span className={`text-component-library ${interBold.className}`}>
                cohesive interface
              </span>
              , showing the power of component-driven development in creating
              maintainable, consistent user experiences.
            </p>
            <ZoomableImage image={profilePage} />
          </div>

          <div
            className={`flex flex-col gap-y-8 md:mx-auto md:w-3/4 text-2xl ${darkerGrotesque.className}`}
          >
            <h2
              className={`text-component-library text-5xl ${darkerGrotesqueTitle.className}`}
            >
              Professional Application
            </h2>
            <p>
              What began as an{" "}
              <span className={`text-component-library ${interBold.className}`}>
                educational project
              </span>{" "}
              {`reflects professional principles I've since applied in my career.`}
              This{" "}
              <span className={`text-component-library ${interBold.className}`}>
                component-driven approach
              </span>{" "}
              is fundamental to{" "}
              <span className={`text-component-library ${interBold.className}`}>
                UX Engineering
              </span>
              , where bridging{" "}
              <span className={`text-component-library ${interBold.className}`}>
                design
              </span>{" "}
              and{" "}
              <span className={`text-component-library ${interBold.className}`}>
                implementation
              </span>{" "}
              is crucial for creating cohesive user experiences that scale
              across products and platforms.
            </p>
            <div className="mt-4">
              <a
                href="https://github.com/gine2017/storybook-tutorial/tree/main/tutorial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-component-library text-white rounded-md hover:bg-opacity-90 transition-all"
              >
                <span className="mr-2">View the complete code on GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          <CaseStudyFooter casestudy="Component Library" />
        </main>
      )}
      {showContent && <Footer width={width} />}
    </>
  );
}
