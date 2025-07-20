import fitz  # PyMuPDF
import re

def extract_godel_content():
    """Extract content from Gödel book PDF"""
    
    # Open the PDF
    pdf_path = "attached_assets/3FINALGODELBOOK_1753036086975.pdf"
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
    
    print(f"Gödel content extracted successfully!")
    print(f"Content length: {len(full_text)} characters")
    
    return full_text

if __name__ == "__main__":
    content = extract_godel_content()
    
    # Save to file
    with open("godel_content.txt", "w", encoding="utf-8") as f:
        f.write(content)
    
    print("Content saved to godel_content.txt")