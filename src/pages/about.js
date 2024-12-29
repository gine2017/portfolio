import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import Image from "next/image";
import Link from "next/link";
import { darkerGrotesqueReg, darkerGrotesqueBold } from "@/utils";
import Footer from "@/components/footer";
import MobileNav from "@/components/mobile-nav";
import useWindowSize from "@/hooks/useWindowSize";

// images
import myphoto from "../../assets/about/me_2.png";
import mybrand from "../../assets/about/My_Brand.png";
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
          <div className="flex flex-col gap-8 md:gap-24">
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
                    {`Hello again! I'm Regine Thimothee, and I am currently employed as a Software Engineer at ADP. 
                    I graduated from Rochester Institute of Technology with a Bachelor of Science 
                    in`}{" "}
                    <span className={`${darkerGrotesqueBold.className}`}>
                      Web and Mobile Computing
                    </span>
                    .{" "}
                    {`During college, I particularly 
                    enjoyed my mobile design classes. However, I ultimately chose to pursue 
                    a path in front-end web development, which allowed me to combine my 
                    artistic and technical skills.`}
                  </p>
                </div>
                <br />
                <div>
                  <p>
                    {`After working alongside the design team at ADP, reflecting
                     on my career path, and refocusing on my passions, I've realized
                      that `}
                    <span className={`${darkerGrotesqueBold.className}`}>
                      UI/UX design is my true passion.
                    </span>{" "}
                    Now, I’m taking steps to utilize my knowledge of web
                    development to{" "}
                    <span className={`${darkerGrotesqueBold.className}`}>
                      bridge the communication between designers and developers
                      to create innovative solutions, user-center designs, and
                      technically sound designs
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
                <p>
                  <span className={` ${darkerGrotesqueBold.className}`}>
                    Design and UX Research Skills:
                  </span>
                   Figma, Miro,Wireframing, Persona Creation, User Interviewing,
                  Storytelling, Prototyping,User Flows,User Research, User
                  Interface Design,Information Architecture, Problem Solving, UX
                  Writing, Visual Communication,Critical Thinker, Strong
                  Communication
                </p>
                <br />
                <p>
                  <span className={` ${darkerGrotesqueBold.className}`}>
                    Technical Skills:{" "}
                  </span>
                  HTML5, CSS3, TailwindCSS, React, Javascript, Software Design
                  Patterns, Github / Github Desktop, Storybook, Trello, Unit
                  Testing, Node, Express, C#
                </p>
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
                    Product Designer,
                  </span>{" "}
                  Contract: KDIT Solutions, April 2024 - May 2024
                </p>
                <br />
                <p>
                  <span className={`${darkerGrotesqueBold.className}`}>
                    Lead User Experience Designer and Developer,
                  </span>{" "}
                  Founder: NaturalU, November 2020 - Present
                </p>
                <br />
                <p>
                  <span className={` ${darkerGrotesqueBold.className}`}>
                    Software Engineer,
                  </span>{" "}
                  Full-time: ADP July 2022 - December 2024
                </p>
                <br />
              </div>
            </div>
            <div className="flex flex-col">
              <p
                className={`text-purple text-3xl ${darkerGrotesqueBold.className}`}
              >
                Transferrable Skills
              </p>
              <ul className="list-disc list-inside">
                <li>
                  <span className={` ${darkerGrotesqueBold.className}`}>
                    User-Centric Thinking:{" "}
                  </span>
                  Understanding the end user’s needs and creating solutions that
                  provide a positive user experience is crucial in both fields.
                </li>
                <li>
                  <span className={` ${darkerGrotesqueBold.className}`}>
                    Collaboration:{" "}
                  </span>
                  Working effectively with cross-functional teams, including
                  developers, designers, and stakeholders, is essential.
                </li>
                <li>
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
            <div className="flex flex-col gap-y-8">
              <Title title={"My Brand"} />
              <div className="w-full">
                <Image src={mybrand} alt="brand colors, font, and logo" />
              </div>
              <div className="bg-orange hover:bg-[#DA8600] ml-6 w-48 h-14 rounded-3xl text-3xl text-white flex justify-center">
                <Link
                  href={
                    "https://www.figma.com/file/HjWKivBTvFUTIWzx0N0Il5/Portfolio?type=design&node-id=118%3A1698&mode=design&t=iBWJ6z9TOGjaqo3d-1"
                  }
                  className="mt-1"
                >
                  Figma File
                </Link>
              </div>
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
      {showContent && <Footer />}
    </div>
  );
}
