import os
import shutil

src_files = [
    r"C:\Users\saksh\.gemini\antigravity\brain\6371fbeb-06b7-49bb-ac1e-3e3ce429e012\.user_uploaded\media_1793845239557_77fe8623.jpg",
    r"C:\Users\saksh\.gemini\antigravity\brain\6371fbeb-06b7-49bb-ac1e-3e3ce429e012\.user_uploaded\media_1793845249790_b82b2a08.jpg",
    r"C:\Users\saksh\.gemini\antigravity\brain\6371fbeb-06b7-49bb-ac1e-3e3ce429e012\.user_uploaded\media_1793845263669_d563db54.jpg",
    r"C:\Users\saksh\.gemini\antigravity\brain\6371fbeb-06b7-49bb-ac1e-3e3ce429e012\.user_uploaded\media_1793845275625_ad22d08c.jpg",
]

dest_dir = r"CIH4.0FINAL\CIH-3.0-main\public\images\gallery"
os.makedirs(dest_dir, exist_ok=True)

dest_names = [
    "cadathon1-prize-swapnil.jpg",
    "cadathon1-prize-parhate-1.jpg",
    "cadathon1-prize-parhate-2.jpg",
    "cadathon1-prize-rasika.jpg"
]

for src, name in zip(src_files, dest_names):
    dest = os.path.join(dest_dir, name)
    shutil.copy2(src, dest)
    print(f"Copied {os.path.basename(src)} -> {dest} (Size: {os.path.getsize(dest)} bytes)")

