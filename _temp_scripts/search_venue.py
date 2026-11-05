import zipfile

with zipfile.ZipFile("../CIH4.0FINAL.zip", "r") as z:
    for name in z.namelist():
        if any(k in name.lower() for k in ["venue", "map", "location", "contact"]):
            print(name)

