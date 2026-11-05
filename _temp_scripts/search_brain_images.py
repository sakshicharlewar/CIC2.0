import os

brain_dir = r'C:\Users\saksh\.gemini\antigravity\brain\6371fbeb-06b7-49bb-ac1e-3e3ce429e012'

for root, dirs, files in os.walk(brain_dir):
    for f in files:
        if f.endswith(('.png', '.jpg', '.jpeg')):
            full_p = os.path.join(root, f)
            print(f + " (" + str(os.path.getsize(full_p)) + " bytes) at " + full_p)

