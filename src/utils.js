import localFont from "next/font/local";
import { Darker_Grotesque } from "next/font/google";

const myFont = localFont({
  src: "../fonts/black_mango/TTF/BlackMango-Medium.ttf",
});
const darkerGrotesque = Darker_Grotesque({ weight: "500", subsets: ["latin"] });
const darkerGrotesqueReg = Darker_Grotesque({
  weight: "400",
  subsets: ["latin"],
});
const darkerGrotesqueBold = Darker_Grotesque({
  weight: "700",
  subsets: ["latin"],
});

const createImageArray = (images) => {
  return images.map((img) => {
    return {
      subtitle: "",
      link: "",
      image: img,
    };
  });
};

export {
  myFont,
  darkerGrotesque,
  darkerGrotesqueReg,
  darkerGrotesqueBold,
  createImageArray,
};
