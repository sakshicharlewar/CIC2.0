with open(r'CIH4.0FINAL\CIH-3.0-main\src\components\PastEventsGalleryBox.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'id:\s*(\d+),\s*src:\s*["\']([^"\']+)["\'],\s*title:\s*["\']([^"\']+)["\'],\s*chapter:\s*["\']([^"\']+)["\'],\s*chapterColor:\s*["\']([^"\']+)["\'],\s*category:\s*["\']([^"\']+)["\']', text)

for m in matches:
    print(m)

