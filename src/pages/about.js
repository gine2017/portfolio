import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import Image from "next/image";
import { darkerGrotesqueReg, darkerGrotesqueBold, myFont } from "@/utils";
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
            className={` ${`text-2xl ${darkerGrotesqueReg.className}`} w-4/5 mx-auto flex flex-col mt-16 md:gap-32 md:mt-36 `}
          >
            <div className="flex flex-col gap-8 md:gap-16">
              <h1
                className={`flex justify-center text-purple ${myFont.className} text-6xl`}
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
                      {`Hello! I'm Regine Thimothee, a Design Technologist working at the intersection of user experience and front-end development. With a Bachelor of Science in`}{" "}
                      <span className={`${darkerGrotesqueBold.className}`}>
                        Web and Mobile Computing
                      </span>{" "}
                      {`from Rochester Institute of Technology, I've cultivated
                      expertise that spans both creative and technical domains.`}
                    </p>
                  </div>
                  <br />
                  <div>
                    <p>
                      {`My professional journey has been shaped by a passion for translating human needs into digital solutions. Whether crafting research-driven UX strategies, building accessible component libraries, or developing`}{" "}
                      <span className={`${darkerGrotesqueBold.className}`}>
                        design systems
                      </span>
                      {`, I thrive in spaces where design thinking meets technical execution.`}
                    </p>
                  </div>
                  <br />
                  <div>
                    <p>
                      {`At companies like ADP and through my own venture, NaturalU, I've honed my ability to serve as a`}{" "}
                      <span className={`${darkerGrotesqueBold.className}`}>
                        bridge between design vision and technical
                        implementation
                      </span>
                      {`. Using my skills in React, JavaScript, and UI/UX methodologies, I create digital experiences that balance aesthetic appeal with technical performance.`}
                    </p>
                  </div>
                  <br />
                  <div>
                    <p>
                      {`I'm particularly passionate about`}{" "}
                      <span className={`${darkerGrotesqueBold.className}`}>
                        design systems, accessible interfaces, and creative
                        technology
                      </span>
                      {` that pushes boundaries while remaining intuitive for users. My dual perspective allows me to anticipate challenges across the product development lifecycle and create solutions that honor both design intent and technical feasibility.`}
                    </p>
                  </div>
                </div>
              </div>
              <Title title={"My Awesome Skills"} />
              <div className="flex flex-col gap-8 md:flex-row">
                <div className="flex-1">
                  <h3
                    className={`text-purple text-3xl ${darkerGrotesqueBold.className}`}
                  >
                    Key Skills
                  </h3>
                  <ul className="list-none ">
                    <li className="mb-4">
                      <span className={` ${darkerGrotesqueBold.className}`}>
                        User Research & Testing:
                      </span>{" "}
                      Personas, User Interviews, Usability Testing, Competitor
                      Analysis
                    </li>
                    <li className="mb-4">
                      <span className={` ${darkerGrotesqueBold.className}`}>
                        Visual & Interaction Design:
                      </span>{" "}
                      User Interface Design, Information Architecture,
                      Interaction Design, Design Systems, Site Maps, Mood
                      Boards, Wireframes, Prototyping, User Flows, Mockups
                    </li>
                    <li className="mb-4">
                      <span className={` ${darkerGrotesqueBold.className}`}>
                        Development Skills:
                      </span>{" "}
                      HTML,CSS, TailwindCSS, React, JavaScript, Node, Express,
                      C#
                    </li>
                    <li className="mb-4">
                      <span className={` ${darkerGrotesqueBold.className}`}>
                        Tools:
                      </span>{" "}
                      Figma, Miro, Trello, Jira, Google Suite
                    </li>
                  </ul>
                  <br />
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-purple text-3xl ${darkerGrotesqueBold.className}`}
                  >
                    Experience
                  </h3>
                  <ul className="list-none ">
                    <li className="mb-4">
                      <span className={` ${darkerGrotesqueBold.className}`}>
                        Lead User Experience Designer and Developer:
                      </span>{" "}
                      Founder: NaturalU, November 2020 - Present
                    </li>
                    <li className="mb-4">
                      <span className={` ${darkerGrotesqueBold.className}`}>
                        Product Designer:
                      </span>{" "}
                       Contract: KDIT Solutions, April 2024 - May 2024
                    </li>
                    <li className="mb-4">
                      <span className={` ${darkerGrotesqueBold.className}`}>
                        Software Engineer:
                      </span>{" "}
                      Full-time: ADP July 2022 - December 2024
                    </li>
                  </ul>
                  <br />
                </div>
              </div>
              <div className="flex flex-col">
                <h3
                  className={`text-purple text-3xl ${darkerGrotesqueBold.className}`}
                >
                  Transferrable Skills
                </h3>
                <ul>
                  <li className="mb-2">
                    <span className={` ${darkerGrotesqueBold.className}`}>
                      User-Centric Thinking:{" "}
                    </span>
                    Understanding the end user’s needs and creating solutions
                    that provide a positive user experience is crucial in both
                    fields.
                  </li>
                  <li className="mb-2">
                    <span className={` ${darkerGrotesqueBold.className}`}>
                      Collaboration:{" "}
                    </span>
                    Working effectively with cross-functional teams, including
                    developers, designers, and stakeholders, is essential.
                  </li>
                  <li className="mb-2">
                    <span className={` ${darkerGrotesqueBold.className}`}>
                      Technical Knowledge:{" "}
                    </span>
                    Knowledge of coding and technical constraints can help in
                    designing feasible solutions and communicating with
                    development teams.
                  </li>
                  <li>
                    <span className={` ${darkerGrotesqueBold.className}`}>
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
                      className={`${darkerGrotesqueBold.className} text-purple hover:underline`}
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
