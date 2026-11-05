import re

file_path = r'CIH4.0FINAL\CIH-3.0-main\src\components\PastEventsGalleryBox.jsx'

with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Normalize line endings
t = text.replace('\r\n', '\n')

new_photos = '''export const galleryPhotos = [
  {
    id: 1,
    src: "/images/gallery/cadathon-certificate-prize.jpg",
    title: "Certificate of Achievement & Cash Prize Presentation",
    chapter: "Cadathon 2.0",
    chapterColor: "bg-emerald-600 text-white",
    category: "awards",
    tag: "Prize Ceremony",
    caption:
      "Winning student team proudly receiving their official Central India Cadathon Certificate of Achievement and cash prize from faculty coordinators and volunteers at Suryodaya College of Engineering & Technology.",
  },
  {
    id: 2,
    src: "/images/gallery/cadathon-lab-workstations.jpg",
    title: "High-Intensity CAD Workstations & Design Arena",
    chapter: "Cadathon 2.0",
    chapterColor: "bg-blue-600 text-white",
    category: "designing",
    tag: "Design Arena",
    caption:
      "Engineering participants from Mechanical, Electrical, and Civil disciplines crafting real-time 3D CAD models, generative assemblies, and blueprint drawings in the computer lab arena.",
  },
  {
    id: 3,
    src: "/images/gallery/cadathon-dignitaries-dais.jpg",
    title: "Inaugural Ceremony & Leadership on Dais",
    chapter: "Cadathon 2.0",
    chapterColor: "bg-amber-600 text-white",
    category: "stage",
    tag: "Inaugural Dais",
    caption:
      "Distinguished leadership of Suryodaya College of Engineering & Technology (SCET), Nagpur and faculty coordinators presiding over the official Central India Cadathon inauguration.",
  },
  {
    id: 4,
    src: "/images/gallery/cadathon-lab-wide.jpg",
    title: "Full House CAD Drafting Lab in Action",
    chapter: "Cadathon 2.0",
    chapterColor: "bg-indigo-600 text-white",
    category: "designing",
    tag: "Live Lab Arena",
    caption:
      "Scores of student innovators solving live industrial problem statements during the 6-hour hands-on CAD designing competition.",
  },
  {
    id: 5,
    src: "/images/gallery/cadathon-inaugural-procession.jpg",
    title: "Grand Inaugural Welcome & Ribbon Cutting Gathering",
    chapter: "Cadathon 2.0",
    chapterColor: "bg-purple-600 text-white",
    category: "stage",
    tag: "Inauguration",
    caption:
      "Faculty coordinators, organizers, and guests arriving at the CAD design wing for the ceremonial ribbon cutting and launch of Central India Cadathon.",
  },'''

# Replace `export const galleryPhotos = [` with `new_photos`
if 'export const galleryPhotos = [' in t:
    t = t.replace('export const galleryPhotos = [', new_photos, 1)
    print("Prepend new photos succeeded!")
else:
    print("Error: export const galleryPhotos = [ not found")

# Now re-number all photos to have unique ids 1..27
def renumber_photos(match):
    global photo_counter
    photo_counter += 1
    return f"id: {photo_counter},"

# We'll re-index `id: \d+,` across galleryPhotos
# First find the boundary of galleryPhotos
start_idx = t.find('export const galleryPhotos = [')
end_idx = t.find('const categories = [', start_idx)

photos_block = t[start_idx:end_idx]

import re
photo_counter = 0
photos_block_renumbered = re.sub(r'id:\s*\d+,', renumber_photos, photos_block)
print(f"Renumbered {photo_counter} photos!")

t = t[:start_idx] + photos_block_renumbered + t[end_idx:]

# Update categories to compute dynamic count or set exact count
old_categories = '''const categories = [
  { id: "all", label: "All Moments", count: 22, icon: Layers },
  { id: "awards", label: "Awards & Trophies", count: 11, icon: Trophy },
  { id: "designing", label: "CAD Workstations", count: 6, icon: Flame },
  { id: "stage", label: "Stage & Keynotes", count: 4, icon: Award },
  { id: "teams", label: "Teams & Community", count: 2, icon: Users },
];'''

new_categories = '''const categories = [
  { id: "all", label: "All Moments", icon: Layers },
  { id: "awards", label: "Awards & Trophies", icon: Trophy },
  { id: "designing", label: "CAD Workstations", icon: Flame },
  { id: "stage", label: "Stage & Keynotes", icon: Award },
  { id: "teams", label: "Teams & Community", icon: Users },
];'''

if old_categories in t:
    t = t.replace(old_categories, new_categories)
    print("Categories updated to dynamic!")
else:
    print("Warning: old_categories not found exactly")

# Update rendering of category count in buttons
old_count_render = '''                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          isActive
                            ? "bg-orange-500 text-white"
                            : "bg-neutral-200 text-neutral-800"
                        }`}
                      >
                        {cat.count}
                      </span>'''

new_count_render = '''                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          isActive
                            ? "bg-orange-500 text-white"
                            : "bg-neutral-200 text-neutral-800"
                        }`}
                      >
                        {cat.id === "all"
                          ? galleryPhotos.length
                          : galleryPhotos.filter((p) => p.category === cat.id).length}
                      </span>'''

if old_count_render in t:
    t = t.replace(old_count_render, new_count_render)
    print("Category button count rendering updated!")
else:
    print("Warning: old_count_render not found exactly")

# Update hardcoded 22 in badge & CTA button
t = t.replace('<span>22+ Live Photos Inside</span>', '<span>27+ Live Photos Inside</span>')
t = t.replace('<span>Open Photo Gallery (22 Photos)</span>', '<span>Open Photo Gallery (27 Photos)</span>')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(t)

print("Saved updated PastEventsGalleryBox.jsx successfully!")

