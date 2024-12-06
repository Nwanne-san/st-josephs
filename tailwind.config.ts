import type { Config } from "tailwindcss";
import { Yeseva_One, Work_Sans } from "next/font/google";

const yeseva = Yeseva_One({ subsets: ["latin"], weight: ["400"] });
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ], 
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1F2B6C",
        secondary: "#159EEC",
        accent: "#BFD2F8",
      },
      fontFamily: {
        yeseva: [yeseva.style.fontFamily], 
        worksans: [workSans.style.fontFamily], 
      },
    },
  },
  plugins: [],
} satisfies Config;
