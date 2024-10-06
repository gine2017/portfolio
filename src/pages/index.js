import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import {
  myFont,
  myFontBold,
  darkerGrotesque,
  darkerGrotesqueBold,
  darkerGrotesqueReg,
  myFontLight,
} from "@/utils";
import MobileNav from "@/components/mobile-nav";
import useWindowSize from "@/hooks/useWindowSize";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//images
import testwise from "../../assets/testwise.png";
import illustrations from "../../assets/illustrations.png";
import naturalU from "../../assets/naturalU.png";
import gatherly from "../../assets/gatherly.png";
import bridge from "../../assets/bridge.svg";
import car from "../../assets/fullcar.svg";
import WavyText from "@/components/wavy-text";

export default function Home() {
  const [showContent, setShowContent] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const translatorRef = useRef(null);
  const textRef = useRef(null);
  const { width } = useWindowSize();
  const translatedText = [
    "ULTIMATE TRANSLATOR",
    "TRADUCTEUR ULTIME",
    "TRADUCTOR ÚLTIMO",
    "TRADUTOR DEFINITIVO",
  ];

  useEffect(() => {
    if (showContent) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, []);

  // use effect for the animation to show on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          } else {
            entry.target.classList.remove("animate-fadeIn");
          }
        });
      },
      { threshold: 0.5 } // Animation triggers when 50% of the element is in view
    );

    if (translatorRef.current) {
      observer.observe(translatorRef.current);
    }

    return () => {
      if (translatorRef.current) {
        observer.unobserve(translatorRef.current);
      }
    };
  }, []);

  //changing text animation
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
        <main className="w-4/5 mx-auto flex flex-col mt-16  gap-y-80 md:mt-36">
          <header className="flex flex-col gap-8  md:gap-32 xl:flex-row">
            <div className="flex flex-col gap-8 flex-1">
              <div
                className={`whitespace-nowrap	 text-purple text-5xl md:text-8xl ${myFont.className}`}
              >
                <WavyText text="Hi, I'm Regine" />
              </div>
              <div
                className={`myName-subline text-2xl md:text-5xl whitespace-pre-wrap ${darkerGrotesqueReg.className}`}
              >
                <WavyText text="User Experience Designer" />
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
                className="myIllustration"
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
          <div
            className="relative flex flex-col gap-y-14 md:gap-32 md:flex-row"
            ref={translatorRef}
          >
            <div
              className={`text-3xl whitespace-normal md:text-8xl md:whitespace-nowrap ${myFontLight.className}`}
            >
              <WavyText text="I am passionate" />
              <WavyText text="about being the" />{" "}
              <p
                className={`text-purple ${myFontBold.className} dynamic-text text-3xl  md:text-8xl md:whitespace-nowrap `}
                style={{ "--current-text": `"${translatedText[textIndex]}"` }}
                ref={textRef}
              >
                {translatedText[textIndex]}
              </p>
            </div>
            <div className="z-10 purple-chat-bubble absolute top-44 md:-top-10 md:-right-10 xl:-top-16  2xl:right-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 248 216"
                fill="none"
                className="w-1/2 md:w-[60%] 2xl:w-[80%] "
              >
                <mask id="path-1-inside-1_566_430" fill="white">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M127.5 216C193.774 216 247.5 167.647 247.5 108C247.5 48.3532 193.774 0 127.5 0C61.2259 0 7.50006 48.3532 7.50006 108C7.50006 124.582 11.6522 140.291 19.0717 154.331L0.693115 204.219L58.6595 196.472C78.1474 208.778 101.887 216 127.5 216Z"
                  />
                </mask>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M127.5 216C193.774 216 247.5 167.647 247.5 108C247.5 48.3532 193.774 0 127.5 0C61.2259 0 7.50006 48.3532 7.50006 108C7.50006 124.582 11.6522 140.291 19.0717 154.331L0.693115 204.219L58.6595 196.472C78.1474 208.778 101.887 216 127.5 216Z"
                  fill="#3C0092"
                />
                <path
                  d="M19.0717 154.331L28.4552 157.787L29.9971 153.602L27.913 149.658L19.0717 154.331ZM0.693115 204.219L-8.69039 200.762L-14.4248 216.328L2.01766 214.131L0.693115 204.219ZM58.6595 196.472L63.9985 188.017L60.9309 186.08L57.3349 186.561L58.6595 196.472ZM237.5 108C237.5 161.159 189.269 206 127.5 206V226C198.28 226 257.5 174.135 257.5 108H237.5ZM127.5 10C189.269 10 237.5 54.8411 237.5 108H257.5C257.5 41.8654 198.28 -10 127.5 -10V10ZM17.5001 108C17.5001 54.8411 65.7316 10 127.5 10V-10C56.7202 -10 -2.49994 41.8654 -2.49994 108H17.5001ZM27.913 149.658C21.2211 136.995 17.5001 122.883 17.5001 108H-2.49994C-2.49994 126.28 2.08325 143.586 10.2303 159.003L27.913 149.658ZM10.0766 207.675L28.4552 157.787L9.68819 150.874L-8.69039 200.762L10.0766 207.675ZM57.3349 186.561L-0.631427 194.307L2.01766 214.131L59.984 206.384L57.3349 186.561ZM127.5 206C103.772 206 81.8846 199.311 63.9985 188.017L53.3205 204.928C74.4102 218.245 100.001 226 127.5 226V206Z"
                  fill="white"
                  mask="url(#path-1-inside-1_566_430)"
                />
                <path
                  d="M136.421 60.1999C137.727 60.5833 138.835 61.4923 139.499 62.7271C140.164 63.962 140.331 65.4215 139.964 66.7847L117.283 151.101C117.102 151.776 116.794 152.408 116.379 152.959C115.963 153.511 115.448 153.971 114.862 154.315C114.276 154.659 113.63 154.878 112.963 154.962C112.295 155.046 111.618 154.991 110.971 154.802C110.323 154.612 109.718 154.292 109.189 153.858C108.66 153.425 108.219 152.887 107.889 152.276C107.56 151.664 107.349 150.991 107.269 150.295C107.189 149.598 107.241 148.892 107.423 148.217L130.103 63.9008C130.284 63.2248 130.592 62.5928 131.008 62.0408C131.423 61.4888 131.939 61.0278 132.526 60.684C133.113 60.3403 133.759 60.1206 134.427 60.0375C135.096 59.9545 135.773 60.0096 136.421 60.1999ZM99.1543 81.0653C100.114 82.0667 100.653 83.4249 100.653 84.841C100.653 86.2571 100.114 87.6152 99.1543 88.6167L81.0561 107.501L99.1543 126.379C99.63 126.875 100.007 127.464 100.265 128.112C100.523 128.76 100.655 129.455 100.655 130.156C100.656 130.857 100.523 131.552 100.266 132.2C100.009 132.848 99.6322 133.437 99.1569 133.934C98.6815 134.43 98.1172 134.823 97.496 135.092C96.8748 135.361 96.209 135.499 95.5365 135.499C94.864 135.5 94.1981 135.362 93.5767 135.094C92.9554 134.825 92.3907 134.432 91.915 133.936L70.1921 111.277C69.2323 110.275 68.6931 108.917 68.6931 107.501C68.6931 106.085 69.2323 104.727 70.1921 103.725L91.915 81.0653C92.8751 80.0641 94.1771 79.5016 95.5347 79.5016C96.8923 79.5016 98.1942 80.0641 99.1543 81.0653ZM148.232 88.6167C147.743 88.1241 147.353 87.5348 147.085 86.8832C146.816 86.2317 146.675 85.5309 146.669 84.8218C146.663 84.1127 146.793 83.4094 147.05 82.7531C147.308 82.0968 147.688 81.5005 148.168 80.9991C148.649 80.4976 149.221 80.1011 149.85 79.8325C150.479 79.564 151.153 79.4289 151.833 79.4351C152.513 79.4412 153.185 79.5885 153.809 79.8684C154.434 80.1483 154.999 80.5552 155.471 81.0653L177.194 103.725C178.154 104.727 178.693 106.085 178.693 107.501C178.693 108.917 178.154 110.275 177.194 111.277L155.471 133.936C154.511 134.938 153.208 135.5 151.85 135.499C150.492 135.499 149.189 134.936 148.229 133.934C147.269 132.932 146.73 131.573 146.731 130.156C146.731 128.739 147.271 127.381 148.232 126.379L166.33 107.501L148.232 88.6167Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="absolute orange-bubble -right-20 top-60 md:top-2 md:-right-40 2xl:-right-10 2xl:top-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 248 216"
                fill="none"
                className="w-1/2 md:w-[60%] 2xl:w-[80%]"
              >
                <mask id="path-1-inside-1_566_413" fill="white">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M120.5 216C54.2258 216 0.499942 167.647 0.499942 108C0.499942 48.3532 54.2258 0 120.5 0C186.774 0 240.5 48.3532 240.5 108C240.5 124.582 236.348 140.291 228.928 154.331L247.307 204.219L189.341 196.472C169.853 208.778 146.113 216 120.5 216Z"
                  />
                </mask>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M120.5 216C54.2258 216 0.499942 167.647 0.499942 108C0.499942 48.3532 54.2258 0 120.5 0C186.774 0 240.5 48.3532 240.5 108C240.5 124.582 236.348 140.291 228.928 154.331L247.307 204.219L189.341 196.472C169.853 208.778 146.113 216 120.5 216Z"
                  fill="#F9A620"
                />
                <path
                  d="M228.928 154.331L219.545 157.787L218.003 153.602L220.087 149.658L228.928 154.331ZM247.307 204.219L256.69 200.762L262.425 216.328L245.982 214.131L247.307 204.219ZM189.341 196.472L184.001 188.017L187.069 186.08L190.665 186.561L189.341 196.472ZM10.4999 108C10.4999 161.159 58.7315 206 120.5 206V226C49.72 226 -9.50006 174.135 -9.50006 108H10.4999ZM120.5 10C58.7315 10 10.4999 54.8411 10.4999 108H-9.50006C-9.50006 41.8654 49.72 -10 120.5 -10V10ZM230.5 108C230.5 54.8411 182.268 10 120.5 10V-10C191.28 -10 250.5 41.8654 250.5 108H230.5ZM220.087 149.658C226.779 136.995 230.5 122.883 230.5 108H250.5C250.5 126.28 245.917 143.586 237.77 159.003L220.087 149.658ZM237.923 207.675L219.545 157.787L238.312 150.874L256.69 200.762L237.923 207.675ZM190.665 186.561L248.631 194.307L245.982 214.131L188.016 206.384L190.665 186.561ZM120.5 206C144.228 206 166.115 199.311 184.001 188.017L194.68 204.928C173.59 218.245 147.999 226 120.5 226V206Z"
                  fill="white"
                  mask="url(#path-1-inside-1_566_413)"
                />
              </svg>
              <div className="absolute top-[3.25rem] md:top-16 ml-12">
                <p
                  className={`text-white text-2xl md:text-3xl ${myFontBold.className}`}
                >
                  UI/UX
                </p>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col relative items-center text-[5.625rem] ${myFontLight.className} `}
          >
            <div className={`text-purple ${myFontBold.className}  `}>
              <WavyText text="Bridging" />
            </div>
            <div className="z-10">
              <Image src={bridge} />
            </div>
            <div className="absolute top-[58%] left-[10%] car">
              <Image src={car} />
            </div>
            <div>
              <WavyText text="Design and Development" />
            </div>
          </div>
          <div className="flex flex-col relative text-center gap-y-16">
            <div className={`text-[5.625rem] ${myFontLight.className}`}>
              <WavyText text="To make solutions that " centerText />
              <WavyText text="put the " centerText />

              <div className={`text-purple ${myFontBold.className}  `}>
                <WavyText text="USER FIRST" centerText />
              </div>
            </div>
            <div className="flex justify-center gap-x-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="160"
                viewBox="0 0 120 141"
                fill="none"
              >
                <path
                  d="M100.877 140.321H18.8542C13.8537 140.321 9.0581 138.554 5.52226 135.409C1.98642 132.264 0 127.998 0 123.55V118.003C0 91.3773 26.8559 69.7026 59.8657 69.7026C92.8756 69.7026 119.731 91.3639 119.731 118.003V123.55C119.731 127.998 117.745 132.264 114.209 135.409C110.673 138.554 105.878 140.321 100.877 140.321ZM59.8657 76.4244C31.0113 76.4244 7.54167 95.0736 7.54167 118.016V123.564C7.54167 126.233 8.73352 128.792 10.855 130.679C12.9765 132.566 15.8539 133.626 18.8542 133.626H100.877C103.878 133.626 106.755 132.566 108.876 130.679C110.998 128.792 112.19 126.233 112.19 123.564V118.003C112.19 95.0736 88.7202 76.4244 59.8657 76.4244Z"
                  fill="#3C0092"
                />
                <path
                  d="M85.5 27.5C85.5 40.5275 74.0949 51.5 59.5 51.5C44.9051 51.5 33.5 40.5275 33.5 27.5C33.5 14.4725 44.9051 3.5 59.5 3.5C74.0949 3.5 85.5 14.4725 85.5 27.5Z"
                  stroke="#3C0092"
                  stroke-width="7"
                  id="user_head_1"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="160"
                viewBox="0 0 120 141"
                fill="none"
              >
                <path
                  d="M100.877 140.321H18.8542C13.8537 140.321 9.0581 138.554 5.52226 135.409C1.98642 132.264 0 127.998 0 123.55V118.003C0 91.3773 26.8559 69.7026 59.8657 69.7026C92.8756 69.7026 119.731 91.3639 119.731 118.003V123.55C119.731 127.998 117.745 132.264 114.209 135.409C110.673 138.554 105.878 140.321 100.877 140.321ZM59.8657 76.4244C31.0113 76.4244 7.54167 95.0736 7.54167 118.016V123.564C7.54167 126.233 8.73352 128.792 10.855 130.679C12.9765 132.566 15.8539 133.626 18.8542 133.626H100.877C103.878 133.626 106.755 132.566 108.876 130.679C110.998 128.792 112.19 126.233 112.19 123.564V118.003C112.19 95.0736 88.7202 76.4244 59.8657 76.4244Z"
                  fill="#3C0092"
                />
                <path
                  d="M85.5 27.5C85.5 40.5275 74.0949 51.5 59.5 51.5C44.9051 51.5 33.5 40.5275 33.5 27.5C33.5 14.4725 44.9051 3.5 59.5 3.5C74.0949 3.5 85.5 14.4725 85.5 27.5Z"
                  stroke="#3C0092"
                  stroke-width="7"
                  id="user_head_2"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <div
                className={`text-[5.625rem] text-center ${myFontLight.className}`}
              >
                <WavyText text="Checkout my work" centerText />
              </div>
              <div className="flex flex-col flex-1  gap-y-10">
                <div className="relative hover:cursor-pointer group">
                  <Link href={"/case-study/testwise"}>
                    <Image src={testwise} alt="Link to Test wise case study" />
                    <div className="absolute inset-0 bg-black opacity-0 rounded-[1.25rem] group-hover:opacity-70 transition-opacity"></div>
                    <div
                      className={`${myFontBold.className} text-center text-2xl md:text-4xl  absolute inset-0 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity`}
                    >
                      Test Wise
                      <br /> Requirements Dashboard
                    </div>
                  </Link>
                </div>
                <div className="flex flex-row gap-x-8">
                  <div className="w-1/2  relative hover:cursor-pointer group">
                    <Link href={""}>
                      <Image
                        src={illustrations}
                        alt="Link to Illustrations page"
                        className="h-[95%]"
                      />
                      <div className="absolute h-[95%] inset-0 bg-black opacity-0 rounded-[1.25rem] group-hover:opacity-70 transition-opacity"></div>
                      <div
                        className={`${myFontBold.className} text-center text-2xl md:text-4xl  absolute inset-0 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity`}
                      >
                        Illustrations
                      </div>
                    </Link>
                  </div>
                  <div className="flex flex-1 flex-col gap-y-10">
                    <div className=" relative hover:cursor-pointer group">
                      <Link href={""}>
                        <Image
                          src={naturalU}
                          alt="Link to NaturalU case study "
                        />
                        <div className="absolute inset-0 bg-black opacity-0 rounded-[1.25rem] group-hover:opacity-70 transition-opacity"></div>
                        <div
                          className={`${myFontBold.className} text-center text-2xl md:text-4xl  absolute inset-0 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity`}
                        >
                          Natural U
                          <br /> Hair Education
                        </div>
                      </Link>
                    </div>
                    <div className=" relative hover:cursor-pointer group">
                      <Link href={""}>
                        <Image
                          src={gatherly}
                          alt="Link to Gatherly case study"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 rounded-[1.25rem] group-hover:opacity-70 transition-opacity"></div>
                        <div
                          className={`${myFontBold.className} text-center text-2xl md:text-4xl  absolute inset-0 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity`}
                        >
                          Gatherly
                          <br />
                          Build community
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
      {showContent && <Footer />}
    </div>
  );
}
