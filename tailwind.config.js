/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        fireflyLightText: "#ACACAC",
        fireflyYellow: "#F7A600",
        fireflyYellowFaded: "#FFC35C",
        fireflyYellowDeep: "#483007",
        fireflyDarkGrey: "#171717",
        fireflyDarkBG: "#0A0A0B",
      },
    },
  },
  plugins: [],
};
