import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo_v1.svg";
import { darkerGrotesque } from "@/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentPath = usePathname();

  return (
    <div
      className={`w-full bg-white fixed top-0 left-0 flex flex-row gap-88 z-50 pl-16 py-4 ${darkerGrotesque.className}`}
    >
      <Link className="w-32 h-16 relative" href={"/"}>
        <Image src={logo} alt="logo" fill={true} />
      </Link>
      <ul className="nav-list ml-8 flex flex-row gap-88 text-4xl">
        <li className="transition-transform hover:-translate-y-1">
          <Link
            href={"/"}
            className={`${
              currentPath === "/" ? "active: underline underline-offset-8" : ""
            } hover:animate-bounce`}
          >
            Home
          </Link>
        </li>
        <li className="transition-transform hover:-translate-y-1">
          <Link
            href={"/about"}
            className={`${
              currentPath === "/about"
                ? "active: underline underline-offset-8"
                : ""
            } `}
          >
            About
          </Link>
        </li>
        <li className="transition-transform hover:-translate-y-1">
          <Link href={"/files/Regine_Resume.pdf"}>Resume</Link>
        </li>
      </ul>
    </div>
  );
}
