import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: "var(--font-geist)",
        "space-grotesk": "var(--font-space-grotesk)",
      },
    },
  },
  plugins: [],
};
export default config;
