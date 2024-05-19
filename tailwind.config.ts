import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#063970",

          secondary: "#10243e",

          accent: "#F1F5F9",

          neutral: "#F5F5F5",

          "base-100": "#F1F5F9",

          info: "#0000ff",

          success: "#00ff00",

          warning: "#00ff00",

          error: "#ff0000",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        primary: "#ff9900",
        "primary-color": "#063970",
        "base-color": "#F9F9F9",
        "card-bg": "#F0F3FF",
        "dark-card-bg": "#232933",
        "card-name": "#212E4C",
        "card-detail": "#05091B",
        "font-white": "#FFFFFF",
        "sort-color": "#3D4466",
        "toogle-active": "#0C1231",
      },
    },
    fontFamily: {
      "Helvetica-Neue": ["Helvetica Neue", "sans-serif"],
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
};
export default config;
