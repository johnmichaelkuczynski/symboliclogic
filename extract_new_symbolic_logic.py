import fitz  # PyMuPDF
import re

def extract_pdf_content(pdf_path):
    """Extract text from PDF while preserving structure"""
    doc = fitz.open(pdf_path)
    full_text = ""
    
    for page_num in range(doc.page_count):
        page = doc[page_num]
        text = page.get_text()
        full_text += text + "\n"
    
    doc.close()
    return full_text

def format_for_web(text):
    """Format text for web display with proper paragraph structure"""
    # Clean up the text
    text = text.strip()
    
    # Split into lines and process
    lines = text.split('\n')
    processed_lines = []
    
    for line in lines:
        line = line.strip()
        if line:  # Skip empty lines
            processed_lines.append(line)
    
    # Join lines back and split into paragraphs
    full_text = ' '.join(processed_lines)
    
    # Split on section headers (numbered sections like "1.0", "1.1", etc.)
    sections = re.split(r'(\d+\.\d+(?:\.\d+)?\s+[^\n]+)', full_text)
    
    formatted_content = []
    
    for i, section in enumerate(sections):
        section = section.strip()
        if not section:
            continue
            
        # Check if this is a section header
        if re.match(r'^\d+\.\d+(?:\.\d+)?\s+', section):
            formatted_content.append(f'<p class="document-paragraph font-bold text-lg mb-4">{section}</p>')
        else:
            # Split long sections into paragraphs (roughly every 4-6 sentences)
            sentences = re.split(r'(?<=[.!?])\s+(?=[A-Z])', section)
            
            current_paragraph = []
            for sentence in sentences:
                current_paragraph.append(sentence.strip())
                
                # Create new paragraph every 4-6 sentences or when encountering example indicators
                if (len(current_paragraph) >= 4 and 
                    (sentence.endswith('.') or sentence.endswith('!') or sentence.endswith('?'))) or \
                   any(indicator in sentence for indicator in ['Example', 'Here is an example', 'Consider', 'For instance']):
                    
                    para_text = ' '.join(current_paragraph).strip()
                    if para_text:
                        formatted_content.append(f'<p class="document-paragraph">{para_text}</p>')
                    current_paragraph = []
            
            # Add remaining content as final paragraph
            if current_paragraph:
                para_text = ' '.join(current_paragraph).strip()
                if para_text:
                    formatted_content.append(f'<p class="document-paragraph">{para_text}</p>')
    
    return '\n'.join(formatted_content)

# Extract content from the PDF
pdf_path = "attached_assets/Introduction to Symbolic Logic_1753024358929.pdf"
raw_text = extract_pdf_content(pdf_path)

# Format for web display
formatted_content = format_for_web(raw_text)

# Create the full content structure
full_content = f'''<div class="document-content">
<p class="document-paragraph mb-4 text-center text-2xl font-bold">Introduction to Symbolic Logic</p>
<p class="document-paragraph mb-8 text-center text-lg">J.-M. Kuczynski</p>
{formatted_content}
</div>'''

# Write to output file
with open('new_symbolic_logic_content.txt', 'w', encoding='utf-8') as f:
    f.write(full_content)

print("Content extracted and formatted successfully!")
print(f"Total length: {len(full_content)} characters")

# Also create a preview of the first few sections
preview = full_content[:2000] + "..." if len(full_content) > 2000 else full_content
print("\nPreview of formatted content:")
print(preview)