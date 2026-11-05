file_path = r'CIH4.0FINAL\CIH-3.0-main\src\app\page.js'

with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

t = text.replace('\r\n', '\n')

old_sponsor_img = '''                <Image
                  key={index}
                  alt={`Sponsor-logo ${index}`}
                  src={data}
                  width={100}
                  height={100}
                  className="shrink-0 h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain"
                />'''

new_sponsor_img = '''                <Image
                  key={index}
                  alt={`Sponsor-logo ${index}`}
                  src={data}
                  width={100}
                  height={100}
                  unoptimized
                  className="shrink-0 h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain"
                />'''

if old_sponsor_img in t:
    t = t.replace(old_sponsor_img, new_sponsor_img)
    print("Added unoptimized to sponsors Image successfully!")
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(t)
else:
    print("Warning: old_sponsor_img not found exactly")

