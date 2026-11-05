import zipfile

with zipfile.ZipFile("CIH4.0FINAL.zip", "r") as z:
    for name in z.namelist():
        if "gallery" in name.lower() or "event" in name.lower():
            print(name)
