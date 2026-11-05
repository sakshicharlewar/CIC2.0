"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";

import {
  Home as IconHome,
  User as IconUser,
  MapPin as IconMapPin,
  Camera as IconCamera,
  Layers,
  Sparkles,
  Trophy,
  Users,
  Compass,
} from "lucide-react";
import SparkleCursor from "@/components/ui/sparkle-cursor";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import CompetitionTimeline from "@/components/CompetitionTimeline";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconWorld,
} from "@tabler/icons-react";
import { NumberTicker } from "@/components/ui/number-ticker";
import Link from "next/link";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import PastEventsGalleryBox from "@/components/PastEventsGalleryBox";
import VenueLocation from "@/components/VenueLocation";
import EventLeads from "@/components/EventLeads";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
      return () => window.removeEventListener("resize", checkScreenSize);
    }
  }, []);

  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4" />,
    },
    {
      name: "Highlights",
      link: "#highlights",
      icon: <IconCamera className="h-4 w-4" />,
    },
    {
      name: "Timeline",
      link: "#timeline",
      icon: <IconMapPin className="h-4 w-4" />,
    },
    {
      name: "Venue",
      link: "#venue",
      icon: <Compass className="h-4 w-4" />,
    },
  ];

  const handleScroll = (e, link) => {
    e.preventDefault();
    const targetId = link.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (targetId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const navItemsWithScroll = navItems.map((item) => ({
    ...item,
    onClick: item.link.startsWith("#")
      ? (e) => handleScroll(e, item.link)
      : undefined,
  }));

  const sponsorsData = [
    "/sponsor/stbif.png",
    "/sponsor/unstop.png",
    "/sponsor/ytc.png",
    "/sponsor/stbif.png",
    "/sponsor/unstop.png",
    "/sponsor/ytc.png",
    "/sponsor/stbif.png",
    "/sponsor/unstop.png",
    "/sponsor/ytc.png",
    "/sponsor/stbif.png",
    "/sponsor/unstop.png",
    "/sponsor/ytc.png",
  ];

  return (
    <div className="min-h-screen w-full max-w-full bg-white overflow-x-hidden font-sans">
      <FloatingNav navItems={navItemsWithScroll} />
      <SparkleCursor />

      {/* ========================================================
          HERO SECTION (FULLY RESPONSIVE & MOBILE-OPTIMIZED)
          ======================================================== */}
      <section
        id="home"
        className="w-full min-h-[100dvh] h-[100dvh] relative overflow-hidden flex flex-col items-center justify-center px-4"
      >
        <BackgroundRippleEffect />

        {/* Hero Graphic Container */}
        <div className="relative z-20 w-[92vw] max-w-[320px] sm:max-w-[460px] md:max-w-[580px] lg:max-w-[700px] h-48 sm:h-60 md:h-72 lg:h-[300px] flex items-center justify-center -mt-6 sm:-mt-10 pointer-events-none">
          <Image
            className="object-contain w-full h-full drop-shadow-sm"
            fill
            unoptimized
            style={{ objectFit: "contain" }}
            src="/images/cadathon_chapter2_hero.png"
            alt="Central India Cadathon Chapter 2"
            priority
          />
        </div>

        {/* Event Key Highlights - Mobile & Desktop Badges */}
        <div className="relative z-20 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-3 sm:mt-5 max-w-lg px-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-2 border-black bg-[#fef08a] text-neutral-900 font-extrabold text-[11px] sm:text-xs shadow-[2px_2px_0px_0px_#000]">
            ⚡ 6-Hour CAD Contest
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-2 border-black bg-white text-neutral-900 font-bold text-[11px] sm:text-xs shadow-[2px_2px_0px_0px_#000]">
            📍 SCET Campus, Nagpur
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-2 border-black bg-orange-100 text-orange-950 font-bold text-[11px] sm:text-xs shadow-[2px_2px_0px_0px_#000]">
            🏆 ₹25,000+ Prize Pool
          </span>
        </div>

        {/* Soft bottom fade gradient */}
        <div className="absolute bottom-0 left-0 w-full h-24 sm:h-36 bg-linear-to-t from-white via-white/80 to-transparent pointer-events-none z-10" />

        {/* MAIN CTA BUTTON: REGISTER NOW */}
        <div className="absolute bottom-6 sm:bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 z-30 w-full max-w-xs px-4 flex justify-center">
          <a
            href="https://unstop.com/o/gknRZ6t?lb=mX8jqgHP&utm_medium=Share&utm_source=competitions&utm_campaign=Centrhac89592"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button
              suppressHydrationWarning
              className="w-full sm:w-auto px-8 sm:px-12 py-3.5 sm:py-4 cursor-pointer hover:bg-orange-600 hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 font-black border-2 border-black uppercase bg-orange-500 text-white transition duration-200 text-xs sm:text-sm shadow-[4px_4px_0px_0px_#000] tracking-wider whitespace-nowrap rounded-xl"
            >
              Register Now on Unstop
            </button>
          </a>
        </div>
      </section>

      {/* ========================================================
          ABOUT CIC 2.0 (MOBILE-OPTIMIZED)
          ======================================================== */}
      <section
        id="about"
        className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 relative z-20 overflow-hidden"
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-2 border-black bg-blue-100 text-blue-950 font-extrabold text-xs shadow-[2px_2px_0px_0px_#000] mb-3">
              <span>✦</span>
              <span>About The Challenge</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center tracking-tight bg-clip-text text-transparent bg-linear-to-r from-green-800 via-orange-500 to-blue-800">
              About CIC 2.0
            </h2>
          </div>

          {/* Body Text */}
          <div className="space-y-3.5 sm:space-y-5 text-center text-xs sm:text-base md:text-lg text-neutral-700 leading-relaxed font-normal mb-8 sm:mb-10">
            <p>
              <strong className="font-bold text-neutral-900">
                Central India CADATHON 2.0 (CIC 2.0)
              </strong>{" "}
              is a premier multidisciplinary{" "}
              <strong className="font-bold text-neutral-900">
                CAD Designing Competition
              </strong>{" "}
              hosted by{" "}
              <strong className="font-bold text-neutral-900">
                Suryodaya College of Engineering &amp; Technology (SCET), Nagpur
              </strong>
              . This six-hour in-person engineering design contest invites students
              from Mechanical, Electrical, and Civil Engineering fields to display
              their creativity, technical skills, and problem-solving capabilities
              through Computer-Aided Design (CAD).
            </p>
            <p>
              Participants will address genuine engineering problem statements,
              crafting innovative and practically viable designs within the
              specified time frame. Competing individually or in teams of up to 2
              members, participants will have the chance to showcase their design
              talents and vie for exciting prizes and recognition.
            </p>
          </div>

          {/* Quick Highlight Cards for Mobile Readers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 rounded-xl border-2 border-black bg-neutral-50 shadow-[3px_3px_0px_0px_#000] text-center">
              <span className="text-xl sm:text-2xl mb-1 block">⏱️</span>
              <p className="font-black text-xs sm:text-sm text-neutral-900">6 Hours Live</p>
              <span className="text-[10px] text-neutral-500 font-mono">Offline Arena</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl border-2 border-black bg-neutral-50 shadow-[3px_3px_0px_0px_#000] text-center">
              <span className="text-xl sm:text-2xl mb-1 block">🏛️</span>
              <p className="font-black text-xs sm:text-sm text-neutral-900">SCET Nagpur</p>
              <span className="text-[10px] text-neutral-500 font-mono">Host Campus</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl border-2 border-black bg-neutral-50 shadow-[3px_3px_0px_0px_#000] text-center">
              <span className="text-xl sm:text-2xl mb-1 block">🛠️</span>
              <p className="font-black text-xs sm:text-sm text-neutral-900">Mech, Elec & Civil</p>
              <span className="text-[10px] text-neutral-500 font-mono">Multidisciplinary</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl border-2 border-black bg-neutral-50 shadow-[3px_3px_0px_0px_#000] text-center">
              <span className="text-xl sm:text-2xl mb-1 block">🏆</span>
              <p className="font-black text-xs sm:text-sm text-neutral-900">₹25,000+</p>
              <span className="text-[10px] text-neutral-500 font-mono">Prizes & Goodies</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          PAST EVENTS PHOTO GALLERY SECTION (9 VERIFIED PHOTOS)
          ======================================================== */}
      <div className="relative w-full bg-white z-20">
        <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <PastEventsGalleryBox />

        {/* ========================================================
            ACHIEVEMENTS SECTION (CLEAN NUMBERS ONLY - NO BOXES)
            ======================================================== */}
        <section className="w-full py-10 sm:py-16 md:py-20 relative px-4 sm:px-6 md:px-10">
          <div className="flex flex-col items-center justify-center mb-8 sm:mb-12 relative z-10 text-center">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 mb-2">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-emerald-500 to-indigo-500 inline-block">
                Achievements
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 font-medium">
              Proven impact across the Central India engineering design ecosystem
            </p>
          </div>

          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center md:justify-around gap-8 sm:gap-10 relative z-10">
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-4xl sm:text-6xl md:text-7xl font-black text-neutral-900 tracking-tight flex items-baseline justify-center">
                <NumberTicker
                  value={2000}
                  className="text-4xl sm:text-6xl md:text-7xl font-black text-neutral-900 dark:text-neutral-900"
                />
                <span className="text-amber-500 ml-1">+</span>
              </h3>
              <p className="text-base sm:text-xl lg:text-2xl font-bold text-neutral-800 mt-2">
                Designers &amp; Engineers
              </p>
              <span className="text-xs sm:text-sm text-neutral-500 font-medium mt-0.5">
                Participants Engaged
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-4xl sm:text-6xl md:text-7xl font-black text-neutral-900 tracking-tight flex items-baseline justify-center">
                <NumberTicker
                  value={800}
                  className="text-4xl sm:text-6xl md:text-7xl font-black text-neutral-900 dark:text-neutral-900"
                />
                <span className="text-blue-500 ml-1">+</span>
              </h3>
              <p className="text-base sm:text-xl lg:text-2xl font-bold text-neutral-800 mt-2">
                Teams Competed
              </p>
              <span className="text-xs sm:text-sm text-neutral-500 font-medium mt-0.5">
                Innovative 3D Projects
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-4xl sm:text-6xl md:text-7xl font-black text-neutral-900 tracking-tight flex items-baseline justify-center">
                <NumberTicker
                  value={150}
                  className="text-4xl sm:text-6xl md:text-7xl font-black text-neutral-900 dark:text-neutral-900"
                />
                <span className="text-emerald-500 ml-1">+</span>
              </h3>
              <p className="text-base sm:text-xl lg:text-2xl font-bold text-neutral-800 mt-2">
                Colleges Represented
              </p>
              <span className="text-xs sm:text-sm text-neutral-500 font-medium mt-0.5">
                Across Central India
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================
          TIMELINE & REGISTRATION SCHEDULE
          ======================================================== */}
      <CompetitionTimeline />

      {/* ========================================================
          EVENT LEADS (DIRECTORS / CONTACTS)
          ======================================================== */}
      <EventLeads />

      {/* ========================================================
          SPONSORS & PARTNERS (INFINITE MARQUEE WITH ZERO OVERFLOW)
          ======================================================== */}
      <div className="relative w-full bg-white z-20 overflow-hidden">
        <section className="py-10 sm:py-14 px-3 sm:px-6 md:px-10 overflow-hidden relative">
          <div className="mb-6 sm:mb-8 text-center">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-center bg-clip-text text-transparent bg-linear-to-r from-green-500 via-orange-500 to-blue-600 pb-1 sm:pb-2">
              Our Sponsors
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 font-medium">
              Proud partners of Central India Cadathon
            </p>
          </div>

          <div className="w-full overflow-hidden">
            <motion.div
              className="flex flex-row gap-6 sm:gap-10 md:gap-16 min-w-max items-center"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {sponsorsData.map((data, index) => (
                <div
                  key={index}
                  className="shrink-0 p-2 sm:p-3 bg-white rounded-xl border border-neutral-200 shadow-xs flex items-center justify-center"
                >
                  <Image
                    alt={`Sponsor-logo-${index}`}
                    src={data}
                    width={80}
                    height={80}
                    unoptimized
                    className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========================================================
            VENUE & LOCATION MAP (GRAND FINALE VENUE)
            ======================================================== */}
        <VenueLocation />

        {/* ========================================================
            FOOTER (MOBILE-FRIENDLY)
            ======================================================== */}
        <footer className="w-full border-t border-neutral-200 py-6 sm:py-8 px-4 sm:px-10 md:px-16 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-xs sm:text-sm text-neutral-600">
            <p className="font-bold text-neutral-900">
              © 2026 Central India Cadathon 2.0.
            </p>
            <p className="text-[11px] sm:text-xs text-neutral-500 mt-0.5">
              Organized by Suryodaya College of Engineering &amp; Technology (SCET), Nagpur.
            </p>
          </div>

          <div className="flex items-center gap-4 text-neutral-600">
            <Link
              href="https://www.instagram.com/suryodayacollege/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 hover:text-black transition-colors"
            >
              <IconBrandInstagram className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/centralindiahackathon/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 hover:text-blue-600 transition-colors"
            >
              <IconBrandLinkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link
              href="https://scetngp.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 hover:text-black transition-colors"
            >
              <IconWorld className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
