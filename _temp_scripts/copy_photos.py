import os
import shutil

src_files = [
    r"C:\Users\saksh\.gemini\antigravity\brain\6371fbeb-06b7-49bb-ac1e-3e3ce429e012\.user_uploaded\media_1793844539057_80111c06.jpg",
    r"C:\Users\saksh\.gemini\antigravity\brain\6371fbeb-06b7-49bb-ac1e-3e3ce429e012\.user_uploaded\media_1793844554785_c4e83548.jpg",
    r"C:\Users\saksh\.gemini\antigravity\brain\6371fbeb-06b7-49bb-ac1e-3e3ce429e012\.user_uploaded\media_1793844575074_c2dd8ee3.jpg",
    r"C:\Users\saksh\.gemini\antigravity\brain\6371fbeb-06b7-49bb-ac1e-3e3ce429e012\.user_uploaded\media_1793844588935_39da6409.jpg",
    r"C:\Users\saksh\.gemini\antigravity\brain\6371fbeb-06b7-49bb-ac1e-3e3ce429e012\.user_uploaded\media_1793844599786_a94c611e.jpg",
]

dest_dir = r"CIH4.0FINAL\CIH-3.0-main\public\images\gallery"
os.makedirs(dest_dir, exist_ok=True)

dest_names = [
    "cadathon-lab-workstations.jpg",
    "cadathon-lab-wide.jpg",
    "cadathon-dignitaries-dais.jpg",
    "cadathon-inaugural-procession.jpg",
    "cadathon-certificate-prize.jpg"
]

for src, name in zip(src_files, dest_names):
    dest = os.path.join(dest_dir, name)
    shutil.copy2(src, dest)
    print(f"Copied {os.path.basename(src)} -> {dest} (Size: {os.path.getsize(dest)} bytes)")

