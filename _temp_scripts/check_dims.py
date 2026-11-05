from PIL import Image
import os

names = [
    "cadathon-lab-workstations.jpg",
    "cadathon-lab-wide.jpg",
    "cadathon-dignitaries-dais.jpg",
    "cadathon-inaugural-procession.jpg",
    "cadathon-certificate-prize.jpg"
]

gallery_dir = r"CIH4.0FINAL\CIH-3.0-main\public\images\gallery"

for name in names:
    path = os.path.join(gallery_dir, name)
    with Image.open(path) as img:
        print(f"{name}: size={img.size}, format={img.format}, mode={img.mode}")

