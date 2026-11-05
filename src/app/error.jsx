"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home, AlertTriangle } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log error to console for debugging
    console.error("Runtime application error:", error);
  }, [error]);

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-white px-4 py-12 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none opacity-60" />

      <div className="max-w-md w-full text-center relative z-10">
        {/* Error Warning Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border-2 border-black bg-rose-100 text-rose-950 font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_#000] mb-6">
          <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
          <span>System Interrupt • Something Went Wrong</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight mb-3">
          Rendering Glitch Detected
        </h1>
        <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed mb-8">
          An unexpected glitch occurred while loading this CAD workspace section. You can try refreshing or heading back to the home page.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-black bg-neutral-900 hover:bg-black text-white font-black text-sm shadow-[3px_3px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-black bg-white hover:bg-neutral-100 text-neutral-900 font-bold text-sm shadow-[3px_3px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </div>

        <p className="text-[11px] text-neutral-400 font-mono mt-8">
          Central India Cadathon 2.0
        </p>
      </div>
    </main>
  );
}
