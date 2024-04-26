import { darkerGrotesqueReg, myFont } from "@/utils";
import Link from "next/link";
import linkedInLogo from "../../assets/icons/linkedin.svg";
import emailLogo from "../../assets/icons/envelope.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-purple flex flex-col gap-8 mt-40 px-16 py-5 md:px-36 md:py-10 ">
      <div>
        <p className={`text-white text-2xl md:text-4xl ${myFont.className}`}>
          {"Let's Connect"}
        </p>
        <p
          className={`text-white  text-xl md:text-2xl ${darkerGrotesqueReg.className}`}
        >
          Design and coded by Regine
        </p>
      </div>
      <div className="flex flex-row gap-8">
        <Link
          href="https://www.linkedin.com/in/regine-thimothee/"
          passHref={true}
          className="rounded-full w-16 h-16 bg-light-pink flex justify-center items-center"
        >
          <div className="w-8 h-8 relative">
            <Image src={linkedInLogo} alt="LinkedIn logo" fill={true} />
          </div>
        </Link>
        <Link
          href="mailto:ginou10@msn.com"
          passHref={true}
          className="rounded-full w-16 h-16 bg-light-pink flex justify-center items-center"
        >
          <div className="w-8 h-8 relative">
            <Image src={emailLogo} alt="envelope icon" fill={true} />
          </div>
        </Link>
      </div>
    </footer>
  );
}
