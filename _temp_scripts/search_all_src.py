import os

for root, dirs, files in os.walk(r'CIH4.0FINAL\CIH-3.0-main\src'):
    for f in files:
        if f.endswith(('.js', '.jsx', '.tsx', '.ts')):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8') as file:
                cnt = file.read()
                if 'cih2-2nd' in cnt or 'cih1-3rd' in cnt or 'cih3-card' in cnt:
                    print(f"{p} has cih2-2nd / cih1-3rd / cih3-card!")

