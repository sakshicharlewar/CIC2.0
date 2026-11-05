with open(r'CIH4.0FINAL\CIH-3.0-main\src\components\PastEventsGalleryBox.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'chapter:\s*["\']([^"\']+)["\']', text)
print("Unique chapters currently in galleryPhotos:")
print(set(matches))

