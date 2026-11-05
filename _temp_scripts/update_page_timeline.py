import re

file_path = r'CIH4.0FINAL\CIH-3.0-main\src\app\page.js'

with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

t = text.replace('\r\n', '\n')

# 1. Update import
old_import = 'import { Timeline } from "@/components/ui/timeline";'
new_import = 'import CompetitionTimeline from "@/components/CompetitionTimeline";'

if old_import in t:
    t = t.replace(old_import, new_import)
    print("Replaced Timeline import!")
else:
    print("Warning: old_import not found")

# 2. Replace the entire old timeline section with <CompetitionTimeline />
old_section = '''      {/* TIMELINE */}
      <div
        id="timeline"
        className="w-full pt-10 pb-6 sm:pt-16 sm:pb-10 z-20 bg-white"
      >
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl mt-6 sm:mt-10 font-bold text-black mb-8 sm:mb-12">
          Timeline of <span className="text-blue-500">Innovation</span>
        </h1>
        <div className="relative w-full overflow-hidden px-2 sm:px-4 md:px-8">
          <Timeline data={data} />
        </div>
      </div>'''

new_section = '''      {/* TIMELINE & REGISTRATION SCHEDULE (HANDCRAFTED BLUEPRINT ROADMAP) */}
      <CompetitionTimeline />'''

if old_section in t:
    t = t.replace(old_section, new_section)
    print("Replaced Timeline section with CompetitionTimeline!")
else:
    print("Warning: old_section not found exactly, trying regex")
    pattern = r'\{\/\*\s*TIMELINE\s*\*\/\}[\s\S]*?<Timeline\s+data=\{data\}\s*\/>\s*<\/div>\s*<\/div>'
    t = re.sub(pattern, new_section, t)

# 3. Clean up the old unused `const data = [...]` block
old_data_start = '// --- Timeline Data (as per official CIH 4.0 Brochure) ---'
old_data_end = 'const slideData = ['

idx1 = t.find(old_data_start)
idx2 = t.find(old_data_end, idx1)

if idx1 != -1 and idx2 != -1:
    t = t[:idx1] + t[idx2:]
    print("Removed old data array!")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(t)

print("Saved updated page.js successfully!")

