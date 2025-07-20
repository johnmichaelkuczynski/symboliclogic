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

def create_typescript_content(text):
    """Create proper TypeScript content structure"""
    
    # Clean up the text and split into logical sections
    lines = []
    for line in text.split('\n'):
        line = line.strip()
        if line:
            lines.append(line)
    
    # Join lines and then split on section markers
    full_text = ' '.join(lines)
    
    # Find section breaks (numbered sections like 1.0, 1.1, 2.0, etc.)
    sections = re.split(r'(?=\d+\.\d+(?:\.\d+)?\s+[A-Z])', full_text)
    
    formatted_paragraphs = []
    
    # Add the title and author
    formatted_paragraphs.append('<p class="document-paragraph text-center text-2xl font-bold mb-6">Introduction to Symbolic Logic</p>')
    formatted_paragraphs.append('<p class="document-paragraph text-center text-lg mb-8">J.-M. Kuczynski</p>')
    
    for section in sections:
        section = section.strip()
        if not section or len(section) < 10:
            continue
            
        # Check if this section starts with a number (section header)
        section_match = re.match(r'^(\d+\.\d+(?:\.\d+)?)\s+(.+)', section)
        if section_match:
            section_num = section_match.group(1)
            rest_of_section = section_match.group(2)
            
            # Split the section title from the content
            title_match = re.match(r'^([^.!?]*[.!?]?\s*[A-Za-z\s]*?)(?=\s+[A-Z][a-z]|\s+To\s|\s+If\s|\s+A\s|\s+P\s)', rest_of_section)
            if title_match:
                title = title_match.group(1).strip()
                content = rest_of_section[len(title):].strip()
                
                # Add section header
                formatted_paragraphs.append(f'<p class="document-paragraph font-bold text-lg mb-4">{section_num} {title}</p>')
                
                # Split content into paragraphs
                if content:
                    paragraphs = split_into_paragraphs(content)
                    for para in paragraphs:
                        if para.strip():
                            formatted_paragraphs.append(f'<p class="document-paragraph">{para.strip()}</p>')
            else:
                # If we can't parse the title, add the whole section as header
                formatted_paragraphs.append(f'<p class="document-paragraph font-bold text-lg mb-4">{section}</p>')
        else:
            # This is continuation content, split into paragraphs
            paragraphs = split_into_paragraphs(section)
            for para in paragraphs:
                if para.strip():
                    formatted_paragraphs.append(f'<p class="document-paragraph">{para.strip()}</p>')
    
    return '\n'.join(formatted_paragraphs)

def split_into_paragraphs(text):
    """Split text into logical paragraphs"""
    # Split on sentence boundaries, but keep related sentences together
    sentences = re.split(r'(?<=[.!?])\s+(?=[A-Z])', text)
    
    paragraphs = []
    current_paragraph = []
    
    for sentence in sentences:
        sentence = sentence.strip()
        if not sentence:
            continue
            
        current_paragraph.append(sentence)
        
        # Create new paragraph at natural breaks
        if (len(current_paragraph) >= 3 and 
            (sentence.endswith('.') or sentence.endswith('!') or sentence.endswith('?')) and
            (any(indicator in sentence for indicator in ['Here is an example', 'Consider', 'For instance', 'Example', 'Thus,']) or
             len(' '.join(current_paragraph)) > 400)):
            
            paragraphs.append(' '.join(current_paragraph))
            current_paragraph = []
    
    # Add remaining sentences
    if current_paragraph:
        paragraphs.append(' '.join(current_paragraph))
    
    return paragraphs

# Extract and process content
pdf_path = "attached_assets/Introduction to Symbolic Logic_1753024358929.pdf"
raw_text = extract_pdf_content(pdf_path)

# Create formatted content
formatted_content = create_typescript_content(raw_text)

# Create the TypeScript export
typescript_content = f'''export const symbolicLogicContent = {{
  sections: [
    {{
      id: "symbolic-logic",
      title: "Introduction to Symbolic Logic",
      author: "J.-M. Kuczynski", 
      content: `<div class="document-content">
{formatted_content}
</div>`
    }}
  ]
}};'''

# Write to the shared content file
with open('shared/symbolic-logic-content.ts', 'w', encoding='utf-8') as f:
    f.write(typescript_content)

print("Content updated successfully!")
print(f"Total content length: {len(formatted_content)} characters")

# Show preview
preview = formatted_content[:1500] + "..." if len(formatted_content) > 1500 else formatted_content
print("\nPreview:")
print(preview)