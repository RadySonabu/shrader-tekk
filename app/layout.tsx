import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Shrader Technologies",
  description:
    "Affordable Apps with Offshore Development, AI & Social Media Expertise",
};

const poppins = localFont({
  src: "./fonts/poppins/Poppins-Regular.ttf",
  variable: "--poppins",
  weight: "100 200 300 400 500 600 700 800 900",
});

const monda = localFont({
  src: "./fonts/monda/Monda-Regular.ttf",
  variable: "--monda",
  weight: "100 200 300 400 500 600 700 800 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-PLXR543G" />
      <body className={`${poppins.className} ${monda.className} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PLXR543G"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
