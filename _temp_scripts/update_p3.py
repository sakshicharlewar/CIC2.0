file_path = r'CIH4.0FINAL\CIH-3.0-main\src\components\PastEventsGalleryBox.jsx'

with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

t = text.replace('\r\n', '\n')

old_p3 = '''                  <div className="relative aspect-4/3 w-full bg-neutral-200 overflow-hidden rounded-xs">
                    <Image
                      src="/images/image4.png"
                      alt="CAD Modeling Hall"
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>'''

new_p3 = '''                  <div className="relative aspect-4/3 w-full bg-neutral-200 overflow-hidden rounded-xs">
                    <Image
                      src="/images/gallery/cadathon-lab-workstations.jpg"
                      alt="CAD Design Arena at SCET"
                      fill
                      unoptimized
                      className="object-cover object-top"
                    />
                  </div>'''

if old_p3 in t:
    t = t.replace(old_p3, new_p3)
    print("Polaroid 3 updated with real photo!")
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(t)
else:
    print("Warning: old_p3 not found")

