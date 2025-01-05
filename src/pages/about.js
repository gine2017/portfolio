import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import Image from "next/image";
import { darkerGrotesqueReg, darkerGrotesqueBold } from "@/utils";
import Footer from "@/components/footer";
import MobileNav from "@/components/mobile-nav";
import useWindowSize from "@/hooks/useWindowSize";

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
    <div>
      {width <= 767 ? <MobileNav updateContent={updateContent} /> : <Navbar />}
      {showContent && (
        <main
          className={` ${`text-2xl ${darkerGrotesqueReg.className}`} w-4/5 mx-auto flex flex-col mt-16 md:gap-32 md:mt-36 `}
        >
          <div className="flex flex-col gap-8 md:gap-16">
            <Title title={"About Me"} />
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
                    {`Hello again! I'm Regine Thimothee, a former Software Engineer with a strong foundation in front-end development and a passion for design. 
                    I earned my Bachelor of Science degree in`}{" "}
                    <span className={`${darkerGrotesqueBold.className}`}>
                      Web and Mobile Computing
                    </span>{" "}
                    from Rochester Institute of Technology, where I discovered a
                    love for mobile design. While I initially focused on
                    front-end web development, which allowed me to blend my
                    artistic and technical skills, my journey has since evolved
                    into a deep commitment to creating thoughtful, user-centered
                    designs.
                  </p>
                </div>
                <br />
                <div>
                  <p>
                    {`After collaborating with design teams and reflecting on my career journey, I realized that `}
                    <span className={`${darkerGrotesqueBold.className}`}>
                      UI/UX design is my true passion lies.
                    </span>{" "}
                    Leveraging my background in web development I’m now{" "}
                    <span className={`${darkerGrotesqueBold.className}`}>
                      dedicated to uniting design and development to craft
                      innovative, seamless, and technically robust experiences
                      that truly resonate with users
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <Title title={"My Awesome Skills"} />
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="flex-1">
                <p
                  className={`text-purple text-3xl ${darkerGrotesqueBold.className}`}
                >
                  Key Skills
                </p>
                <ul className="list-none ">
                  <li>
                    <span
                      className={`text-purple ${darkerGrotesqueBold.className}`}
                    >
                      User Research & Testing:
                    </span>{" "}
                    Personas, User Interviews, Usability Testing, Competitor
                    Analysis
                  </li>
                  <br />
                  <li>
                    <span
                      className={`text-purple ${darkerGrotesqueBold.className}`}
                    >
                      Visual & Interaction Design:
                    </span>{" "}
                    User Interface Design, Information Architecture, Interaction
                    Design, Design Systems, Site Maps, Mood Boards, Wireframes,
                    Prototyping, User Flows, Mockups
                  </li>
                  <br />
                  <li>
                    <span
                      className={`text-purple ${darkerGrotesqueBold.className}`}
                    >
                      Development Skills:
                    </span>{" "}
                    HTML,CSS, TailwindCSS, React, JavaScript, Node, Express, C#
                  </li>
                  <br />
                  <li>
                    <span
                      className={`text-purple ${darkerGrotesqueBold.className}`}
                    >
                      Tools:
                    </span>{" "}
                    Figma, Miro, Trello, Jira, Google Suite
                  </li>
                </ul>
                <br />
              </div>
              <div className="flex-1">
                <p>
                  <span
                    className={`text-purple text-3xl ${darkerGrotesqueBold.className}`}
                  >
                    Experience
                  </span>
                </p>
                <p>
                  <span className={`${darkerGrotesqueBold.className}`}>
                    Lead User Experience Designer and Developer,
                  </span>{" "}
                  Founder: NaturalU, November 2020 - Present
                </p>
                <br />
                <p>
                  <span className={`${darkerGrotesqueBold.className}`}>
                    Product Designer,
                  </span>{" "}
                  Contract: KDIT Solutions, April 2024 - May 2024
                </p>
                <br />
                <p>
                  <span className={` ${darkerGrotesqueBold.className}`}>
                    Software Engineer,
                  </span>{" "}
                  Full-time: ADP July 2022 - December 2024
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p
                className={`text-purple text-3xl ${darkerGrotesqueBold.className}`}
              >
                Transferrable Skills
              </p>
              <ul>
                <li className="mb-2">
                  <span className={` ${darkerGrotesqueBold.className}`}>
                    User-Centric Thinking:{" "}
                  </span>
                  Understanding the end user’s needs and creating solutions that
                  provide a positive user experience is crucial in both fields.
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
                  {`When I'm not working, you'll often find me testing my
                  knowledge at trivia night, gearing up for my Muay Thai
                  classes, or immersing myself in video games. Additionally, I'm
                  endeavoring to carve out time once more for my artistic
                  pursuits like watercolor painting.`}
                </p>
              </div>
              <div className="relative flex-1 w-60 mb-8 md:w-96 md:mb-0">
                <Image src={watercolor} alt="waterolor painting" />
              </div>
            </div>
          </div>
        </main>
      )}
      {showContent && <Footer width={width} />}
    </div>
  );
}
