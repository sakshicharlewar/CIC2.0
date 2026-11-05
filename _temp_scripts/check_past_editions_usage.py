with open(r'CIH4.0FINAL\CIH-3.0-main\src\app\page.js', 'r', encoding='utf-8') as f:
    text = f.read()

for i, l in enumerate(text.splitlines()):
    if 'PastEditions' in l:
        print(f"{i+1}: {l.strip()}")

