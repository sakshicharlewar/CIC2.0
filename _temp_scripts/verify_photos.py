with open(r'CIH4.0FINAL\CIH-3.0-main\src\components\PastEventsGalleryBox.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'id:\s*(\d+),\s*src:\s*["\']([^"\']+)["\']', text)
print(f"Total photos found: {len(matches)}")
for i, (pid, src) in enumerate(matches[:7]):
    print(f"  Photo {pid}: {src}")

