import zipfile

zip_path = r'C:\Users\saksh\OneDrive\Desktop\CIH4.0FINAL.zip'
with zipfile.ZipFile(zip_path, 'r') as z:
    for n in z.namelist():
        if 'public' in n:
            print(n)

