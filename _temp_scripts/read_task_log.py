log_path = r'C:\Users\saksh\.gemini\antigravity\brain\6371fbeb-06b7-49bb-ac1e-3e3ce429e012\.system_generated\tasks\task-910.log'

with open(log_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"Total lines in task-910.log: {len(lines)}")
for l in lines[-40:]:
    print(l.rstrip())

