import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo-v1.svg";
import { darkerGrotesqueReg } from "@/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const currentPath = usePathname();
  const [open, setIsOpen] = useState(true);
  const [navClass, setNavClass] = useState("hidden top-0");

  const toggleNavBar = () => {
    if (open) {
      setNavClass("animate-navSlideDown");
    } else {
      setNavClass("animate-navSlideUp");
    }
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="z-[80]">
      <FontAwesomeIcon
        icon={faBars}
        size="2x"
        color="#3C0092"
        className="fixed top-4 right-8 z-[90]"
        onClick={toggleNavBar}
        aria-label="menu"
        role="button"
        aria-expanded={open}
      />

      <div
        className={`w-11/12 bg-white fixed -top-4 flex flex-row justify-end gap-88 z-[89] py-8   ${darkerGrotesqueReg.className} ${navClass}`}
      >
        <ul className="nav-list mr-16 flex flex-row gap-88 text-4xl">
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
              href={"/projects"}
              className={`${
                currentPath === "/projects"
                  ? "active: underline underline-offset-[12px] p-2"
                  : "text-[#597891] hover:text-purple"
              } `}
            >
              projects
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
