"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Home as IconHome,
  User as IconUser,
  MapPin as IconMapPin,
} from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import SparkleCursor from "@/components/ui/sparkle-cursor";

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

// Track Card styled in the authentic CIH website layout with realistic logos
function TrackCardItem({ track }) {
  return (
    <div
      className={`relative w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.75rem)] min-h-[360px] p-6 sm:p-8 border border-neutral-300 bg-white flex flex-col items-center justify-between text-center transition-all duration-300 ease-in-out cursor-pointer group rounded-xl shadow-xs hover:shadow-xl ${track.bgHover}`}
    >
      {/* 4 Corner Plus Icons */}
      <CornerPlusIcon className="absolute h-5 w-5 sm:h-6 sm:w-6 -top-3 -left-3 text-neutral-400 group-hover:text-black transition-colors" />
      <CornerPlusIcon className="absolute h-5 w-5 sm:h-6 sm:w-6 -bottom-3 -left-3 text-neutral-400 group-hover:text-black transition-colors" />
      <CornerPlusIcon className="absolute h-5 w-5 sm:h-6 sm:w-6 -top-3 -right-3 text-neutral-400 group-hover:text-black transition-colors" />
      <CornerPlusIcon className="absolute h-5 w-5 sm:h-6 sm:w-6 -bottom-3 -right-3 text-neutral-400 group-hover:text-black transition-colors" />

      {/* Pill Tag */}
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

      {/* Title */}
      <h2
        className={`text-lg sm:text-xl md:text-2xl font-bold tracking-tight mb-2 ${track.textColor} transition duration-200`}
      >
        {track.title}
      </h2>

      {/* Description */}
      <p className="text-neutral-600 text-xs sm:text-sm md:text-base max-w-sm px-2 leading-relaxed">
        {track.description}
      </p>

      {/* Bottom accent bar */}
      <div className="w-12 h-1 rounded-full bg-neutral-200 group-hover:w-20 transition-all duration-300 mt-4 group-hover:bg-current" />
    </div>
  );
}


export default function TracksPage() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "About",
      link: "/#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "Tracks",
      link: "/tracks",
      icon: <IconMapPin className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "Timeline",
      link: "/#timeline",
      icon: <IconMapPin className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden font-sans">
      <FloatingNav navItems={navItems} />
      <SparkleCursor />

      {/* Background Section without butterfly */}
      <div className="relative w-full bg-white pt-24 sm:pt-28 pb-20 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Back to Home Button */}
          <div className="w-full flex justify-start mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 font-bold border-2 border-black uppercase bg-white hover:bg-neutral-100 text-black text-xs sm:text-sm tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Heading */}
          <div className="text-center mb-10 sm:mb-14">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-3 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-blue-500 drop-shadow-sm">
              EXPLORE THE DEEPTECH TRACKS
            </h1>
            <p className="text-neutral-600 text-base sm:text-xl font-medium tracking-wide">
              Five frontiers. Endless possibilities.
            </p>
          </div>

          {/* Authentic CIH Tracks Grid: 5 cards */}
          <div className="py-6 sm:py-8 text-black flex flex-wrap items-stretch justify-center w-full gap-6 sm:gap-8 lg:gap-10 mx-auto max-w-7xl">
            {TRACKS_DATA.map((track) => (
              <TrackCardItem key={track.id} track={track} />
            ))}
          </div>

          {/* Bottom Back Button */}
          <div className="mt-12 sm:mt-16 flex justify-center">
            <Link
              href="/"
              className="px-8 py-3.5 font-bold border-2 border-black uppercase bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
