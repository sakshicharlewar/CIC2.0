"use client";

import Link from "next/link";
import { ArrowLeft, Home, Compass, PhoneCall } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-white px-4 py-12 relative overflow-hidden">
      {/* CAD Grid Blueprint Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none opacity-60" />
      
      {/* Decorative Blueprint Corner Markings */}
      <div className="absolute top-6 left-6 font-mono text-[10px] text-neutral-400 select-none tracking-widest hidden sm:block">
        CIC 2.0 // ERROR_HANDLER // COORD: (0x404, 0xNULL)
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[10px] text-neutral-400 select-none tracking-widest hidden sm:block">
        CAD_STATUS: DRAWING_NOT_FOUND
      </div>

      <div className="max-w-xl w-full text-center relative z-10">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border-2 border-black bg-amber-100 text-amber-950 font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_#000] mb-6">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span>Coordinate 404 • Missing Blueprint</span>
        </div>

        {/* Big Bold Error Number */}
        <div className="relative mb-4 select-none">
          <h1 className="text-8xl sm:text-9xl font-black tracking-tighter text-neutral-900 leading-none">
            4<span className="text-orange-500">0</span>4
          </h1>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black text-white font-mono text-[11px] font-bold px-3 py-0.5 rounded-sm uppercase tracking-widest shadow-xs">
            PAGE NOT FOUND
          </span>
        </div>

        {/* Description */}
        <h2 className="text-xl sm:text-2xl font-black text-neutral-900 mt-6 mb-2">
          Oops! This dimension hasn&apos;t been designed yet.
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-neutral-600 font-medium leading-relaxed max-w-md mx-auto mb-8">
          The page or blueprint you are looking for might have been moved, renamed, or does not exist in the Central India Cadathon 2.0 workspace.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-black bg-orange-500 hover:bg-orange-600 text-white font-black text-sm shadow-[3px_3px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/#timeline"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-black bg-white hover:bg-neutral-100 text-neutral-900 font-bold text-sm shadow-[3px_3px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            <Compass className="w-4 h-4" />
            <span>View Timeline</span>
          </Link>

          <a
            href="https://wa.me/917620347338?text=Hi%20Mayank,%20I%20found%20a%20broken%20link%20on%20CIC%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-neutral-300 hover:border-neutral-500 bg-neutral-50 text-neutral-700 font-bold text-sm transition-all"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Report Issue</span>
          </a>
        </div>

        {/* Sub-footer Note */}
        <p className="text-[11px] text-neutral-400 font-mono mt-10">
          Central India Cadathon 2.0 • Suryodaya College of Engineering &amp; Technology, Nagpur
        </p>
      </div>
    </main>
  );
}
