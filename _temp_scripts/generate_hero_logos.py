from PIL import Image
import os
import shutil

src_path = r'C:\Users\saksh\.gemini\antigravity\brain\6371fbeb-06b7-49bb-ac1e-3e3ce429e012\scratch\cih4_cadathon2_final.png'
dest_dir = r'CIH4.0FINAL\CIH-3.0-main\public\images'
os.makedirs(dest_dir, exist_ok=True)

im = Image.open(src_path)
print("Original size:", im.size)

bbox = im.getbbox()
print("bbox:", bbox)

# Crop with 8px margin
margin = 8
left = max(0, bbox[0] - margin)
top = max(0, bbox[1] - margin)
right = min(im.width, bbox[2] + margin)
bottom = min(im.height, bbox[3] + margin)

cropped = im.crop((left, top, right, bottom))
print("Cropped size:", cropped.size)

# Upscale 2x with Lanczos for retina clarity
hi_res = cropped.resize((cropped.width * 2, cropped.height * 2), Image.Resampling.LANCZOS)
print("Hi-res size:", hi_res.size)

# Save both names
p1 = os.path.join(dest_dir, 'cadathon_chapter2_hero.png')
p2 = os.path.join(dest_dir, 'cadathon_chapter2.png')

hi_res.save(p1)
hi_res.save(p2)
print("Saved to", p1, "and", p2)

