"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Trophy,
  Users,
  Award,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Layers,
  Flame,
  CheckCircle2,
} from "lucide-react";

export const galleryPhotos = [
  {
    id: 1,
    src: "/images/gallery/cadathon-lab-workstations.jpg",
    title: "CAD Modeling Arena & Workstations",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-blue-600 text-white",
    category: "designing",
    tag: "Design Arena",
    caption:
      "Engineering participants from Mechanical, Electrical, and Civil disciplines crafting real-time 3D CAD models, generative assemblies, and blueprint drawings in the computer lab arena during Cadathon 1.0.",
  },
  {
    id: 2,
    src: "/images/gallery/cadathon-dignitaries-dais.jpg",
    title: "Inaugural Ceremony & Dignitaries on Dais",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-amber-600 text-white",
    category: "stage",
    tag: "Inaugural Dais",
    caption:
      "Distinguished leadership of Suryodaya College of Engineering & Technology (SCET), Nagpur and faculty coordinators presiding over the official Central India Cadathon 1.0 inauguration under the SDG banner.",
  },
  {
    id: 3,
    src: "/images/gallery/cadathon1-prize-swapnil.jpg",
    title: "Prize & Certificate Presentation by Industry Guests",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-emerald-600 text-white",
    category: "awards",
    tag: "Prize Felicitation",
    caption:
      "Winning student designers receiving their official Cadathon 1.0 Certificate of Achievement and prize envelope from industry guest Mr. Swapnil Todparkar, Dr. V.G. Arajpure, and Dr. Rasika N. Chafle at SCET, Nagpur.",
  },
  {
    id: 4,
    src: "/images/gallery/cadathon-lab-wide.jpg",
    title: "Full House CAD Drafting Arena in Action",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-indigo-600 text-white",
    category: "designing",
    tag: "Live Drafting Lab",
    caption:
      "Scores of student innovators solving live industrial problem statements during the hands-on Central India Cadathon 1.0 designing competition in the centralized computing centre.",
  },
  {
    id: 5,
    src: "/images/gallery/cadathon1-prize-parhate-1.jpg",
    title: "Stage Felicitation by Vice Principal Dr. V.G. Parhate",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-orange-500 text-white",
    category: "awards",
    tag: "Winner Podium",
    caption:
      "Student innovators felicitated on stage with Cadathon 1.0 Certificate of Achievement by Vice Principal Dr. V.G. Parhate and faculty dignitaries for standout performance.",
  },
  {
    id: 6,
    src: "/images/gallery/cadathon-inaugural-procession.jpg",
    title: "Grand Inaugural Welcome & Ribbon Cutting Gathering",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-purple-600 text-white",
    category: "stage",
    tag: "Inaugural Procession",
    caption:
      "Faculty coordinators, organizers, and guests arriving at the CAD design wing for the ceremonial ribbon cutting and launch of Central India Cadathon 1.0.",
  },
  {
    id: 7,
    src: "/images/gallery/cadathon-certificate-prize.jpg",
    title: "Certificate of Achievement Presentation",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-emerald-600 text-white",
    category: "awards",
    tag: "Prize Ceremony",
    caption:
      "Winning student team proudly receiving their official Central India Cadathon 1.0 Certificate of Achievement and cash prize envelope from coordinator Dr. Rasika N. Chafle and volunteers.",
  },
  {
    id: 8,
    src: "/images/gallery/cadathon1-prize-parhate-2.jpg",
    title: "Innovation Award & Certificate Ceremony",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-amber-600 text-white",
    category: "awards",
    tag: "Award Ceremony",
    caption:
      "Mechanical & CAD design winners awarded Certificates of Achievement for innovative 3D CAD modeling solutions during Cadathon 1.0 by Dr. V.G. Parhate.",
  },
  {
    id: 9,
    src: "/images/gallery/cadathon1-prize-rasika.jpg",
    title: "Merit Award Presented by Dr. Rasika Chafle Ma'am",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-teal-600 text-white",
    category: "awards",
    tag: "Merit Felicitation",
    caption:
      "Participant receiving the official Cadathon 1.0 Certificate of Achievement from coordinator Dr. Rasika Chafle ma'am and organizing student volunteers at SCET, Nagpur.",
  },
];

const categories = [
  { id: "all", label: "All Moments", icon: Layers },
  { id: "awards", label: "Awards & Felicitation", icon: Trophy },
  { id: "designing", label: "CAD Design Arena", icon: Flame },
  { id: "stage", label: "Inauguration & Dais", icon: Award },
];

export default function PastEventsGalleryBox() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  // Filtered photos
  const filteredPhotos =
    activeCategory === "all"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === activeCategory);

  // Preload images into browser cache
  useEffect(() => {
    galleryPhotos.forEach((photo) => {
      const img = new window.Image();
      img.src = photo.src;
    });
  }, []);

  // When lightbox opens, hide navbar completely and freeze background scroll
  useEffect(() => {
    const isLightboxOpen = selectedPhotoIndex !== null;

    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("gallery-modal-open");
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("gallery-modal-change", { detail: { open: true } })
        );
      }
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("gallery-modal-open");
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("gallery-modal-change", { detail: { open: false } })
        );
      }
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("gallery-modal-open");
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("gallery-modal-change", { detail: { open: false } })
        );
      }
    };
  }, [selectedPhotoIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;

      if (e.key === "Escape") {
        setSelectedPhotoIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedPhotoIndex((prev) =>
          prev > 0 ? prev - 1 : filteredPhotos.length - 1
        );
      } else if (e.key === "ArrowRight") {
        setSelectedPhotoIndex((prev) =>
          prev < filteredPhotos.length - 1 ? prev + 1 : 0
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, filteredPhotos.length]);

  return (
    <>
      {/* ========================================================
          PAST EVENTS PHOTO GALLERY SECTION (DIRECT ON LANDING PAGE)
          ======================================================== */}
      <section
        id="highlights"
        className="w-full pt-10 pb-16 sm:pt-16 sm:pb-24 px-3 sm:px-6 md:px-10 relative z-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Handcrafted Header Section */}
          <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
            {/* Official Event Vault - Tactile Masking Tape Archive Stamp */}
            <div className="relative inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 bg-[#fef08a] border-2 border-black px-3 sm:px-5 py-1.5 -rotate-1 rounded-xs shadow-[3px_3px_0px_0px_#000] mb-4 sm:mb-5 hover:rotate-0 transition-transform">
              {/* Handcrafted corner tape pieces */}
              <div className="absolute -top-1.5 -left-2 w-3.5 sm:w-4 h-3 bg-amber-100/90 border border-amber-300 -rotate-12 pointer-events-none" />
              <div className="absolute -bottom-1.5 -right-2 w-3.5 sm:w-4 h-3 bg-amber-100/90 border border-amber-300 rotate-6 pointer-events-none" />

              <span className="text-orange-600 font-black text-xs sm:text-sm">✦</span>
              <span className="font-caveat font-extrabold text-base sm:text-2xl text-neutral-900 tracking-wide leading-none">
                Official Event Vault
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider bg-black text-amber-300 px-1.5 sm:px-2 py-0.5 rounded-xs">
                Cadathon 1.0 Archive
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 mb-3 sm:mb-4 leading-tight px-2">
              Past Events{" "}
              <span className="font-caveat text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-linear-to-r from-orange-600 via-amber-500 to-emerald-600 bg-clip-text text-transparent inline-block -rotate-1 px-1">
                Photo Gallery
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-neutral-700 text-xs sm:text-base md:text-lg max-w-2xl leading-relaxed font-medium mb-6 px-3">
              Step inside Central India Cadathon 1.0 at Suryodaya College of
              Engineering & Technology (SCET), Nagpur. Explore live 3D CAD modeling
              arenas, inaugural stage keynotes, and victorious prize felicitation ceremonies.
            </p>

            {/* Authentic Metadata Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
              <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border-2 border-black bg-neutral-50 text-neutral-900 text-[11px] sm:text-sm font-bold shadow-[2px_2px_0px_0px_#000]">
                <Trophy className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Cadathon 1.0</span>
              </span>
              <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border-2 border-black bg-neutral-50 text-neutral-900 text-[11px] sm:text-sm font-bold shadow-[2px_2px_0px_0px_#000]">
                <Users className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>1,000+ Designers</span>
              </span>
              <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border-2 border-black bg-neutral-50 text-neutral-900 text-[11px] sm:text-sm font-bold shadow-[2px_2px_0px_0px_#000]">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>9 Live Photos</span>
              </span>
            </div>

            {/* Filter Tabs - Mobile Scrollable & Touch-Friendly */}
            <div className="w-full max-w-full overflow-x-auto scrollbar-none py-1">
              <div className="inline-flex flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-neutral-100 border-2 border-black shadow-[3px_3px_0px_0px_#000] mx-auto min-w-max sm:min-w-0">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id;
                  const count =
                    cat.id === "all"
                      ? galleryPhotos.length
                      : galleryPhotos.filter((p) => p.category === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border-2 cursor-pointer ${
                        isActive
                          ? "bg-black text-white border-black shadow-[2px_2px_0px_0px_rgba(249,115,22,1)]"
                          : "bg-white text-neutral-700 border-transparent hover:border-black/30 hover:bg-neutral-50"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      <span>{cat.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                          isActive
                            ? "bg-orange-500 text-white"
                            : "bg-neutral-200 text-neutral-800"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ========================================================
              PHOTO CARDS GRID: ALL 9 AUTHENTIC PHOTOS VISIBLE
              ======================================================== */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7"
          >
            <AnimatePresence>
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  onClick={() => setSelectedPhotoIndex(index)}
                  className="group relative cursor-pointer bg-white rounded-2xl border-2 sm:border-3 border-black p-3 sm:p-3.5 pb-4 sm:pb-5 shadow-[4px_4px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_rgba(249,115,22,1)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Photo Container with Guaranteed Height & Real Image */}
                  <div className="relative w-full h-52 sm:h-56 md:h-64 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-300">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="eager"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-2 left-2 z-10 flex items-center gap-1.5">
                      <span
                        className={`text-[9px] sm:text-xs font-black uppercase px-2 sm:px-2.5 py-0.5 rounded border border-black/30 shadow-xs ${photo.chapterColor}`}
                      >
                        {photo.chapter}
                      </span>
                    </div>

                    <div className="absolute top-2 right-2 z-10">
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-black/85 backdrop-blur-xs text-white px-2 py-0.5 rounded border border-white/20">
                        {photo.tag}
                      </span>
                    </div>

                    {/* Hover Overlay with Enlarge Cue */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-black font-extrabold text-xs shadow-md border-2 border-black transform translate-y-1 group-hover:translate-y-0 transition-transform">
                        <Maximize2 className="w-3.5 h-3.5 text-orange-600" />
                        <span>View Photo</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="mt-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-black text-neutral-900 text-sm sm:text-base md:text-lg leading-snug group-hover:text-orange-600 transition-colors line-clamp-2 mb-1">
                        {photo.title}
                      </h3>
                      <p className="text-neutral-600 text-xs leading-relaxed line-clamp-2 sm:line-clamp-3 font-normal">
                        {photo.caption}
                      </p>
                    </div>

                    {/* Bottom strip */}
                    <div className="mt-2.5 pt-2.5 border-t border-neutral-200 flex items-center justify-between text-[10px] sm:text-[11px] text-neutral-500 font-bold">
                      <span className="flex items-center gap-1 text-emerald-700">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                        <span>Verified Archive</span>
                      </span>
                      <span className="text-neutral-400 group-hover:text-orange-600 flex items-center gap-0.5 transition-colors">
                        <span>Expand</span>
                        <span>→</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          FULL SCREEN HIGH-RES LIGHTBOX VIEWER
          (FLOATING NAVBAR IS COMPLETELY HIDDEN WHILE OPEN)
          ======================================================== */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/95 backdrop-blur-md">
            {/* Click backdrop to close */}
            <div
              className="absolute inset-0"
              onClick={() => setSelectedPhotoIndex(null)}
            />

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-4xl bg-neutral-900 border-2 sm:border-3 border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92dvh] sm:max-h-[95vh]"
            >
              {/* Lightbox Top Header */}
              <div className="flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3 border-b border-neutral-800 bg-black/70 shrink-0">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span
                    className={`text-[9px] sm:text-xs font-black uppercase px-2 py-0.5 rounded ${filteredPhotos[selectedPhotoIndex].chapterColor}`}
                  >
                    {filteredPhotos[selectedPhotoIndex].chapter}
                  </span>
                  <span className="text-neutral-400 text-xs font-mono font-medium">
                    {selectedPhotoIndex + 1} of {filteredPhotos.length}
                  </span>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedPhotoIndex(null)}
                  className="px-2.5 sm:px-3 py-1 rounded-lg bg-neutral-800 hover:bg-rose-600 text-white font-bold text-xs transition-colors border border-neutral-700 flex items-center gap-1 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Close</span>
                  <kbd className="hidden sm:inline-block ml-1 text-[9px] bg-black/50 px-1 py-0.5 rounded text-neutral-400">
                    Esc
                  </kbd>
                </button>
              </div>

              {/* Main Image View Area */}
              <div className="relative flex-1 bg-black flex items-center justify-center min-h-[220px] sm:min-h-[380px] max-h-[48vh] sm:max-h-[60vh] overflow-hidden p-2 sm:p-4">
                <img
                  src={filteredPhotos[selectedPhotoIndex].src}
                  alt={filteredPhotos[selectedPhotoIndex].title}
                  className="max-w-full max-h-[45vh] sm:max-h-[56vh] object-contain rounded shadow-lg"
                />

                {/* Previous Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPhotoIndex((prev) =>
                      prev > 0 ? prev - 1 : filteredPhotos.length - 1
                    );
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/75 hover:bg-orange-600 text-white flex items-center justify-center border border-white/30 backdrop-blur-xs transition-colors cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Next Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPhotoIndex((prev) =>
                      prev < filteredPhotos.length - 1 ? prev + 1 : 0
                    );
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/75 hover:bg-orange-600 text-white flex items-center justify-center border border-white/30 backdrop-blur-xs transition-colors cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Lightbox Caption Footer */}
              <div className="p-3.5 sm:p-5 bg-neutral-900 border-t border-neutral-800 shrink-0 overflow-y-auto max-h-[22vh]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h4 className="text-sm sm:text-lg font-bold text-white line-clamp-1">
                    {filteredPhotos[selectedPhotoIndex].title}
                  </h4>
                  <span className="text-[10px] font-mono text-orange-400 bg-orange-950/60 border border-orange-800/80 px-2 py-0.5 rounded-full w-fit">
                    {filteredPhotos[selectedPhotoIndex].tag}
                  </span>
                </div>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  {filteredPhotos[selectedPhotoIndex].caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
