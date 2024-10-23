import localFont from "next/font/local";

const geist = localFont({
  display: "swap",
  src: "./Geist/GeistVF.woff",
  style: "normal",
  variable: "--font-geist",
  weight: "100 900",
});

const spaceGrotesk = localFont({
  display: "swap",
  src: "./SpaceGrotesk/SpaceGrotesk-Variable.woff2",
  style: "normal",
  variable: "--font-space-grotesk",
  weight: "100 900",
});

export { geist, spaceGrotesk };
