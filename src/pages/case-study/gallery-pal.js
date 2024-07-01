import { useState } from "react";
import Navbar from "@/components/navbar";
import heroImg from "../../../assets/capstone/gallerypal/gallery-pal-hero.svg";
import Hero from "@/components/hero";
import {
  myFont,
  darkerGrotesque,
  createImageArray,
  darkerGrotesqueBold,
} from "@/utils";
import Title from "@/components/title";
import Image from "next/image";
import Slider from "@/components/slider";
import MobileSlider from "@/components/mobile-slider";
import MobileNav from "@/components/mobile-nav";
import Footer from "@/components/footer";
import useWindowSize from "@/hooks/useWindowSize";
import CaseStudyFooter from "@/components/case-study-footer";

//images
import map from "../../../assets/capstone/gallerypal/map.png";
import interview from "../../../assets/capstone/gallerypal/interview.png";
import hmw from "../../../assets/capstone/gallerypal/HMW.png";
import crazyEight from "../../../assets/capstone/gallerypal/Crazy-8.png";
import screen1 from "../../../assets/capstone/gallerypal/screens/screen-1.png";
import screen2 from "../../../assets/capstone/gallerypal/screens/screen-2.png";
import screen3 from "../../../assets/capstone/gallerypal/screens/screen-3.png";
import screen4 from "../../../assets/capstone/gallerypal/screens/screen-4.png";
import screen5 from "../../../assets/capstone/gallerypal/screens/screen-5.png";
import screen6 from "../../../assets/capstone/gallerypal/screens/screen-6.png";
import screen7 from "../../../assets/capstone/gallerypal/screens/screen-7.png";
import screen8 from "../../../assets/capstone/gallerypal/screens/screen-8.png";
import screen9 from "../../../assets/capstone/gallerypal/screens/screen-9.png";
import screen10 from "../../../assets/capstone/gallerypal/screens/screen-10.png";
import screen11 from "../../../assets/capstone/gallerypal/screens/screen-11.png";
import screen12 from "../../../assets/capstone/gallerypal/screens/screen-12.png";
import screen13 from "../../../assets/capstone/gallerypal/screens/screen-13.png";

const highFidelityImages = [
  screen1,
  screen2,
  screen3,
  screen4,
  screen5,
  screen6,
  screen7,
  screen8,
  screen9,
  screen10,
  screen11,
  screen12,
  screen13,
];

export default function GalleryPal() {
  const { width } = useWindowSize();
  const [showContent, setShowContent] = useState(true);

  const updateContent = (state) => {
    setShowContent(state);
  };

  return (
    <div>
      {width <= 767 ? <MobileNav updateContent={updateContent} /> : <Navbar />}
      {showContent && <Hero image={heroImg} />}
      {showContent && (
        <main className="mx-auto w-80% flex flex-col gap-y-20 mt-16 mb-48">
          <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-16 ">
            <div className="flex flex-col gap-y-8 flex-1">
              <p className={` text-marron text-4xl ${myFont.className}`}>
                Problem
              </p>
              <p className={` text-2xl ${darkerGrotesque.className}`}>
                Art is intended to offer an experience accessible to all
                individuals. However, full immersion in the art world can be
                <span
                  className={`text-marron   ${darkerGrotesqueBold.className}`}
                >
                  {" "}
                  challenging if limited to wall descriptions alone
                </span>
                . Many museum visitors may{" "}
                <span
                  className={`text-marron  ${darkerGrotesqueBold.className}`}
                >
                  feel overwhelmed or miss crucial connections to the exhibits
                </span>
                . Gallery Pal aims to address this challenge by providing a
                solution.This project was completed as part of the UI/UX Design
                learning platform at Springboard
              </p>
            </div>
            <div className="flex flex-col gap-y-8 flex-1">
              <p className={` text-marron text-4xl ${myFont.className}`}>
                Solution
              </p>
              <p className={` text-2xl ${darkerGrotesque.className}`}>
                During this{" "}
                <span
                  className={`text-marron  ${darkerGrotesqueBold.className}`}
                >
                  {" "}
                  5 day sprint
                </span>{" "}
                I created Gallery Pal, which is an application{" "}
                <span
                  className={`text-marron  ${darkerGrotesqueBold.className}`}
                >
                  {" "}
                  dedicated to enhancing the museum experience by prioritizing
                  immersion
                </span>
                . Leveraging features like audio tours, map functionalities, and
                gamification, Gallery Pal aims to enrich the museum visit.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-10 md:flex-row md:gap-x-40">
            <div className="flex flex-col gap-y-2 md:gap-y-4">
              <p className={` text-marron text-4xl ${myFont.className}`}>
                My Role
              </p>
              <ul className="list-disc list-inside">
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  UX Design
                </li>
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  UX Research
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <p className={` text-marron text-4xl ${myFont.className}`}>
                Timeline
              </p>
              <ul className="list-disc list-inside">
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  1 week
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <p className={` text-marron text-4xl ${myFont.className}`}>
                Tools
              </p>
              <ul className="list-disc list-inside">
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  Pencil and Paper
                </li>
                <li className={` text-2xl ${darkerGrotesque.className}`}>
                  Figma
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <Title title={"Day One"} color="text-marron" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              {`On the initial day of the Sprint, I focus on comprehensively
              grasping the problem to understand how users interact with the
              Gallery Pal app. Subsequently, I engage in a discussion with an
              industry expert to explore ways to improve the app's map feature.
              Finally, I integrate insights gathered from the interview to
              identify specific elements to enhance within the product.`}
            </p>
          </div>
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-8 md:flex-1">
              <p className={`text-marron text-4xl ${myFont.className}`}>
                Expert Interview
              </p>
              <p className={` text-2xl ${darkerGrotesque.className}`}>
                I had the opportunity to listen to an interview featuring Lena,
                an art tour guide. During the interview, she shared her
                objectives as a guide and provided insights into the information
                and interactions that users find engaging during her guided
                tours.
              </p>
            </div>
            <div className="flex justify-center items-center w-full h-screen relative">
              <Image
                src={interview}
                className="object-contain"
                alt="expert itnerview image"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-8 md:flex-1">
              <p className={`text-marron text-4xl ${myFont.className}`}>
                How Might We
              </p>
              <p className={` text-2xl ${darkerGrotesque.className}`}>
                {`Following an interview with an expert well-versed in the world
                of museums and museum guides, I take notes on the insights
                gained and transform them into "How Might We" statements. This
                process helps me identify specific areas to focus on when
                formulating my product`}
              </p>
            </div>
            <div className="flex justify-center items-center w-full h-screen relative">
              <Image
                src={hmw}
                className="object-contain md:h-[50rem]"
                alt="how might we image"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <Title title={"Day Two"} color="text-marron" />
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              {`Following the information gathering phase during the mapping stage
              and the formulation of my "How Might We" statements, I moved on to
              sketching the crucial screens of the application. I utilized the
              Crazy-8s method to produce innovative design solutions for the
              Gallery app.`}
            </p>
          </div>
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-8 md:flex-1">
              <p className={`text-marron text-4xl ${myFont.className}`}>
                Crazy 8s Method
              </p>
              <p className={` text-2xl ${darkerGrotesque.className}`}>
                To generate a concrete solution, I allocate 8 minutes to sketch
                out the screens and flows I intend to implement for the Gallery
                Pal app.
              </p>
            </div>
            <div className="flex justify-center items-center w-full h-screen relative">
              <Image
                src={crazyEight}
                className="object-contain"
                alt="image of crazy-8s"
              />
            </div>
          </div>
          <Title title={"Day Three"} color="text-marron" />
          <div className="flex flex-col gap-y-8">
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              {`Before commencing the prototype phase, I gather notes, sketches,
              and my "How Might We" statements to determine a solution. I depict
              this solution through storyboarding, illustrating an initial flow
              and various features like gamification, map functionality, and
              audio tours.`}
            </p>
          </div>
          <div className="flex justify-center items-center w-full h-screen relative">
            <Image
              src={map}
              className="object-contain"
              alt="image of storyboarding"
            />
          </div>
          <Title title={"Day Four"} color="text-marron" />
          <div className="flex flex-col gap-y-8">
            <p className={`text-marron text-4xl ${myFont.className}`}>
              High Fidelity Screens
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              {`As the sprint nears its conclusion, I integrate elements from
              decision-making, sketching, and research phases to finalize the
              development of high-fidelity screens.`}
            </p>
          </div>
          {width <= 767 ? (
            <MobileSlider sliderData={createImageArray(highFidelityImages)} />
          ) : (
            <Slider sliderData={createImageArray(highFidelityImages)} />
          )}

          <div className="flex flex-col gap-y-8">
            <p className={`text-marron text-4xl ${myFont.className}`}>
              Prototype
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              During this phase, I swiftly develop a high-fidelity prototype,
              focusing on enabling users to perform the following actions:
              discovering a museum, selecting an exhibit to delve deeper into,
              accessing information about it via its about page, locating the
              exhibit on the map, utilizing the audio tour functionality,
              purchasing tickets for the museum, and ultimately exploring the
              gamification features on their profile.
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              In designing the screens, I prioritize using colors reminiscent of
              the interior of a book, as well as hues that evoke intelligence.
              These color choices aim to capture the essence of museums
              effectively.
            </p>
          </div>
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1);" }}
            className="w-full h-[40rem]"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F00NEHTtqEU4mUrMo7E55AK%2FGalleryPal%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D139-84%26viewport%3D1000%252C530%252C0.17%26t%3DVDQxHJu0tBzhFzBx-1%26scaling%3Dscale-down%26starting-point-node-id%3D139%253A84%26show-proto-sidebar%3D1%26mode%3Ddesign"
            allowfullscreen
          ></iframe>
          <Title title={"Day Five"} color="text-marron" />
          <div className="flex flex-col gap-y-8">
            <p className={`text-marron text-4xl ${myFont.className}`}>Test</p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              To conclude the sprint, I conducted usability testing on my
              prototype. During this phase, I enlisted 5 individuals to engage
              with the prototype, focusing their tasks on the actions
              prioritized in my design, as discussed in the prototype phase.
              Overall, all test participants found the flow easy to follow.
              While many users appreciated the map, audio, and gamification
              features, there were concerns regarding the readability of some
              text. To address this, I proposed implementing a zoom function and
              introducing a page to display purchased tickets.
            </p>
          </div>
          <div className="flex flex-col gap-y-8">
            <p className={`text-marron text-4xl ${myFont.className}`}>
              Reflection
            </p>
            <p className={` text-2xl ${darkerGrotesque.className}`}>
              Upon wrapping up this sprint, I feel a sense of fulfillment in
              transforming a concept from the brainstorming and ideation phases
              into a tangible product. I am confident that I have addressed many
              challenges faced by enthusiastic museum-goers. This design
              enhances learning engagement through its gamification, audio
              learning, and mapping features. Gallery Pal emerges as an
              invaluable tool for museum enthusiasts of all kinds.
            </p>
          </div>
          <CaseStudyFooter casestudy="Gallery Pal" />
        </main>
      )}
      {showContent && <Footer />}
    </div>
  );
}
