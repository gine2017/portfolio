import { useState } from "react";
import Navbar from "@/components/navbar";
import MobileSlider from "@/components/mobile-slider";
import Slider from "@/components/slider";
import MobileNav from "@/components/mobile-nav";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Title from "@/components/title";
import CaseStudyFooter from "@/components/case-study-footer";
import {
  myFont,
  darkerGrotesque,
  createImageArray,
  darkerGrotesqueBold,
} from "@/utils";
import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";

// images
import testWiseHero from "../../../assets/capstone/testwise/test-wise-hero.svg";
import regine from "../../../assets/capstone/testwise/regine.png";
import jess from "../../../assets/capstone/testwise/jess.png";
import aran from "../../../assets/capstone/testwise/aran.png";
import airtable from "../../../assets/capstone/testwise/research/airtable.png";
import asana from "../../../assets/capstone/testwise/research/asana.png";
import azure from "../../../assets/capstone/testwise/research/azure.png";
import jira from "../../../assets/capstone/testwise/research/jira.png";
import persona1 from "../../../assets/capstone/testwise/persona/persona-1.png";
import persona2 from "../../../assets/capstone/testwise/persona/persona-2.png";
import wireframe_1 from "../../../assets/capstone/testwise/wireframes/wireframe-1.png";
import wireframe_2 from "../../../assets/capstone/testwise/wireframes/wireframe-2.png";
import wireframe_3 from "../../../assets/capstone/testwise/wireframes/wireframe-3.png";
import wireframe_4 from "../../../assets/capstone/testwise/wireframes/wireframe-4.png";
import wireframe_5 from "../../../assets/capstone/testwise/wireframes/wireframe-5.png";
import wireframe_6 from "../../../assets/capstone/testwise/wireframes/wireframe-6.png";
import wireframe_7 from "../../../assets/capstone/testwise/wireframes/wireframe-7.png";
import wireframe_8 from "../../../assets/capstone/testwise/wireframes/wireframe-8.png";
import wireframe_9 from "../../../assets/capstone/testwise/wireframes/wireframe-9.png";

export default function TestWise() {
  const { width } = useWindowSize();
  const [showContent, setShowContent] = useState(true);

  const updateContent = (state) => {
    setShowContent(state);
  };
  const competitive = [airtable, asana, azure, jira];
  const persona = [persona1, persona2];
  const wireframes = [
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

  return (
    <div>
      {width <= 767 ? <MobileNav updateContent={updateContent} /> : <Navbar />}
      {showContent && <Hero image={testWiseHero} />}
      {showContent && (
        <main className="mx-auto w-80% flex flex-col gap-y-16 mt-16 mb-48">
          <div className="flex flex-col gap-y-8 flex-1">
            <p className={` text-testwise-blue text-4xl ${myFont.className}`}>
              Problem Statement
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              As client numbers grow and tasks become more complex,{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                accurate analysis and task tracing
              </span>{" "}
              are essential for viewing task status, managing features, and
              coordinating with team members. Test Wise, project tracking and
              testing platform , addresses these needs for all teams.{" "}
              <span
                className={`text-testwise-blue   ${darkerGrotesqueBold.className}`}
              >
                {`To protect intellectual property, "Test Wise" is used as a
                pseudonym`}
              </span>
              . This new requirements module within this product will enhance
              client capabilities in managing tasks, requiremnts, and issues .
            </p>
          </div>
          <div className="flex flex-col gap-y-10 md:flex-row md:gap-x-40">
            <div className="flex flex-col gap-y-2 md:gap-y-4">
              <p className={`text-testwise-blue  text-4xl ${myFont.className}`}>
                My Role
              </p>
              <ul className="list-disc">
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  UX Design: High-Fidelity screens, Wireframes
                </li>
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  UX Research: Competitive analysis, User Personas
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <p className={`text-testwise-blue  text-4xl ${myFont.className}`}>
                Timeline
              </p>
              <ul className="list-disc">
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  1 month
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <p className={`text-testwise-blue  text-4xl ${myFont.className}`}>
                Tools
              </p>
              <ul className="list-disc">
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  Figma
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-testwise-blue text-4xl ${myFont.className}`}>
              Meet the Team
            </p>
            <div className="flex flex-col">
              <div className="flex justify-evenly">
                <div className="flex flex-col w-1/4 items-center">
                  <Image src={jess} className="object-contain" />
                  <p
                    className={` text-2xl text-testwise-blue mt-4 ${darkerGrotesqueBold.className}`}
                  >
                    Jessica Teng
                  </p>
                </div>
                <div className="flex flex-col w-1/4 items-center">
                  <Image src={aran} className="object-contain" />
                  <p
                    className={` text-2xl text-testwise-blue mt-4 ${darkerGrotesqueBold.className}`}
                  >
                    Aran Kim
                  </p>
                </div>
                <div className="flex flex-col w-1/4 items-center">
                  <Image src={regine} className="object-contain" />
                  <p
                    className={` text-2xl text-testwise-blue mt-4 ${darkerGrotesqueBold.className}`}
                  >
                    Regine Thimothee
                  </p>
                </div>
              </div>
              <p className={` text-2xl mt-4 ${darkerGrotesque.className}`}>
                Aran, Jessica, and I began the project by meeting with Pranjal,
                the president of KDIT Solutions. Pranjal shared his experiences
                and the difficulties he encountered when creating the
                requirement dashboard module for the first time. He expressed a
                desire to restart the design process for the module.
              </p>
            </div>
            <div className="flex flex-col gap-y-8">
              <p className={`text-testwise-blue text-4xl ${myFont.className}`}>
                Design Process
              </p>
              <p className={` text-2xl ${darkerGrotesque.className}`}>
                To tackle the project, our team decided to start with research,
                including competitive analysis and persona development. We then
                moved on to ideation, creating wireframes, and finally concluded
                with high-fidelity frames and a small prototype.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <Title title={"Research"} color="text-testwise-blue" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              Before beginning the ideation process, our team met with Pranjal
              to discuss in depth how the requirements dashboard would function
              within Test Wise, the standards of the agile workflow, and the
              intricacies that would set our requirements dashboard apart from
              others.
            </p>
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-testwise-blue text-4xl ${myFont.className}`}>
              Competitive Analysis
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              Our group conducted a competitive analysis to gain insights into
              industry standards, understand key competitors, and identify ways
              to differentiate our requirements dashboard from other platforms.
            </p>
          </div>
          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(competitive)} />
          ) : (
            <Slider sliderData={createImageArray(competitive)} />
          )}
          <div className="flex flex-col gap-y-8">
            <p className={`text-testwise-blue text-4xl ${myFont.className}`}>
              Persona
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              {`To better understand the needs of Test Wise users, our team 
              developed a persona to highlight their goals and pain points.`}
            </p>
          </div>
          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(persona)} />
          ) : (
            <Slider sliderData={createImageArray(persona)} />
          )}
          <div className="flex flex-col gap-y-4">
            <Title title={"Ideate"} color="text-testwise-blue" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              Upon completing the competitive analysis and creating the persona,
              our group reconvened with our client to ensure we had a mutual
              understanding of the strategic elements that should differ from
              competitors. Then, we began creating various low-fidelity
              wireframes to ideate different solutions.
            </p>
          </div>
          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(wireframes)} />
          ) : (
            <Slider sliderData={createImageArray(wireframes)} />
          )}
          <div className="flex flex-col gap-y-4">
            <Title title={"Design"} color="text-testwise-blue" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              {`After completing the low-fidelity wireframes, our client
              emphasized having a format similar to the Requirements and Test
              app for Jira. Taking this feedback, our team developed several
              solutions, ultimately creating one that was both innovative and
              aligned with the client's vision.`}
            </p>
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-testwise-blue text-4xl ${myFont.className}`}>
              High Fidelity Prototype
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              Our team developed several solutions for the requirements
              dashboard, and our client found one particularly innovative. For
              the high-fidelity prototype, we focused on creating a solution
              inspired by the RTM app for Jira. In this solution, we introduced
              features such as:
            </p>
            <ul className="list-disc">
              <li className={` text-2xl ${darkerGrotesque.className}`}>
                Accordion feature for requirements to horizontally scroll
                through sub-tasks
              </li>
              <li className={` text-2xl ${darkerGrotesque.className}`}>
                Live chat functionality for team communication
              </li>
              <li className={` text-2xl ${darkerGrotesque.className}`}>
                Project board and list view options
              </li>
              <li className={` text-2xl ${darkerGrotesque.className}`}>
                Task details page
              </li>
            </ul>
          </div>
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1);" }}
            className="w-full h-[40rem]"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FpODnwNo9vwRSEJSnxqJhdk%2Frequirement-dash-(case-study)%3Fpage-id%3D0%253A1%26node-id%3D42-1567%26viewport%3D-1206%252C-796%252C0.34%26t%3Di3WmacbvZgTFEXac-1%26scaling%3Dscale-down%26starting-point-node-id%3D42%253A1567"
            allowfullscreen
          ></iframe>
          <div className="flex flex-col gap-y-4">
            <Title title={"Project takeways"} color="text-testwise-blue" />
            <ul className="list-disc">
              <li className={` text-2xl ${darkerGrotesque.className}`}>
                Our client was pleased with our solution, particularly the
                dynamic display of tasks for specific requirements and the use
                of horizontal scroll to view all tasks.
              </li>
              <li className={` text-2xl ${darkerGrotesque.className}`}>
                {`Unfortunately, due to time constraints, we were unable to
                conduct any testing. In the future, it's best to allocate time
                for testing.`}
              </li>
              <li className={` text-2xl ${darkerGrotesque.className}`}>
                Despite the time difference and having a client in Canada, our
                group effectively communicated and ensured our client was
                updated weekly.
              </li>
              <li className={` text-2xl ${darkerGrotesque.className}`}>
                This experience was incredibly valuable, as I learned how to
                effectively work with real-world clients, apply my technical
                knowledge to UX research, and collaborate with a diverse group
                of designers.
              </li>
            </ul>
          </div>
          <CaseStudyFooter casestudy="Test Wise" />
        </main>
      )}
      {showContent && <Footer />}
    </div>
  );
}