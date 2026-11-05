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
  metadataBase: new URL("https://cic.scetngp.com"),
  title: "Central India Cadathon 2.0 | SCET Nagpur",
  description:
    "Central India Cadathon 2.0 — Premier CAD Designing Competition at Suryodaya College of Engineering & Technology, Nagpur.",
  alternates: {
    canonical: "https://cic.scetngp.com",
  },
  openGraph: {
    title: "Central India Cadathon 2.0 | SCET Nagpur",
    description:
      "Central India Cadathon 2.0 — Premier CAD Designing Competition at Suryodaya College of Engineering & Technology, Nagpur.",
    url: "https://cic.scetngp.com",
    siteName: "Central India Cadathon 2.0",
    images: [
      {
        url: "/images/cadathon_chapter2_hero.png",
        width: 1200,
        height: 630,
        alt: "Central India Cadathon 2.0",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
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
