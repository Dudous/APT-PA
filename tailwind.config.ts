import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        branco: "var(--white)",
        preto: "var(--black)",
      },
      fontSize: {
        large: "36px",
        medium: "24px",
        small: "16px"
      },
      fontFamily: {
        robFont: "var(--roboto)"
      },
      screens: {
        "2lg": "1920px"
      },
      backgroundImage: {
          'medina': "./src/assets/medina.png" ,
          gradiente: "conic-gradient(at 70% -10%, white, black,#303030,#303030, black, white)"
      }
    },
  },
  plugins: [],
};
export default config;
