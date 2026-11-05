file_path = r'CIH4.0FINAL\CIH-3.0-main\src\components\PastEventsGalleryBox.jsx'

with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

t = text.replace('\r\n', '\n')

t = t.replace('alt="Cadathon 2.0 Trophy Lift"', 'alt="Cadathon 1.0 Trophy Lift"')
t = t.replace(
    'Authentic moments from Chapter 1, Cadathon 2.0 &amp; Chapter 3',
    'Authentic moments from Central India Cadathon 1.0'
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(t)

print("Fixed remaining Cadathon 2.0 mentions!")

