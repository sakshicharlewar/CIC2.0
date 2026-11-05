import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = localFont({
  src: "../../fonts/Caveat.ttf",
  variable: "--font-caveat",
  display: "swap",
});

export const metadata = {
  title: "Central India Cadathon 2.0 | SCET Nagpur",
  description:
    "Central India Cadathon 2.0 — Premier 6-Hour CAD Designing Competition at Suryodaya College of Engineering & Technology, Nagpur.",
  icons: {
    icon: "https://res.cloudinary.com/dkblrb4ow/image/upload/v1766264353/WhatsApp_Image_2025-11-21_at_11.13.24_AM_pdgsjt.jpg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://res.cloudinary.com/dkblrb4ow/image/upload/v1766264353/WhatsApp_Image_2025-11-21_at_11.13.24_AM_pdgsjt.jpg"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} font-sans antialiased overflow-x-hidden w-full max-w-full bg-white text-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}
