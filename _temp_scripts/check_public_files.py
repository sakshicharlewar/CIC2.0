import os

pub = r'CIH4.0FINAL\CIH-3.0-main\public'
for root, dirs, files in os.walk(pub):
    for f in files:
        full_p = os.path.join(root, f)
        size = os.path.getsize(full_p)
        rel = os.path.relpath(full_p, pub)
        print(rel + ": " + str(size) + " bytes")
