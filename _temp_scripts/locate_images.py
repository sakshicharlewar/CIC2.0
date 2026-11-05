import os

targets = ['cadathon_chapter2_hero.png', 'cadathon_chapter2.png', 'stbif.png', 'unstop.png', 'ytc.png', 'cih4_logo.png']

for root, dirs, files in os.walk(r'C:\Users\saksh'):
    # limit depth or skip huge dirs
    if any(skip in root for skip in ['AppData', 'node_modules', '.git', '.next', 'Roaming', 'Local']):
        continue
    for f in files:
        if f in targets:
            print(os.path.join(root, f))

