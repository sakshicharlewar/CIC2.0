with open(r'CIH4.0FINAL\CIH-3.0-main\src\app\page.js', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.splitlines()
for i, l in enumerate(lines):
    if '<image' in l.lower() or 'id="home"' in l.lower() or 'hero' in l.lower():
        print(f"{i+1}: {l.strip()[:100]}")

