"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Corner plus cross icon (matches Aceternity & original CIH design system)
const CornerPlusIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);

// 5 DeepTech Tracks with exact content and realistic logos
const TRACKS_DATA = [
  {
    id: 1,
    tag: "Track 1: AI & Cognitive",
    title: "AI & COGNITIVE SYSTEMS",
    description: "Advanced AI, Agentic Intelligence & Cognitive Systems.",
    image: "/images/tracks/ai.jpg",
    textColor: "text-blue-600",
    borderColor: "border-blue-500",
    bgHover: "hover:border-blue-500 hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)]",
  },
  {
    id: 2,
    tag: "Track 2: Robotics",
    title: "ROBOTICS & AUTOMATION",
    description: "Autonomous Systems & Intelligent Automation.",
    image: "/images/tracks/robotics.jpg",
    textColor: "text-green-600",
    borderColor: "border-green-500",
    bgHover: "hover:border-green-500 hover:shadow-[0_10px_30px_rgba(22,163,74,0.15)]",
  },
  {
    id: 3,
    tag: "Track 3: Semiconductors",
    title: "SEMICONDUCTORS & EDGETECH",
    description: "Embedded Intelligence, Edge Computing & Cyber-Physical Systems.",
    image: "/images/tracks/semiconductors.jpg",
    textColor: "text-orange-600",
    borderColor: "border-orange-500",
    bgHover: "hover:border-orange-500 hover:shadow-[0_10px_30px_rgba(234,88,12,0.15)]",
  },
  {
    id: 4,
    tag: "Track 4: SpaceTech",
    title: "SPACETECH & AEROSPACE",
    description: "Defence & Strategic Technologies.",
    image: "/images/tracks/spacetech.jpg",
    textColor: "text-purple-600",
    borderColor: "border-purple-500",
    bgHover: "hover:border-purple-500 hover:shadow-[0_10px_30px_rgba(147,51,234,0.15)]",
  },
  {
    id: 5,
    tag: "Track 5: BioTech",
    title: "BIOTECHNOLOGY & LIFE SCIENCES",
    description: "Advanced Biotechnology & Biomedical Engineering.",
    image: "/images/tracks/biotech.jpg",
    textColor: "text-pink-600",
    borderColor: "border-pink-500",
    bgHover: "hover:border-pink-500 hover:shadow-[0_10px_30px_rgba(219,39,119,0.15)]",
  },
];

// Track Card styled in the authentic CIH website layout with Realistic Logos
function CIHTrackCard({ track }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={`relative w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.75rem)] min-h-[360px] p-6 sm:p-8 border border-neutral-300 bg-white flex flex-col items-center justify-between text-center transition-all duration-300 ease-in-out cursor-pointer group rounded-xl shadow-xs hover:shadow-xl ${track.bgHover}`}
    >
      {/* 4 Corner Plus Icons (Aceternity style used across CIH) */}
      <CornerPlusIcon className="absolute h-5 w-5 sm:h-6 sm:w-6 -top-3 -left-3 text-neutral-400 group-hover:text-black transition-colors" />
      <CornerPlusIcon className="absolute h-5 w-5 sm:h-6 sm:w-6 -bottom-3 -left-3 text-neutral-400 group-hover:text-black transition-colors" />
      <CornerPlusIcon className="absolute h-5 w-5 sm:h-6 sm:w-6 -top-3 -right-3 text-neutral-400 group-hover:text-black transition-colors" />
      <CornerPlusIcon className="absolute h-5 w-5 sm:h-6 sm:w-6 -bottom-3 -right-3 text-neutral-400 group-hover:text-black transition-colors" />

      {/* Track Pill Tag */}
      <div className="mb-4">
        <span
          className={`px-4 py-2 text-sm sm:text-base font-bold rounded-full border-2 ${track.borderColor} ${track.textColor} bg-white group-hover:shadow-xs transition duration-200 block`}
        >
          {track.tag}
        </span>
      </div>

      {/* Realistic 3D Tech Logo */}
      <div className="my-3 flex items-center justify-center">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-md border border-neutral-200/80 bg-white group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
          <Image
            src={track.image}
            alt={track.title}
            width={120}
            height={120}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Track Title (Exact Content) */}
      <h2
        className={`text-lg sm:text-xl md:text-2xl font-bold tracking-tight mb-2 ${track.textColor} transition duration-200`}
      >
        {track.title}
      </h2>

      {/* Track Description (Exact Content) */}
      <p className="text-neutral-600 text-xs sm:text-sm md:text-base max-w-sm px-2 leading-relaxed">
        {track.description}
      </p>

      {/* Bottom accent line */}
      <div className="w-12 h-1 rounded-full bg-neutral-200 group-hover:w-20 transition-all duration-300 mt-4 group-hover:bg-current" />
    </motion.div>
  );
}

// Main Tracks Section: Directly displays the 5 DeepTech Track Cards on the original CIH theme
export default function DeepTechTracksSection() {
  return (
    <div
      id="tracks"
      className="w-full px-4 sm:px-6 md:px-10 relative z-20 py-12 sm:py-20 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto z-10 flex flex-col items-center">
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="z-30 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-center mb-3 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-blue-500 drop-shadow-sm">
            EXPLORE THE DEEPTECH TRACKS
          </h1>
          <p className="text-neutral-600 text-base sm:text-xl font-medium tracking-wide">
            Five frontiers. Endless possibilities.
          </p>
        </div>

        {/* --- 5 DEEPTECH TRACK CARDS WITH REALISTIC LOGOS --- */}
        <div className="py-4 sm:py-6 flex flex-wrap items-stretch justify-center w-full gap-6 sm:gap-8 lg:gap-10 mx-auto max-w-7xl">
          {TRACKS_DATA.map((track) => (
            <CIHTrackCard key={track.id} track={track} />
          ))}
        </div>
      </div>
    </div>
  );
}
