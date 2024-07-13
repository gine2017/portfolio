import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import selfIllustration from "../../assets/my_illustration.svg";
import Footer from "@/components/footer";
import {
  myFont,
  myFontBold,
  darkerGrotesque,
  darkerGrotesqueBold,
} from "@/utils";
import MobileNav from "@/components/mobile-nav";
import useWindowSize from "@/hooks/useWindowSize";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//images
import testwise from "../../assets/test wise.png";
import naturalU from "../../assets/naturalU.png";
import modernAttire from "../../assets/modern attire.png";
import gatherly from "../../assets/gatherly.png";
import galleryPal from "../../assets/gallery pal.png";

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

  return (
    <div>
      {width <= 767 ? <MobileNav updateContent={updateContent} /> : <Navbar />}
      {showContent && (
        <main className="w-4/5 mx-auto flex flex-col mt-16 gap-10 md:gap-32 md:mt-36">
          <header className="flex flex-col gap-8  md:gap-32 xl:flex-row">
            <div className="flex flex-col gap-8 flex-1">
              <div
                className={`text-purple text-5xl md:text-8xl ${myFont.className}`}
              >
                {`Hi, I'm Regine`}
              </div>
              <div
                className={`text-2xl md:text-4xl whitespace-pre-wrap ${darkerGrotesque.className}`}
              >
                {`I'm a User Experience Designer with a web development background passionate about, `}
                <span className={`${darkerGrotesqueBold.className}`}>
                  {`bridging design and development\n`}
                </span>
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
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row ">
              <div className="relative flex-1 group hover:cursor-pointer">
                <Link href={"/case-study/testwise"}>
                  <Image src={testwise} alt="Natural U case study" />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity"></div>
                  <div
                    className={`${myFontBold.className} text-center text-2xl md:text-4xl  absolute inset-0 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity`}
                  >
                    Test Wise
                    <br /> Requirements Dashboard
                  </div>
                </Link>
              </div>
              <div className="relative flex-1 group">
                <Link href={"/case-study/natural-u"}>
                  <Image src={naturalU} alt="Natural U case study" />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity"></div>
                  <div
                    className={`${myFontBold.className} text-center text-2xl md:text-4xl  absolute inset-0 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity`}
                  >
                    NaturalU
                    <br /> Hair Education
                  </div>
                </Link>
              </div>
            </div>
            <div className="relative flex-1 group">
              <Link href={"/case-study/modern-attire"}>
                <Image src={modernAttire} alt="Natural U case study" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity"></div>
                <div
                  className={`${myFontBold.className} text-center text-2xl md:text-4xl  absolute inset-0 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity`}
                >
                  Modern Attire
                  <br /> Elegant suits
                </div>
              </Link>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="relative flex-1 group">
                <Link href={"/case-study/gatherly"}>
                  <Image src={gatherly} alt="Natural U case study" />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity"></div>
                  <div
                    className={`${myFontBold.className} text-center text-2xl md:text-4xl absolute inset-0 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity`}
                  >
                    Gatherly <br /> Build community
                  </div>
                </Link>
              </div>
              <div className="relative flex-1 group">
                <Link href={"/case-study/gallery-pal"}>
                  <Image src={galleryPal} alt="Natural U case study" />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity"></div>
                  <div
                    className={`${myFontBold.className} text-center text-2xl md:text-4xl  absolute inset-0 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity`}
                  >
                    Gallery Pal <br /> Explore Museums
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </main>
      )}
      {showContent && <Footer />}
    </div>
  );
}
