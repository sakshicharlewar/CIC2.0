with open(r'CIH4.0FINAL\CIH-3.0-main\src\components\PastEventsGalleryBox.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
chapters = re.findall(r'chapter:\s*["\']([^"\']+)["\']', text)
print("Unique chapters:", set(chapters))
print("Total photos:", len(chapters))

# Check for any remaining mentions of "Cadathon 2.0" in PastEventsGalleryBox
c2_mentions = [line for line in text.splitlines() if 'cadathon 2.0' in line.lower()]
print("Cadathon 2.0 mentions in PastEventsGalleryBox:", len(c2_mentions))
for l in c2_mentions:
    print("  ->", l.strip())

