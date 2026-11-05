import os
from PIL import Image

scratch_dir = r'C:\Users\saksh\.gemini\antigravity\brain\6371fbeb-06b7-49bb-ac1e-3e3ce429e012\scratch'

candidates = ['cadathon2_smooth.png', 'final_on_white.png', 'preview_on_white.png', 'cih4_cadathon2_final.png', 'cad2_on_white.png']

for c in candidates:
    p = os.path.join(scratch_dir, c)
    if os.path.exists(p):
        with Image.open(p) as img:
            print(f"{c}: size={img.size}, mode={img.mode}, bytes={os.path.getsize(p)}")

