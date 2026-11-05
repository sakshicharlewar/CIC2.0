"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Clock,
  ExternalLink,
  Compass,
  Navigation,
  Star,
} from "lucide-react";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconWorld,
} from "@tabler/icons-react";

export default function VenueLocation() {
  const mapSearchUrl =
    "https://www.google.com/maps/search/?api=1&query=Suryodaya+College+of+Engineering+%26+Technology+Nagpur";

  // Google Maps embed URL for SCET Nagpur
  const embedMapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.8465034606796!2d79.1532481759685!3d21.078783380582236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bed496c1ca5d%3A0xc6cbfa848d5d4d38!2sSuryodaya%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";

  return (
    <section
      id="venue"
      className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 relative z-20 bg-white overflow-hidden border-t border-neutral-200"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ========================================================
              LEFT COLUMN: VENUE DETAILS & CONNECT
              ======================================================== */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Grand Finale Venue Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border-2 border-orange-400/80 bg-orange-50 text-orange-600 font-extrabold text-xs tracking-wider uppercase shadow-xs mb-4">
              <span>✦</span>
              <span>Grand Finale Venue</span>
            </div>

            {/* College & STBIF Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 tracking-tight leading-tight mb-2">
              Suryodaya College of Engineering &amp; Technology
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-bold text-neutral-600 mb-6">
              &amp; Suryodaya Technology Business Incubation Foundation (STBIF)
            </p>

            {/* Venue Metadata Checklist */}
            <div className="space-y-4 mb-8 w-full">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 border border-rose-300 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-xs sm:text-sm text-neutral-900 block">
                    Address:
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Near Dighori Naka, Vihirgaon, Umrer Road, Nagpur, Maharashtra
                    441204
                  </p>
                </div>
              </div>

              {/* Format */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 border border-blue-300 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-xs sm:text-sm text-neutral-900 block">
                    Format:
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    6-Hour In-Person Offline CAD Designing Contest (22nd January
                    2027)
                  </p>
                </div>
              </div>

            </div>

            {/* Social Connect Icons */}
            <div className="w-full pt-4 border-t border-neutral-200">
              <span className="text-[11px] font-mono font-black uppercase tracking-wider text-neutral-400 block mb-3">
                CONNECT WITH US:
              </span>
              <div className="flex items-center gap-3">
                <Link
                  href="https://www.instagram.com/suryodayacollege/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl border-2 border-black bg-white hover:bg-neutral-100 text-neutral-800 hover:text-black flex items-center justify-center shadow-[2px_2px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                >
                  <IconBrandInstagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/centralindiahackathon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl border-2 border-black bg-white hover:bg-neutral-100 text-neutral-800 hover:text-blue-600 flex items-center justify-center shadow-[2px_2px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                >
                  <IconBrandLinkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://scetngp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website"
                  className="w-10 h-10 rounded-xl border-2 border-black bg-white hover:bg-neutral-100 text-neutral-800 hover:text-emerald-600 flex items-center justify-center shadow-[2px_2px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                >
                  <IconWorld className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: INTERACTIVE GOOGLE MAPS EMBED CARD
              ======================================================== */}
          <div className="lg:col-span-6 w-full">
            <div className="relative w-full h-[340px] sm:h-[400px] md:h-[430px] rounded-2xl sm:rounded-3xl border-2 sm:border-3 border-black overflow-hidden shadow-[6px_6px_0px_0px_#000] hover:shadow-[10px_10px_0px_0px_rgba(249,115,22,1)] transition-all bg-neutral-100">
              {/* Floating Overlay Badge on Map (Matches User Screenshot) */}
              <div className="absolute top-3 left-3 z-10 max-w-[270px] sm:max-w-xs bg-white/95 backdrop-blur-md p-3 rounded-xl border border-neutral-300 shadow-md">
                <h4 className="font-bold text-xs sm:text-sm text-neutral-900 truncate">
                  Suryodaya College of Engineerin...
                </h4>
                <p className="text-[11px] text-neutral-500 truncate mb-1">
                  Survey No. 117/1 &amp; 117/3 A, Near Dighori...
                </p>
                <div className="flex items-center gap-1 text-[11px] text-neutral-700 mb-2">
                  <span className="font-bold">4.1</span>
                  <div className="flex text-amber-500">
                    <Star className="w-3 h-3 fill-amber-500" />
                  </div>
                  <span className="text-blue-600 underline font-medium">
                    (435)
                  </span>
                </div>
                <a
                  href={mapSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Maps</span>
                </a>
              </div>

              {/* Real Google Maps Embed Iframe */}
              <iframe
                src={embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Suryodaya College of Engineering & Technology Google Maps Location"
                className="w-full h-full"
              />

              {/* Direct Open in Google Maps Link Button (Bottom-Right) */}
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 text-neutral-900 font-extrabold text-xs border border-black/30 shadow-md hover:bg-black hover:text-white transition-colors"
              >
                <span>Google Maps View</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

