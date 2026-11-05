import os

print("cwd:", os.getcwd())
print("Exists CIH4.0FINAL:", os.path.exists("CIH4.0FINAL"))
if os.path.exists("CIH4.0FINAL"):
    print("Contents of CIH4.0FINAL:", os.listdir("CIH4.0FINAL"))
    p2 = os.path.join("CIH4.0FINAL", "CIH-3.0-main")
    if os.path.exists(p2):
        print("Contents of CIH-3.0-main:", os.listdir(p2))
        p3 = os.path.join(p2, "public")
        if os.path.exists(p3):
            print("Contents of public:", os.listdir(p3))
            p4 = os.path.join(p3, "images")
            if os.path.exists(p4):
                print("Contents of images:", os.listdir(p4))

# Also check cwd itself:
print("Contents of cwd public if any:", os.path.exists("public"))
if os.path.exists("public"):
    print("cwd public:", os.listdir("public"))

