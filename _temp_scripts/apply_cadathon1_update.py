import os

file_path = r'CIH4.0FINAL\CIH-3.0-main\src\components\PastEventsGalleryBox.jsx'

with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Normalize
t = text.replace('\r\n', '\n')

all_31_photos = '''export const galleryPhotos = [
  {
    id: 1,
    src: "/images/gallery/cadathon1-prize-swapnil.jpg",
    title: "Cadathon 1.0 Certificate & Prize Presentation by Industry Guests",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-emerald-600 text-white",
    category: "awards",
    tag: "Prize Felicitation",
    caption:
      "Winning student designers receiving their official Cadathon 1.0 Certificate of Achievement and prize envelope from industry guest Mr. Swapnil Tidparkar, Dr. V.G. Arajpure, and Dr. Rasika N. Chafle.",
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
      "Winning student team proudly receiving their official Central India Cadathon 1.0 Certificate of Achievement and cash prize from faculty coordinators and volunteers at Suryodaya College of Engineering & Technology.",
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
    id: 8,
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
  {
    id: 10,
    src: "/images/winners/cih2-winner.png",
    title: "Cadathon 1.0 Grand Champions Trophy Lift",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-orange-500 text-white",
    category: "awards",
    tag: "1st Prize Trophy",
    caption:
      "The grand winning CAD design team celebrating their victory with college dignitaries and faculty on the main stage at Suryodaya College of Engineering & Technology, Nagpur during Cadathon 1.0.",
  },
  {
    id: 11,
    src: "/images/image4.png",
    title: "Cadathon 1.0 CAD Modeling & High-Intensity Design Sprint",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-blue-600 text-white",
    category: "designing",
    tag: "Design Arena",
    caption:
      "Student engineers deeply immersed in 3D parametric CAD modeling, mechanical assemblies, and engineering drafting during the intense 6-hour design marathon.",
  },
  {
    id: 12,
    src: "/images/winners/cih1-winner.jpg",
    title: "Cadathon 1.0 Grand Prize ₹10,000/- Cheque Presentation",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-emerald-600 text-white",
    category: "awards",
    tag: "Cheque Podium",
    caption:
      "Inaugural 1st Prize Winner team receiving their official ₹10,000/- winner cheque on the main auditorium stage.",
  },
  {
    id: 13,
    src: "/images/image1.png",
    title: "Cadathon 1.0 Inaugural Ceremony & Stage Gathering",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-amber-600 text-white",
    category: "stage",
    tag: "Opening Ceremony",
    caption:
      "College leaders, technical heads, mentors, and hundreds of aspiring engineering designers gathered together for the ceremonial lamp lighting and inauguration.",
  },
  {
    id: 14,
    src: "/images/winners/cih3-sdg9-winner.jpg",
    title: "Cadathon 1.0 Sustainable Industry & Innovation Trophy Winners",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-orange-600 text-white",
    category: "awards",
    tag: "Innovation Champions",
    caption:
      "Engineering designers awarded for groundbreaking sustainable industrial automation and breakthrough CAD mechanisms during Cadathon 1.0.",
  },
  {
    id: 15,
    src: "/images/image2.png",
    title: "Cadathon 1.0 Multi-Disciplinary Team Brainstorming",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-blue-600 text-white",
    category: "designing",
    tag: "Collaborative Drafting",
    caption:
      "Participants collaborating across mechanical blueprints, electrical routing, and structural engineering layouts during Cadathon 1.0.",
  },
  {
    id: 16,
    src: "/images/winners/cih2-1st.jpg",
    title: "Cadathon 1.0 Mechanical & CAD Innovation Trophy",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-emerald-600 text-white",
    category: "awards",
    tag: "Winner Podium",
    caption:
      "Excellence in 3D modeling, GD&T tolerancing, and manufacturing feasibility honored on stage during Cadathon 1.0.",
  },
  {
    id: 17,
    src: "/images/image6.png",
    title: "Cadathon 1.0 Keynote Address by Industry CAD Experts",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-purple-600 text-white",
    category: "stage",
    tag: "Keynote Talk",
    caption:
      "Industry CAD practitioners and senior faculty addressing students on emerging trends in digital twin engineering and automated CAD systems.",
  },
  {
    id: 18,
    src: "/images/winners/cih3-sdg3-winner.jpg",
    title: "Cadathon 1.0 Ergonomic & Biomechanical Design Champions",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-rose-600 text-white",
    category: "awards",
    tag: "Design Champions",
    caption:
      "Students receiving top honours for ergonomic assistive devices and biomechanical design prototypes during Cadathon 1.0.",
  },
  {
    id: 19,
    src: "/images/image3.png",
    title: "Cadathon 1.0 Expert Jury Evaluation & Technical Defense",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-blue-600 text-white",
    category: "designing",
    tag: "Jury Defense",
    caption:
      "Teams presenting their 3D models and structural CAD simulations under rigorous evaluation by industry jury members.",
  },
  {
    id: 20,
    src: "/images/winners/cih2-runnerup.jpg",
    title: "Cadathon 1.0 Runner-Up Felicitation",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-amber-600 text-white",
    category: "awards",
    tag: "Runner-Up",
    caption:
      "2nd place CAD design team felicitated on stage with trophies, certificates, and prizes during Cadathon 1.0.",
  },
  {
    id: 21,
    src: "/images/image5.png",
    title: "Cadathon 1.0 Live Prototype Inspection & Feedback",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-indigo-600 text-white",
    category: "designing",
    tag: "Review Station",
    caption:
      "Judges conducting thorough check of drafting standards, tolerance stack-ups, and assembly constraints.",
  },
  {
    id: 22,
    src: "/images/winners/cih1-runnerup.jpg",
    title: "Cadathon 1.0 Runner-Up Podium Team",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-emerald-600 text-white",
    category: "awards",
    tag: "Podium Team",
    caption:
      "Runner-up team receiving awards and recognition for an outstanding CAD prototype during Cadathon 1.0.",
  },
  {
    id: 23,
    src: "/images/image7.png",
    title: "Cadathon 1.0 Student Innovators Demonstrating CAD Models",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-teal-600 text-white",
    category: "designing",
    tag: "Model Demo",
    caption:
      "Live demonstration of 3D CAD parametric designs and dynamic stress analysis simulations.",
  },
  {
    id: 24,
    src: "/images/winners/cih2-2nd.jpg",
    title: "Cadathon 1.0 2nd Prize Felicitation Ceremony",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-orange-600 text-white",
    category: "awards",
    tag: "2nd Prize",
    caption:
      "Students honored for technical excellence and adherence to industrial ISO CAD modeling standards during Cadathon 1.0.",
  },
  {
    id: 25,
    src: "/images/image8.png",
    title: "Cadathon 1.0 Student Organizing Committee & Mentors",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-blue-600 text-white",
    category: "teams",
    tag: "Organizing Crew",
    caption:
      "The dedicated student volunteer force and technical leads who coordinated logistics, CAD software suites, and workstation infrastructure.",
  },
  {
    id: 26,
    src: "/images/winners/cih1-3rd.jpg",
    title: "Cadathon 1.0 3rd Place Podium Winners With Cheque & Trophy",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-amber-600 text-white",
    category: "awards",
    tag: "3rd Place",
    caption:
      "Celebration of top-tier design creativity, technical documentation, and teamwork on stage during Cadathon 1.0.",
  },
  {
    id: 27,
    src: "/images/image9.png",
    title: "Cadathon 1.0 Design Optimization Sprint",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-indigo-600 text-white",
    category: "designing",
    tag: "Design Sprint",
    caption:
      "Students pushing the boundaries of creativity and computational geometry in the final sprint hours.",
  },
  {
    id: 28,
    src: "/images/winners/cih2-3rd.jpg",
    title: "Cadathon 1.0 Top Engineering Design Team Podium",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-teal-600 text-white",
    category: "awards",
    tag: "Podium Honors",
    caption:
      "Outstanding CAD design winners receiving commemorative trophies and honours during Cadathon 1.0.",
  },
  {
    id: 29,
    src: "/images/image10.png",
    title: "Cadathon 1.0 Grand Valedictory Ceremony & Celebration",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-pink-600 text-white",
    category: "stage",
    tag: "Grand Finale",
    caption:
      "Triumphant closing moments celebrating every engineering participant, mentor, and coordinator during Cadathon 1.0.",
  },
  {
    id: 30,
    src: "/images/winners/cih1-best-beginner.jpg",
    title: "Cadathon 1.0 Best Beginner & First-Year Designer Award",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-emerald-600 text-white",
    category: "awards",
    tag: "Special Award",
    caption:
      "Encouraging early-career engineering students showcasing exceptional technical drafting skills during Cadathon 1.0.",
  },
  {
    id: 31,
    src: "/images/cih3-card.jpg",
    title: "Cadathon 1.0 Engineering Innovation Showcase",
    chapter: "Cadathon 1.0",
    chapterColor: "bg-blue-600 text-white",
    category: "teams",
    tag: "Community",
    caption:
      "Community poster and celebration of participating student designers from across central India during Cadathon 1.0.",
  },
];'''

# Replace galleryPhotos block completely
start_idx = t.find('export const galleryPhotos = [')
end_idx = t.find('const categories = [', start_idx)

t = t[:start_idx] + all_31_photos + '\n\n' + t[end_idx:]
print("Replaced all 31 photos!")

# Update archive tag from 2024–2026 to Cadathon 1.0
t = t.replace(
    '<span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-black text-amber-300 px-1.5 py-0.5 rounded-xs ml-0.5">\n                      Archive\n                    </span>',
    '<span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-black text-amber-300 px-1.5 py-0.5 rounded-xs ml-0.5">\n                      Cadathon 1.0 Archive\n                    </span>'
)

# Update subtitle to specify Cadathon 1.0
old_sub = 'Step inside the arena! Explore high-intensity 3D CAD modeling sessions,\n                  auditorium keynote presentations, and victorious trophy award\n                  ceremonies captured across our previous chapters.'
new_sub = 'Step inside the arena! Explore high-intensity 3D CAD modeling sessions,\n                  auditorium keynote presentations, and victorious trophy award\n                  ceremonies captured during Central India Cadathon 1.0.'
t = t.replace(old_sub, new_sub)

# Update metrics row
t = t.replace('<span>3 Grand Chapters</span>', '<span>Cadathon 1.0 Edition</span>')
t = t.replace('<span>1,500+ Engineering Designers</span>', '<span>1,000+ Engineering Designers</span>')
t = t.replace('<span>27+ Live Photos Inside</span>', '<span>31+ Live Photos Inside</span>')
t = t.replace('<span>Open Photo Gallery (27 Photos)</span>', '<span>Open Photo Gallery (31 Photos)</span>')

# Update polaroid labels
t = t.replace('🏆 Cadathon 2.0 Trophies', '🏆 Cadathon 1.0 Trophies')
t = t.replace('💰 Cheque Podium Lift', '💰 Cadathon 1.0 Cheque Lift')

# Update modal texts
t = t.replace('Step inside the official archives of Central India Cadathon', 'Step inside the official archives of Central India Cadathon 1.0')
t = t.replace('from Suryodaya College of Engineering &amp; Technology event archives', 'from Cadathon 1.0 archives at Suryodaya College of Engineering &amp; Technology, Nagpur')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(t)

print("Saved updated PastEventsGalleryBox.jsx successfully!")

