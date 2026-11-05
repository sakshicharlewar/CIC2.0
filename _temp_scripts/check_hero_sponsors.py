with open(r'CIH4.0FINAL\CIH-3.0-main\src\app\page.js', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.splitlines()

# Search for hero image or central india cadathon in page.js
print("=== HERO SECTION SEARCH ===")
for i, l in enumerate(lines[:300]):
    if any(k in l.lower() for k in ['logo', 'hero', 'cadathon', 'image', 'sponsor']):
        print(f"{i+1}: {l.strip()[:100]}")

print("\n=== SPONSORS SEARCH ===")
for i, l in enumerate(lines):
    if 'sponsor' in l.lower():
        print(f"{i+1}: {l.strip()[:100]}")

