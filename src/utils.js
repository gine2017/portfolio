import localFont from "next/font/local";
import { Darker_Grotesque, Inter } from "next/font/google";

const interBody = Inter({ weight: "300", subsets: ["latin"] });
const interBold = Inter({ weight: "600", subsets: ["latin"] });

const darkerGrotesqueTitle = Darker_Grotesque({
  weight: "900",
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

const solutionInActionStyles = {
  transition: "transform 0.3s ease",
  position: "fixed",
  top: "50%",
  left: "50%",
  translateX: "-50%",
  translateY: "-50%",
  transform: "translate(-50%, -50%) scale(1.25)",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  padding: "20px",
  borderRadius: "8px",
  zIndex: 9999,
  maxWidth: "80vw",
  maxHeight: "80vh",
  objectFit: "contain",
};

export {
  darkerGrotesqueTitle,
  interBody,
  interBold,
  createImageArray,
  zoomImage,
  solutionInActionStyles,
};
