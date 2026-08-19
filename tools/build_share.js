const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle,
  LevelFormat, PageBreak, Header, Footer, PageNumber
} = require('docx');

const SZ = 22;               // 11pt everywhere
const FONT = 'Calibri';
const TW = 9360;             // table width (Letter, 1" margins)

const blocks = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

// runs -> TextRun[]
const R = (runs, opts = {}) => runs.map(r => new TextRun({
  text: r.t,
  bold: r.b || opts.bold,
  italics: r.i || opts.italics,
  size: SZ,
  font: FONT,
  color: opts.color,
}));

const flat = (runs) => runs.map(r => r.t).join('');

const cellP = (runs, opts = {}) => new Paragraph({
  spacing: { after: 0, line: 252 },
  children: R(runs, opts),
});

const mkCell = (runs, w, opts = {}) => new TableCell({
  width: { size: w, type: WidthType.DXA },
  shading: opts.fill ? { type: ShadingType.CLEAR, fill: opts.fill } : undefined,
  margins: { top: 70, bottom: 70, left: 105, right: 105 },
  children: [cellP(runs, opts)],
});

const out = [];
let firstH1 = true;

for (let k = 0; k < blocks.length; k++) {
  const b = blocks[k];
  const next = blocks[k + 1];

  switch (b.type) {

    case 'h1': {
      if (!firstH1) out.push(new Paragraph({ children: [new PageBreak()] }));
      firstH1 = false;
      out.push(new Paragraph({
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 200, after: 160 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 10, color: '1F3864', space: 6 } },
        children: R(b.runs, { bold: true, color: '1F3864' }),
      }));
      break;
    }

    case 'h2':
      out.push(new Paragraph({
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 320, after: 130 },
        children: R(b.runs, { bold: true, color: '1F3864' }),
      }));
      break;

    case 'h3':
      out.push(new Paragraph({
        heading: HeadingLevel.HEADING_3,
        spacing: { before: 240, after: 110 },
        children: R(b.runs, { bold: true, color: '2E5496' }),
      }));
      break;

    case 'h4':
      out.push(new Paragraph({
        heading: HeadingLevel.HEADING_4,
        spacing: { before: 200, after: 100 },
        children: R(b.runs, { bold: true, color: '333333' }),
      }));
      break;

    case 'p':
      out.push(new Paragraph({
        spacing: { after: 140, line: 276 },
        children: R(b.runs),
      }));
      break;

    case 'quote': {
      const txt = flat(b.runs);
      const draft = /DRAFT STATUS|remove before publication/i.test(txt);
      out.push(new Paragraph({
        spacing: { before: 140, after: 180, line: 276 },
        shading: { type: ShadingType.CLEAR, fill: draft ? 'FDF3E7' : 'F2F5FA' },
        border: { left: { style: BorderStyle.SINGLE, size: 18, color: draft ? 'C08A2E' : '2E5496', space: 8 } },
        indent: { left: 140, right: 140 },
        children: R(b.runs),
      }));
      break;
    }

    case 'bullet':
      out.push(new Paragraph({
        numbering: { reference: 'b', level: 0 },
        spacing: { after: 70, line: 268 },
        children: R(b.runs),
      }));
      break;

    case 'num':
      out.push(new Paragraph({
        numbering: { reference: 'n', level: 0 },
        spacing: { after: 70, line: 268 },
        children: R(b.runs),
      }));
      break;

    case 'check':
      out.push(new Paragraph({
        spacing: { after: 80, line: 268 },
        indent: { left: 200 },
        children: R(b.runs),
      }));
      break;

    case 'rule':
      // Redundant immediately before a heading, which already carries separation.
      if (next && /^h[1-4]$/.test(next.type)) break;
      out.push(new Paragraph({
        spacing: { before: 60, after: 160 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: 'C9D2E0', space: 4 } },
        children: [new TextRun({ text: '', size: SZ, font: FONT })],
      }));
      break;

    case 'table': {
      const n = b.header.length;
      // Weight column widths: first column wider for 2-col, balanced otherwise
      let widths;
      if (n === 2) widths = [3100, TW - 3100];
      else if (n === 3) widths = [3000, 2200, TW - 5200];
      else if (n === 4) widths = [700, 3700, 2200, TW - 6600];
      else if (n === 5) widths = [2000, 1840, 1840, 1840, TW - 7520];
      else if (n === 6) widths = [1560, 1560, 1560, 1560, 1560, TW - 7800];
      else widths = Array(n).fill(Math.floor(TW / n));
      const diff = TW - widths.reduce((a, c) => a + c, 0);
      widths[widths.length - 1] += diff;

      out.push(new Table({
        columnWidths: widths,
        width: { size: TW, type: WidthType.DXA },
        borders: {
          top: { style: BorderStyle.SINGLE, size: 4, color: 'B8C4D9' },
          bottom: { style: BorderStyle.SINGLE, size: 4, color: 'B8C4D9' },
          left: { style: BorderStyle.SINGLE, size: 4, color: 'B8C4D9' },
          right: { style: BorderStyle.SINGLE, size: 4, color: 'B8C4D9' },
          insideHorizontal: { style: BorderStyle.SINGLE, size: 2, color: 'D6DCE8' },
          insideVertical: { style: BorderStyle.SINGLE, size: 2, color: 'D6DCE8' },
        },
        rows: (() => {
          const hasHeader = b.header.some(h => h.map(x => x.t).join('').trim() !== '');
          const rs = [];
          if (hasHeader) rs.push(new TableRow({
            tableHeader: true,
            children: b.header.map((h, j) => mkCell(h, widths[j], { bold: true, color: 'FFFFFF', fill: '1F3864' })),
          }));
          b.rows.forEach((r, ri) => rs.push(new TableRow({
            children: r.map((c, j) => mkCell(c, widths[j],
              { fill: (hasHeader ? ri % 2 === 0 : ri % 2 === 1) ? 'F4F6FA' : undefined })),
          })));
          return rs;
        })(),
      }));
      out.push(new Paragraph({ spacing: { after: 160 }, children: [new TextRun({ text: '', size: SZ, font: FONT })] }));
      break;
    }
  }
}

const doc = new Document({
  creator: 'City of Kansas City, Missouri',
  title: 'AI in Procurement: References and What We Are Building',
  description: 'Shared notes on AI procurement references and the KCMO staged challenge model',
  numbering: {
    config: [
      { reference: 'b', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•',
          alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 240 } } } }] },
      { reference: 'n', levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.',
          alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 240 } } } }] },
    ],
  },
  styles: { default: { document: { run: { font: FONT, size: SZ } } } },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1080, right: 1440, bottom: 1080, left: 1440 },
      },
    },
    headers: {
      default: new Header({ children: [new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: { after: 120 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: 'C9D2E0', space: 4 } },
        children: [new TextRun({ text: 'City of Kansas City, Missouri  |  AI Procurement Notes', size: SZ, color: '7A7A7A', font: FONT })],
      })] }),
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ children: ['Page ', PageNumber.CURRENT, ' of ', PageNumber.TOTAL_PAGES], size: SZ, color: '7A7A7A', font: FONT })],
      })] }),
    },
    children: out,
  }],
});

Packer.toBuffer(doc).then(b => {
  fs.writeFileSync(process.argv[3], b);
  console.log('written:', process.argv[3]);
});
