import useWindowSize from "@/hooks/useWindowSize";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Navbar from "@/components/navbar";
import MobileNav from "@/components/mobile-nav";
import { myFont, darkerGrotesque, darkerGrotesqueBold } from "@/utils";
import Hero from "@/components/hero";

//images
import uiComponentHero from "../../assets/capstone/ui-component/ui-component-banner.svg";

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
        <title>Design System Case Study</title>
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
            className={`flex justify-center text-center text-design-system ${myFont.className} text-6xl`}
          >
            Bridging Design & Code: React, Storybook & TailwindCSS
          </h1>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h2
              className={`text-design-system text-3xl md:text-3xl ${myFont.className}`}
            >
              Building Blocks for Digital Experiences
            </h2>
            <p className={`text-2xl ${darkerGrotesque.className}`}>
              In college, I created this tutorial to demonstrate how modern
              frontend architecture enables{" "}
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                scalable UI development
              </span>{" "}
              . By combining{" "}
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                React
              </span>
              ,
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                TailwindCSS
              </span>
              , and{" "}
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                Storybook
              </span>
              , I showed how to build a
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                {" "}
                component library
              </span>{" "}
              that serves as the foundation for
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                consistent user interfaces
              </span>{" "}
              and ultimately a functional profile page.
            </p>
          </div>

          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h2 className={`text-design-system text-3xl ${myFont.className}`}>
              Educational Purpose & Audience
            </h2>
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              This tutorial guided fellow computer science students through{" "}
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                component-based architecture
              </span>{" "}
              principles. Starting with fundamental concepts, I aimed to show
              how{" "}
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                isolated UI elements
              </span>{" "}
              could be systematically developed, documented, and later assembled
              into a
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                {" "}
                cohesive profile page
              </span>{" "}
              while maintaining design consistency.
            </div>
          </div>

          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h2 className={`text-design-system text-3xl ${myFont.className}`}>
              Technical Foundation
            </h2>
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              The first step in our journey was establishing a solid{" "}
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                technical foundation
              </span>
              . I set up a project integrating{" "}
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                React
              </span>{" "}
              for component architecture,
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                TailwindCSS
              </span>{" "}
              for efficient styling, and
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                {" "}
                Storybook
              </span>{" "}
              for isolated development and documentation, creating an
              environment where we could
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                {" "}
                build and test components
              </span>{" "}
              independently before combining them.
            </div>
            {/* <ZoomableImage image={technicalSetup} /> */}
          </div>

          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h2 className={`text-design-system text-3xl ${myFont.className}`}>
              Component Development Journey
            </h2>
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              With our foundation in place, we began creating the essential
              building blocks:{" "}
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                buttons
              </span>{" "}
              for user actions,
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                {" "}
                cards
              </span>{" "}
              for content containers,{" "}
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                avatars
              </span>{" "}
              for user identification, and
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                {" "}
                hero sections
              </span>{" "}
              for visual impact. Each component was designed with
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                {" "}
                reusability
              </span>{" "}
              in mind, with proper props for customization and complete
              documentation in Storybook.
            </div>
            {/* <ImageRow images={componentExamples} /> */}
          </div>

          <div
            className={`flex flex-col gap-y-8 md:mx-auto md:w-3/4 text-2xl ${darkerGrotesque.className}`}
          >
            <h2 className={`text-design-system text-3xl ${myFont.className}`}>
              Documentation with Storybook
            </h2>
            <p>
              As each component was built, we documented its variants and use
              cases in{" "}
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                Storybook
              </span>
              . This step was crucial, creating{" "}
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                living documentation
              </span>{" "}
              that served as both a{" "}
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                development environment
              </span>{" "}
              and{" "}
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                reference guide
              </span>
              , ensuring each component's purpose and capabilities were clear
              before integration.
            </p>
            {/* <ZoomableImage image={storybookDocumentation} /> */}
          </div>

          <div
            className={`flex flex-col gap-y-8 md:mx-auto md:w-3/4 text-2xl ${darkerGrotesque.className}`}
          >
            <h2 className={`text-design-system text-3xl ${myFont.className}`}>
              From Components to Interfaces
            </h2>
            <p>
              The final step demonstrated how our{" "}
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                isolated components
              </span>{" "}
              could be assembled into a functional{" "}
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                profile page
              </span>
              . By leveraging our{" "}
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                component library
              </span>{" "}
              and adding an{" "}
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                API call
              </span>{" "}
              to fetch user data, we transformed individual UI elements into a{" "}
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                cohesive interface
              </span>
              , showing the power of component-driven development in creating
              maintainable, consistent user experiences.
            </p>
            {/* <ZoomableImage image={profilePage} /> */}
          </div>

          <div
            className={`flex flex-col gap-y-8 md:mx-auto md:w-3/4 text-2xl ${darkerGrotesque.className}`}
          >
            <h2 className={`text-design-system text-3xl ${myFont.className}`}>
              Professional Application
            </h2>
            <p>
              What began as an{" "}
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                educational project
              </span>{" "}
              reflects professional principles I've since applied in my career.
              This{" "}
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                component-driven approach
              </span>{" "}
              is fundamental to{" "}
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                UX Engineering
              </span>
              , where bridging{" "}
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                design systems
              </span>{" "}
              and{" "}
              <span
                className={`text-design-system ${darkerGrotesqueBold.className}`}
              >
                implementation
              </span>{" "}
              is crucial for creating cohesive user experiences that scale
              across products and platforms.
            </p>
          </div>
        </main>
      )}
    </>
  );
}
