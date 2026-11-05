import os
import re

file_path = r'CIH4.0FINAL\CIH-3.0-main\src\components\PastEventsGalleryBox.jsx'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

public_dir = r'CIH4.0FINAL\CIH-3.0-main\public'

# Extract all photos (id, src, title)
pattern = re.compile(r'id:\s*(\d+),\s*src:\s*["\']([^"\']+)["\'],\s*title:\s*["\']([^"\']+)["\']')
matches = pattern.findall(text)

print(f"Total entries in galleryPhotos: {len(matches)}")
print("=" * 60)

existing_photos = []
missing_photos = []

for pid, src, title in matches:
    # Convert web path to filesystem path
    rel_path = src.lstrip('/')
    disk_path = os.path.join(public_dir, rel_path.replace('/', os.sep))
    
    if os.path.exists(disk_path):
        size = os.path.getsize(disk_path)
        if size > 0:
            existing_photos.append((pid, src, title, size))
            print(f"EXISTS: ID {pid} - {src} ({size} bytes) - {title[:30]}")
        else:
            missing_photos.append((pid, src, title, "0 bytes"))
            print(f"EMPTY (0 bytes): ID {pid} - {src} - {title}")
    else:
        missing_photos.append((pid, src, title, "File not found"))
        print(f"MISSING: ID {pid} - {src} - {title}")

print("=" * 60)
print(f"Existing valid photos: {len(existing_photos)}")
print(f"Missing or empty photos: {len(missing_photos)}")

