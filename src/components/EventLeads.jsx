"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageSquare } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function EventLeads() {
  const leads = [
    {
      role: "Event Lead",
      roleBadge: "bg-orange-500/10 text-orange-600 border-orange-400/40",
      roleDot: "bg-orange-500",
      name: "Mayank Shukla",
      phone: "7620347338",
      displayPhone: "+91 76203 47338",
      image: "/images/leads/mayank-shukla.jpg",
      whatsapp: "https://wa.me/917620347338?text=Hi%20Mayank,%20I%20have%20a%20query%20about%20Central%20India%20Cadathon%202.0",
    },
    {
      role: "Event Co-Lead",
      roleBadge: "bg-blue-500/10 text-blue-600 border-blue-400/40",
      roleDot: "bg-blue-500",
      name: "Shlok Gaikwad",
      phone: "9172086121",
      displayPhone: "+91 91720 86121",
      image: "/images/leads/shlok-gaikwad.jpg",
      whatsapp: "https://wa.me/919172086121?text=Hi%20Shlok,%20I%20have%20a%20query%20about%20Central%20India%20Cadathon%202.0",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 relative z-20 bg-neutral-50/60 border-t border-neutral-200/80">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-neutral-300 bg-white text-neutral-800 font-bold text-xs uppercase tracking-wider shadow-2xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span>Organizing Team</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
            Connect With Event Leadership
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 font-medium max-w-lg mx-auto mt-2">
            Have questions about registration, competition format, or accommodation? Feel free to reach out directly.
          </p>
        </div>

        {/* Leads Display - Open Editorial Layout (No Clunky Box Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
          {leads.map((lead, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 group"
            >
              {/* Profile Avatar with subtle dual rings */}
              <div className="relative shrink-0">
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden p-1 bg-linear-to-tr from-neutral-200 via-orange-300/40 to-neutral-200 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <div className="w-full h-full rounded-full overflow-hidden relative bg-neutral-200">
                    <Image
                      src={lead.image}
                      alt={lead.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 144px, 160px"
                    />
                  </div>
                </div>
                {/* Status indicator */}
                <span className="absolute bottom-1 right-2 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-xs" title="Available for queries" />
              </div>

              {/* Lead Information */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-1">
                {/* Role Pill */}
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border text-[11px] sm:text-xs font-extrabold uppercase tracking-wider mb-2 ${lead.roleBadge}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${lead.roleDot}`} />
                  <span>{lead.role}</span>
                </div>

                {/* Name */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-900 tracking-tight mb-3">
                  {lead.name}
                </h3>

                {/* Contact Actions (Direct Call & WhatsApp) */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                  {/* Phone Call Link */}
                  <a
                    href={`tel:${lead.phone}`}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-neutral-300 bg-white hover:border-black text-neutral-800 hover:text-black font-bold text-xs sm:text-sm shadow-2xs hover:shadow-xs transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-neutral-600" />
                    <span>{lead.displayPhone}</span>
                  </a>

                  {/* WhatsApp Link */}
                  <a
                    href={lead.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Chat with ${lead.name} on WhatsApp`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-2xs transition-colors"
                  >
                    <IconBrandWhatsapp className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

