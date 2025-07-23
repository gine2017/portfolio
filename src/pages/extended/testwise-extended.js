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
import Head from "next/head";
import Image from "next/image";

import {
  faBookBookmark,
  faLightbulb,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  darkerGrotesqueTitle,
  interBody,
  createImageArray,
  interBold,
  darkerGrotesqueMed,
  solutionInActionStyles,
} from "@/utils";
import useWindowSize from "@/hooks/useWindowSize";

import testWiseHero from "../../../assets/capstone/testwise/test-wise-hero.svg";
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
import devopsLogo from "../../../assets/capstone/testwise/research/azure.svg";
import asanaLogo from "../../../assets/capstone/testwise/research/asana.svg";
import jiraLogo from "../../../assets/capstone/testwise/research/jira.svg";
import airtableLogo from "../../../assets/capstone/testwise/research/airtable.svg";

export default function TestWiseExtended() {
  const { width } = useWindowSize();
  const [showContent, setShowContent] = useState(true);
  const [solutionInActionZoomOne, setsolutionInActionZoomOne] = useState(false);
  const [solutionInActionZoomTwo, setsolutionInActionZoomTwo] = useState(false);
  const [solutionInActionZoomThree, setsolutionInActionZoomThree] =
    useState(false);

  const caseStudyRef = useRef(null);

  const updateContent = (state) => {
    setShowContent(state);
  };

  const handleZoom = (index) => {
    if (index === 1) {
      setsolutionInActionZoomOne((prev) => !prev);
    } else if (index === 2) {
      setsolutionInActionZoomTwo((prev) => !prev);
    } else {
      setsolutionInActionZoomThree((prev) => !prev);
    }
  };

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
    <>
      <Head>
        <title>Test Wise Case Study Extended</title>
      </Head>
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
          <h1
            className={`flex justify-center text-testwise-blue ${darkerGrotesqueTitle.className} text-6xl`}
          >
            Test Wise Case Study
          </h1>
          <div className="flex flex-col gap-y-8 md:flex-row gap-x-16 ">
            <div className="flex flex-col gap-y-8 flex-1">
              <h2
                className={`text-testwise-blue text-5xl ${darkerGrotesqueTitle.className}`}
              >
                Problem
              </h2>
              <p
                className={`text-2xl ${interBold.className} text-testwise-blue `}
              >
                {`KDIT Solutions' Test Wise platform lacked an integrated
                requirements module for ERP/CRM workflow management.`}
              </p>
              <p className={`text-2xl leading-relaxed ${interBody.className}`}>
                Test Wise primarily helps organizations manage{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  testing
                </span>{" "}
                and release processes for business systems like IBM Maximo.
                Without a requirements module, users had to{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  switch between systems
                </span>{" "}
                to track their work. A previous design attempt for the
                requirements{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  dashboard
                </span>{" "}
                {`didn't align with the president's vision and faced significant`}{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  delays
                </span>
                , creating frustration for both{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  clients
                </span>{" "}
                and the development team.
              </p>
            </div>
            <div className="flex flex-col gap-y-8 flex-1">
              <h2
                className={`text-testwise-blue text-5xl ${darkerGrotesqueTitle.className}`}
              >
                Solution
              </h2>
              <p
                className={`text-2xl ${interBold.className} text-testwise-blue `}
              >
                A redesigned requirements dashboard that integrates seamlessly
                with Test Wise for improved workflow efficiency.
              </p>
              <p className={`text-2xl leading-relaxed ${interBody.className}`}>
                Through a partnership between my UX Design bootcamp
                (Springboard) and KDIT Solutions, my team created an{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  intuitive
                </span>{" "}
                dashboard that integrates seamlessly with Test Wise. The
                solution clarifies{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  tasks
                </span>
                , streamlines{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  workflows
                </span>
                , and enhances{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  collaboration
                </span>{" "}
                for a more comprehensive enterprise solution that eliminates
                system switching and improves overall productivity.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-y-10 md:gap-x-40 md:mx-auto ">
            <div className="flex flex-col gap-y-2 md:gap-y-8">
              <h3
                className={`text-testwise-blue text-4xl ${darkerGrotesqueTitle.className}`}
              >
                My Role
              </h3>
              <div
                className={` text-2xl leading-relaxed ${interBody.className}`}
              >
                In one month, I collaborated with two designers to enhance Test
                Wise by conducting UX research,wireframes, and creating
                high-fidelity screens in Figma.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 w-full md:mx-auto ">
            <h2
              className={`text-testwise-blue text-5xl ${darkerGrotesqueTitle.className}`}
            >
              Solution in Action
            </h2>
            <>
              <div className="flex flex-col gap-y-16 xl:flex-row xl:gap-x-16 md:items-center border-b-4 ">
                <div
                  className="flex flex-col w-3/4"
                  onClick={() => {
                    handleZoom(1);
                  }}
                >
                  <Image
                    src={dashboard}
                    alt="integrated requirements dashboard"
                    className="w-full h-auto transition-all duration-300"
                    style={
                      solutionInActionZoomOne ? solutionInActionStyles : {}
                    }
                  />

                  <p
                    className={`${darkerGrotesqueMed.className} italic text-xl mb-4 text-center`}
                  >
                    Click on the image to enlarge
                  </p>
                </div>

                <div>
                  <h3
                    className={`text-testwise-blue text-4xl ${darkerGrotesqueTitle.className} mb-4`}
                  >
                    Integrated Requirements Dashboard
                  </h3>
                  <p
                    className={`text-2xl leading-relaxed ${interBody.className} mb-4`}
                  >
                    Eliminates system switching by centralizing requirements
                    management directly within Test Wise, creating a unified
                    workflow experience
                  </p>
                </div>
              </div>
              {solutionInActionZoomOne && (
                <div className="fixed top-0 left-0 w-screen h-dvh bg-bgWhite bg-opacity-50 z-[9998]" />
              )}
            </>
            <>
              <div className="flex flex-col gap-y-16 xl:flex-row xl:gap-x-16 md:items-center border-b-4">
                <div>
                  <h3
                    className={`text-testwise-blue text-4xl ${darkerGrotesqueTitle.className}`}
                  >
                    Task Visualization Interface
                  </h3>
                  <p
                    className={`text-2xl leading-relaxed ${interBody.className} mb-4`}
                  >
                    Clarifies responsibilities and deadlines through intuitive
                    visual organization, reducing confusion and improving team
                    coordination
                  </p>
                </div>
                <div
                  className="flex flex-col w-3/4"
                  onClick={() => {
                    handleZoom(2);
                  }}
                >
                  <Image
                    src={kanban}
                    alt="task visualization interface"
                    className="w-full h-auto transition-all duration-300"
                    style={
                      solutionInActionZoomTwo ? solutionInActionStyles : {}
                    }
                  />
                  <p
                    className={`${darkerGrotesqueMed.className} italic text-xl  mb-4 text-center`}
                  >
                    Click on the image to enlarge
                  </p>
                </div>
              </div>
              {solutionInActionZoomTwo && (
                <div className="fixed top-0 left-0 w-screen h-dvh bg-bgWhite bg-opacity-50 z-[9998]" />
              )}
            </>
            <>
              <div className="flex flex-col gap-y-16 xl:flex-row xl:gap-x-16 md:items-center">
                <div
                  className="flex flex-col w-3/4"
                  onClick={() => {
                    handleZoom(3);
                  }}
                >
                  <Image
                    src={requirementDetailsOne}
                    alt="collaboration features"
                    className="w-full h-auto transition-all duration-300"
                    style={
                      solutionInActionZoomThree ? solutionInActionStyles : {}
                    }
                  />
                  <p
                    className={`${darkerGrotesqueMed.className} italic text-xl mb-4 text-center`}
                  >
                    Click on the image to enlarge
                  </p>
                </div>

                <div>
                  <h3
                    className={`text-testwise-blue text-4xl ${darkerGrotesqueTitle.className} mb-4`}
                  >
                    Collaboration Features
                  </h3>
                  <p
                    className={`text-2xl leading-relaxed ${interBody.className}`}
                  >
                    Enhances team communication with integrated commenting,
                    notifications, and status updates that keep all stakeholders
                    informed
                  </p>
                </div>
              </div>
              {solutionInActionZoomThree && (
                <div className="fixed top-0 left-0 w-screen h-dvh bg-bgWhite bg-opacity-50 z-[9998]" />
              )}
            </>
          </div>

          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h3
              className={`text-testwise-blue text-4xl ${darkerGrotesqueTitle.className}`}
            >
              Design Process
            </h3>
            <div className="flex flex-col gap-y-4 md:flex-row justify-evenly">
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faBookBookmark}
                  size="4x"
                  color="#1F3F70"
                />
                <div>
                  <p
                    className={` text-3xl text-testwise-blue mt-4 text-center  ${interBold.className}`}
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
                    className={` text-3xl text-testwise-blue mt-4 text-center  ${interBold.className}`}
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
                    className={` text-3xl text-testwise-blue mt-4 text-center ${interBold.className}`}
                  >
                    Design
                  </p>
                  <p>High Fidelity Screens</p>
                </div>
              </div>
            </div>
            <p className={` text-2xl leading-relaxed ${interBody.className}`}>
              To tackle the project, our team decided to start with research
              that included competitive analysis. We then moved on to ideation,
              creating wireframes, and finally concluded with high-fidelity
              frames and a small prototype.
            </p>
          </div>
          {width >= 767 && (
            <AutoScrollNavigator sections={steps} fontColor={"testwise-blue"} />
          )}
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <Title
              title={"Research"}
              color="text-testwise-blue"
              id="research"
            />
            <div className={`text-2xl leading-relaxed ${interBody.className}`}>
              <p>
                Our team met with{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  Pranjal
                </span>
                , the President of KDIT Solutions, to understand his vision for
                the{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  requirements dashboard
                </span>
                . We focused on necessary{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  functionality
                </span>
                ,{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  agile standards
                </span>
                , and{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  differentiation
                </span>{" "}
                from tools like Jira. After researching the company and their
                clients, we held a{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  second meeting
                </span>{" "}
                to explore specific use cases. My experience with{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  Azure DevOps
                </span>{" "}
                and{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  Jira
                </span>{" "}
                allowed me to contribute valuable insights to these discussions.
                Throughout our meetings, Pranjal emphasized the importance of
                creating a{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  simple, customizable solution
                </span>
                .
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h3
              className={`text-testwise-blue text-4xl ${darkerGrotesqueTitle.className}`}
            >
              Competitive Analysis
            </h3>
            <div className={`text-2xl leading-relaxed ${interBody.className}`}>
              <p>
                Based on our discussions with{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  Pranjal
                </span>{" "}
                and our understanding of the requirements dashboard needs, our
                team conducted{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  competitive analysis
                </span>{" "}
                of prominent requirement management platforms. This research
                became essential to identify{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  industry standards
                </span>
                , discover{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  pain points
                </span>{" "}
                in existing solutions, and uncover opportunities to{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  differentiate
                </span>{" "}
                {`Test Wise's dashboard.`}
              </p>

              <p className="mt-4">
                Our team focused specifically on examining{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  Azure DevOps
                </span>
                ,{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  Airtable
                </span>
                ,{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  Jira
                </span>
                , and{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  Asana
                </span>{" "}
                {`, tools that potential users might already be familiar with. By
                analyzing these leading platforms'`}{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  strengths and weaknesses
                </span>
                , we gathered critical insights to inform our design decisions
                and ensure Test Wise would offer meaningful advantages over
                existing solutions.
              </p>
            </div>
          </div>
          <div
            className={`flex flex-col gap-y-8 md:mx-auto md:w-3/4 justify-items-center text-2xl leading-relaxed ${interBody.className}`}
          >
            <div className="flex flex-col gap-4 border-4 border-white border-b-testwise-blue gap-x-20">
              <div className="flex flex-col items-center">
                <div className="w-1/4 h-40 relative mb-4">
                  <Image src={devopsLogo} alt="azure devops logo" fill={true} />
                </div>
                <h4 className={`text-h4Size ${darkerGrotesqueTitle.className}`}>
                  Azure Devops
                </h4>
              </div>

              <div>
                <div className="flex flex-row gap-8 ">
                  <div className="flex flex-col gap-y-4">
                    <h5 className={`text-h5Size ${interBold.className}`}>
                      Strengths
                    </h5>
                    <ul className="list-disc ">
                      <li className="mb-4">
                        Customizable visual boards for flexible work tracking
                        and team progress monitoring.
                      </li>
                      <li className="mb-4">
                        Comprehensive task documentation with rich text,
                        attachments, and powerful search functionality.
                      </li>
                      <li className="mb-4">
                        Seamless integration with Microsoft ecosystem and GitHub
                        for connected workflows.
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <h5 className={`text-h5Size ${interBold.className}`}>
                      Weakness
                    </h5>
                    <ul className="list-disc ">
                      <li className="mb-4">
                        Steep learning curve, particularly challenging for teams
                        new to DevOps tools.
                      </li>
                      <li className="mb-4">
                        Escalating costs as teams expand beyond free tier
                        limitations.
                      </li>
                      <li className="mb-4">
                        Microsoft ecosystem dependency that creates challenges
                        for multi-cloud environments.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-4 border-white border-b-testwise-blue gap-x-20">
              <div className="flex flex-col items-center">
                <div className="w-1/4 h-40 relative mb-4">
                  <Image src={asanaLogo} alt="asana logo" fill={true} />
                </div>
                <h4 className={`text-h4Size ${darkerGrotesqueTitle.className}`}>
                  Asana
                </h4>
              </div>

              <div>
                <div className="flex flex-row gap-8 ">
                  <div className="flex flex-col gap-y-4">
                    <h5 className={`text-h5Size ${interBold.className}`}>
                      Strengths
                    </h5>
                    <ul className="list-disc ">
                      <li className="mb-4">
                        Multiple visual layouts (timeline, calendar) for easy
                        deadline tracking and team planning.
                      </li>
                      <li className="mb-4">
                        Clean, intuitive interface with drag-and-drop features
                        that works well for users of all experience levels.
                      </li>
                      <li className="mb-4">
                        Integrated collaboration tools for comments, tagging,
                        and file sharing in one central workspace.
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <h5 className={`text-h5Size ${interBold.className}`}>
                      Weakness
                    </h5>
                    <ul className="list-disc ">
                      <li className="mb-4">
                        Limited reporting capabilities that lack depth for
                        comprehensive project analysis.
                      </li>
                      <li className="mb-4">
                        Basic time tracking features that often require
                        supplemental tools.
                      </li>
                      <li className="mb-4">
                        Integration complexities that can create additional
                        administrative burden.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-4 border-white border-b-testwise-blue gap-x-20">
              <div className="flex flex-col items-center">
                <div className="w-1/4 h-40 relative mb-4">
                  <Image src={airtableLogo} alt="Airtable logo" fill={true} />
                </div>
                <h4 className={`text-h4Size ${darkerGrotesqueTitle.className}`}>
                  Airtable
                </h4>
              </div>

              <div>
                <div className="flex flex-row gap-8 ">
                  <div className="flex flex-col gap-y-4">
                    <h5 className={`text-h5Size ${interBold.className}`}>
                      Strengths
                    </h5>
                    <ul className="list-disc ">
                      <li className="mb-4">
                        Spreadsheet-like flexibility for customizable
                        information organization across various project types.
                      </li>
                      <li className="mb-4">
                        Extensive customization for views, fields, and workflows
                        that adapt to specific team processes.
                      </li>
                      <li className="mb-4">
                        Seamless real-time collaboration enabling simultaneous
                        multi-user project editing.
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <h5 className={`text-h5Size ${interBold.className}`}>
                      Weakness
                    </h5>
                    <ul className="list-disc ">
                      <li className="mb-4">
                        Lacks advanced project management capabilities necessary
                        for complex project requirements.
                      </li>
                      <li className="mb-4">
                        Scaling difficulties when handling large teams or
                        extensive information sets.
                      </li>
                      <li className="mb-4">
                        Insufficient reporting tools for comprehensive project
                        performance analysis.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4  gap-x-20">
              <div className="flex flex-col items-center">
                <div className="w-1/4 h-24 relative mb-4">
                  <Image src={jiraLogo} alt="Jira logo" fill={true} />
                </div>
                <h4 className={`text-h4Size ${darkerGrotesqueTitle.className}`}>
                  Jira
                </h4>
              </div>

              <div>
                <div className="flex flex-row gap-8 ">
                  <div className="flex flex-col gap-y-4">
                    <h5 className={`text-h5Size ${interBold.className}`}>
                      Strengths
                    </h5>
                    <ul className="list-disc ">
                      <li className="mb-4">
                        Robust Agile methodology support with customizable
                        Kanban and Scrum boards aligned with established
                        development practices.
                      </li>
                      <li className="mb-4">
                        Versatile issue management with diverse ticket types,
                        assignee tracking, and customizable status indicators.
                      </li>
                      <li className="mb-4">
                        Comprehensive visualization options spanning boards,
                        timelines, Gantt charts, and calendars for multifaceted
                        work tracking.
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <h5 className={`text-h5Size ${interBold.className}`}>
                      Weakness
                    </h5>
                    <ul className="list-disc ">
                      <li className="mb-4">
                        Interface complexity requiring significant learning
                        investment, especially challenging for new users.
                      </li>
                      <li className="mb-4">
                        Customization pitfalls that can create inconsistent
                        workflows and maintenance difficulties over time.
                      </li>
                      <li className="mb-4">
                        Performance degradation with larger projects that can
                        impede productivity and user experience.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <Title title={"Ideate"} color="text-testwise-blue" id="ideate" />
            <div className={`text-2xl leading-relaxed ${interBody.className}`}>
              <p>
                After presenting our{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  competitive analysis
                </span>{" "}
                to{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  Pranjal
                </span>
                , his feedback shaped our design direction:
              </p>
              <ul className="list-disc ml-12">
                <li>
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    UI Simplicity:
                  </span>{" "}
                  He agreed with our assessment that{" "}
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    Jira
                  </span>{" "}
                  and{" "}
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    Azure DevOps
                  </span>{" "}
                  were too complex, confirming our direction to prioritize
                  user-friendly interfaces
                </li>
                <li>
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    Positive References:
                  </span>{" "}
                  He specifically highlighted{" "}
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    {`Asana's`}
                  </span>{" "}
                  clean design and customization features as elements he wanted
                  to incorporate
                </li>
                <li>
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    Core Functionality:
                  </span>{" "}
                  Despite preferring simplicity, he emphasized that{" "}
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    robust issue tracking
                  </span>{" "}
                  capabilities must remain central to our solution
                </li>
              </ul>
              <br />
              <p>
                This feedback helped establish our{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  design direction
                </span>
                : creating an{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  intuitive interface
                </span>{" "}
                that balanced{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  customization
                </span>{" "}
                with{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  robust task management
                </span>
                . We began{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  wireframing
                </span>{" "}
                with focus on{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  clear visual hierarchy
                </span>{" "}
                and{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  simplified navigation
                </span>{" "}
                while preserving essential{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  requirements management functionality
                </span>
                .
              </p>
            </div>
            <div className="flex flex-col gap-y-8 ">
              <h3
                className={`text-testwise-blue text-4xl ${darkerGrotesqueTitle.className}`}
              >
                Low-fidelity Wireframes
              </h3>
              <div
                className={`text-2xl leading-relaxed ${interBody.className}`}
              >
                <p className="mb-2">
                  Building on{" "}
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    {`Pranjal's feedback`}
                  </span>{" "}
                  about balancing simplicity with functionality, we identified
                  five key features for our solution, each addressing specific
                  needs from our{" "}
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    competitive analysis
                  </span>
                  :
                </p>

                <ul className="list-disc ml-12">
                  <li>
                    <span
                      className={`text-testwise-blue ${interBold.className}`}
                    >
                      Kanban boards:
                    </span>{" "}
                    Visual task organization avoiding the complexity of Jira and
                    Azure DevOps
                  </li>
                  <li>
                    <span
                      className={`text-testwise-blue ${interBold.className}`}
                    >
                      Customizable Dashboard:
                    </span>{" "}
                    {`Flexible layouts inspired by Asana's user-friendly approach`}
                  </li>
                  <li>
                    <span
                      className={`text-testwise-blue ${interBold.className}`}
                    >
                      Task status table:
                    </span>{" "}
                    {`Comprehensive tracking functionality that maintained
                    Pranjal's essential requirements`}
                  </li>
                  <li>
                    <span
                      className={`text-testwise-blue ${interBold.className}`}
                    >
                      Task detail pages:
                    </span>{" "}
                    Simplified information architecture to prevent overwhelming
                    interfaces
                  </li>
                  <li>
                    <span
                      className={`text-testwise-blue ${interBold.className}`}
                    >
                      New task creation:
                    </span>{" "}
                    Streamlined process for quick task entry while capturing
                    necessary details
                  </li>
                </ul>
                <br />
                <p>
                  We translated these priorities into{" "}
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    low-fidelity wireframes
                  </span>{" "}
                  with{" "}
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    clear visual hierarchy
                  </span>{" "}
                  to address the usability challenges identified in our
                  research.
                </p>
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
            <div className={`text-2xl leading-relaxed ${interBody.className}`}>
              <p>
                After validating our{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  wireframes
                </span>{" "}
                with Pranjal, we moved to{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  high-fidelity design
                </span>{" "}
                with a refined direction:
              </p>
              <ul className="list-disc ml-12">
                <li>
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    Balance of approaches:
                  </span>{" "}
                  {`While our wireframes successfully addressed the complexity
                  issues identified in Jira, Pranjal requested specific
                  organizational elements from Jira's Requirements and Test
                  module`}
                </li>
                <li>
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    Brand integration:
                  </span>{" "}
                  {`We incorporated KDIT Solutions' brand colors into our designs
                  for consistency with the existing Test Wise platform`}
                </li>
                <li>
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    Multiple solutions:
                  </span>{" "}
                  Our team developed three distinct design approaches, each
                  addressing the core requirements while exploring different
                  interaction patterns
                </li>
              </ul>
              <br />
              <p>Based on these considerations, our designs featured:</p>
              <ul className="list-disc ml-12">
                <li>
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    Table list view
                  </span>{" "}
                  for structured task tracking, directly inspired by
                  industry-standard requirements tools
                </li>
                <li>
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    Customizable dashboard
                  </span>{" "}
                  allowing users to tailor their information display
                </li>
                <li>
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    Intuitive navigation
                  </span>{" "}
                  that maintained simplicity while offering robust functionality
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h3
              className={`text-testwise-blue text-4xl ${darkerGrotesqueTitle.className}`}
            >
              High Fidelity Prototype
            </h3>
            <iframe
              style={{ border: "1px solid rgba(255, 255, 255, 0.9);" }}
              className="w-full h-[40rem]"
              title="Embedded Test Wise Requirement Dashboard Figma Prototype"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FpODnwNo9vwRSEJSnxqJhdk%2Frequirement-dash-(case-study)%3Fpage-id%3D0%253A1%26node-id%3D42-1567%26viewport%3D-1206%252C-796%252C0.34%26t%3Di3WmacbvZgTFEXac-1%26scaling%3Dscale-down%26starting-point-node-id%3D42%253A1567"
              allowfullscreen
            ></iframe>
            <div className={`text-2xl leading-relaxed ${interBody.className}`}>
              <p>
                {`Due to the project's`}{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  timeline constraints
                </span>
                , we validated our designs directly with{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  Pranjal
                </span>{" "}
                rather than conducting user testing. He selected the solution
                that best aligned with his vision, featuring:
              </p>
              <ul className="list-disc ml-12">
                <li>
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    Accordion-style sub-task navigation
                  </span>{" "}
                  for efficient information hierarchy
                </li>
                <li>
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    Integrated live chat
                  </span>{" "}
                  for streamlined team communication
                </li>
                <li>
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    Flexible project views
                  </span>{" "}
                  offering both board and list formats
                </li>
                <li>
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    Comprehensive task details page
                  </span>{" "}
                  with all relevant information
                </li>
                <li>
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    Widget-based dashboard customization
                  </span>{" "}
                  for personalized workflows
                </li>
              </ul>
              <p className="mt-4 italic text-gray-600">
                {`Note: Logos have been removed from these designs at the client's
                request.`}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 md:w-3/4 md:mx-auto">
            <Title title={"Project takeways"} color="text-testwise-blue" />
            <div className={`text-2xl leading-relaxed ${interBody.className}`}>
              <p>
                Our designs will serve as the foundation for{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  {`KDIT Solutions'`}
                </span>{" "}
                Test Wise requirements dashboard. Working with a client across
                international time zones, we balanced three key priorities:
              </p>

              <ul className="list-disc ml-12">
                <li>
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    Simplicity with functionality
                  </span>{" "}
                  through an intuitive interface that maintained robust tracking
                  capabilities
                </li>
                <li>
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    Industry standards with accessibility
                  </span>{" "}
                  by integrating familiar elements while ensuring an
                  approachable learning curve
                </li>
                <li>
                  <span className={`text-testwise-blue ${interBold.className}`}>
                    Customization with consistency
                  </span>{" "}
                  via widget-based personalization aligned with the existing
                  platform
                </li>
              </ul>

              <p className="mt-4">
                <span className={`text-testwise-blue ${interBold.className}`}>
                  Pranjal
                </span>{" "}
                particularly valued our innovative task display solutions, which
                provided clear ways to manage complex information. Despite the
                challenge of this being our first enterprise client project
                through Springboard, our team maintained effective communication
                through weekly updates and collaborative design sessions.
              </p>

              <p className="mt-4">
                This experience strengthened my ability to apply my{" "}
                <span className={`text-testwise-blue ${interBold.className}`}>
                  technical background
                </span>{" "}
                {`to UX challenges, communicate across diverse teams, and
                translate complex requirements into effective designs. Given
                more time, I would have advocated for user testing to validate
                our approach beyond stakeholder approval, a key learning I'll
                apply to future projects.`}
              </p>
            </div>
          </div>
          <CaseStudyFooter casestudy="Test Wise" />
        </main>
      )}
      {showContent && <Footer width={width} />}
    </>
  );
}
