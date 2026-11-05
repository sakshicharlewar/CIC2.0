import os

file_path = r'CIH4.0FINAL\CIH-3.0-main\src\components\PastEventsGalleryBox.jsx'

with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

t = text.replace('\r\n', '\n')

# 1. Define the exact 9 real photos
exact_real_photos = '''export const galleryPhotos = [
  {
    id: 1,
    src: "/images/gallery/cadathon1-prize-swapnil.jpg",
    title: "Cadathon 1.0 Certificate & Prize Presentation by Industry Guests",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-emerald-600 text-white",
    category: "awards",
    tag: "Prize Felicitation",
    caption:
      "Winning student designers receiving their official Cadathon 1.0 Certificate of Achievement and prize envelope from industry guest Mr. Swapnil Tidparkar, Dr. V.G. Arajpure, and Dr. Rasika N. Chafle at Suryodaya College of Engineering & Technology.",
  },
  {
    id: 2,
    src: "/images/gallery/cadathon1-prize-parhate-1.jpg",
    title: "Cadathon 1.0 Stage Felicitation by College Leadership",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-orange-500 text-white",
    category: "awards",
    tag: "Winner Podium",
    caption:
      "Student innovators felicitated on stage with Cadathon 1.0 Certificate of Achievement by Vice Principal Dr. V.G. Parhate and faculty dignitaries.",
  },
  {
    id: 3,
    src: "/images/gallery/cadathon1-prize-parhate-2.jpg",
    title: "Cadathon 1.0 Innovation Award & Certificate Ceremony",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-amber-600 text-white",
    category: "awards",
    tag: "Award Ceremony",
    caption:
      "Mechanical & CAD design winners awarded Certificates of Achievement for innovative 3D CAD modeling solutions during Cadathon 1.0.",
  },
  {
    id: 4,
    src: "/images/gallery/cadathon1-prize-rasika.jpg",
    title: "Cadathon 1.0 Merit Award Presented by Faculty Coordinator",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-teal-600 text-white",
    category: "awards",
    tag: "Certificate Honor",
    caption:
      "Participant receiving the official Cadathon 1.0 Certificate of Achievement from coordinator Dr. Rasika N. Chafle and student volunteers.",
  },
  {
    id: 5,
    src: "/images/gallery/cadathon-certificate-prize.jpg",
    title: "Cadathon 1.0 Certificate of Achievement & Cash Prize Presentation",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-emerald-600 text-white",
    category: "awards",
    tag: "Prize Ceremony",
    caption:
      "Winning student team proudly receiving their official Central India Cadathon 1.0 Certificate of Achievement and cash prize from faculty coordinators and volunteers.",
  },
  {
    id: 6,
    src: "/images/gallery/cadathon-lab-workstations.jpg",
    title: "Cadathon 1.0 High-Intensity CAD Workstations & Design Arena",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-blue-600 text-white",
    category: "designing",
    tag: "Design Arena",
    caption:
      "Engineering participants from Mechanical, Electrical, and Civil disciplines crafting real-time 3D CAD models, generative assemblies, and blueprint drawings in the computer lab arena during Cadathon 1.0.",
  },
  {
    id: 7,
    src: "/images/gallery/cadathon-lab-wide.jpg",
    title: "Cadathon 1.0 Full House CAD Drafting Lab in Action",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-indigo-600 text-white",
    category: "designing",
    tag: "Live Lab Arena",
    caption:
      "Scores of student innovators solving live industrial problem statements during the 6-hour hands-on Cadathon 1.0 designing competition.",
  },
  {
    id: 8,
    src: "/images/gallery/cadathon-dignitaries-dais.jpg",
    title: "Cadathon 1.0 Inaugural Ceremony & Leadership on Dais",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-amber-600 text-white",
    category: "stage",
    tag: "Inaugural Dais",
    caption:
      "Distinguished leadership of Suryodaya College of Engineering & Technology (SCET), Nagpur and faculty coordinators presiding over the official Central India Cadathon 1.0 inauguration.",
  },
  {
    id: 9,
    src: "/images/gallery/cadathon-inaugural-procession.jpg",
    title: "Cadathon 1.0 Grand Inaugural Welcome & Ribbon Cutting Gathering",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-purple-600 text-white",
    category: "stage",
    tag: "Inauguration",
    caption:
      "Faculty coordinators, organizers, and guests arriving at the CAD design wing for the ceremonial ribbon cutting and launch of Central India Cadathon 1.0.",
  },
];'''

# Replace galleryPhotos block completely
start_idx = t.find('export const galleryPhotos = [')
end_idx = t.find('const categories = [', start_idx)
t = t[:start_idx] + exact_real_photos + '\n\n' + t[end_idx:]

# Update categories to remove empty "teams" category
old_cat = '''const categories = [
  { id: "all", label: "All Moments", icon: Layers },
  { id: "awards", label: "Awards & Trophies", icon: Trophy },
  { id: "designing", label: "CAD Workstations", icon: Flame },
  { id: "stage", label: "Stage & Keynotes", icon: Award },
  { id: "teams", label: "Teams & Community", icon: Users },
];'''

new_cat = '''const categories = [
  { id: "all", label: "All Moments", icon: Layers },
  { id: "awards", label: "Awards & Trophies", icon: Trophy },
  { id: "designing", label: "CAD Workstations", icon: Flame },
  { id: "stage", label: "Stage & Keynotes", icon: Award },
];'''

if old_cat in t:
    t = t.replace(old_cat, new_cat)
    print("Categories updated (removed empty teams category)!")

# Update polaroids to use real photos!
# Polaroid 1: was /images/winners/cih2-winner.png -> change to /images/gallery/cadathon1-prize-swapnil.jpg
old_pol1 = '''                {/* Polaroid 1 (Left - Tilted -6deg) */}
                <div className="absolute w-34 sm:w-56 md:w-60 left-1 sm:left-4 md:left-8 top-3 sm:top-6 -rotate-6 group-hover:-rotate-12 group-hover:-translate-x-2 transition-all duration-300 z-10 bg-white p-2 sm:p-3 pb-6 sm:pb-10 rounded-sm shadow-[4px_4px_12px_rgba(0,0,0,0.18)] border border-neutral-300">
                  <div className="relative aspect-4/3 w-full bg-neutral-200 overflow-hidden rounded-xs">
                    <Image
                      src="/images/winners/cih2-winner.png"
                      alt="Cadathon 1.0 Trophy Lift"
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-1.5 sm:mt-2 text-center text-xs sm:text-sm font-caveat font-bold text-neutral-800">
                    🏆 Cadathon 1.0 Trophies
                  </p>
                </div>'''

new_pol1 = '''                {/* Polaroid 1 (Left - Tilted -6deg) */}
                <div className="absolute w-34 sm:w-56 md:w-60 left-1 sm:left-4 md:left-8 top-3 sm:top-6 -rotate-6 group-hover:-rotate-12 group-hover:-translate-x-2 transition-all duration-300 z-10 bg-white p-2 sm:p-3 pb-6 sm:pb-10 rounded-sm shadow-[4px_4px_12px_rgba(0,0,0,0.18)] border border-neutral-300">
                  <div className="relative aspect-4/3 w-full bg-neutral-200 overflow-hidden rounded-xs">
                    <Image
                      src="/images/gallery/cadathon1-prize-swapnil.jpg"
                      alt="Cadathon 1.0 Winner Presentation"
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-1.5 sm:mt-2 text-center text-xs sm:text-sm font-caveat font-bold text-neutral-800">
                    🏆 Winner Prize Felicitation
                  </p>
                </div>'''

if old_pol1 in t:
    t = t.replace(old_pol1, new_pol1)
    print("Polaroid 1 updated with real photo!")

# Polaroid 2: was /images/winners/cih1-winner.jpg -> change to /images/gallery/cadathon-dignitaries-dais.jpg
old_pol2 = '''                {/* Polaroid 2 (Right - Tilted +8deg) */}
                <div className="absolute w-34 sm:w-56 md:w-60 right-1 sm:right-4 md:right-8 top-6 sm:top-12 rotate-8 group-hover:rotate-14 group-hover:translate-x-2 transition-all duration-300 z-15 bg-white p-2 sm:p-3 pb-6 sm:pb-10 rounded-sm shadow-[4px_4px_12px_rgba(0,0,0,0.18)] border border-neutral-300">
                  <div className="relative aspect-4/3 w-full bg-neutral-200 overflow-hidden rounded-xs">
                    <Image
                      src="/images/winners/cih1-winner.jpg"
                      alt="Chapter 1 Winners"
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-1.5 sm:mt-2 text-center text-xs sm:text-sm font-caveat font-bold text-neutral-800">
                    💰 Cadathon 1.0 Cheque Lift
                  </p>
                </div>'''

new_pol2 = '''                {/* Polaroid 2 (Right - Tilted +8deg) */}
                <div className="absolute w-34 sm:w-56 md:w-60 right-1 sm:right-4 md:right-8 top-6 sm:top-12 rotate-8 group-hover:rotate-14 group-hover:translate-x-2 transition-all duration-300 z-15 bg-white p-2 sm:p-3 pb-6 sm:pb-10 rounded-sm shadow-[4px_4px_12px_rgba(0,0,0,0.18)] border border-neutral-300">
                  <div className="relative aspect-4/3 w-full bg-neutral-200 overflow-hidden rounded-xs">
                    <Image
                      src="/images/gallery/cadathon-dignitaries-dais.jpg"
                      alt="SCET Leadership on Dais"
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-1.5 sm:mt-2 text-center text-xs sm:text-sm font-caveat font-bold text-neutral-800">
                    🏛️ SCET Leadership on Dais
                  </p>
                </div>'''

if old_pol2 in t:
    t = t.replace(old_pol2, new_pol2)
    print("Polaroid 2 updated with real photo!")

# Update badges and button counts
t = t.replace('<span>31+ Live Photos Inside</span>', '<span>9 Live Photos Inside</span>')
t = t.replace('<span>Open Photo Gallery (31 Photos)</span>', '<span>Open Photo Gallery (9 Photos)</span>')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(t)

print("Saved updated PastEventsGalleryBox.jsx successfully!")

