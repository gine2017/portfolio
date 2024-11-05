import { useState } from "react";
import Navbar from "@/components/navbar";
import MobileSlider from "@/components/mobile-slider";
import Slider from "@/components/slider";
import MobileNav from "@/components/mobile-nav";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Title from "@/components/title";
import CaseStudyFooter from "@/components/case-study-footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
import wireframe_10 from "../../../assets/capstone/testwise/wireframes/wireframe-10.png";
import dashboard from "../../../assets/capstone/testwise/high-fidelity/Dashboard.png";
import kanban from "../../../assets/capstone/testwise/high-fidelity/Kanban board.png";
import newRequirement from "../../../assets/capstone/testwise/high-fidelity/New Requirement.png";
import requirementDetails from "../../../assets/capstone/testwise/high-fidelity/Requirement Details.png";
import requirementDetailsOne from "../../../assets/capstone/testwise/high-fidelity/Requirement Details-1.png";
import requirementOne from "../../../assets/capstone/testwise/high-fidelity/Requirements-1.png";
import Image from "next/image";
import ImageViewer from "@/components/image-viewer";
import ImageRow from "@/components/image-row";

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

  return (
    <div>
      {width <= 767 ? <MobileNav updateContent={updateContent} /> : <Navbar />}
      {showContent && <Hero image={testWiseHero} />}
      {showContent && (
        <main className="mx-auto w-80% flex flex-col gap-y-20 mt-16 mb-48 ">
          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(highFidelity)} />
          ) : (
            <Slider sliderData={createImageArray(highFidelity)} />
          )}
          <div className="flex flex-col gap-y-8 flex-1 md:mx-auto md:w-3/4">
            <p className={` text-testwise-blue text-4xl ${myFont.className}`}>
              Problem Statement
            </p>
            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <p>
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  Test Wise
                </span>{" "}
                is a project tracking and testing platform by{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  KDIT Solutions
                </span>
                . With a growing client base and increasingly complex tasks,
                they needed a solution for better task tracking and analysis. To
                meet this need, they aimed to build a task tracking module
                within{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  Test Wise
                </span>{" "}
                to help clients:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <span
                    className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                  >
                    View and track tasks efficiently
                  </span>
                </li>
                <li>
                  <span
                    className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                  >
                    Analyze and communicate
                  </span>{" "}
                  task details effectively
                </li>
              </ul>
              <br />
              <p>
                The president of KDIT Solutions stressed the importance of a
                proper design process, leading them to outsource the project to
                me and two other designers from the{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  Springboard UX design bootcamp
                </span>
                . This ensured the project followed a{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  structured design approach
                </span>
                . Note:{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  Test Wise
                </span>{" "}
                is a pseudonym used for intellectual property protection.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-10 md:gap-x-40 md:mx-auto md:w-3/4">
            <div className="flex flex-col gap-y-2 md:gap-y-8">
              <p className={`text-testwise-blue text-4xl ${myFont.className}`}>
                My Role
              </p>
              <div className={` text-2xl ${darkerGrotesque.className}`}>
                <p>
                  In this one-month project, I collaborated with two designers
                  to help KDIT Solutions enhance their application, Test Wise.
                  My primary contributions included:
                </p>
                <br />
                <ul className={`list-disc pl-5 `}>
                  <li>
                    <span
                      className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                    >
                      UX Research:
                    </span>{" "}
                    Leveraged my experience with similar tools to identify
                    opportunities for differentiation and make informed design
                    decisions.
                  </li>
                  <li>
                    <span
                      className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                    >
                      Design Solutions:
                    </span>{" "}
                    Assisted in developing alternate high-fidelity screen
                    designs.
                  </li>
                  <li>
                    <span
                      className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                    >
                      Tools Used:
                    </span>{" "}
                    Utilized Figma for creating wireframes and personas, which
                    supported our final design outcomes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-testwise-blue text-4xl ${myFont.className}`}>
              Meeting the Client
            </p>
            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <p>
                For this project, I collaborated with two designers to address
                the challenges faced by KDIT Solutions. During our initial
                meeting with Pranjal, the president, he shared his
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  {" "}
                  experiences{" "}
                </span>
                and the
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  {" "}
                  difficulties{" "}
                </span>
                encountered in creating the
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  {" "}
                  requirement dashboard module
                </span>
                . He expressed a desire to
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  {" "}
                  restart{" "}
                </span>
                the process, ensuring adherence to a{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  structured design approach
                </span>
                .
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
                  <p>Persona</p>
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
              To tackle the project, our team decided to start with research,
              including competitive analysis and persona development. We then
              moved on to ideation, creating wireframes, and finally concluded
              with high-fidelity frames and a small prototype.
            </p>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <Title title={"Research"} color="text-testwise-blue" />
            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <p>
                Before starting the ideation process, our team met with{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Pranjal
                </span>{" "}
                to discuss the key aspects of the{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  requirements dashboard
                </span>{" "}
                for{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Test Wise
                </span>
                :
              </p>
              <ul className="list-disc list-inside">
                <li>
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    {" "}
                    Functionality
                  </span>{" "}
                  within the application
                </li>
                <li>
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    {" "}
                    Agile Workflow
                  </span>{" "}
                  standards
                </li>
                <li>
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    {" "}
                    Differentiation
                  </span>{" "}
                  to set our dashboard apart
                </li>
              </ul>
              <br />
              <p>
                Prior to our second meeting, our team conducted more research on{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  KDIT Solutions
                </span>{" "}
                to identify necessary features. During the second meeting, we
                took additional time to ask detailed questions about the module
                and its use within{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Test Wise
                </span>
                . I recognized that the module was similar to a tool I had used
                at my job, allowing me to offer valuable insights.
              </p>
              <p>
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Pranjal
                </span>{" "}
                acknowledged my experience and emphasized the importance of:
              </p>
              <ul className="list-disc list-inside">
                <li>
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    {" "}
                    Simplicity
                  </span>
                </li>
                <li>
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    {" "}
                    User Customization
                  </span>
                </li>
              </ul>
              <br />
              <p>
                We then scheduled a follow-up meeting to present our{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  research analysis
                </span>
                .
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-testwise-blue text-4xl ${myFont.className}`}>
              Competitive Analysis
            </p>

            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <p>
                After meeting with{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Pranjal
                </span>{" "}
                to understand how the module would work within{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Test Wise
                </span>
                , I led the{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  competitive analysis
                </span>
                . We focused on key project management tools like{" "}
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
                ,{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Azure DevOps
                </span>
                , and{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Asana{" "}
                </span>
                to identify{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  strengths and weaknesses
                </span>{" "}
                and pinpoint areas where our module could offer{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  unique value
                </span>
                .
              </p>
              <br />
              <p>
                Using my{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  software development background
                </span>{" "}
                and experience with{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  task management tools
                </span>
                , I explained how these platforms support{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Agile
                </span>{" "}
                workflows and enterprise needs. This analysis aligned our
                solution with Pranjal’s vision and set the stage for our next
                presentation, showcasing how our approach could fill gaps and
                stand out in the market.
              </p>
            </div>
          </div>
          <ImageViewer images={competitive} color="#B7CFF5" />

          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-testwise-blue text-4xl ${myFont.className}`}>
              Persona
            </p>

            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <p>
                To ensure our design choices resonated with current clients of{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Test Wise
                </span>{" "}
                and aligned with{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Pranjal’s
                </span>{" "}
                expectations, our team developed a persona. I led this effort,
                leveraging my experience with similar tools and insights from
                our initial meetings with{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Pranjal
                </span>
                .
              </p>

              <ul className="list-disc list-inside">
                <li>
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    Align design decisions
                  </span>{" "}
                  with real client needs and goals.
                </li>
                <li>
                  Create a shared understanding among the team for{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    informed decision-making
                  </span>
                  .
                </li>
                <li>
                  Present research analysis to show how solutions would stand
                  out and meet{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    client objectives
                  </span>
                  .
                </li>
              </ul>
              <br />
              <p>
                Our persona focused on a start-up owner,{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Alex
                </span>
                , who struggles with tracking team tasks as his business scales.
                This approach helped us understand pain points and user needs,
                guiding our design to address these effectively.
              </p>
            </div>
          </div>
          <ImageRow images={persona} />
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <Title title={"Ideate"} color="text-testwise-blue" />
            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <p>
                {`After presenting our research analysis, Pranjal found our
                findings promising. He confirmed that the persona effectively
                captured his clients' goals and pain points. Key feedback from
                our competitive analysis included:`}
              </p>
              <ul className="list-disc list-inside">
                <li>
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    Agreement
                  </span>{" "}
                  on Jira and Azure's{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    complex UI
                  </span>{" "}
                  {`and steep learning curve, which he wanted to avoid in the
                  module.`}
                </li>
                <li>
                  Appreciation for{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    {`Asana's simplicity`}
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
                  Emphasis on the critical importance of{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    issue tracking
                  </span>{" "}
                  {`for the module, aligning with our persona's goals.`}
                </li>
              </ul>
              <br />
              <p>
                Informed by this feedback, we began the{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  ideation phase
                </span>{" "}
                and worked on{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  low-fidelity wireframes
                </span>{" "}
                that balanced user customization and essential task-tracking
                capabilities.
              </p>
            </div>
            <div className="flex flex-col gap-y-8 ">
              <p className={`text-testwise-blue text-4xl ${myFont.className}`}>
                Low-fidelity Wireframes
              </p>
              <div className={` text-2xl ${darkerGrotesque.className}`}>
                <p>
                  Again, After meeting with{" "}
                  <span
                    className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                  >
                    Pranjal
                  </span>
                  , our team gained a clear understanding of the{" "}
                  <span
                    className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                  >
                    user needs
                  </span>
                  ,{" "}
                  <span
                    className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                  >
                    module goals
                  </span>
                  , and his{" "}
                  <span
                    className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                  >
                    expectations
                  </span>
                  . We then used insights from our{" "}
                  <span
                    className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                  >
                    competitive analysis
                  </span>{" "}
                  to craft{" "}
                  <span
                    className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                  >
                    low-fidelity wireframes
                  </span>
                  . These wireframes serve to visualize key functionalities,
                  ensuring our design aligns with{" "}
                  <span
                    className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                  >
                    user requirements
                  </span>{" "}
                  and simplifies{" "}
                  <span
                    className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                  >
                    task tracking
                  </span>
                  .
                </p>
                <br />
                <p>The features presented include:</p>
                <ul className="list-disc list-inside">
                  <li>
                    <span
                      className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                    >
                      Kanban boards
                    </span>
                  </li>
                  <li>
                    <span
                      className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                    >
                      Customizable Dashboard
                    </span>
                  </li>
                  <li>
                    <span
                      className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                    >
                      Table of tasks
                    </span>{" "}
                    and their{" "}
                    <span
                      className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                    >
                      statuses
                    </span>
                  </li>
                  <li>
                    <span
                      className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                    >
                      Task Detail pages
                    </span>
                  </li>
                  <li>
                    <span
                      className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                    >
                      Ability to add new tasks
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(wireframes)} />
          ) : (
            <Slider sliderData={createImageArray(wireframes)} />
          )}
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <Title title={"Design"} color="text-testwise-blue" />

            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <p>
                As we transitioned to creating{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  high-fidelity screens
                </span>
                , our primary focus was to ensure clarity in{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  task tracking
                </span>{" "}
                for users. We revisited our{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  persona
                </span>{" "}
                to align our design decisions with the needs and expectations of
                our clients.
              </p>
              <br />
              <p>
                After presenting our wireframe ideations to{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Pranjal
                </span>
                , he affirmed that we were on the right track but advised us to
                follow a format akin to the{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  Requirements and Test app for Jira
                </span>
                . This feedback was crucial; it highlighted the need for a
                design that not only meets{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  industry standards
                </span>{" "}
                {`but also facilitates a straightforward user experience. By
                integrating this insight, we aimed to enhance the usability of
                our tool, ensuring clients could effortlessly track their team's
                progress.`}
              </p>
              <br />
              <p>
                With this foundation, we confidently moved forward in developing
                our{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  high-fidelity screens
                </span>
                {`, focusing on creating a solution that effectively addresses
                user needs while aligning with Pranjal's vision.`}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p className={`text-testwise-blue text-4xl ${myFont.className}`}>
              High Fidelity Prototype
            </p>

            <div className={` text-2xl ${darkerGrotesque.className}`}>
              <p>
                During the design phase, our team developed{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  three distinct solutions{" "}
                </span>{" "}
                to ensure a comprehensive approach. We drew on insights from our
                discussions with Pranjal and our understanding of the persona,
                which guided our design choices. Each solution integrated{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  innovative features{" "}
                </span>{" "}
                while adhering to{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  industry standards{" "}
                </span>
                , such as:
              </p>
              <br />
              <ul className="list-disc list-inside">
                <li>
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    A table list view{" "}
                  </span>{" "}
                  for task tracking, inspired by the Requirements and Task app.
                </li>
                <li>
                  A{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    customizable dashboard{" "}
                  </span>{" "}
                  for users to tailor their experience.
                </li>
                <li>
                  A{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    clear and intuitive UI{" "}
                  </span>{" "}
                  to enhance usability.
                </li>
              </ul>
              <br />
              <p>
                After presenting our designs to Pranjal, one solution stood out
                for its{" "}
                <span
                  className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                >
                  exceptional execution{" "}
                </span>
                , prompting us to adopt it as our primary approach. Key features
                of this chosen solution included:
              </p>
              <br />
              <ul className="list-disc list-inside">
                <li>
                  An{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    accordion feature{" "}
                  </span>{" "}
                  for navigating sub-tasks easily.
                </li>
                <li>
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    Live chat functionality{" "}
                  </span>{" "}
                  for seamless team communication.
                </li>
                <li>
                  Options for both{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    project board and list views{" "}
                  </span>
                  .
                </li>
                <li>
                  A{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    task details page{" "}
                  </span>{" "}
                  for in-depth task information.
                </li>
                <li>
                  A{" "}
                  <span
                    className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
                  >
                    customizable dashboard{" "}
                  </span>{" "}
                  with the ability to add widgets.
                </li>
              </ul>
              <br />
              <p>
                {`This structured approach ensured that our final solution met
                user needs while aligning with Pranjal's vision and
                expectations.`}
              </p>
            </div>
            <a
              className={`text-2xl hover:underline text-testwise-blue ${darkerGrotesqueBold.className} `}
              href={
                "https://www.figma.com/design/pODnwNo9vwRSEJSnxqJhdk/requirement-dash-(case-study)?node-id=88-3321&t=3wMJlIncDNZksy4C-1"
              }
              target="_blank"
            >
              Alternate Solutions
            </a>
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
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              As our team concluded the project and presented our final screens
              and prototype to Pranjal, he responded{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                very positively
              </span>{" "}
              to our{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                solutions
              </span>
              . He shared that he plans to use our{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                designs
              </span>{" "}
              as the{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                foundation
              </span>{" "}
              for building the module, allowing his team to{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                expand upon
              </span>{" "}
              it and eventually begin{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                development
              </span>
              . Overall, our team felt{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                proud
              </span>{" "}
              to have worked with our first{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                real-world client
              </span>{" "}
              and made a{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                significant impact
              </span>{" "}
              on their company.
            </p>
          </div>
          <div className="flex flex-col gap-y-8 md:w-3/4 md:mx-auto">
            <Title title={"Project takeways"} color="text-testwise-blue" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              My main takeaway from this project is a strong sense of pride in
              both what I accomplished and how I worked with my team. I was able
              to showcase my{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                UX research
              </span>{" "}
              skills while also demonstrating{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                effective communication
              </span>
              ,{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                leadership
              </span>
              , and{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                collaboration
              </span>
              {`, especially when contributing to my team's`}{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                UI designs
              </span>
              . The most important key takeaways from this project include these
              valuable experiences.
            </p>
            <ul className="list-disc list-inside">
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
