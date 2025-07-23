/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gap: {
        88: "5.5rem",
        120: "7.5rem",
        100: "6.25rem",
      },
      margin: {
        150: "9.375rem",
      },
      width: {
        540: "33.75rem",
        53: "53rem",
        "40rem": "40rem",
        34: "34rem",
        30: "30rem",
        "80%": "80%",
      },
      height: {
        260: "16.25rem",
        34: "34rem",
        27: "27rem",
        38: "38rem",
        47: "47rem",
      },
      colors: {
        purple: "#3C0092",
        "naturalu-purple": "#6E30FF",
        pink: "#D81E5B",
        "light-blue": "#91A6FF",
        "light-pink": "#FBB7C0",
        orange: "#F9A620",
        marron: "#5B2E48",
        red: "#EB002F",
        "gatherly-blue": "#0072BB",
        "modern-attire": "#010154",
        "testwise-blue": "#1F3F70",
        "component-library": "#0084D1",
        bgWhite: "#fcfcfc",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        fadeInDown: {
          "0%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(-50px)",
          },
        },
        rotateBy45deg: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(45deg)",
          },
        },
        rotateByNeg45deg: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            top: "-10px",
            transform: "rotate(-45deg)",
          },
        },
        moveAcrossScreen: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-100%)" },
        },
        navSlideDown: {
          "0%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },

        navSlideUp: {
          "0%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-in-out",
        rotateBy45deg: "rotateBy45deg 0.25s linear forwards",
        rotateByNeg45deg: "rotateByNeg45deg 0.25s linear forwards",
        moveAcrossScreen: "moveAcrossScreen 10s linear infinite",
        navSlideDown: "navSlideDown 0.3s ease-out forwards",
        navSlideUp: "navSlideUp 0.3s ease-in forwards",
      },
      fontSize: {
        h4Size: "1.7rem",
        h5Size: "1.55rem",
      },
    },
  },
  plugins: [],
};
