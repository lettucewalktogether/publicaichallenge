#!/usr/bin/env python3
"""Parse the announcement markdown into a JSON block structure for docx rendering.
Also removes em-dashes: prose asides are rewritten, label forms become colons."""
import json, re, sys

src = open(sys.argv[1]).read()

# ---------- 1. Em-dash removal: prose rewrites first (order matters) ----------
PROSE = [
("# PUBLIC ANNOUNCEMENT — DRAFT FOR PROCUREMENT REVIEW",
 "# PUBLIC ANNOUNCEMENT: DRAFT FOR PROCUREMENT REVIEW"),
("**Issued by:** City of Kansas City, Missouri — [INSERT ISSUING DIVISION]",
 "**Issued by:** City of Kansas City, Missouri, [INSERT ISSUING DIVISION]"),
("assign qualified technical personnel — which may include\nforward-deployed AI engineers, solution engineers, implementation engineers, applied AI\nspecialists, or personnel performing comparable functions — to work directly with\ndesignated City staff",
 "assign qualified technical personnel, which may include\nforward-deployed AI engineers, solution engineers, implementation engineers, applied AI\nspecialists, or personnel performing comparable functions, to work directly with\ndesignated City staff"),
('construct this proposal." — and proceed to the certification below.',
 'construct this proposal," then proceed to the certification below.'),
("**Pass/fail** — any failure renders the team ineligible regardless of total:",
 "**Pass/fail.** Any failure renders the team ineligible regardless of total:"),
]
for a, b in PROSE:
    src = src.replace(a, b)

# Remaining em-dashes are "Label — Description"; a colon carries that cleanly.
src = re.sub(r'(\S) — ', r'\1: ', src)
src = src.replace(' — ', ': ').replace('—', '-')
src = src.replace('–', '-')
# Collapse any doubled colons produced by a label that already ended in one
src = re.sub(r'::+', ':', src)
src = re.sub(r':\s*:', ':', src)

# ---------- 2. Inline parsing ----------
def runs(text):
    """Split inline markdown into styled runs."""
    text = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', text)   # links -> label
    text = text.replace('`', '')
    out, pos = [], 0
    for m in re.finditer(r'\*\*(.+?)\*\*|\*(.+?)\*', text):
        if m.start() > pos:
            out.append({"t": text[pos:m.start()]})
        if m.group(1) is not None:
            out.append({"t": m.group(1), "b": True})
        else:
            out.append({"t": m.group(2), "i": True})
        pos = m.end()
    if pos < len(text):
        out.append({"t": text[pos:]})
    return [r for r in out if r["t"]] or [{"t": ""}]

# ---------- 3. Block parsing ----------
lines = src.split('\n')
blocks, i = [], 0

def flush(buf):
    if buf:
        joined = ' '.join(x.strip() for x in buf).strip()
        if joined:
            blocks.append({"type": "p", "runs": runs(joined)})
    return []

para = []
while i < len(lines):
    ln = lines[i]
    st = ln.strip()

    # table
    if st.startswith('|') and i + 1 < len(lines) and re.match(r'^\|[\s:|-]+\|$', lines[i+1].strip()):
        para = flush(para)
        header = [c.strip() for c in st.strip('|').split('|')]
        i += 2
        rows = []
        while i < len(lines) and lines[i].strip().startswith('|'):
            rows.append([c.strip() for c in lines[i].strip().strip('|').split('|')])
            i += 1
        blocks.append({"type": "table",
                       "header": [runs(h) for h in header],
                       "rows": [[runs(c) for c in r] for r in rows]})
        continue

    if not st:
        para = flush(para); i += 1; continue

    if st == '---':
        para = flush(para)
        blocks.append({"type": "rule"}); i += 1; continue

    m = re.match(r'^(#{1,4})\s+(.*)$', st)
    if m:
        para = flush(para)
        blocks.append({"type": "h%d" % len(m.group(1)), "runs": runs(m.group(2))})
        i += 1; continue

    if st.startswith('> '):
        para = flush(para)
        q = []
        while i < len(lines) and lines[i].strip().startswith('>'):
            q.append(lines[i].strip().lstrip('>').strip()); i += 1
        blocks.append({"type": "quote", "runs": runs(' '.join(q))})
        continue

    m = re.match(r'^(\d+)\.\s+(.*)$', st)
    if m:
        para = flush(para)
        blocks.append({"type": "num", "runs": runs(m.group(2))})
        i += 1; continue

    if st.startswith('- ') or st.startswith('* '):
        para = flush(para)
        blocks.append({"type": "bullet", "runs": runs(st[2:])})
        i += 1; continue

    if st.startswith('☐'):
        para = flush(para)
        blocks.append({"type": "check", "runs": runs(st)})
        i += 1; continue

    # A bold label starting a line is its own paragraph, not a continuation.
    if re.match(r'^\*\*[^*]+\*\*', st) and para:
        para = flush(para)
    para.append(ln); i += 1

flush(para)
json.dump(blocks, open(sys.argv[2], 'w'), ensure_ascii=False)
txt = json.dumps(blocks, ensure_ascii=False)
print("blocks: %d  tables: %d  em-dashes: %d" % (
    len(blocks), sum(1 for b in blocks if b["type"] == "table"), txt.count('—')))
