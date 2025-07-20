import { ScrollArea } from "@/components/ui/scroll-area";
import { paperContent } from "@shared/paper-content";

// Extract table of contents from the document content
const extractTableOfContents = () => {
  const tableOfContents: Array<{ id: string; title: string; level: number }> = [];
  
  // Get the full content from the first section (which contains all the text)
  const content = paperContent.sections[0]?.content || '';
  
  // Split content to find where actual content starts (after the table of contents)
  // The actual content starts after the first occurrence of "1.0 The concept of an inference"
  // followed by actual text content, not just the TOC entry
  const contentParts = content.split('1.0 The concept of an inference');
  
  if (contentParts.length > 1) {
    // Process only the actual content part (skip table of contents)
    const actualContent = '1.0 The concept of an inference' + contentParts.slice(1).join('1.0 The concept of an inference');
    
    // Find all section headings with numbering pattern like "1.0", "1.1", "2.0", etc.
    const sectionPattern = /<p class="document-paragraph">([0-9]+\.[0-9]+(?:\.[0-9]+)?\s+[^<]+)/g;
    
    let match;
    let counter = 0;
    while ((match = sectionPattern.exec(actualContent)) !== null) {
      const fullTitle = match[1].trim();
      const sectionNumber = fullTitle.match(/^([0-9]+\.[0-9]+(?:\.[0-9]+)?)/)?.[1] || '';
      
      // Skip if no section number found
      if (!sectionNumber) continue;
      
      // Determine level based on section number depth
      const level = (sectionNumber.match(/\./g) || []).length;
      
      // Create unique ID from section number and counter to avoid duplicates
      const id = `section-${sectionNumber.replace(/\./g, '-')}-${counter}`;
      counter++;
      
      tableOfContents.push({
        id,
        title: fullTitle,
        level
      });
    }
  }
  
  return tableOfContents;
};

const tableOfContents = extractTableOfContents();

export default function NavigationSidebar() {
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.log(`Element with id '${id}' not found`);
    }
  };

  return (
    <aside className="w-full bg-card shadow-sm border-r border-border sticky top-16 h-[calc(100vh-280px)]">
      <div className="p-1 md:p-4 h-full flex flex-col">
        <h3 className="font-inter font-semibold text-sm text-foreground mb-3 flex-shrink-0 flex items-center justify-between">
          <span>Table of Contents</span>
          <span className="text-xs text-muted-foreground font-normal">
            ({tableOfContents.length})
          </span>
        </h3>
        <ScrollArea className="flex-1 h-full">
          <div className="pr-1 md:pr-4">
            <nav className="space-y-0.5 md:space-y-1">
              {tableOfContents.map((entry, index) => (
                <button
                  key={entry.id}
                  onClick={() => handleNavClick(entry.id)}
                  className={`group block w-full text-left px-2 md:px-3 py-1.5 md:py-2 text-xs text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-sm transition-all duration-200 overflow-hidden ${
                    entry.level === 1 ? 'pl-2 md:pl-3 font-medium' : 
                    entry.level === 2 ? 'pl-4 md:pl-6' : 
                    'pl-6 md:pl-9'
                  } ${index === 0 ? 'mt-1' : ''}`}
                  title={entry.title}
                >
                  <div className="flex items-start">
                    {entry.level > 1 && (
                      <span className="text-muted-foreground/50 mr-1 text-xs leading-tight">•</span>
                    )}
                    <span className="block text-xs leading-tight whitespace-normal group-hover:text-foreground transition-colors">
                      {entry.title}
                    </span>
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </ScrollArea>
      </div>
    </aside>
  );
}
