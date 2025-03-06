import { darkerGrotesqueReg, myFont } from "@/utils";
import Link from "next/link";
import linkedInLogo from "../../assets/icons/linkedin.svg";
import emailLogo from "../../assets/icons/envelope.svg";
import Image from "next/image";

export default function Footer({ width }) {
  return (
    <footer className="w-full bg-purple flex flex-col gap-8 mt-40 px-16 py-5 md:px-36 md:py-10 ">
      <div>
        <p className={`text-white text-2xl md:text-4xl ${myFont.className}`}>
          {"Let's Connect"}
        </p>
      </div>
      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-row gap-8">
          <a
            href="https://www.linkedin.com/in/regine-thimothee/"
            passHref={true}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full w-16 h-16 bg-white flex justify-center items-center"
          >
            <div className="w-8 h-8 relative">
              <Image src={linkedInLogo} alt="LinkedIn logo" fill={true} />
            </div>
          </a>
          <Link
            href="mailto:reginethimothee@gmail.com"
            passHref={true}
            rel="noopener noreferrer"
            className="rounded-full w-16 h-16 bg-white  flex justify-center items-center"
          >
            <div className="w-8 h-8 relative">
              <Image src={emailLogo} alt="envelope icon" fill={true} />
            </div>
          </Link>
        </div>
        {width >= 767 && (
          <p
            className={`text-white text-right relative bottom-0  text-xl md:text-2xl ${darkerGrotesqueReg.className}`}
          >
            Design and coded by Regine
          </p>
        )}
      </div>
    </footer>
  );
}
