/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#ffffff",
        headerbg: "#F5F9FA",
        progresstxt: "#485293",
        materialdivuder: "rgba(0, 0, 0, 0.125)",
        border: "#EDEDED",
        progresslocborder: "#C8C8C8",
        successbgprogress: "#6ABD8A",
        successbgbtn: "#41b69d",
        questionbage: "#F2FAF8",
        minutesbage: "#FDF2F4",
        questionbagetxt: "#40C1CE",
        minutesbagetxt: "#E55891",
      },
      fontFamily: {
        "league-spartan": ['"League Spartan"', "sans-serif"],
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
