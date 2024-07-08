import localFont from "next/font/local";
import { Darker_Grotesque } from "next/font/google";

const myFont = localFont({
  src: "../fonts/black_mango/TTF/BlackMango-Medium.ttf",
});
const myFontBold = localFont({
  src: "../fonts/black_mango/TTF/BlackMango-Bold.ttf",
});
const darkerGrotesque = Darker_Grotesque({ weight: "500", subsets: ["latin"] });
const darkerGrotesqueReg = Darker_Grotesque({
  weight: "400",
  subsets: ["latin"],
});
const darkerGrotesqueMed = Darker_Grotesque({
  weight: "500",
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

const zoomImage = (shouldZoom) => {
  if (shouldZoom) {
    return {
      cursor: "zoom-out",
      transform: "scale(1.8)",
      transition: "transform 0.25s ease",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      backgroundRepeat: "no-repeat",
      zIndex: 99,
      height: "100vh",
    };
  }
  return {
    cursor: "zoom-in",
    transition: "transform 0.25s ease",
  };
};
export {
  myFont,
  myFontBold,
  darkerGrotesque,
  darkerGrotesqueReg,
  darkerGrotesqueBold,
  darkerGrotesqueMed,
  createImageArray,
  zoomImage,
};
