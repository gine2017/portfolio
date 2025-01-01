import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/navbar";
import MobileNav from "@/components/mobile-nav";
import useWindowSize from "@/hooks/useWindowSize";
import Footer from "@/components/footer";
import CaseStudyFooter from "@/components/case-study-footer";
import ZoomableImage from "@/components/zoomable-image";
import ImageRow from "@/components/image-row";
import Hero from "@/components/hero";
import { myFont, darkerGrotesque, darkerGrotesqueBold } from "@/utils";

//images
import brand from "../../assets/capstone/portfolio/My Brand.png";
import vscode from "../../assets/capstone/portfolio/vscode.png";
import oldVersion from "../../assets/capstone/portfolio/home.png";
import newVersion from "../../assets/capstone/portfolio/re-designed.png";
import portfolioHero from "../../assets/capstone/portfolio/portfolio-case-study-hero.svg";

const portfolioVersions = [oldVersion, newVersion];

export default function Portfolio() {
  const [showContent, setShowContent] = useState(true);
  const { width } = useWindowSize();
  const caseStudyRef = useRef(null);

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
          image={portfolioHero}
          width={width}
          color={"#FFFFFF"}
          arrowClick={handleArrowClick}
        />
      )}
      {showContent && (
        <main
          className="w-4/5 mx-auto flex flex-col gap-y-20 mt-16 mb-48"
          ref={caseStudyRef}
        >
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p
              className={` text-purple text-3xl md:text-5xl ${myFont.className}`}
            >
              Bridging Creativity and Code
            </p>
            <p className={`text-2xl ${darkerGrotesque.className}`}>
              I built my portfolio from scratch to showcase my{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                unique ability
              </span>{" "}
              to{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                turn design ideas
              </span>{" "}
              into{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                development-ready solutions
              </span>
              . This project reflects how I{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                think, solve problems
              </span>
              , and act as the{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                bridge
              </span>{" "}
              between{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                design
              </span>{" "}
              and{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                front-end development
              </span>
              . By blending{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                technical skills
              </span>{" "}
              with{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                design precision
              </span>
              , I created an{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                interactive experience
              </span>{" "}
              that brings ideas to life—bridging{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                creativity
              </span>{" "}
              and{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                functionality
              </span>
              .
            </p>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <p
              className={` text-purple text-3xl md:text-5xl ${myFont.className}`}
            >
              Laying the foundation
            </p>
            <div className={`text-2xl ${darkerGrotesque.className}`}>
              I started by establishing a solid{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                brand foundation
              </span>{" "}
              to ensure my portfolio reflects my identity. I carefully chose:
              <ul className="list-decimal ml-12">
                <li>
                  <span
                    className={`text-purple ${darkerGrotesqueBold.className}`}
                  >
                    Colors
                  </span>
                  :
                  <ul className="list-disc ml-12">
                    <li>#3C0092 (purple) for creativity and strength</li>
                    <li>#F9A620 (orange) for optimism and energy</li>
                    <li>#91A6FF (light blue) for clarity and calmness</li>
                    <li>#FBB7C0 (pink) for warmth</li>
                    <li>#FF0035 (red) for passion and boldness</li>
                  </ul>
                </li>
                <li>
                  <span
                    className={`text-purple ${darkerGrotesqueBold.className}`}
                  >
                    Typography
                  </span>
                  :
                  <span
                    className={`text-purple ${darkerGrotesqueBold.className}`}
                  >
                    {" "}
                    Black Mango
                  </span>{" "}
                  and{" "}
                  <span
                    className={`text-purple ${darkerGrotesqueBold.className}`}
                  >
                    Darker Grotesque
                  </span>{" "}
                  for modernity and readability
                </li>

                <li>
                  <span
                    className={`text-purple ${darkerGrotesqueBold.className}`}
                  >
                    Logo
                  </span>{" "}
                  that complements these elements and reflects my core values
                </li>
              </ul>
              <br />
              This foundation set the visual tone for my portfolio, showcasing
              my work while expressing my{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                design thinking
              </span>{" "}
              and{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                personal identity
              </span>
              .
            </div>
            <ZoomableImage image={brand} />
          </div>
          <div
            className={`flex flex-col gap-y-8 md:mx-auto md:w-3/4 text-2xl ${darkerGrotesque.className}`}
          >
            <p
              className={`text-purple text-3xl md:text-5xl ${myFont.className}`}
            >
              Improving Through Insights
            </p>
            <p>
              Design is an iterative process, and my portfolio evolved
              significantly from its initial concept. I took time to gather{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                insights
              </span>{" "}
              from other{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                designers
              </span>{" "}
              in the industry to refine the design in the next iteration. By
              comparing the{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                older version
              </span>{" "}
              with the{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                new design
              </span>
              , you can see how I improved{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                clarity
              </span>
              ,{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                focus
              </span>
              , and{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                visual appeal
              </span>
              , ensuring that every element serves a clear purpose.
            </p>
            <p>
              Visuals: Side-by-side comparison of your older and newer Figma
              designs.
            </p>
            <ImageRow images={portfolioVersions} />
          </div>

          <div
            className={`flex flex-col gap-y-8 md:mx-auto md:w-3/4 text-2xl ${darkerGrotesque.className}`}
          >
            <p
              className={` text-purple text-3xl md:text-5xl ${myFont.className}`}
            >
              Bringing Designs to Life
            </p>
            <p>
              Translating the design into a fully functional website was where
              my
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                {" "}
                development skills{" "}
              </span>{" "}
              shined. Working in
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                {" "}
                VSCode{" "}
              </span>
              , I built custom
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                {" "}
                components{" "}
              </span>{" "}
              and wrote clean, maintainable code to create a
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                {" "}
                responsive{" "}
              </span>
              , interactive portfolio. Challenges like ensuring
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                {" "}
                cross-browser compatibility{" "}
              </span>{" "}
              and seamless
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                {" "}
                responsiveness{" "}
              </span>{" "}
              helped me further hone my
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                {" "}
                technical expertise{" "}
              </span>
              .
            </p>
            <ZoomableImage image={vscode} />
          </div>
          <div
            className={`flex flex-col gap-y-8 md:mx-auto md:w-3/4 text-2xl ${darkerGrotesque.className}`}
          >
            <p
              className={` text-purple text-3xl md:text-5xl ${myFont.className}`}
            >
              Being the Ultimate Translator
            </p>
            <p>
              Building this portfolio reinforced my role as the{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                ultimate translator
              </span>{" "}
              between{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                design
              </span>{" "}
              and{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                development
              </span>
              , aligning{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                creative vision
              </span>{" "}
              with{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                technical execution
              </span>
              . The result is a portfolio that blends{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                creativity
              </span>{" "}
              and{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                functionality
              </span>
              , showcasing{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                responsive layouts
              </span>{" "}
              and my{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                design thinking process
              </span>
              , with every detail crafted to reflect my{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                skills
              </span>
              . Moving forward, I’ll continue{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                refining
              </span>{" "}
              the portfolio, incorporating{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                feedback
              </span>
              , and adding{" "}
              <span className={`text-purple ${darkerGrotesqueBold.className}`}>
                new projects
              </span>{" "}
              to further bridge the gap between creativity and technology.
            </p>
          </div>

          <CaseStudyFooter casestudy="Portfolio creation" />
        </main>
      )}
      {showContent && <Footer />}
    </div>
  );
}
