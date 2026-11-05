import json

transcript_path = r'C:\Users\saksh\.gemini\antigravity\brain\6371fbeb-06b7-49bb-ac1e-3e3ce429e012\.system_generated\logs\transcript_full.jsonl'
with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        data = json.loads(line)
        if data.get('step_index') == 877:
            print(json.dumps(data.get('tool_calls', []), indent=2))
            break

