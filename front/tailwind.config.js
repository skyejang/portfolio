// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,css}"],

  safelist: [
    "text-mred-500",
    "text-mgreen-500",
    "text-myellow-500",
    "text-mblack-500",
    "text-mblue-500",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      colors: {
        mblack: {
          500: "oklch(0.07 0 0)",
        },
        mblue: {
          500: "oklch(0.55 0.0992 254.72)",
        },
        mgreen: {
          500: "oklch(0.6 0.0938 174.44)",
        },
        myellow: {
          500: "oklch(0.89 0.1309 97.02)",
        },
        mred: {
          500: "oklch(0.53 0.1696 23.95)",
        },
      },
    },
    screens: {
      xxs: { max: "359px" },
      xs: "32rem",
      sm: "640px", // 기본 유지
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};

export default config;
