import localFont from "next/font/local";
import { El_Messiri } from "next/font/google";

export const century = localFont({
  src: "../../public/fonts/Century.ttf",
  variable: "--font-century",
});

export const creatorsWavy = localFont({
  src: "../../public/fonts/creators_wavy.otf",
  variable: "--font-creators-wavy",
});

export const trajanProBold = localFont({
  src: "../../public/fonts/TrajanProBold.otf",
  variable: "--font-trajan-bold",
});

export const trajanProRegular = localFont({
  src: "../../public/fonts/TrajanProRegular.ttf",
  variable: "--font-trajan-regular",
});

export const burguesScript = localFont({
  src: "../../public/fonts/Burgues.otf",
  variable: "--font-burgues-script",
})

export const cylburn = localFont({
  src: "../../public/fonts/Cylburn.otf",
  variable: "--font-cylburn-script",
});

export const elMessiri = El_Messiri({
  subsets: ["latin"],
  variable: "--font-el-messiri",
});