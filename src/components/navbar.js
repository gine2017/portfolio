import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo-v1.svg";
import { darkerGrotesqueReg } from "@/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentPath = usePathname();

  return (
    <div className="z-[80]">
      <Link className="fixed top-4 " href={"/"}>
        <div className="w-14 h-10 relative ml-16 ">
          <Image src={logo} alt="logo" fill={true} />
        </div>
      </Link>
      <div
        className={`w-full bg-white fixed top-0 flex flex-row justify-end  gap-88 z-50 pr-24 py-4 ${darkerGrotesqueReg.className}`}
      >
        <ul className="nav-list ml-8 flex flex-row gap-88 text-4xl">
          <li className=" transition-transform hover:-translate-y-1 ">
            <Link
              href={"/"}
              className={`${
                currentPath === "/"
                  ? "active: underline underline-offset-8"
                  : "text-slate-300 hover:text-purple"
              } hover:animate-bounce`}
            >
              home
            </Link>
          </li>
          <li className="transition-transform hover:-translate-y-1">
            <Link
              href={"/about"}
              className={`${
                currentPath === "/about"
                  ? "active: underline underline-offset-8"
                  : "text-slate-300 hover:text-purple"
              } `}
            >
              about
            </Link>
          </li>
          <li className="transition-transform text-slate-300 hover:-translate-y-1 hover:text-purple">
            <a href={"/files/Regine_Thimothee_Resume.pdf"} target="_blank">
              resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
