with open(r'CIH4.0FINAL\CIH-3.0-main\src\app\page.js', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.splitlines()
for i in range(990, 1030):
    if i < len(lines):
        print(f"{i+1}: {lines[i]}")

