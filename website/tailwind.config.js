/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      // => @media (min-width: 360px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      xxl: "1920px",
      "3xl": { max: "2560px" },
    },
    
    
    
    extend: {
      animation: {
        ["infinite-slider"]: "infiniteSlider 40s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 10))",
          },
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // darkBlue: "#133A75",
        purple: "#618FED",
        darkBlue: "#283593",
        skyBlue: "#376bff",
        light: "#f1f1f1",
        btnBlue: "#17478D",
        fbColor: "#3b5998",
        whatsappColor: "#4FCE5D",
        twitterColor: "#00acee",
        regularTextBlue: "#0c3e72",
        leftGray: "#2e3951",
        leftBlack: "#333333",
        leftBlue: "#17478F",
        leftWhite: "#f3f7ff",
        leftLightGray: "#666666",
        regularTextRed: "#fe5c24",
        redColor: "#fe5c24",
        skyBlue: "#2493e0",
        linkColor: "#007bff",
        yellowColor: "#ffc962",
        formColor: "#e3f2fd",
        submitBtn: "#283592",
        Accordion: "#FD641F",
        ftLink: "#618AE8",
        //training academy
        orangeColor:"#FD641F",
        yellowColor:"#FCBD29",
        offWhite: "#F5F5FF",
        lightGray: "#666666",
        darkGray: "#333333",
        blueC    :"#1654F2",
        darkBlueC:"#0F1EAF",
        lightGreen:"#228B22"
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },

      fontFamily: {
        DrukText: ["DrukText", "sans-serif"],
      },
      screens: {
        // "xxl": "2660px",
        exLG: "2736px",
        // => @media (min-width: 1920px) { ... }
      },
    },

    animation: {
      "infinite-scroll": "infinite-scroll 25s linear infinite",
    },
    keyframes: {
      "infinite-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    },

    animation: {
      rotateblk: "rotateblk 2s linear infinite",
    },
    keyframes: {
      // rotateblk: {
      //   from: { transform: "rotate(0deg)" },
      //   to: { transform: "rotate(360deg)" },
      // },
      rotateblk: {
        from: {
          transform: " rotate(380deg)  translate(-62.5px) rotate(10deg)",
        },
        to: { transform: "rotate(20deg) translate(-62.5px) rotate(-40deg)" },
      },
    },

    animation: {
      "infinite-slider-left-to-right":
        "infiniteSliderLeftToRight 40s linear infinite",
    },
    keyframes: {
      infiniteSliderLeftToRight: {
        "0%": {
          transform: "translateX(0)",
        },
        "100%": {
          transform: "translateX(calc(250px * 10))",
        },
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
