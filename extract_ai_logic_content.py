import fitz  # PyMuPDF
import re

def extract_ai_logic_content():
    """Extract content from AI Logic Course PDF"""
    
    # Open the PDF
    pdf_path = "attached_assets/AI Logic Course_1753035245115.pdf"
    doc = fitz.open(pdf_path)
    
    full_text = ""
    
    # Extract text from all pages
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        text = page.get_text()
        full_text += text + "\n"
    
    doc.close()
    
    # Clean up the text
    # Remove excessive whitespace
    full_text = re.sub(r'\n\s*\n', '\n\n', full_text)
    full_text = re.sub(r' +', ' ', full_text)
    
    # Split into manageable paragraphs for HTML formatting
    paragraphs = full_text.split('\n\n')
    
    # Create HTML formatted content with proper paragraph structure
    html_content = '<div class="document-content">\n'
    
    # Add title and author
    html_content += '<p class="document-paragraph text-center text-2xl font-bold mb-6">AI Logic Course</p>\n'
    html_content += '<p class="document-paragraph text-center text-lg mb-8">Comparative Study of Traditional and AI Logic</p>\n'
    
    chapter_counter = 0
    section_counter = 0
    
    for i, paragraph in enumerate(paragraphs):
        if not paragraph.strip():
            continue
            
        # Check if it's a major section heading
        if re.match(r'^\d+\.\s+', paragraph.strip()) or 'Traditional View' in paragraph.strip() or 'AI Perspective' in paragraph.strip():
            section_counter += 1
            html_content += f'<p class="document-paragraph font-bold text-lg mb-4" id="section-{chapter_counter}-{section_counter}-0">{paragraph.strip()}</p>\n'
        # Check if it's a subsection
        elif re.match(r'^\d+\.\d+\s+', paragraph.strip()):
            subsection = re.match(r'^(\d+\.\d+)\s+(.+)', paragraph.strip())
            if subsection:
                section_id = subsection.group(1).replace('.', '-')
                html_content += f'<p class="document-paragraph font-bold text-lg mb-4" id="section-{section_id}-0">{paragraph.strip()}</p>\n'
            else:
                html_content += f'<p class="document-paragraph font-bold text-lg mb-4">{paragraph.strip()}</p>\n'
        else:
            # Regular paragraph
            html_content += f'<p class="document-paragraph">{paragraph.strip()}</p>\n'
    
    html_content += '</div>'
    
    print(f"AI Logic content extracted successfully!")
    print(f"Content length: {len(html_content)} characters")
    
    return html_content

if __name__ == "__main__":
    content = extract_ai_logic_content()
    
    # Save to file
    with open("ai_logic_content.txt", "w", encoding="utf-8") as f:
        f.write(content)
    
    print("Content saved to ai_logic_content.txt")