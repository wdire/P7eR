import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        public_sans: "var(--font-public_sans)",
      },
      boxShadow: {
        lg: "0px 4px 18px 0px #4B465C1A;",
      },
      colors: {
        editor: {
          "primary-text": "#4B465C",
          "button-hover": "#A8AAAE29",
          gray: "#DBDADE",
        },
      },
    },
  },
  plugins: [],
};
export default config;
