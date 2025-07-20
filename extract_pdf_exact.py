import fitz  # PyMuPDF
import re

def extract_pdf_exactly(pdf_path):
    """Extract text exactly as formatted in the PDF"""
    doc = fitz.open(pdf_path)
    full_text = ""
    
    for page_num in range(doc.page_count):
        page = doc[page_num]
        text = page.get_text()
        full_text += text + "\n\n"  # Add page breaks
    
    doc.close()
    return full_text

def format_exact_content(text):
    """Format content exactly preserving PDF structure"""
    
    # Split into lines and preserve exact formatting
    lines = text.split('\n')
    formatted_lines = []
    
    # Process each line
    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        # Check if this is a section header (starts with number like 1.0, 1.1, etc.)
        if re.match(r'^\d+\.\d+(?:\.\d+)?\s', line):
            # Extract section number and title
            section_match = re.match(r'^(\d+\.\d+(?:\.\d+)?)\s+(.+)', line)
            if section_match:
                section_num = section_match.group(1)
                title = section_match.group(2)
                id_attr = f'section-{section_num.replace(".", "-")}-0'
                formatted_lines.append(f'<p class="document-paragraph font-bold text-lg mb-4" id="{id_attr}">{section_num} {title}</p>')
            else:
                formatted_lines.append(f'<p class="document-paragraph font-bold text-lg mb-4">{line}</p>')
        else:
            # Regular paragraph - preserve indentation and formatting
            if len(line) > 0:
                # Check if this looks like an indented paragraph (starts with spaces in original)
                if line.startswith('    ') or line.startswith('\t'):
                    formatted_lines.append(f'<p class="document-paragraph pl-8">{line.strip()}</p>')
                else:
                    formatted_lines.append(f'<p class="document-paragraph">{line}</p>')
    
    return '\n'.join(formatted_lines)

# Extract exact content
pdf_path = "attached_assets/Introduction to Symbolic Logic_1753024358929.pdf"
raw_text = extract_pdf_exactly(pdf_path)

# Format preserving structure
formatted_content = format_exact_content(raw_text)

# Create the exact TypeScript content
typescript_content = f'''export const symbolicLogicContent = {{
  sections: [
    {{
      id: "symbolic-logic",
      title: "Introduction to Symbolic Logic",
      author: "J.-M. Kuczynski",
      content: `<div class="document-content">
<p class="document-paragraph text-center text-2xl font-bold mb-6">Introduction to Symbolic Logic</p>
<p class="document-paragraph text-center text-lg mb-8">J.-M. Kuczynski</p>
{formatted_content}
</div>`
    }}
  ]
}};'''

# Write to shared file
with open('shared/symbolic-logic-content.ts', 'w', encoding='utf-8') as f:
    f.write(typescript_content)

print("PDF extracted with exact formatting preserved!")
print(f"Content length: {len(formatted_content)} characters")