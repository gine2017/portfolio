import localFont from "next/font/local";
import { Darker_Grotesque } from "next/font/google";

const myFont = localFont({
  src: "../fonts/black_mango/TTF/BlackMango-Medium.ttf",
});
const myFontLight = localFont({
  src: "../fonts/black_mango/TTF/BlackMango-Light.ttf",
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

const zoomImage = (shouldZoom, largeImage) => {
  if (shouldZoom) {
    return {
      cursor: "zoom-out",
      transition: "transform 0.25s ease",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      backgroundRepeat: "no-repeat",
      zIndex: 99,
      height: "100vh",
      width: "100vw",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: `translate(-50%, -50%) ${
        largeImage ? "scale(1) " : "scale(1.8)"
      }`,
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
  myFontLight,
  darkerGrotesque,
  darkerGrotesqueReg,
  darkerGrotesqueBold,
  darkerGrotesqueMed,
  createImageArray,
  zoomImage,
};
