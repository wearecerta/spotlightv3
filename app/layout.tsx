import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Outfit,
  Bebas_Neue,
  Shadows_Into_Light,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

const shadowsIntoLight = Shadows_Into_Light({
  variable: "--font-shadow-light",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spotlight | Best Advertising Agency in Addis Ababa, Ethiopia",
  description:
    "Best Advertising agency in Addis Ababa, Ethiopia. We specialize in creative advertising, brand design, marketing, production, event management, etc",
  keywords: [
    "Best Advertising Agency in Addis Ababa",
    " Best Marketing Agency in Addis Ababa",
    "Best Marketing Agency in Ethiopia",
    "Best Advertising Agency in Ethiopia",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${outfit.variable}
          ${bebasNeue.variable}
          ${shadowsIntoLight.variable}
          ${plusJakartaSans.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
