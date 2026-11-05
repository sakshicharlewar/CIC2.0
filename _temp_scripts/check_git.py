import subprocess

out = subprocess.run(['git', 'status', '--short'], cwd=r'CIH4.0FINAL\CIH-3.0-main', capture_output=True, text=True)
print("Git status in CIH-3.0-main:")
print(out.stdout)
print(out.stderr)

out2 = subprocess.run(['git', 'status', '--short'], cwd=r'.', capture_output=True, text=True)
print("Git status in cwd:")
print(out2.stdout)
print(out2.stderr)

