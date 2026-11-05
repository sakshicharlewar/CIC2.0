with open(r'CIH4.0FINAL\CIH-3.0-main\src\components\PastEventsGalleryBox.jsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if '22' in l:
        print(f"{i+1}: {l.strip()}")

