import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import Image from "next/image";
import { interBody, interBold, darkerGrotesqueTitle } from "@/utils";
import Footer from "@/components/footer";
import MobileNav from "@/components/mobile-nav";
import useWindowSize from "@/hooks/useWindowSize";
import Head from "next/head";
import Link from "next/link";

// images
import myphoto from "../../assets/about/me_2.png";
import watercolor from "../../assets/about/watercolor.png";

export default function About() {
  const [showContent, setShowContent] = useState(true);
  const { width } = useWindowSize();

  const updateContent = (state) => {
    setShowContent(state);
  };

  useEffect(() => {
    if (showContent) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, []);

  return (
    <>
      <Head>
        <title>About Regine page</title>
      </Head>
      <div>
        {width <= 767 ? (
          <MobileNav updateContent={updateContent} />
        ) : (
          <Navbar />
        )}
        {showContent && (
          <main
            className={` ${`text-2xl leading-relaxed ${interBody.className}`} w-4/5 mx-auto flex flex-col mt-16 md:gap-32 md:mt-36 `}
          >
            <div className="flex flex-col gap-8 md:gap-16">
              <h1
                className={`flex justify-center text-purple ${darkerGrotesqueTitle.className} text-6xl`}
              >
                About Me
              </h1>
              <Title title={"Who I am "} />
              <div className="flex flex-col gap-x-24 md:flex-row ">
                <div className="relative flex-1 w-60 mb-8 md:w-96 md:mb-0">
                  <Image
                    src={myphoto}
                    alt="photo of regine"
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div>
                    <p>
                      {`Hello! I’m Regine Thimothee, a UX & Product Designer whose passion for technology began when I earned my`}{" "}
                      <span className={`${interBold.className}`}>
                        B.S. in Web & Mobile Computing at Rochester Institute of
                        Technology
                      </span>
                      ,
                      {` where I honed my problem-solving skills and learned to
                      think holistically about digital experiences.`}{" "}
                    </p>
                  </div>
                  <br />
                  <div>
                    <p>
                      {`After graduating, I joined`}{" "}
                      <span className={`${interBold.className}`}>ADP</span>{" "}
                      {`as a Software Engineer in where I collobarated with UX
                      teams to`}{" "}
                      <span className={`${interBold.className}`}>
                        build accessible React components
                      </span>{" "}
                      and{" "}
                      <span className={`${interBold.className}`}>
                        utilized scalable design systems and component
                        libraries.
                      </span>{" "}
                      {`This experience that taught me the power of blending
                      technical rigor with user-centered thinking.`}{" "}
                    </p>
                  </div>
                  <br />
                  <div>
                    <p>
                      {`Eager to deepen my design expertise, I completed Springboard’s `}{" "}
                      <span className={`${interBold.className}`}>
                        700+ hour UX program
                      </span>{" "}
                      and secured a{" "}
                      <span className={`${interBold.className}`}>
                        externship contract
                      </span>{" "}
                      {`, where I led research phase and refined my skills in
                      wireframing, high-fidelity mockups, and prototyping. `}{" "}
                    </p>
                  </div>
                  <br />
                  <div>
                    <p>
                      {`Driven by a passion for community and natural hair care, I founded`}{" "}
                      <span className={`${interBold.className}`}>NaturalU</span>
                      {`, an educational app ( that I am currently working on )
                      combining video content and Q&A to foster open discussion,
                      where I applied my`}{" "}
                      <span className={`${interBold.className}`}>
                        “ultimate translator”
                      </span>{" "}
                      {`role to bridge design vision and code.`}{" "}
                    </p>
                  </div>
                  <br />
                  <div>
                    <p>
                      {`Today, I leverage this journey, from `}{" "}
                      <span className={`${interBold.className}`}>
                        RIT foundations
                      </span>{" "}
                      through{" "}
                      <span className={`${interBold.className}`}>
                        enterprise-scale projects at ADP
                      </span>
                      {`, immersive`}{" "}
                      <span className={`${interBold.className}`}>
                        Springboard training
                      </span>{" "}
                      {`, and entrepreneurial innovation with`}{" "}
                      <span className={`${interBold.className}`}>NaturalU</span>{" "}
                      {`, to craft intuitive experiences that honor both design
                      intent and technical feasibility.`}{" "}
                    </p>
                  </div>
                </div>
              </div>
              <Title title={"My Skills"} />
              <div className="flex flex-col gap-8 md:flex-row">
                <div className="flex-1">
                  <h3 className={`text-purple text-4xl ${interBold.className}`}>
                    Key Skills
                  </h3>
                  <ul className="list-none ">
                    <li className="mb-4">
                      <span className={` ${interBold.className}`}>
                        User Research & Testing:
                      </span>{" "}
                      Personas, User Interviews, Usability Testing, Competitor
                      Analysis
                    </li>
                    <li className="mb-4">
                      <span className={` ${interBold.className}`}>
                        Visual & Interaction Design:
                      </span>{" "}
                      User Interface Design, Information Architecture,
                      Interaction Design, Design Systems, Site Maps, Mood
                      Boards, Wireframes, Prototyping, User Flows, Mockups
                    </li>
                    <li className="mb-4">
                      <span className={` ${interBold.className}`}>
                        Development Skills:
                      </span>{" "}
                      HTML,CSS, TailwindCSS, React, JavaScript, Node, Express,
                      C#
                    </li>
                    <li className="mb-4">
                      <span className={` ${interBold.className}`}>Tools:</span>{" "}
                      Figma, Miro, Trello, Jira, Google Suite
                    </li>
                  </ul>
                  <br />
                </div>
                <div className="flex-1">
                  <h3 className={`text-purple text-4xl ${interBold.className}`}>
                    Experience
                  </h3>
                  <ul className="list-none ">
                    <li className="mb-4">
                      <span className={` ${interBold.className}`}>
                        Lead User Experience Designer and Developer:
                      </span>{" "}
                      Founder: NaturalU, November 2020 - Present
                    </li>
                    <li className="mb-4">
                      <span className={` ${interBold.className}`}>
                        Product Designer:
                      </span>{" "}
                       Contract: KDIT Solutions, April 2024 - May 2024
                    </li>
                    <li className="mb-4">
                      <span className={` ${interBold.className}`}>
                        Software Engineer:
                      </span>{" "}
                      Full-time: ADP July 2022 - December 2024
                    </li>
                  </ul>
                  <br />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className={`text-purple text-4xl ${interBold.className}`}>
                  Transferrable Skills
                </h3>
                <ul>
                  <li className="mb-2">
                    <span className={` ${interBold.className}`}>
                      User-Centric Thinking:{" "}
                    </span>
                    Understanding the end user’s needs and creating solutions
                    that provide a positive user experience is crucial in both
                    fields.
                  </li>
                  <li className="mb-2">
                    <span className={` ${interBold.className}`}>
                      Collaboration:{" "}
                    </span>
                    Working effectively with cross-functional teams, including
                    developers, designers, and stakeholders, is essential.
                  </li>
                  <li className="mb-2">
                    <span className={` ${interBold.className}`}>
                      Technical Knowledge:{" "}
                    </span>
                    Knowledge of coding and technical constraints can help in
                    designing feasible solutions and communicating with
                    development teams.
                  </li>
                  <li>
                    <span className={` ${interBold.className}`}>
                      Communication Skills:{" "}
                    </span>
                    Clearly conveying ideas, requirements, and feedback through
                    verbal, written, and visual communication.
                  </li>
                </ul>
              </div>

              <Title title={"How I Chill"} />

              <div className="flex flex-col gap-y-8 md:flex-row gap-x-24">
                <div className="flex-1">
                  <p>
                    {` When I'm not working, you'll often find me testing my
                    knowledge at trivia night, gearing up for my Muay Thai
                    classes, or immersing myself in video games. Additionally,
                    I'm endeavoring to carve out time once more for my artistic
                    pursuits like watercolor painting and`}{" "}
                    <Link
                      href="/illustrations"
                      className={`${interBold.className} text-purple hover:underline`}
                    >
                      digital illustrations
                    </Link>
                    .
                  </p>
                </div>
                <div className="relative flex-1 w-60 mb-8 md:w-96 md:mb-0">
                  <Image src={watercolor} alt="watercolor painting" />
                </div>
              </div>
            </div>
          </main>
        )}
        {showContent && <Footer width={width} />}
      </div>
    </>
  );
}
