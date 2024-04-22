import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import Image from "next/image";
import { darkerGrotesqueReg, darkerGrotesqueBold } from "@/utils";
import Footer from "@/components/footer";
import MobileNav from "@/components/mobile-nav";
import useWindowSize from "@/hooks/useWindowSize";

// images
import myphoto from "../../assets/about/me.png";
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
          className={` ${`text-2xl ${darkerGrotesqueReg.className}`} w-4/5 mx-auto flex flex-col gap-y-8 mt-16 md:gap-32 md:mt-36 `}
        >
          <div className="flex flex-col gap-8 md:gap-28">
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
                    Hello again! I'm Regine Thimothee, currently employed as an
                    associate web developer at ADP. Since childhood and
                    throughout my college years, I've had a deep affinity for
                    art and design
                  </p>
                </div>
                <br />
                <div>
                  <p>
                    During college, I particularly enjoyed my UI/UX and mobile
                    design classes, although I ultimately chose to pursue a path
                    in front-end web development, which allowed me to combine
                    both my artistic and technical skills.
                  </p>
                </div>
                <br />
                <div>
                  <p>
                    After reflecting on my career path, I've come to realize
                    that UI/UX design is where my true passion lies. Now, I'm
                    taking steps to transition into a career in UI/UX .
                  </p>
                </div>
              </div>
            </div>
            <Title title={"My Awesome Skills"} />
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="flex-1">
                <p className={`text-purple ${darkerGrotesqueBold.className}`}>
                  Key Skills
                </p>
                <p>
                  <span className={` ${darkerGrotesqueBold.className}`}>
                    Design and UX Research Skills:
                  </span>
                   Figma, Wireframing, Persona, User Interviewing, Storytelling,
                  Prototyping,User Flows,User Research, User Interface
                  Design,Information Architecture, Problem Solving, Visual
                  Communication,Critical Thinker, Strong Communication
                </p>
                <br />
                <p>
                  <span className={` ${darkerGrotesqueBold.className}`}>
                    Technical Skills:
                  </span>
                   HTML5, CSS3, Javascript, Software Design Patterns, Github /
                  Github Desktop, Storybook, Typescript, Trello, React, Unit
                  Testing
                </p>
              </div>
              <div className="flex-1">
                <p>
                  <span
                    className={`text-purple ${darkerGrotesqueBold.className}`}
                  >
                    Experience
                  </span>
                </p>
                <p>Associate Developer, Full-time: ADP July 2022 - Present</p>
                <br />
                <p>
                  Front End Developer, Part-time: RDI Diamonds, October 2021 -
                  May 2022
                </p>
                <br />
                <p>
                  Front End Engineer Intern: Beacon Biosignals, May 2021- August
                  2021
                </p>
              </div>
            </div>
            <Title title={"My Brand"} />

            <div className="w-full">
              <Image src={mybrand} alt="brand colors, font, and logo" />
            </div>

            <Title title={"How I Chill"} />

            <div className="flex flex-col md:flex-row gap-x-24">
              <div className="flex-1">
                <p>
                  When I'm not working, you'll often find me testing my
                  knowledge at trivia night, gearing up for my Muay Thai
                  classes, or immersing myself in video games. Additionally, I'm
                  endeavoring to carve out time once more for my artistic
                  pursuits like watercolor painting.
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
