import Link from "next/link";
import { darkerGrotesqueReg } from "@/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const currentPath = usePathname();
  const [open, setIsOpen] = useState(true);
  const [navClass, setNavClass] = useState("hidden top-0");

  const toggleNavBar = () => {
    if (open) {
      setNavClass("animate-navSlideDown");
      window.dispatchEvent(
        new CustomEvent("navbarToggle", { detail: { open: true } })
      );
    } else {
      setNavClass("animate-navSlideUp");
      window.dispatchEvent(
        new CustomEvent("navbarToggle", { detail: { open: false } })
      );
    }
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="z-[80]">
      <div className="fixed top-4 right-8 z-[90] w-8 h-8 flex items-center justify-center">
        <FontAwesomeIcon
          icon={open ? faBars : faXmark}
          size="2x"
          color="#3C0092"
          className="absolute transition-all duration-300 transform"
          style={{
            opacity: open ? 1 : 0,
            transform: open
              ? "rotate(0deg) scale(1)"
              : "rotate(90deg) scale(0.5)",
          }}
          aria-hidden={!open}
        />
        <FontAwesomeIcon
          icon={faXmark}
          size="2x"
          color="#3C0092"
          className="absolute transition-all duration-300 transform"
          style={{
            opacity: open ? 0 : 1,
            transform: open
              ? "rotate(-90deg) scale(0.5)"
              : "rotate(0deg) scale(1)",
          }}
          onClick={toggleNavBar}
          aria-label={open ? "menu" : "close menu"}
          role="button"
          aria-expanded={!open}
        />
      </div>

      <div
        className={`w-11/12 bg-white fixed -top-4 flex flex-row justify-end  z-[60] py-8    ${darkerGrotesqueReg.className} ${navClass}`}
      >
        <ul className="nav-list mr-16 flex flex-row md:gap-9 md:text-3xl xl:gap-88 xl:text-4xl">
          <li className=" transition-transform hover:-translate-y-1 ">
            <Link
              rel="noopener noreferrer"
              href={"/"}
              className={`${
                currentPath === "/"
                  ? "active: underline underline-offset-[12px] p-2"
                  : "text-[#597891] hover:text-purple"
              } hover:animate-bounce`}
            >
              home
            </Link>
          </li>
          <li className="transition-transform hover:-translate-y-1">
            <Link
              rel="noopener noreferrer"
              href={"/about"}
              className={`${
                currentPath === "/about"
                  ? "active: underline underline-offset-[12px] p-2"
                  : "text-[#597891] hover:text-purple"
              } `}
            >
              about
            </Link>
          </li>
          <li className="transition-transform hover:-translate-y-1">
            <Link
              rel="noopener noreferrer"
              href={"/bootcamp"}
              className={`${
                currentPath === "/bootcamp"
                  ? "active: underline underline-offset-[12px] p-2"
                  : "text-[#597891] hover:text-purple"
              } `}
            >
              bootcamp
            </Link>
          </li>
          <li className="transition-transform hover:-translate-y-1">
            <Link
              rel="noopener noreferrer"
              href={"/illustrations"}
              className={`${
                currentPath === "/illustrations"
                  ? "active: underline underline-offset-[12px] p-2"
                  : "text-[#597891] hover:text-purple"
              } `}
            >
              illustrations
            </Link>
          </li>
          <li className="transition-transform text-[#597891] hover:-translate-y-1 hover:text-purple">
            <a
              href={"/files/Regine-Thimothee-Resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
