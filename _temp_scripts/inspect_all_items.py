with open(r'CIH4.0FINAL\CIH-3.0-main\src\components\PastEventsGalleryBox.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
items = re.findall(r'id:\s*(\d+),\s*src:\s*["\']([^"\']+)["\'],\s*title:\s*["\']([^"\']+)["\'],\s*chapter:\s*["\']([^"\']+)["\']', text)

for i in items:
    print(f"ID: {i[0]}, src: {i[1]}, chapter: {i[3]}")

