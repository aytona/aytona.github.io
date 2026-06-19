#!/usr/bin/env python3
"""Build resume.pdf from resume.html using weasyprint."""
import weasyprint
from pathlib import Path

ROOT = Path(__file__).parent
HTML_SRC = ROOT / "resume.html"
PDF_OUT = ROOT.parent / "public" / "resume.pdf"

html = weasyprint.HTML(filename=str(HTML_SRC))
html.write_pdf(str(PDF_OUT))
print(f"✓ Generated {PDF_OUT} ({PDF_OUT.stat().st_size // 1024}KB)")
