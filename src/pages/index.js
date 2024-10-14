import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import WavyText from "@/components/wavy-text";
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
import gatherly from "../../assets/gatherly.png";
import illustrations from "../../assets/illustrations.png";

export default function Home() {
  const [showContent, setShowContent] = useState(true);
  const { width } = useWindowSize();
  const [textIndex, setTextIndex] = useState(0);
  const textRef = useRef(null);
  const translatedText = [
    "ultimate translator",
    "traducteur ultime",
    "traductor último",
    "tradutor definitivo",
  ];

  useEffect(() => {
    if (showContent) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % translatedText.length);
      textRef.current.style.animation = "none"; // Reset animation
      textRef.current.offsetHeight; // Trigger reflow
      textRef.current.style.animation =
        "typing 2s steps(30, end), blink .75s step-end infinite"; // Restart animation
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
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
                <WavyText text="Hi, I'm Regine" styles="flex" />
              </div>
              <div
                className={`text-2xl md:text-4xl whitespace-pre-wrap ${darkerGrotesque.className}`}
              >
                <WavyText
                  text="I'm a User Experience Designer passionate about being the "
                  styles="whitespace-pre-line"
                />
                <br />
                <span
                  className={`text-purple  dynamic-text overflow-hidden inline-block whitespace-nowrap align-baseline ${darkerGrotesqueBold.className}`}
                  ref={textRef}
                >
                  {translatedText[textIndex]}
                </span>
                <div></div>
                <WavyText
                  styles="whitespace-pre-line"
                  text=" bridging design and development to create user-first solutions"
                />
              </div>
              <FontAwesomeIcon
                icon={faArrowDown}
                size="3x"
                color="#3C0092"
                className="animate-bounce mt-8"
              />
            </div>
            <div className="relative flex-1 w-full md:w-1/2 lg:w-2/3 xl:w-3/4">
              <svg
                viewBox="0 0 496 446"
                fill="none"
                className="myIllustration w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="my_illustration">
                  <path
                    id="Ellipse 18"
                    d="M495.772 201.136C495.772 327.435 378.509 446 255.947 446C133.384 446 34.0281 351.373 34.0281 234.644C34.0281 117.915 168.97 -64.9916 255.947 23.2882C342.923 111.568 495.772 74.8382 495.772 201.136Z"
                    fill="#3C0092"
                  />
                  <g id="illustration">
                    <g id="hair">
                      <path
                        id="Vector 32"
                        d="M197.603 250.691C211.761 267.206 213.787 262.32 219.673 259.04L240.405 74.7138C231.887 72.4404 227.348 70.153 219.673 64.4378C206.537 65.997 201.568 69.3821 197.603 80.4941H179.545C167.428 87.907 164.667 93.6586 165.5 106.184C150.803 110.996 144.252 116.75 138.08 137.012C138.533 147.996 140.394 152.23 148.781 153.711C141.425 165.36 142.803 170.119 148.781 177.474C139.24 186.443 136.719 193.23 138.08 208.944C143.401 221.147 147.544 224.565 158.144 221.147C158.296 230.513 159.826 233.586 165.5 234.634H179.545C178.23 251.652 185.187 251.307 197.586 250.691L197.603 250.691Z"
                        fill="#170101"
                      />
                      <path
                        id="Vector 33"
                        d="M276.813 250.691C262.655 267.206 260.629 262.32 254.743 259.04L234.01 74.7139C242.528 72.4405 247.068 70.1531 254.743 64.4379C267.879 65.997 272.847 69.3822 276.813 80.4941H294.87C306.987 87.9071 309.749 93.6587 308.915 106.184C323.612 110.997 330.164 116.75 336.336 137.012C335.882 147.996 334.022 152.23 325.635 153.711C332.991 165.36 331.612 170.119 325.635 177.474C335.176 186.443 337.696 193.23 336.336 208.944C331.014 221.147 326.872 224.565 316.272 221.147C316.119 230.513 314.59 233.586 308.915 234.634H294.87C296.186 251.652 289.229 251.307 276.829 250.691L276.813 250.691Z"
                        fill="#170101"
                      />
                    </g>
                    <g id="left arm">
                      <path
                        id="Rectangle 21"
                        d="M219.265 301.073C215.031 292.295 212.17 292.268 201.914 291.613C201.914 291.613 171.949 301.019 152.808 311.704C132.298 323.154 102.327 348.58 102.327 348.58C102.327 348.58 109.331 387.478 122.066 388.985C134.801 390.492 218.347 309.222 219.265 301.073Z"
                        fill="#814517"
                      />
                      <g id="upperArm">
                        <path
                          id="formarm"
                          d="M93.164 272.843L68.2713 266.543C68.2713 266.543 75.3315 304.531 84.6973 330.241C94.0631 355.951 116.272 385.5 116.272 385.5C125.393 390.742 129.75 388.293 136.772 377C126.686 333.433 117.473 314.282 93.164 272.843Z"
                          fill="#814517"
                        />
                        <path
                          id="hand"
                          d="M79.5101 279.229C68.7617 282.325 62.8671 255.573 57.2484 238.957C57.2484 238.957 52.1449 207.742 55.5795 207.49C59.014 207.237 66.5796 233.909 66.5796 233.909C66.5796 233.909 60.8518 202.647 66.5796 201.785C72.3074 200.924 76.6841 232.829 76.6841 232.829C76.6841 232.829 77.2145 200.969 81.668 198.448C86.1215 195.927 85.6376 230.687 85.6376 230.687C85.6376 230.687 90.978 198.631 95.9604 199.968C100.943 201.305 96.7297 246.373 96.7297 246.373C106.95 235.408 111.281 233.28 116.85 235.577L104.184 259.684L94.8476 276.254L79.5101 279.229Z"
                          fill="#814517"
                        />
                      </g>
                    </g>
                    <g id="neck">
                      <rect
                        id="neck_2"
                        width="52.4083"
                        height="76.5222"
                        transform="matrix(-1 0 0 1 268.167 227.926)"
                        fill="#814517"
                      />
                      <path
                        id="shadow"
                        d="M266.809 246.282L214.458 248.73L239.949 264.969L266.809 246.282Z"
                        fill="#170101"
                      />
                    </g>
                    <g id="head">
                      <ellipse
                        id="head_2"
                        cx="73.6683"
                        cy="71.6169"
                        rx="73.6683"
                        ry="71.6169"
                        transform="matrix(-1 0 0 1 309.992 109.544)"
                        fill="#814517"
                      />
                      <path
                        id="bang"
                        d="M280.936 108.541C294.827 114.806 319.515 144.515 313.498 147.374C307.482 150.233 314.963 160.955 300.171 170.126C285.379 179.296 285.447 151.822 289.385 148.124C280.973 151.814 277.796 152.737 272.89 153.82C264.719 152.791 259.668 153.605 257.257 135.55C248.451 145.706 244.718 141.514 237.288 137.186C229.965 144.949 226.622 141.133 220.463 131.617C221.487 141.933 215.059 146.321 206.669 148.879C198.28 151.438 192.615 151.989 191.014 144.183C189.413 136.377 193.948 155.365 184.975 160.616C174.525 163.288 160.689 159.237 156.956 150.372C154.499 144.537 159.369 134.905 162.848 127.585C171.611 109.143 231.215 92.6752 280.936 108.541Z"
                        fill="#170101"
                      />
                      <g id="lipd">
                        <path
                          id="Vector 34"
                          d="M236.89 228.754C228.654 228.754 225.087 225.577 223.33 218.444C234.477 221.488 239.983 221.484 250.83 218.444C246.756 226.823 245.126 228.754 236.89 228.754Z"
                          fill="#46260C"
                        />
                        <path
                          id="Line 8"
                          d="M216.935 215.867C234.331 223.681 240.918 222.856 256.586 215.867"
                          stroke="#0F0101"
                        />
                        <path
                          id="Vector 35"
                          d="M232.284 211.356C227.889 211.544 225.19 213.848 223.33 217.8C233.248 221.746 240.645 221.841 250.191 217.8C248.239 213.71 246.154 211.386 241.877 211.356L236.761 213.289L232.284 211.356Z"
                          fill="#46260C"
                        />
                      </g>
                    </g>
                    <path
                      id="left ear"
                      d="M158.179 181.07C164.469 180.099 170.639 184.106 170.639 184.106L171.974 212.979C159.781 213.812 156.837 209.13 149.225 196.535C148.816 186.779 151.888 182.042 158.179 181.07Z"
                      fill="#814517"
                    />
                    <path
                      id="left ear_2"
                      d="M313.311 184.444C307.02 183.473 300.851 187.48 300.851 187.48L299.516 216.353C311.708 217.186 314.653 212.504 322.264 199.909C322.674 190.152 319.601 185.415 313.311 184.444Z"
                      fill="#814517"
                    />
                    <g id="left arm_2">
                      <path
                        id="Rectangle 21_2"
                        d="M287.874 292.381L277.229 318.629L353.25 422.167C357.727 418.944 400.831 402.921 401.215 384.785C401.6 366.65 304.862 292.071 287.874 292.381Z"
                        fill="#814517"
                      />
                    </g>
                    <g id="dress">
                      <path
                        id="dress_2"
                        d="M316.272 306.072C301.995 296.614 295.768 293.154 283.319 291.318H235.289L237.944 445.91H279.099C321.268 391.7 329.961 352.7 316.272 306.072Z"
                        fill="#F9A620"
                      />
                      <path
                        id="dress_3"
                        d="M164.361 306.072C178.219 296.614 184.263 293.154 196.345 291.318H242.963L240.386 445.91H200.441C159.513 391.7 151.075 352.7 164.361 306.072Z"
                        fill="#F9A620"
                      />
                    </g>
                    <path
                      id="neckline"
                      d="M236.78 331.419C236.78 331.419 198.369 307.14 216.295 290.673L267.458 290.673C279.861 296.154 236.78 331.419 236.78 331.419Z"
                      fill="#814517"
                    />
                    <g id="glasses">
                      <path
                        id="Ellipse 16"
                        d="M241.495 177.848C241.495 190.391 251.515 200.546 263.86 200.546C276.206 200.546 286.226 190.391 286.226 177.848C286.226 165.306 276.206 155.151 263.86 155.151C251.515 155.151 241.495 165.306 241.495 177.848Z"
                        stroke="black"
                      />
                      <path
                        id="Ellipse 17"
                        d="M182.342 177.848C182.342 190.391 192.362 200.546 204.707 200.546C217.052 200.546 227.072 190.391 227.072 177.848C227.072 165.306 217.052 155.151 204.707 155.151C192.362 155.151 182.342 165.306 182.342 177.848Z"
                        stroke="black"
                      />
                      <line
                        id="Line 3"
                        y1="-0.5"
                        x2="15.771"
                        y2="-0.5"
                        transform="matrix(-1 0 -0.00399302 0.999992 242.338 178.092)"
                        stroke="black"
                      />
                    </g>
                    <path
                      id="nose"
                      d="M229.737 198.468C234.303 203.577 236.794 203.642 241.077 198.468"
                      stroke="black"
                    />
                    <ellipse
                      id="left eye"
                      cx="4.31411"
                      cy="7.63986"
                      rx="4.31411"
                      ry="7.63986"
                      transform="matrix(-1 0 0 1 266.493 170.116)"
                      fill="#170101"
                    />
                    <ellipse
                      id="right eye"
                      cx="4.31411"
                      cy="7.63986"
                      rx="4.31411"
                      ry="7.63986"
                      transform="matrix(-1 0 0 1 210.935 170.116)"
                      fill="#170101"
                    />
                    <path
                      id="right earring"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M312.233 210.083C312.741 209.962 313.264 209.862 313.801 209.784C322.541 208.517 330.605 214.343 331.812 222.797C333.019 231.251 326.913 239.132 318.172 240.399C309.432 241.665 302.559 235.127 301.352 226.673C300.803 222.83 301.52 219.253 303.286 216.375C303.601 216.462 303.941 216.475 304.3 216.373C304.372 216.352 304.444 216.333 304.517 216.314C302.612 219.064 301.784 222.626 302.342 226.529C303.488 234.562 309.955 240.579 318.031 239.409C326.256 238.216 331.947 230.817 330.823 222.941C329.698 215.064 322.168 209.581 313.943 210.774C312.634 210.963 311.422 211.292 310.313 211.741C310.747 211.285 311.357 210.755 312.233 210.083Z"
                      fill="#F9B505"
                    />
                    <path
                      id="left earring"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M161.12 206.216C160.614 206.095 160.092 205.995 159.555 205.918C150.815 204.651 142.751 210.477 141.544 218.931C140.337 227.385 146.444 235.266 155.184 236.532C163.924 237.799 170.798 231.261 172.005 222.807C172.464 219.593 172.038 216.565 170.853 213.976L169.959 214.425C171.047 216.82 171.447 219.639 171.015 222.663C169.868 230.696 163.402 236.713 155.326 235.543C147.1 234.35 141.409 226.951 142.534 219.075C143.659 211.198 151.189 205.715 159.414 206.907C160.651 207.087 161.801 207.39 162.859 207.801C162.347 207.308 161.771 206.783 161.12 206.216Z"
                      fill="#F9B505"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </header>
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row ">
              <div className="relative flex-1 group hover:cursor-pointer">
                <Link href={"/case-study/testwise"}>
                  <Image src={testwise} alt="Test wise case study" />
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
            <div className="flex flex-col md:flex-row">
              <div className="relative flex-1 group">
                <Link href={"/case-study/gatherly"}>
                  <Image src={gatherly} alt="Gatherly case study" />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity"></div>
                  <div
                    className={`${myFontBold.className} text-center text-2xl md:text-4xl absolute inset-0 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity`}
                  >
                    Gatherly <br /> Build community
                  </div>
                </Link>
              </div>
              <div className="relative flex-1 group">
                <Link href={"/illustrations"}>
                  <Image src={illustrations} alt="Illustrations page" />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity"></div>
                  <div
                    className={`${myFontBold.className} text-center text-2xl md:text-4xl  absolute inset-0 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity`}
                  >
                    Illusrations
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
