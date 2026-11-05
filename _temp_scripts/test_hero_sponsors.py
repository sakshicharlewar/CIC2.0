import urllib.request

urls = [
    'http://localhost:3000/images/cadathon_chapter2_hero.png',
    'http://localhost:3000/images/cadathon_chapter2.png',
    'http://localhost:3000/sponsor/stbif.png',
    'http://localhost:3000/sponsor/unstop.png',
    'http://localhost:3000/sponsor/ytc.png',
]

for u in urls:
    try:
        req = urllib.request.urlopen(u)
        print(f"OK: {u.split('/')[-1]} -> Status {req.status}, Content-Type: {req.headers.get('Content-Type')}, Size: {req.headers.get('Content-Length')}")
    except Exception as e:
        print(f"FAILED: {u} -> {e}")

