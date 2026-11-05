import os

content = '''"use client";

import React from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Trophy,
  ArrowRight,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Users,
  Compass,
} from "lucide-react";

export default function CompetitionTimeline() {
  const stages = [
    {
      step: "01",
      dateNumber: "05",
      dateMonth: "NOV",
      fullDate: "5th November 2026",
      title: "Registration Starts",
      tag: "Portal Launch",
      tagColor: "bg-emerald-100 text-emerald-900 border-emerald-400",
      tapeColor: "bg-amber-100 text-amber-900",
      handwrittenNote: "Portal Live! 🚀",
      noteRotate: "-rotate-2",
      badgeStatus: "OPEN NOW",
      badgeColor: "bg-emerald-500 text-white",
      description:
        "Official portal opens for Central India Cadathon 2.0 on Unstop. Engineering students (Mechanical, Electrical, and Civil) can register individually or in teams of up to 2 members.",
      highlights: [
        "Unstop Official Platform",
        "Individual or Teams of 2",
        "Open to Mech, Elec & Civil",
      ],
      ctaText: "Register on Unstop",
      ctaLink:
        "https://unstop.com/o/sT6ybRM?utm_medium=Share&utm_source=centrhac89592&utm_campaign=Online_coding_challenge",
      featured: true,
    },
    {
      step: "02",
      dateNumber: "15",
      dateMonth: "DEC",
      fullDate: "15th December 2026",
      title: "Registration Ends",
      tag: "Final Cutoff",
      tagColor: "bg-orange-100 text-orange-900 border-orange-400",
      tapeColor: "bg-orange-100 text-orange-950",
      handwrittenNote: "Don't Miss It! ⏳",
      noteRotate: "rotate-2",
      badgeStatus: "DEADLINE",
      badgeColor: "bg-rose-500 text-white",
      description:
        "Final deadline to confirm registration and lock your team details on Unstop. Candidate roster will be finalized; no late requests or spot entries permitted.",
      highlights: [
        "Final Cutoff for Registrations",
        "Team Verification & Confirmation",
        "Participant Orientation Release",
      ],
      featured: false,
    },
    {
      step: "03",
      dateNumber: "22",
      dateMonth: "JAN",
      fullDate: "22nd January 2027",
      title: "Finale (Offline Round)",
      tag: "The Grand Arena",
      tagColor: "bg-amber-100 text-amber-900 border-amber-400",
      tapeColor: "bg-[#fef08a] text-neutral-900",
      handwrittenNote: "The 6-Hr Battle! 🏆",
      noteRotate: "-rotate-1",
      badgeStatus: "OFFLINE ARENA",
      badgeColor: "bg-orange-500 text-white",
      description:
        "6-Hour in-person CAD Designing Contest at Suryodaya College of Engineering & Technology (SCET), Nagpur. Solve live real-world problem statements, build 3D assemblies, and defend your designs before the expert jury.",
      highlights: [
        "Venue: SCET Campus, Nagpur",
        "6-Hour Hands-On CAD Contest",
        "₹25,000+ Prize Pool & Goodies",
      ],
      featured: true,
    },
  ];

  return (
    <section
      id="timeline"
      className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 relative z-20 bg-white overflow-hidden"
    >
      {/* Subtle blueprint graph background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          {/* Top Tape Sticker */}
          <div className="inline-flex items-center gap-2 bg-[#fef08a] border-2 border-black text-neutral-900 px-3.5 py-1 -rotate-1 rounded-xs shadow-[3px_3px_0px_0px_#000] mb-4">
            <span className="text-orange-600 font-black text-xs sm:text-sm">★</span>
            <span className="font-caveat font-extrabold text-base sm:text-lg tracking-wide">
              Official Competition Schedule
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-black text-amber-300 px-1.5 py-0.5 rounded-xs ml-1">
              CID 2.0
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 mb-4 leading-tight">
            Timeline of{" "}
            <span className="font-caveat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-linear-to-r from-orange-600 via-amber-500 to-emerald-600 bg-clip-text text-transparent inline-block -rotate-1 px-1">
              Innovation
            </span>
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base md:text-lg max-w-2xl font-medium">
            Mark your calendar! Follow the key milestones from portal registration to the high-stakes 6-hour offline CAD designing arena at SCET Nagpur.
          </p>
        </div>

        {/* 3-Card Connected Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch relative">
          {stages.map((stage, idx) => (
            <div
              key={stage.step}
              className={`relative flex flex-col justify-between bg-white rounded-2xl border-2 sm:border-3 border-black p-5 sm:p-7 shadow-[6px_6px_0px_0px_#000] hover:shadow-[10px_10px_0px_0px_rgba(249,115,22,1)] hover:-translate-y-1.5 transition-all duration-300 ${
                stage.featured ? "ring-2 ring-orange-400/40" : ""
              }`}
            >
              {/* Handwritten Tape Note (Pasted on top edge) */}
              <div
                className={`absolute -top-3.5 right-6 z-20 px-3 py-0.5 border-2 border-black ${stage.tapeColor} font-caveat font-bold text-sm sm:text-base shadow-[2px_2px_0px_0px_#000] ${stage.noteRotate}`}
              >
                {stage.handwrittenNote}
              </div>

              {/* Card Top: Step number & Status */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b-2 border-dashed border-neutral-200">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black tracking-widest text-neutral-400">
                      PHASE //
                    </span>
                    <span className="font-mono font-black text-sm bg-neutral-900 text-white px-2 py-0.5 rounded-xs">
                      {stage.step}
                    </span>
                  </div>

                  <span
                    className={`text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded border border-black/20 tracking-wider shadow-xs ${stage.badgeColor}`}
                  >
                    {stage.badgeStatus}
                  </span>
                </div>

                {/* Big Handcrafted Date Block */}
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-900">
                    {stage.dateNumber}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-black text-base sm:text-lg text-orange-600 leading-none uppercase tracking-wider">
                      {stage.dateMonth}
                    </span>
                    <span className="font-mono text-xs text-neutral-500 font-semibold mt-0.5">
                      {stage.fullDate}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-neutral-900 mb-3 tracking-tight">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                  {stage.description}
                </p>

                {/* Bullet Points Checklist */}
                <div className="space-y-2 mb-6 pt-2 border-t border-neutral-100">
                  {stage.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-neutral-800">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom CTA (for Stage 1) or Venue Badge */}
              <div className="pt-4 border-t-2 border-dashed border-neutral-200 mt-2">
                {stage.ctaText ? (
                  <a
                    href={stage.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border-2 border-black bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                  >
                    <span>{stage.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 py-1">
                    <span>STATUS</span>
                    <span className="font-bold text-neutral-800">
                      {stage.step === "02" ? "Final Cutoff Date" : "In-Person Event"}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Humanized Notice Banner */}
        <div className="mt-10 sm:mt-12 p-4 sm:p-5 rounded-2xl border-2 border-black bg-amber-50/80 shadow-[4px_4px_0px_0px_#000] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-400 text-neutral-900 flex items-center justify-center border-2 border-black shrink-0 shadow-[2px_2px_0px_0px_#000]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-neutral-900">
                Need more information regarding competition schedule or CAD tool rules?
              </p>
              <p className="text-[11px] sm:text-xs text-neutral-600">
                Refer to your Unstop candidate dashboard or contact the student organizing committee.
              </p>
            </div>
          </div>
          <a
            href="https://unstop.com/o/sT6ybRM?utm_medium=Share&utm_source=centrhac89592&utm_campaign=Online_coding_challenge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border-2 border-black bg-white hover:bg-neutral-100 text-neutral-900 font-bold text-xs shadow-[2px_2px_0px_0px_#000] shrink-0"
          >
            <span>Visit Unstop Portal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
'''

file_path = r'CIH4.0FINAL\CIH-3.0-main\src\components\CompetitionTimeline.jsx'
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Created {file_path} successfully!")

