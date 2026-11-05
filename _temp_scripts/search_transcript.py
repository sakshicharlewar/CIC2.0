import os

transcript_path = r'C:\Users\saksh\.gemini\antigravity\brain\6371fbeb-06b7-49bb-ac1e-3e3ce429e012\.system_generated\logs\transcript.jsonl'
with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        if 'cadathon_chapter2_hero.png' in line:
            print("Found in transcript:")
            # print snippet around it
            idx = line.find('cadathon_chapter2_hero.png')
            print(line[max(0, idx-100):min(len(line), idx+150)])

