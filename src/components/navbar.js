import Link from "next/link";
import { interBody } from "@/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const currentPath = usePathname();
  const [open, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const toggleNavBar = () => {
    setHasInteracted(true);
    setIsOpen((prev) => {
      const newState = !prev;
      window.dispatchEvent(
        new CustomEvent("navbarToggle", { detail: { open: newState } })
      );
      return newState;
    });
  };

  return (
    <nav className="z-[80] fixed top-0 w-full bg-bgWhite py-6 px-6 flex items-center justify-between">
      <div className="flex-1 ml-24">{/* Optional logo here */}</div>

      {/* FontAwesome toggle */}
      <div className="flex justify-end mr-10 relative z-[90]">
        <button
          onClick={toggleNavBar}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200`}
          aria-label={open ? "close menu" : "menu"}
          aria-expanded={open}
        >
          <span className="text-[1.75rem] font-medium text-gray-700 hidden sm:block">
            {open ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      {/* Nav Menu */}
      <ul
        className={`absolute left-0 top-4 w-full bg-bgWhite px-24 py-6 flex flex-col gap-y-6 transition-all z-50 ${
          interBody.className
        } ${
          !hasInteracted
            ? "opacity-0 pointer-events-none" // Hidden quietly before user interaction
            : open
            ? "animate-navSlideDown opacity-100 pointer-events-auto"
            : "animate-navSlideUp opacity-0 pointer-events-none"
        }`}
      >
        {[
          { href: "/", label: "home" },
          { href: "/about", label: "about" },
          { href: "/projects", label: "projects" },
          { href: "/illustrations", label: "illustrations" },
        ].map(({ href, label }) => (
          <li key={href} className="transition-transform hover:-translate-y-1">
            <Link
              rel="noopener noreferrer"
              href={href}
              className={`p-2 ${
                currentPath === href
                  ? "underline underline-offset-[12px]"
                  : "text-[#597891] hover:text-purple"
              } hover:animate-bounce`}
            >
              {label}
            </Link>
          </li>
        ))}
        <li className="transition-transform text-[#597891] hover:-translate-y-1 hover:text-purple">
          <a
            href="/files/Regine-Thimothee-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
          >
            resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
