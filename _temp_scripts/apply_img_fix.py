import os

file_path = r'CIH4.0FINAL\CIH-3.0-main\src\components\PastEventsGalleryBox.jsx'

with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

t = text.replace('\r\n', '\n')

# 1. Update Polaroid 1
old_p1 = '''                {/* Polaroid 1 (Left - Tilted -6deg) */}
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

new_p1 = '''                {/* Polaroid 1 (Left - Tilted -6deg) */}
                <div className="absolute w-34 sm:w-56 md:w-60 left-1 sm:left-4 md:left-8 top-3 sm:top-6 -rotate-6 group-hover:-rotate-12 group-hover:-translate-x-2 transition-all duration-300 z-10 bg-white p-2 sm:p-3 pb-6 sm:pb-10 rounded-sm shadow-[4px_4px_12px_rgba(0,0,0,0.18)] border border-neutral-300">
                  <div className="w-full h-24 sm:h-36 md:h-40 bg-neutral-100 overflow-hidden rounded-xs border border-neutral-200">
                    <img
                      src="/images/gallery/cadathon1-prize-swapnil.jpg"
                      alt="Winner Prize Felicitation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-1.5 sm:mt-2 text-center text-xs sm:text-sm font-caveat font-bold text-neutral-800">
                    🏆 Winner Prize Felicitation
                  </p>
                </div>'''

if old_p1 in t:
    t = t.replace(old_p1, new_p1)
    print("Polaroid 1 updated with img tag!")
else:
    print("Warning: old_p1 not found")

# 2. Update Polaroid 2
old_p2 = '''                {/* Polaroid 2 (Right - Tilted +8deg) */}
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

new_p2 = '''                {/* Polaroid 2 (Right - Tilted +8deg) */}
                <div className="absolute w-34 sm:w-56 md:w-60 right-1 sm:right-4 md:right-8 top-6 sm:top-12 rotate-8 group-hover:rotate-14 group-hover:translate-x-2 transition-all duration-300 z-15 bg-white p-2 sm:p-3 pb-6 sm:pb-10 rounded-sm shadow-[4px_4px_12px_rgba(0,0,0,0.18)] border border-neutral-300">
                  <div className="w-full h-24 sm:h-36 md:h-40 bg-neutral-100 overflow-hidden rounded-xs border border-neutral-200">
                    <img
                      src="/images/gallery/cadathon-dignitaries-dais.jpg"
                      alt="SCET Leadership on Dais"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-1.5 sm:mt-2 text-center text-xs sm:text-sm font-caveat font-bold text-neutral-800">
                    🏛️ SCET Leadership on Dais
                  </p>
                </div>'''

if old_p2 in t:
    t = t.replace(old_p2, new_p2)
    print("Polaroid 2 updated with img tag!")
else:
    print("Warning: old_p2 not found")

# 3. Update Polaroid 3
old_p3 = '''                {/* Polaroid 3 (Center - Front - Tilted +1deg) */}
                <div className="relative w-38 sm:w-60 md:w-64 rotate-1 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300 z-20 bg-white p-2 sm:p-3 pb-7 sm:pb-12 rounded-sm shadow-[6px_8px_20px_rgba(0,0,0,0.25)] border-2 border-black">
                  {/* Tape strip on top */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-3 sm:h-4 bg-amber-100/90 border border-amber-300/80 -rotate-2" />
                  <div className="relative aspect-4/3 w-full bg-neutral-200 overflow-hidden rounded-xs">
                    <Image
                      src="/images/gallery/cadathon-lab-workstations.jpg"
                      alt="CAD Design Arena at SCET"
                      fill
                      unoptimized
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="mt-1.5 sm:mt-2.5 flex items-center justify-between px-1">
                    <p className="text-left font-caveat font-bold text-neutral-900 text-xs sm:text-sm md:text-base">
                      ⚡ CAD Design Arena
                    </p>
                    <span className="text-[9px] sm:text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-300">
                      LIVE
                    </span>
                  </div>
                </div>'''

new_p3 = '''                {/* Polaroid 3 (Center - Front - Tilted +1deg) */}
                <div className="relative w-38 sm:w-60 md:w-64 rotate-1 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300 z-20 bg-white p-2 sm:p-3 pb-7 sm:pb-12 rounded-sm shadow-[6px_8px_20px_rgba(0,0,0,0.25)] border-2 border-black">
                  {/* Tape strip on top */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-3 sm:h-4 bg-amber-100/90 border border-amber-300/80 -rotate-2" />
                  <div className="w-full h-28 sm:h-40 md:h-44 bg-neutral-100 overflow-hidden rounded-xs border border-neutral-300">
                    <img
                      src="/images/gallery/cadathon-lab-workstations.jpg"
                      alt="CAD Design Arena at SCET"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-1.5 sm:mt-2.5 flex items-center justify-between px-1">
                    <p className="text-left font-caveat font-bold text-neutral-900 text-xs sm:text-sm md:text-base">
                      ⚡ CAD Design Arena
                    </p>
                    <span className="text-[9px] sm:text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-300">
                      LIVE
                    </span>
                  </div>
                </div>'''

if old_p3 in t:
    t = t.replace(old_p3, new_p3)
    print("Polaroid 3 updated with img tag!")
else:
    print("Warning: old_p3 not found")

# 4. Update Grid Photo Cards
old_card_img = '''                      {/* Photo Image Container */}
                      <div className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-neutral-200 border border-neutral-300">
                        <Image
                          src={photo.src}
                          alt={photo.title}
                          fill
                          unoptimized
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        {/* Top Badges */}
                        <div className="absolute top-2 left-2 z-10 flex items-center gap-1.5">
                          <span
                            className={`text-[10px] font-black uppercase px-2 py-0.5 rounded border border-black/30 shadow-xs ${photo.chapterColor}`}
                          >
                            {photo.chapter}
                          </span>
                        </div>

                        {/* Hover Overlay with Zoom Icon */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="p-2.5 rounded-full bg-white text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] transform scale-90 group-hover:scale-100 transition-transform">
                            <Maximize2 className="w-4 h-4" />
                          </span>
                        </div>
                      </div>'''

new_card_img = '''                      {/* Photo Image Container with Guaranteed Height & Real IMG rendering */}
                      <div className="relative w-full h-48 sm:h-52 md:h-56 rounded-lg overflow-hidden bg-neutral-100 border border-neutral-300">
                        <img
                          src={photo.src}
                          alt={photo.title}
                          loading="eager"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        {/* Top Badges */}
                        <div className="absolute top-2 left-2 z-10 flex items-center gap-1.5">
                          <span
                            className={`text-[10px] font-black uppercase px-2 py-0.5 rounded border border-black/30 shadow-xs ${photo.chapterColor}`}
                          >
                            {photo.chapter}
                          </span>
                        </div>

                        {/* Hover Overlay with Zoom Icon */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="p-2.5 rounded-full bg-white text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] transform scale-90 group-hover:scale-100 transition-transform">
                            <Maximize2 className="w-4 h-4" />
                          </span>
                        </div>
                      </div>'''

if old_card_img in t:
    t = t.replace(old_card_img, new_card_img)
    print("Grid cards updated with guaranteed height img tag!")
else:
    print("Warning: old_card_img not found")

# 5. Update Lightbox Image
old_lightbox_img = '''              {/* Image Container */}
              <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden border-2 border-neutral-700 bg-neutral-950 flex items-center justify-center">
                <Image
                  src={filteredPhotos[selectedPhotoIndex].src}
                  alt={filteredPhotos[selectedPhotoIndex].title}
                  fill
                  unoptimized
                  className="object-contain"
                  priority
                />
              </div>'''

new_lightbox_img = '''              {/* Image Container */}
              <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden border-2 border-neutral-700 bg-neutral-950 flex items-center justify-center p-2">
                <img
                  src={filteredPhotos[selectedPhotoIndex].src}
                  alt={filteredPhotos[selectedPhotoIndex].title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>'''

if old_lightbox_img in t:
    t = t.replace(old_lightbox_img, new_lightbox_img)
    print("Lightbox image updated with img tag!")
else:
    print("Warning: old_lightbox_img not found")

# 6. Add pre-caching in useEffect inside component
old_useeffect = '''  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);'''

new_useeffect = '''  // Preload all gallery photos into browser cache on mount
  useEffect(() => {
    galleryPhotos.forEach((photo) => {
      const img = new window.Image();
      img.src = photo.src;
    });
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);'''

if old_useeffect in t:
    t = t.replace(old_useeffect, new_useeffect)
    print("Preloading useEffect added!")
else:
    print("Warning: old_useeffect not found")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(t)

print("Saved updated PastEventsGalleryBox.jsx successfully!")

