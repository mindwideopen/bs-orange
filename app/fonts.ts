import localFont from "next/font/local";

export const inter = localFont({
  src: [
    {
      path: "../public/fonts/inter-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/inter-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/inter-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  preload: false,
  variable: "--font-inter",
});

export const poiretOne = localFont({
  src: "../public/fonts/poiret-one-regular.ttf",
  display: "swap",
  preload: false,
  variable: "--font-poiret-one",
  weight: "400",
  style: "normal",
});
