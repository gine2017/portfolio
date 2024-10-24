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
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const updateContent = (state) => {
    setShowContent(state);
  };

  const handleClick = (index) => {
    setZoomedIndex(zoomedIndex === index ? null : index);
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
          <div className="flex flex-col gap-y-8 flex-1">
            <p className={` text-testwise-blue text-4xl ${myFont.className}`}>
              Problem Statement
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                Test Wise
              </span>{" "}
              is a project tracking and testing platform owned by{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                KDIT Solutions
              </span>
              . As their{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                client base
              </span>{" "}
              continues to grow, they are facing increasingly{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                complex tasks
              </span>{" "}
              that require{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                accurate tracking
              </span>{" "}
              and{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                analysis
              </span>
              . To address this, they decided to build a{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                task tracking module
              </span>{" "}
              within their{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                Test Wise
              </span>{" "}
              application, allowing clients to efficiently{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                view
              </span>
              ,{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                track
              </span>
              ,{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                analyze
              </span>
              , and{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                communicate
              </span>{" "}
              about tasks. The president of{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                KDIT Solutions
              </span>{" "}
              also emphasized the importance of following a{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                proper design process
              </span>{" "}
              for this solution. To achieve this, they outsourced the project to{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                me and two other designers
              </span>
              , as we were enrolled in a{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                UX design bootcamp
              </span>
              ,{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                Springboard
              </span>
              , and equipped with the knowledge to follow a{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                structured design process
              </span>
              . To protect intellectual property,{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                Test Wise
              </span>{" "}
              is used as a pseudonym for this project.
            </p>
          </div>
          <div className="flex flex-col gap-y-10 md:flex-row md:gap-x-40">
            <div className="flex flex-col gap-y-2 md:gap-y-8">
              <p className={`text-testwise-blue text-4xl ${myFont.className}`}>
                My Role
              </p>
              <p className={` text-2xl ${darkerGrotesque.className}`}>
                In this{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  one-month project
                </span>
                , I collaborated with{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  two other designers
                </span>{" "}
                to assist{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  KDIT Solutions
                </span>{" "}
                in creating design solutions for their application,{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  Test Wise
                </span>
                . While{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  I contributed to creating alternate solutions
                </span>{" "}
                for our final high-fidelity screens, much of{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  {" "}
                  my strength
                </span>{" "}
                lay in the{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  UX research phase
                </span>
                . Having experience with tools similar to{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  Test Wise
                </span>
                , I was able to{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  showcase how the product can differentiate from competitors
                </span>{" "}
                and{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  make informed design decisions
                </span>{" "}
                that would benefit the end users. I also utilized{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  Figma
                </span>{" "}
                as the primary tool to{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  assist
                </span>{" "}
                in designing the{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  final high-fidelity screens{" "}
                </span>
                , developing{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  wireframes
                </span>
                , and creating{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  personas
                </span>{" "}
                .
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-testwise-blue text-4xl ${myFont.className}`}>
              Meeting the Client
            </p>
            <div className="flex flex-col">
              <p className={` text-2xl ${darkerGrotesque.className}`}>
                For this project, I had the opportunity to work with{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  two other designers
                </span>
                . At the start, our team met with{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  Pranjal
                </span>
                , the president of{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  KDIT Solutions
                </span>
                , who shared his{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  experiences
                </span>{" "}
                and the{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  challenges
                </span>{" "}
                he faced when he initially created the{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  requirement dashboard module
                </span>
                . He expressed his wish to restart the process, this time
                ensuring it properly followed a{" "}
                <span
                  className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
                >
                  structured design process
                </span>
                .
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
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
          <div className="flex flex-col gap-y-8">
            <Title title={"Research"} color="text-testwise-blue" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              Before beginning the ideation process, our team met with{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                Pranjal
              </span>{" "}
              to discuss in depth how the{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                requirements dashboard
              </span>{" "}
              would function within{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                Test Wise
              </span>
              , the standards of the{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                agile workflow
              </span>
              , and the intricacies that would set our dashboard apart. In order
              to begin our{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                design process
              </span>
              , our team took time to{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                research the company
              </span>{" "}
              before a second meeting to start understanding what we needed to
              build. During our{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                second meeting
              </span>
              , we gained more{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                insights
              </span>{" "}
              into how the module would work for{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                Test Wise
              </span>
              . I realized what we were building was{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                similar to a tool
              </span>{" "}
              I used at my current job, and I was able to provide my own{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                perspective
              </span>{" "}
              to ensure I understood the requirements. Pranjal{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                corroborated
              </span>{" "}
              my experience, and by the end of the meeting, he emphasized that
              he wanted a solution that focused on{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                simplicity
              </span>{" "}
              and{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                user customization
              </span>
              . Our team then scheduled another meeting to present our{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                research analysis
              </span>
              .
            </p>
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-testwise-blue text-4xl ${myFont.className}`}>
              Competitive Analysis
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              To prepare for our next meeting with{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                Pranjal
              </span>
              , our team focused on conducting a{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                competitive analysis
              </span>{" "}
              to differentiate the module for{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                Test Wise
              </span>{" "}
              from existing tools on the market. I led this session due to my{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                background in software development
              </span>{" "}
              and extensive experience with{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                task management tools
              </span>
              . I explained how these tools support the{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                Agile methodology
              </span>{" "}
              and the{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                software development life cycle
              </span>
              , helping my teammates understand their application in{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                enterprise companies
              </span>
              . We analyzed four competitors, assessing their strengths and
              weaknesses to ensure our solution aligned with{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                Pranjal's vision
              </span>{" "}
              and provided unique value. This research laid the groundwork for a
              strong presentation, demonstrating how we could meet his
              requirements and set{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                the module for Test Wise
              </span>{" "}
              apart.
            </p>
          </div>
          <ImageViewer images={competitive} color="#B7CFF5" />

          <div className="flex flex-col gap-y-8">
            <p className={`text-testwise-blue text-4xl ${myFont.className}`}>
              Persona
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              In order for our team to ensure we have a{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                shared understanding
              </span>{" "}
              of the{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                client's goals
              </span>{" "}
              and to comprehend Pranjal's{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                perspective
              </span>
              , we created a{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                persona
              </span>
              .{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                {" "}
                I pushed for the creation of this persona
              </span>{" "}
              so that when presenting our research analysis to Pranjal, we not
              only demonstrate how we can create a solution that stands out from
              what is on the market but also understand his{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                objectives
              </span>{" "}
              for this project. This persona serves as a{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                point of truth
              </span>{" "}
              to guide our{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                design decisions.
              </span>
              <br /> <br /> We focused on a{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                start-up owner
              </span>{" "}
              named{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                Alex
              </span>
              , who faces the challenge of tracking his team's work as his
              business sales grow. To overcome this challenge, he seeks a
              solution that can help{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                organize
              </span>{" "}
              his team's{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                tasks
              </span>
              . To better understand the{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                perspective
              </span>{" "}
              of the owner of KDIT Solutions and the problem space of clients
              with advanced tasks, we utilize{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                personas
              </span>
              . This persona helps us grasp the{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                pain points
              </span>
              ,{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                frustrations
              </span>
              , and{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                goals
              </span>{" "}
              for the{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                requirements dashboard
              </span>
              . This deeper understanding enables us to effectively address the{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                needs
              </span>{" "}
              and{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                challenges
              </span>{" "}
              faced by both the owner and the clients.
            </p>
          </div>
          <ImageRow images={persona} />
          <div className="flex flex-col gap-y-8">
            <Title title={"Ideate"} color="text-testwise-blue" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              Upon completing the{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                competitive analysis
              </span>{" "}
              and creating the{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                persona
              </span>
              , our group reconvened with Pranjal to present our research
              findings. He found our assessment to be extremely helpful and
              appreciated the{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                customizable features
              </span>{" "}
              and{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                simplicity of design
              </span>{" "}
              that Asana offers. However, he expressed concerns about Jira and
              Azure,{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                noting their complex UI
              </span>
              , which can be intimidating for new users. Despite this, he
              acknowledged that their{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                methods of tracking issues are crucial,
              </span>{" "}
              as these features are considered{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                industry standards
              </span>
              . Pranjal also found the persona we created to be beneficial,
              stating that it resonated with both himself and his clients.
              Taking into account what we discussed with Pranjal, our team then
              began creating{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                low-fidelity wireframes
              </span>{" "}
              that emphasized user{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                customizability
              </span>{" "}
              while ensuring that{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                task tracking
              </span>{" "}
              adhered to{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                industry standards
              </span>
              .
            </p>
          </div>
          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(wireframes)} />
          ) : (
            <Slider sliderData={createImageArray(wireframes)} />
          )}
          <div className="flex flex-col gap-y-8">
            <Title title={"Design"} color="text-testwise-blue" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              After our team presented our different wireframe ideations to
              Pranjal, he found our designs to be{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                extremely promising
              </span>
              , indicating that we were on the{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                right track
              </span>
              . However, he provided feedback that our design should adhere to a
              format similar to the{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                Requirements and Test app for Jira
              </span>
              . Taking this feedback to heart and reflecting on our{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                persona
              </span>
              , which emphasized the importance of creating a tool that enables
              clients to{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                easily track
              </span>{" "}
              their team’s{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                progress
              </span>
              , we initiated the next phase of our{" "}
              <span
                className={`text-testwise-blue  ${darkerGrotesqueBold.className}`}
              >
                design process
              </span>
              .
            </p>
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-testwise-blue text-4xl ${myFont.className}`}>
              High Fidelity Prototype
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              During our design phase, our team took time to{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                evenly
              </span>{" "}
              create and{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                showcase three different solutions
              </span>
              . We leveraged insights from our meetings with Pranjal and ensured
              that our solutions aligned with our{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                persona
              </span>
              . Not only did we add{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                innovative features
              </span>
              , but we also made sure to adhere to{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                industry standards
              </span>{" "}
              by incorporating a{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                table list view
              </span>
              , as Pranjal requested, inspired by the{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                Requirements and Task app
              </span>
              . Additionally, we focused on providing the ability for users to
              create a{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                customizable dashboard
              </span>
              , a{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                clear and digestible UI
              </span>
              , and ensuring we followed{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                industry standards
              </span>
              .
              <br /> <br />
              Once we presented all our designs to Pranjal, one team member's
              design stood out for its{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                exceptional execution
              </span>
              . As a result, we chose that design as our{" "}
              <span
                className={`text-testwise-blue ${darkerGrotesqueBold.className}`}
              >
                primary solution
              </span>
              . The features introduced in the solution included:
            </p>
            <ul className="list-disc list-inside">
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
              <li className={` text-2xl ${darkerGrotesque.className}`}>
                Customizable dashboard with the ability to add widgits
              </li>
            </ul>
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
          <div className="flex flex-col gap-y-8">
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
          <div className="flex flex-col gap-y-8">
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
              , especially when contributing to my team's{" "}
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
