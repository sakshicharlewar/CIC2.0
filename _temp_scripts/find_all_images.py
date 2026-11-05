import os

for root, dirs, files in os.walk(r'c:\Users\saksh\OneDrive\Desktop\CIH4.0FINAL'):
    for f in files:
        if f.endswith(('.png', '.jpg', '.jpeg', '.webp')):
            full_p = os.path.join(root, f)
            print(full_p + " (" + str(os.path.getsize(full_p)) + " bytes)")

