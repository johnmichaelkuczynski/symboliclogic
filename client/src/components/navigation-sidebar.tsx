import { ScrollArea } from "@/components/ui/scroll-area";
import { paperContent } from "@shared/paper-content";

// Extract actual sections from the PDF content, respecting the original structure
const extractTableOfContents = () => {
  const tableOfContents: Array<{ id: string; title: string; level: number }> = [];
  
  // Get the full content from the first section
  const content = paperContent.sections[0]?.content || '';
  
  // Find all section headings that have IDs (these are the actual section headers)
  const sectionPattern = /<p class="document-paragraph font-bold text-lg mb-4" id="([^"]+)">([^<]+)<\/p>/g;
  
  let match;
  while ((match = sectionPattern.exec(content)) !== null) {
    const id = match[1];
    const fullTitle = match[2].trim();
    
    // Determine level based on section number
    const sectionNumber = fullTitle.match(/^(\d+)\.(\d+)(?:\.(\d+))?/);
    if (sectionNumber) {
      const level = sectionNumber[3] ? 3 : (sectionNumber[2] === '0' ? 1 : 2);
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
