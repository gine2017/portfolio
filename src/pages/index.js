import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import selfIllustration from "../../assets/my_illustration.svg";
import Footer from "@/components/footer";
import { myFont, darkerGrotesque, darkerGrotesqueBold } from "@/utils";
import CaseStudy from "@/components/case-study";
import MobileNav from "@/components/mobile-nav";
import Title from "@/components/title";
import useWindowSize from "@/hooks/useWindowSize";
import MobileSlider from "@/components/mobile-slider";
import Slider from "@/components/slider";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//images
import techWork1 from "../../assets/technical-work/tech-work-1.png";
import techWork2 from "../../assets/technical-work/tech-work-2.png";
import techWork3 from "../../assets/technical-work/tech-work-3.png";
import techWork4 from "../../assets/technical-work/tech-work-4.png";

export default function Home() {
  const [showContent, setShowContent] = useState(true);
  const { width } = useWindowSize();

  useEffect(() => {
    if (showContent) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, []);

  const updateContent = (state) => {
    setShowContent(state);
  };

  const sliderData = [
    {
      subtitle:
        "In this project, I developed a profile page using React, Typescript, TailwindCSS, and Storybook to educate others on the fundamentals of these four technologies. Additionally, I designed the project's layout in Figma.",
      link: "https://github.com/gine2017/Profile-page-tutorial",
      image: techWork1,
    },
    {
      subtitle:
        "Goblin Destroyer is a personal project in where I used the iOS Spritekit framework to create a game",
      link: "",
      image: techWork2,
    },
    {
      subtitle:
        "The objective of this project was to redesign RIT's School of Information while also gaining an understanding of dependency injection and MVC pattern.",
      link: "https://github.com/gine2017/RIT-IST-Project-3",
      image: techWork3,
    },
    {
      subtitle:
        "The goal of this project was to replicate the IST website by utilizing jQuery to fetch data and dynamically generate elements.",
      link: "https://github.com/gine2017/RIT-IST-page-jquery",
      image: techWork4,
    },
  ];

  return (
    <div>
      {width <= 767 ? <MobileNav updateContent={updateContent} /> : <Navbar />}
      {showContent && (
        <main className="w-4/5 mx-auto flex flex-col mt-16 gap-10 md:gap-32 md:mt-36">
          <header className="flex flex-col gap-8 my-16 md:gap-32 xl:flex-row">
            <div className="flex flex-col gap-8 flex-1">
              <div
                className={`text-purple text-5xl md:text-8xl ${myFont.className}`}
              >
                {`Hi, I'm Regine`}
              </div>
              <div
                className={`text-2xl md:text-4xl whitespace-pre-wrap ${darkerGrotesque.className}`}
              >
                {`I'm a UI/UX designer with a background in web development `}
                <span className={`${darkerGrotesqueBold.className}`}>
                  bridging design and development
                </span>{" "}
                {`to create thoughtful user experiences.\n`}
                <p>
                  Skilled in{" "}
                  <span className={`${darkerGrotesqueBold.className}`}>
                    UI Design, Prototyping, and Visual Communication
                  </span>
                </p>
                Currently: Associate Developer @
                <span className={`${darkerGrotesqueBold.className}`}>ADP</span>
              </div>
              <FontAwesomeIcon
                icon={faArrowDown}
                size="3x"
                color="#3C0092"
                className="animate-bounce mt-8"
              />
            </div>
            <div className="relative flex-1 w-full md:w-1/2 lg:w-2/3 xl:w-3/4">
              <Image
                src={selfIllustration}
                alt="svg illustration of Regine"
                className="w-full h-auto"
              />
            </div>
          </header>

          <CaseStudy />
          <Title title={"Technical Work"} />
          {width <= 767 && showContent ? (
            <MobileSlider sliderData={sliderData} />
          ) : (
            <Slider sliderData={sliderData} />
          )}
        </main>
      )}
      {showContent && <Footer />}
    </div>
  );
}
