import { useState, useRef } from "react";
import Navbar from "@/components/navbar";
import MobileSlider from "@/components/mobile-slider";
import Slider from "@/components/slider";
import MobileNav from "@/components/mobile-nav";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Title from "@/components/title";
import CaseStudyFooter from "@/components/case-study-footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AutoScrollNavigator from "@/components/auto-scoll-navigator";

import {
  faBookBookmark,
  faLightbulb,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  myFont,
  darkerGrotesque,
  createImageArray,
  darkerGrotesqueBold,
} from "@/utils";
import useWindowSize from "@/hooks/useWindowSize";

import testWiseHero from "../../../assets/capstone/testwise/test-wise-hero.svg";
import airtable from "../../../assets/capstone/testwise/research/AirTable Table.png";
import asana from "../../../assets/capstone/testwise/research/Asana Table.png";
import azure from "../../../assets/capstone/testwise/research/Azure Table.png";
import jira from "../../../assets/capstone/testwise/research/Jira Table.png";
import wireframe_1 from "../../../assets/capstone/testwise/wireframes/wireframe-1.png";
import wireframe_2 from "../../../assets/capstone/testwise/wireframes/wireframe-2.png";
import wireframe_3 from "../../../assets/capstone/testwise/wireframes/wireframe-3.png";
import wireframe_4 from "../../../assets/capstone/testwise/wireframes/wireframe-4.png";
import wireframe_5 from "../../../assets/capstone/testwise/wireframes/wireframe-5.png";
import wireframe_6 from "../../../assets/capstone/testwise/wireframes/wireframe-6.png";
import wireframe_7 from "../../../assets/capstone/testwise/wireframes/wireframe-7.png";
import wireframe_8 from "../../../assets/capstone/testwise/wireframes/wireframe-8.png";
import wireframe_9 from "../../../assets/capstone/testwise/wireframes/wireframe-9.png";
import wireframe_10 from "../../../assets/capstone/testwise/wireframes/wireframe-10.png";
import dashboard from "../../../assets/capstone/testwise/high-fidelity/Dashboard.png";
import kanban from "../../../assets/capstone/testwise/high-fidelity/Kanban board.png";
import newRequirement from "../../../assets/capstone/testwise/high-fidelity/New Requirement.png";
import requirementDetails from "../../../assets/capstone/testwise/high-fidelity/Requirement Details.png";
import requirementDetailsOne from "../../../assets/capstone/testwise/high-fidelity/Requirement Details-1.png";
import requirementOne from "../../../assets/capstone/testwise/high-fidelity/Requirements-1.png";
import ImageViewer from "@/components/image-viewer";

export default function TestWise() {
  const { width } = useWindowSize();
  const [showContent, setShowContent] = useState(true);
  const caseStudyRef = useRef(null);

  const updateContent = (state) => {
    setShowContent(state);
  };

  const competitive = [airtable, asana, azure, jira];
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
    wireframe_10,
  ];
  const highFidelity = [
    dashboard,
    kanban,
    newRequirement,
    requirementDetails,
    requirementDetailsOne,
    requirementOne,
  ];

  const steps = [
    { name: "Research", id: "research" },
    { name: "Ideate", id: "ideate" },
    { name: "Design", id: "design" },
  ];

  const handleArrowClick = () => {
    const offset = -100;
    const elementPosition =
      caseStudyRef.current.getBoundingClientRect().top + window.scrollY;
    const targetPosition = elementPosition + offset;

    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };

  return (
    <div>
      {width <= 767 ? <MobileNav updateContent={updateContent} /> : <Navbar />}
      {showContent && (
        <Hero
          image={testWiseHero}
          width={width}
          color={"#1F3F70"}
          arrowClick={handleArrowClick}
        />
      )}
      {showContent && (
        <main
          className="mx-auto w-80% flex flex-col gap-y-20 mt-16 mb-48"
          ref={caseStudyRef}
        >
          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(highFidelity)} />
          ) : (
            <Slider sliderData={createImageArray(highFidelity)} />
          )}
          <div className="flex flex-col gap-y-8 flex-1 md:mx-auto md:w-3/4">
            <p className={` text-testwise-blue text-4xl ${myFont.className}`}>
              Problem Statement
            </p>
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <p>
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Test Wise
                </span>
                , an enterprise cloud platform by{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  KDIT Solutions
                </span>
                , streamlines workflows for{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  ERP/CRM systems
                </span>{" "}
                like{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  IBM Maximo, SAP, and Microsoft Dynamics
                </span>
                . I collaborated with two{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Springboard UX Bootcamp designers
                </span>{" "}
                to create a{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  requirements dashboard
                </span>
                , improving{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  task clarity
                </span>
                , accelerating{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  completion
                </span>
                , and enhancing{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  stakeholder collaboration
                </span>
                . (Note:{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Test Wise
                </span>{" "}
                is a pseudonym for IP protection.)
              </p>
            </div>
          </div>
          {width >= 767 && (
            <AutoScrollNavigator sections={steps} fontColor={"testwise-blue"} />
          )}
          <div className="flex flex-col gap-y-10 md:gap-x-40 md:mx-auto md:w-3/4">
            <div className="flex flex-col gap-y-2 md:gap-y-8">
              <p className={`text-testwise-blue text-4xl ${myFont.className}`}>
                My Role
              </p>
              <div className={` text-2xl ${darkerGrotesque.className}`}>
                In one month, I collaborated with two designers to enhance Test
                Wise by conducting UX research,wireframes, and creating
                high-fidelity screens in Figma.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-testwise-blue text-4xl ${myFont.className}`}>
              Meeting the Client
            </p>
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <p>
                I collaborated with two designers to help{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  KDIT Solutions
                </span>{" "}
                redesign their{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  requirements dashboard
                </span>
                . Pranjal, the president, emphasized the need for a{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  structured design approach
                </span>{" "}
                to address previous challenges.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-testwise-blue text-4xl ${myFont.className}`}>
              Design Process
            </p>
            <div className="flex flex-col gap-y-4 md:flex-row justify-evenly">
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faBookBookmark}
                  size="4x"
                  color="#1F3F70"
                />
                <div>
                  <p
                    className={` text-3xl text-testwise-blue mt-4 text-center  ${darkerGrotesqueBold.className}`}
                  >
                    Research
                  </p>
                  <p>Competitive Analysis</p>
                </div>
              </div>
              <div className="flex flex-col  items-center">
                <FontAwesomeIcon icon={faLightbulb} size="4x" color="#1F3F70" />
                <div>
                  <p
                    className={` text-3xl text-testwise-blue mt-4 text-center  ${darkerGrotesqueBold.className}`}
                  >
                    Ideate
                  </p>
                  <p>Wireframes</p>
                </div>
              </div>
              <div className="flex flex-col  items-center">
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  size="4x"
                  color="#1F3F70"
                />
                <div>
                  <p
                    className={` text-3xl text-testwise-blue mt-4 text-center ${darkerGrotesqueBold.className}`}
                  >
                    Design
                  </p>
                  <p>High Fidelity Screens</p>
                </div>
              </div>
            </div>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              To tackle the project, our team decided to start with research
              that included competitive analysis. We then moved on to ideation,
              creating wireframes, and finally concluded with high-fidelity
              frames and a small prototype.
            </p>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <Title
              title={"Research"}
              color="text-testwise-blue"
              id="research"
            />
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <p>
                Our team met with{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Pranjal
                </span>{" "}
                to outline key aspects of the{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Test Wise requirements dashboard
                </span>
                :{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  functionality
                </span>
                ,{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  agile workflow standards
                </span>
                , and{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  differentiation
                </span>
                . After researching{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  KDIT Solutions
                </span>
                , we held a second meeting to dive deeper into the module’s use.
                Drawing from my experience with similar{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  tools
                </span>
                , I contributed valuable insights.{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Pranjal
                </span>{" "}
                emphasized the importance of{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  simplicity
                </span>{" "}
                and{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  user customization
                </span>
                .
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-testwise-blue text-4xl ${myFont.className}`}>
              Competitive Analysis
            </p>
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <p>
                After meeting with{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Pranjal
                </span>{" "}
                to discuss the module’s role in{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Test Wise
                </span>
                , I led a{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  competitive analysis
                </span>{" "}
                of tools like{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Airtable
                </span>
                ,{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Jira
                </span>
                , and{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Azure DevOps
                </span>
                , identifying gaps and opportunities for differentiation.
                Leveraging my{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  software development background
                </span>
                , I highlighted how these platforms support{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Agile workflows
                </span>
                , aligning our solution with Pranjal’s vision and preparing for
                our next presentation.
              </p>
            </div>
          </div>
          <ImageViewer images={competitive} />

          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <Title title={"Ideate"} color="text-testwise-blue" id="ideate" />
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <p>
                After presenting our research,{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Pranjal
                </span>{" "}
                found our findings promising. Key feedback included:
              </p>
              <ul className="list-disc ml-12">
                <li>
                  Agreement on avoiding{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    Jira
                  </span>{" "}
                  and{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    Azure’s
                  </span>{" "}
                  complex UI.
                </li>
                <li>
                  Appreciation for{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    Asana’s simplicity
                  </span>{" "}
                  and{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    customizable features
                  </span>
                  .
                </li>
                <li>
                  Emphasis on the importance of{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    issue tracking
                  </span>
                  , aligning with client goals.
                </li>
              </ul>
              <br />
              <p>
                Using this feedback, we began{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  ideation
                </span>{" "}
                and created{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  low-fidelity wireframes
                </span>{" "}
                balancing customization with task-tracking needs.
              </p>
            </div>

            <div className="flex flex-col gap-y-8 ">
              <p className={`text-testwise-blue text-4xl ${myFont.className}`}>
                Low-fidelity Wireframes
              </p>
              <div className={`text-2xl ${darkerGrotesque.className}`}>
                <p>
                  After meeting with{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    Pranjal
                  </span>
                  , we clarified user needs, module goals, and expectations.
                  Using insights from our competitive analysis, we created{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    low-fidelity wireframes
                  </span>{" "}
                  to visualize key functionalities and simplify task tracking.
                </p>
                <br />
                <div>
                  <p>The features presented include:</p>
                  <ul className="list-disc ml-12">
                    <li>
                      <span
                        className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                      >
                        Kanban boards
                      </span>
                    </li>
                    <li>
                      <span
                        className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                      >
                        Customizable Dashboard
                      </span>
                    </li>
                    <li>
                      <span
                        className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                      >
                        Task status table
                      </span>
                    </li>
                    <li>
                      <span
                        className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                      >
                        Task detail pages
                      </span>
                    </li>
                    <li>
                      <span
                        className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                      >
                        New task creation
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(wireframes)} />
          ) : (
            <Slider sliderData={createImageArray(wireframes)} />
          )}
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <Title title={"Design"} color="text-testwise-blue" id="design" />
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <p>
                As we moved to{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  high-fidelity screens
                </span>
                , our focus was on clarity in{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  task tracking
                </span>
                . After presenting our wireframes to{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Pranjal
                </span>
                , he confirmed we were on track but suggested using a format
                similar to{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Jira’s Requirements and Test app
                </span>
                . This feedback emphasized industry standards and a
                straightforward user experience. We integrated this insight into
                our design to enhance usability and ensure easy progress
                tracking for clients.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-testwise-blue text-4xl ${myFont.className}`}>
              High Fidelity Prototype
            </p>
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <p>
                Our team developed{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  three solutions
                </span>{" "}
                to address the task tracking module. These designs incorporated{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  industry standards
                </span>{" "}
                and feedback from{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Pranjal
                </span>
                , including:
              </p>
              <ul className="list-disc ml-12">
                <li>
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    Table list view
                  </span>{" "}
                  for task tracking, inspired by the{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    Requirements and Task app
                  </span>
                  .
                </li>
                <li>
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    Customizable dashboard
                  </span>{" "}
                  for user-tailored experiences.
                </li>
                <li>
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    Intuitive UI
                  </span>{" "}
                  for improved usability.
                </li>
              </ul>
              <br />
              <p>
                Due to the{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  short timeline
                </span>
                , we couldn't validate the designs with users, but we validated
                them with{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Pranjal
                </span>
                , who selected one solution for its execution. The chosen design
                featured:
              </p>
              <ul className="list-disc ml-12">
                <li>
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    Accordion for sub-task navigation
                  </span>
                  .
                </li>
                <li>
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    Live chat
                  </span>{" "}
                  for team communication.
                </li>
                <li>
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    Project board and list views
                  </span>
                  .
                </li>
                <li>
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    Task details page
                  </span>{" "}
                  for detailed task info.
                </li>
                <li>
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    Customizable dashboard
                  </span>{" "}
                  with widget options.
                </li>
              </ul>
              <br />
              <div>
                <p>
                  This approach ensured alignment with{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    Pranjal’s vision
                  </span>{" "}
                  and{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    user needs
                  </span>
                  .
                </p>

                <a
                  className={`text-2xl hover:underline text-testwise-blue ${darkerGrotesqueBold.className} `}
                  href={
                    "https://www.figma.com/design/pODnwNo9vwRSEJSnxqJhdk/requirement-dash-(case-study)?node-id=88-3321&t=3wMJlIncDNZksy4C-1"
                  }
                  target="_blank"
                >
                  The other two alternate solutions
                </a>
              </div>
            </div>
          </div>
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1);" }}
            className="w-full h-[40rem]"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FpODnwNo9vwRSEJSnxqJhdk%2Frequirement-dash-(case-study)%3Fpage-id%3D0%253A1%26node-id%3D42-1567%26viewport%3D-1206%252C-796%252C0.34%26t%3Di3WmacbvZgTFEXac-1%26scaling%3Dscale-down%26starting-point-node-id%3D42%253A1567"
            allowfullscreen
          ></iframe>
          <div className="flex flex-col gap-y-8 md:w-3/4 md:mx-auto">
            <p className={`text-testwise-blue text-4xl ${myFont.className}`}>
              Crossing the finish line
            </p>
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <p>
                After presenting our final screens and prototype,{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Pranjal
                </span>{" "}
                responded{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  positively
                </span>{" "}
                and confirmed that our designs would serve as the{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  foundation
                </span>{" "}
                for the module. His team plans to{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  build
                </span>{" "}
                on it and begin{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  development
                </span>
                . Our team was{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  proud
                </span>{" "}
                to make a significant{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  impact
                </span>{" "}
                with our first{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  real-world client
                </span>
                .
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 md:w-3/4 md:mx-auto">
            <Title title={"Project takeways"} color="text-testwise-blue" />
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              <p>
                My main takeaway from this project is{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  pride
                </span>{" "}
                in both what I accomplished and how I worked with my team. I
                showcased my{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  UX research
                </span>{" "}
                skills, along with strong{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  communication
                </span>
                ,{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  leadership
                </span>{" "}
                , and{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  collaboration
                </span>{" "}
                , especially in contributing to{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  UI designs
                </span>
                . Key takeaways include:
              </p>
              <ul className="list-disc ml-12">
                <li>
                  Our client was pleased with the{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    dynamic task display
                  </span>{" "}
                  and use of{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    horizontal scroll
                  </span>
                  .
                </li>
                <li>
                  Due to{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    time constraints
                  </span>
                  , we couldn’t conduct{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    testing
                  </span>
                  , which should be prioritized in the future.
                </li>
                <li>
                  Despite the{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    time difference
                  </span>{" "}
                  and the client being in{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    Canada
                  </span>
                  , our team maintained{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    effective communication
                  </span>
                  , providing weekly updates.
                </li>
                <li>
                  This experience taught me how to work with{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    real-world clients
                  </span>
                  , apply my{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    technical knowledge
                  </span>{" "}
                  to UX research, and collaborate with a diverse team of
                  designers.
                </li>
              </ul>
            </div>
          </div>
          <CaseStudyFooter casestudy="Test Wise" />
        </main>
      )}
      {showContent && <Footer />}
    </div>
  );
}
