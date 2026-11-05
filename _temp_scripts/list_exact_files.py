import os
import re

file_path = r'CIH4.0FINAL\CIH-3.0-main\src\components\PastEventsGalleryBox.jsx'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

public_dir = r'CIH4.0FINAL\CIH-3.0-main\public'

pattern = re.compile(r'id:\s*(\d+),\s*src:\s*["\']([^"\']+)["\']')
matches = pattern.findall(text)

print(f"Total entries: {len(matches)}")
existing = []
missing = []

for pid, src in matches:
    rel_path = src.lstrip('/')
    disk_path = os.path.join(public_dir, rel_path.replace('/', os.sep))
    if os.path.exists(disk_path) and os.path.getsize(disk_path) > 0:
        existing.append((pid, src, os.path.getsize(disk_path)))
    else:
        missing.append((pid, src))

print("=== EXISTING REAL PHOTOS ===")
for pid, src, size in existing:
    print(f"ID {pid}: {src} ({size} bytes)")

print("\n=== MISSING / BLANK PHOTOS ===")
for pid, src in missing:
    print(f"ID {pid}: {src}")

print(f"\nSummary: {len(existing)} existing, {len(missing)} missing")

