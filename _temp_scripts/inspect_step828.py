import json

transcript_path = r'C:\Users\saksh\.gemini\antigravity\brain\6371fbeb-06b7-49bb-ac1e-3e3ce429e012\.system_generated\logs\transcript_full.jsonl'
with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        data = json.loads(line)
        idx = data.get('step_index')
        if idx in range(820, 835):
            tc = data.get('tool_calls', [])
            if any('cadathon_chapter2.png' in str(c) for c in tc):
                print(f"Step {idx}:")
                print(json.dumps(tc, indent=2))

