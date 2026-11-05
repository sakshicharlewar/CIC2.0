import os
import zipfile
import shutil

zip_path = r'C:\Users\saksh\OneDrive\Desktop\CIH4.0FINAL.zip'
dest_base = r'CIH4.0FINAL\CIH-3.0-main'

# 1. Extract sponsor folder from zip
with zipfile.ZipFile(zip_path, 'r') as z:
    for item in z.namelist():
        if 'public/sponsor' in item or 'public/leads' in item or 'public/images' in item:
            # We don't want to overwrite gallery with empty if gallery exists
            if 'public/images/gallery' in item:
                continue
            # Extract
            # Find the path relative to CIH-3.0-main
            rel_in_zip = item.split('CIH-3.0-main/')[-1]
            if rel_in_zip and not rel_in_zip.endswith('/'):
                target_p = os.path.join(dest_base, rel_in_zip)
                os.makedirs(os.path.dirname(target_p), exist_ok=True)
                with open(target_p, 'wb') as f_out:
                    f_out.write(z.read(item))
                print(f"Extracted from zip: {rel_in_zip} ({os.path.getsize(target_p)} bytes)")

print("\nFinished extracting public assets from zip!")

