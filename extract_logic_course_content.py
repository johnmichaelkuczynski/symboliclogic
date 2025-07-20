import fitz  # PyMuPDF
import re

def extract_logic_course_content():
    """Extract content from Logic Course PDF"""
    
    # Open the PDF
    pdf_path = "attached_assets/Logic Course_1753035484523.pdf"
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
    html_content += '<p class="document-paragraph text-center text-2xl font-bold mb-6">Introduction to Symbolic Logic</p>\n'
    html_content += '<p class="document-paragraph text-center text-lg mb-8">J.-M. Kuczynski PhD - Course Edition</p>\n'
    
    section_counter = 0
    
    for i, paragraph in enumerate(paragraphs):
        if not paragraph.strip():
            continue
            
        # Check if it's a week heading
        if re.match(r'^Week \d+:', paragraph.strip()):
            section_counter += 1
            html_content += f'<p class="document-paragraph font-bold text-xl mb-6" id="section-week-{section_counter}-0">{paragraph.strip()}</p>\n'
        # Check if it's a major section heading
        elif any(heading in paragraph.strip() for heading in ['Introduction to Logic', 'Basic Concepts', 'Basic Logical Symbols', 'Translation Practice', 'Practice Exercises', 'Key Takeaways', 'Truth Tables', 'Elementary Proofs', 'De Morgan\'s Laws']):
            html_content += f'<p class="document-paragraph font-bold text-lg mb-4">{paragraph.strip()}</p>\n'
        # Check if it's homework section
        elif 'Homework' in paragraph.strip() and any(word in paragraph.strip() for word in ['Symbolic Logic', 'Part', 'Total Points']):
            html_content += f'<p class="document-paragraph font-bold text-lg mb-4 bg-yellow-50 p-4 border-l-4 border-yellow-400">{paragraph.strip()}</p>\n'
        # Check if it's a table or structured content
        elif '|' in paragraph.strip() and paragraph.count('|') > 2:
            # Format as code block for tables
            html_content += f'<p class="document-paragraph bg-gray-50 p-3 font-mono text-sm border rounded">{paragraph.strip()}</p>\n'
        else:
            # Regular paragraph
            html_content += f'<p class="document-paragraph">{paragraph.strip()}</p>\n'
    
    html_content += '</div>'
    
    print(f"Logic Course content extracted successfully!")
    print(f"Content length: {len(html_content)} characters")
    
    return html_content

if __name__ == "__main__":
    content = extract_logic_course_content()
    
    # Save to file
    with open("logic_course_content.txt", "w", encoding="utf-8") as f:
        f.write(content)
    
    print("Content saved to logic_course_content.txt")