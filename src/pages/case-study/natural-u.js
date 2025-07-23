import useWindowSize from "@/hooks/useWindowSize";
import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/navbar";
import MobileNav from "@/components/mobile-nav";
import Image from "next/image";
import { darkerGrotesqueTitle, interBody, interBold } from "@/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zoomImage } from "@/utils";
import {
  faBookBookmark,
  faLightbulb,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Footer from "@/components/footer";
import CaseStudyFooter from "@/components/case-study-footer";

//images
import screen1 from "../../../assets/capstone/naturalu/screens/screen1.png";
import screen11 from "../../../assets/capstone/naturalu/screens/screen11.png";
import screen10 from "../../../assets/capstone/naturalu/screens/screen10.png";
import screen12 from "../../../assets/capstone/naturalu/screens/screen12.png";
import screen13 from "../../../assets/capstone/naturalu/screens/screen13.png";
import screen14 from "../../../assets/capstone/naturalu/screens/screen14.png";
import screen15 from "../../../assets/capstone/naturalu/screens/screen15.png";
import screen16 from "../../../assets/capstone/naturalu/screens/screen16.png";
import screen17 from "../../../assets/capstone/naturalu/screens/screen17.png";
import screen19 from "../../../assets/capstone/naturalu/screens/screen19.png";
import screen20 from "../../../assets/capstone/naturalu/screens/screen20.png";

export default function NaturalU() {
  const { width } = useWindowSize();
  const [showContent, setShowContent] = useState(true);
  const [zoomedOutcomeIndex, setZoomedOutcomeIndex] = useState(null);

  const updateContent = (state) => {
    setShowContent(state);
  };

  const handleClick = (index) => {
    setZoomedOutcomeIndex((prev) => (prev === index ? null : index));
  };

  const highFidelity = [
    screen1,
    screen11,
    screen10,
    screen12,
    screen13,
    screen14,
    screen15,
    screen16,
    screen17,
    screen19,
    screen20,
  ];

  return (
    <>
      <Head>
        <title>NaturalU Case Study</title>
      </Head>
      {width <= 767 ? <MobileNav updateContent={updateContent} /> : <Navbar />}

      {showContent && (
        <main className="mx-auto w-80% flex flex-col gap-y-20 mt-16 mb-48">
          <div className=" h-[35rem] w-full relative  bg-naturalu-purple">
            <div className="flex justify-center items-center h-full">
              <div className="w-[20rem] h-[30rem] relative">
                <Image
                  src={screen1}
                  alt="Testwise Dashboard Image"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="w-[20rem] h-[30rem] relative">
                <Image
                  src={screen11}
                  alt="Testwise Kanban Image"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="w-[20rem] h-[30rem] relative">
                <Image
                  src={screen13}
                  alt="Testwise Dashboard Image"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
          <h1
            className={`flex justify-center text-naturalu-purple ${darkerGrotesqueTitle.className} text-6xl`}
          >
            NaturalU Case Study
          </h1>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h3
              className={`text-naturalu-purple text-5xl ${darkerGrotesqueTitle.className}`}
            >
              Overview
            </h3>
            <div className={`text-2xl leading-relaxed ${interBody.className}`}>
              <p>
                Black women were struggling with inadequate natural hair
                education while facing persistent social pressure to alter their
                appearance. Years of promoting chemical treatments over natural
                styles had created cycles of hair damage and diminished
                self-acceptance. I designed NaturalU to break this cycle,
                focusing on building a supportive educational community where
                women could learn proper techniques and share experiences. The
                result: a platform that transforms hair care from a source of
                struggle into a celebration of natural beauty, empowering users
                to confidently embrace their authentic selves.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h3
              className={`text-naturalu-purple text-5xl ${darkerGrotesqueTitle.className}`}
            >
              Design Process
            </h3>
            <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
              <div className="flex flex-col gap-y-4 md:flex-row justify-evenly">
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon
                    icon={faBookBookmark}
                    size="4x"
                    color="#6E30FF"
                  />
                  <div>
                    <p
                      className={` text-3xl text-naturalu-purple mt-4 text-center  ${interBold.className}`}
                    >
                      Research
                    </p>
                    <p>Scientific Study</p>
                    <p>Persona</p>
                  </div>
                </div>
                <div className="flex flex-col  items-center">
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    size="4x"
                    color="#6E30FF"
                  />
                  <div>
                    <p
                      className={` text-3xl text-naturalu-purple mt-4 text-center  ${interBold.className}`}
                    >
                      Ideate
                    </p>
                    <p>Sketeches</p>
                    <p>User flow</p>
                  </div>
                </div>
                <div className="flex flex-col  items-center">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    size="4x"
                    color="#6E30FF"
                  />
                  <div>
                    <p
                      className={` text-3xl text-naturalu-purple mt-4 text-center ${interBold.className}`}
                    >
                      Design
                    </p>
                    <p>Styleguide</p>
                    <p>UI Components</p>
                    <p>High Fidelity Screens</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 md:mx-auto md:w-3/4">
            <h3
              className={`text-naturalu-purple text-5xl ${darkerGrotesqueTitle.className}`}
            >
              Outcome
            </h3>
            <p
              className={`${interBody.className} italic text-md text-center  pt-4`}
            >
              Click on each image to enlarge
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {highFidelity.map((img, index) => {
                return (
                  <div
                    className={`relative w-[45%]  group cursor-pointer`}
                    onClick={() => handleClick(index)}
                    key={index}
                  >
                    <Image
                      src={img}
                      alt="Test Wise final screen"
                      className="object-contain w-full  "
                      style={
                        zoomedOutcomeIndex === index
                          ? zoomImage(true, true)
                          : {}
                      }
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
                  </div>
                );
              })}
            </div>
          </div>
          <Link
            href="/extended/naturalU-extended"
            className={`text-2xl text-naturalu-purple flex animate ${interBold.className} hover:underline cursor-pointer`}
          >
            View the full case study here →
          </Link>
          <CaseStudyFooter casestudy="NaturalU" />
        </main>
      )}
      {showContent && <Footer width={width} />}
    </>
  );
}
