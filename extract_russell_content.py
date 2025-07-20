import fitz  # PyMuPDF
import re

def extract_russell_content():
    """Extract content from Russell's Mathematical Philosophy PDF"""
    
    # Open the PDF
    pdf_path = "attached_assets/Revised Russells Mathematical Philosophy_1753034499903.pdf"
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
    html_content += '<p class="document-paragraph text-center text-2xl font-bold mb-6">Russell\'s Mathematical Philosophy</p>\n'
    html_content += '<p class="document-paragraph text-center text-lg mb-8">J.-M. Kuczynski, PhD</p>\n'
    
    chapter_counter = 0
    section_counter = 0
    
    for i, paragraph in enumerate(paragraphs):
        if not paragraph.strip():
            continue
            
        # Check if it's a chapter heading
        if re.match(r'^Chapter \d+:', paragraph.strip()):
            chapter_counter += 1
            section_counter = 0
            html_content += f'<p class="document-paragraph font-bold text-lg mb-4" id="section-{chapter_counter}-0-0">{paragraph.strip()}</p>\n'
        # Check if it's a major section
        elif re.match(r'^\d+\.\s+', paragraph.strip()) or paragraph.strip() in ['Introduction', 'Preface to the Second Edition', 'Scope and Contributions', 'Key Themes', 'Notes on the Second Edition']:
            section_counter += 1
            html_content += f'<p class="document-paragraph font-bold text-lg mb-4" id="section-{chapter_counter}-{section_counter}-0">{paragraph.strip()}</p>\n'
        else:
            # Regular paragraph
            html_content += f'<p class="document-paragraph">{paragraph.strip()}</p>\n'
    
    html_content += '</div>'
    
    print(f"Russell content extracted successfully!")
    print(f"Content length: {len(html_content)} characters")
    
    return html_content

if __name__ == "__main__":
    content = extract_russell_content()
    
    # Save to file
    with open("russell_content.txt", "w", encoding="utf-8") as f:
        f.write(content)
    
    print("Content saved to russell_content.txt")