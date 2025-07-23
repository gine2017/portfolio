import { useState, useEffect } from "react";
import logo from "../../assets/logo-v1.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav({ updateContent = {} }) {
  const [showLinks, setShowLinks] = useState(false);
  const currentPath = usePathname();
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  const [slideDownAnimate, setSlideDownAnimate] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showLinks ? (
        <div
          className={`w-full h-screen z-50 ${
            slideDownAnimate ? "" : "animate-fadeInDown"
          } `}
        >
          <div className="w-full flex justify-end">
            <div
              className="flex flex-col gap-2 w-9 mt-6 right-2 mr-4 "
              onClick={() => {
                setShowLinks((prev) => !prev);
                updateContent(showLinks);
                setSlideDownAnimate((prev) => !prev);
              }}
            >
              <hr className="h-0.5 bg-purple animate-rotateBy45deg" />
              <hr className="h-0.5 bg-purple relative animate-rotateByNeg45deg" />
            </div>
          </div>

          <ul
            className={`mt-10 flex flex-col items-center gap-88 text-4xl relative  animate-fadeInUp
            `}
            style={{
              top: `${scrollPosition.y}px`,
              left: `${scrollPosition.x}px`,
            }}
          >
            <li>
              <Link
                rel="noopener noreferrer"
                href={"/"}
                className={`${
                  currentPath === "/"
                    ? "active: underline underline-offset-8"
                    : ""
                }`}
              >
                home
              </Link>
            </li>
            <li>
              <Link
                rel="noopener noreferrer"
                href={"/about"}
                className={`${
                  currentPath === "/about"
                    ? "active: underline underline-offset-8"
                    : ""
                } `}
              >
                about
              </Link>
            </li>
            <li>
              <Link
                rel="noopener noreferrer"
                href={"/projects"}
                className={`${
                  currentPath === "/projects"
                    ? "active: underline underline-offset-8"
                    : ""
                } `}
              >
                projects
              </Link>
            </li>
            <li>
              <Link
                rel="noopener noreferrer"
                href={"/files/Regine-Thimothee-Resume.pdf"}
              >
                resume
              </Link>
            </li>
            <li>
              <Link rel="noopener noreferrer" href={"/illustrations"}>
                illustrations
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="w-full bg-bgWhite fixed top-0 left-0 flex justify-between z-50 ">
          <Link
            rel="noopener noreferrer"
            className="w-12 h-12 relative ml-4 mt-2"
            href={"/"}
          >
            <Image src={logo} alt="logo" fill={true} />
          </Link>
          <div
            className="flex flex-col gap-2 w-9 mr-4 mt-6"
            onClick={() => {
              setShowLinks((prev) => !prev);
              updateContent(showLinks);
            }}
          >
            <hr className="h-0.5 bg-purple " />
            <hr className="h-0.5 bg-purple" />
          </div>
        </div>
      )}
    </div>
  );
}
