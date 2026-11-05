"use client";
import React, { useState } from "react";
import { Search, Users } from "lucide-react";

const ParticipantsList = ({ participantsData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const data = participantsData?.selected || [];

  const filteredParticipants = data.filter(
    (participant) =>
      !searchTerm ||
      participant.teamName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.leaderName
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      participant.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full h-full bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-blue-100/50 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="shrink-0 p-6 border-b border-blue-200/50 bg-linear-to-b from-white to-blue-50/80">
        <div className="flex flex-col xl:flex-row xl:items-center xl:gap-6 mb-4 xl:mb-0">
          {/* Full Width Search */}
          <div className="relative w-full xl:w-auto xl:flex-1 mb-4 xl:mb-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
            <input
              suppressHydrationWarning={true}
              type="text"
              placeholder="Search by name, email or leader..."
              className="w-full pl-12 pr-4 py-3.5 bg-white/90 border-2 border-gray-200/50 rounded-2xl text-base focus:ring-4 focus:ring-blue-400/60 focus:border-blue-400 outline-none transition-all shadow-lg hover:shadow-xl hover:border-blue-300 peer font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Full Width Grid */}
      <div className="flex-1 min-h-0 overflow-hidden bg-linear-to-b from-white via-blue-50/30 to-blue-50/20">
        <div
          className="h-full w-full overflow-y-auto scrollbar-thin scrollbar-track-blue-50/50 scrollbar-thumb-blue-400/80 scrollbar-thumb-rounded-full scrollbar-w-2 p-6"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgb(96 165 250 / 0.8) rgb(239 246 255 / 0.5)",
          }}
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 min-h-full">
            {filteredParticipants.map((participant, index) => (
              <div
                key={`${participant.id}-${index}`}
                className="group bg-white/95 border border-blue-100/70 rounded-lg p-7 h-44 flex flex-col justify-between"
              >
                {/* Team name */}
                <div className="space-y-3 mb-auto">
                  {/* Team Name */}
                  <h3 className="font-black px-2 text-2xl text-blue-700 leading-tight wrap-break-word line-clamp-2">
                    {participant.teamName}
                  </h3>
                </div>

                {/* Team leader & status */}
                <div className="flex items-end justify-between pt-3 border-t border-blue-100/50">
                  <div className="text-sm min-w-0">
                    {/* Team Leader Name & Email */}
                    <p className="text-gray-600 font-bold text-xl truncate bg-white/50 px-3 rounded-lg mb-2">
                      Leader: {participant.leaderName || participant.name}
                    </p>
                    <p className="text-blue-600 font-semibold text-sm truncate bg-white/50 px-3 rounded-lg">
                      {participant.email}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State - Full Grid Height */}
          {filteredParticipants.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center p-24 min-h-[500px] text-center">
              <Users className="h-32 w-32 text-gray-300 mb-8" />
              <h3 className="text-4xl font-black text-gray-400 mb-6 leading-tight">
                Will be disclosing soon
              </h3>
              <p className="text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                {searchTerm
                  ? `"${searchTerm}" not found`
                  : "8th January 2025, 12:00 PM IST. Stay tuned!"}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="shrink-0 p-6 border-t border-blue-200/60 bg-linear-to-r from-blue-50/95 to-indigo-50/95 shadow-2xl">
        <div className="flex items-center justify-between text-sm font-bold tracking-wide">
          <span className="text-gray-800 bg-white/95 px-6 py-3 rounded-2xl shadow-xl border border-blue-100/50">
            Showing {filteredParticipants.length} Selected
          </span>
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2 text-blue-600 font-black text-lg bg-blue-50/80 px-4 py-2 rounded-xl">
              <Users className="h-5 w-5" />
              {filteredParticipants.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantsList;
