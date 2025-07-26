import { ScrollArea } from "@/components/ui/scroll-area";
import { bookContent as paperContent } from "@shared/book-content";

// Create a table of contents based on "Beauty Junkies" content
const createTableOfContents = () => {
  const tableOfContents: Array<{ id: string; title: string; level: number }> = [
    // Part I: Introduction to Beauty Culture
    { id: "section-1", title: "Chapter 1: The Cosmetic Surgery Experience", level: 0 },
    { id: "section-2", title: "Chapter 2: Beauty Industry Statistics", level: 0 },
    { id: "section-3", title: "Chapter 3: Makeover Culture", level: 0 },
    { id: "section-4", title: "Chapter 4: Television and Beauty", level: 0 },
    { id: "section-5", title: "Chapter 5: Enhancement Philosophy", level: 0 },
    { id: "section-6", title: "Chapter 6: Global Beauty Markets", level: 0 },
    { id: "section-7", title: "Chapter 7: Product Obsession", level: 0 },
    { id: "section-8", title: "Chapter 8: Cosmetic Surgery Statistics", level: 0 },
    { id: "section-9", title: "Chapter 9: Beauty Addiction Psychology", level: 0 },
    { id: "section-10", title: "Chapter 10: Cultural Beauty Standards", level: 0 },
    
    // Part II: The Beauty Industry
    { id: "section-11", title: "Chapter 11: Industry Growth", level: 0 },
    { id: "section-12", title: "Chapter 12: Magazine Culture", level: 0 },
    { id: "section-13", title: "Chapter 13: Celebrity Influence", level: 0 },
    { id: "section-14", title: "Chapter 14: Youth Obsession", level: 0 },
    { id: "section-15", title: "Chapter 15: Beauty Procedures", level: 0 },
    { id: "section-16", title: "Chapter 16: Medical Tourism", level: 0 },
    { id: "section-17", title: "Chapter 17: Botox Culture", level: 0 },
    { id: "section-18", title: "Chapter 18: Surgery Risks", level: 0 },
    { id: "section-19", title: "Chapter 19: Beauty Myths", level: 0 },
    { id: "section-20", title: "Chapter 20: Social Pressure", level: 0 },
    
    // Part III: Personal Stories
    { id: "section-21", title: "Chapter 21: Patient Experiences", level: 0 },
    { id: "section-22", title: "Chapter 22: Transformation Stories", level: 0 },
    { id: "section-23", title: "Chapter 23: Complications", level: 0 },
    { id: "section-24", title: "Chapter 24: Recovery Process", level: 0 },
    { id: "section-25", title: "Chapter 25: Beauty Regimens", level: 0 },
    { id: "section-26", title: "Chapter 26: Lifestyle Changes", level: 0 },
    { id: "section-27", title: "Chapter 27: Self-Image", level: 0 },
    { id: "section-28", title: "Chapter 28: Social Acceptance", level: 0 },
    { id: "section-29", title: "Chapter 29: Beauty Routines", level: 0 },
    { id: "section-30", title: "Chapter 30: Physical Standards", level: 0 },
    
    // Part IV: Psychology of Beauty
    { id: "section-31", title: "Chapter 31: Beauty Psychology", level: 0 },
    { id: "section-32", title: "Chapter 32: Self-Esteem Issues", level: 0 },
    { id: "section-33", title: "Chapter 33: Body Image", level: 0 },
    { id: "section-34", title: "Chapter 34: Social Comparison", level: 0 },
    { id: "section-35", title: "Chapter 35: Media Influence", level: 0 },
    { id: "section-36", title: "Chapter 36: Beauty Standards", level: 0 },
    { id: "section-37", title: "Chapter 37: Cultural Pressures", level: 0 },
    { id: "section-38", title: "Chapter 38: Age and Beauty", level: 0 },
    { id: "section-39", title: "Chapter 39: Beauty Competitions", level: 0 },
    { id: "section-40", title: "Chapter 40: Fashion Industry", level: 0 },
    
    // Part V: Medical Aspects
    { id: "section-41", title: "Chapter 41: Surgical Procedures", level: 0 },
    { id: "section-42", title: "Chapter 42: Non-Surgical Options", level: 0 },
    { id: "section-43", title: "Chapter 43: Medical Ethics", level: 0 },
    { id: "section-44", title: "Chapter 44: Safety Concerns", level: 0 },
    { id: "section-45", title: "Chapter 45: Recovery Stories", level: 0 },
    { id: "section-46", title: "Chapter 46: Success Stories", level: 0 },
    { id: "section-47", title: "Chapter 47: Failed Procedures", level: 0 },
    { id: "section-48", title: "Chapter 48: Medical Advances", level: 0 },
    { id: "section-49", title: "Chapter 49: Treatment Options", level: 0 },
    { id: "section-50", title: "Chapter 50: Healthcare Costs", level: 0 },
    
    // Part VI: Global Perspectives
    { id: "section-51", title: "Chapter 51: International Beauty", level: 0 },
    { id: "section-52", title: "Chapter 52: Cultural Differences", level: 0 },
    { id: "section-53", title: "Chapter 53: Global Markets", level: 0 },
    { id: "section-54", title: "Chapter 54: Beauty Tourism", level: 0 },
    { id: "section-55", title: "Chapter 55: Regional Trends", level: 0 },
    { id: "section-56", title: "Chapter 56: Social Media Impact", level: 0 },
    { id: "section-57", title: "Chapter 57: Technology and Beauty", level: 0 },
    { id: "section-58", title: "Chapter 58: Future Trends", level: 0 },
    { id: "section-59", title: "Chapter 59: Emerging Markets", level: 0 },
    { id: "section-60", title: "Chapter 60: Beauty Innovation", level: 0 },
    
    // Part VII: Conclusion
    { id: "section-61", title: "Chapter 61: Personal Reflections", level: 0 },
    { id: "section-62", title: "Chapter 62: Industry Analysis", level: 0 },
    { id: "section-63", title: "Chapter 63: Social Commentary", level: 0 },
    { id: "section-64", title: "Chapter 64: Future Predictions", level: 0 },
    { id: "section-65", title: "Chapter 65: Beauty Evolution", level: 0 },
    { id: "section-66", title: "Chapter 66: Cultural Impact", level: 0 },
    { id: "section-67", title: "Chapter 67: Final Thoughts", level: 0 },
    { id: "section-68", title: "Chapter 68: Beauty Wisdom", level: 0 },
    { id: "section-69", title: "Chapter 69: Life Lessons", level: 0 },
    { id: "section-70", title: "Chapter 70: Moving Forward", level: 0 },
    { id: "section-71", title: "Chapter 71: Personal Growth", level: 0 },
    { id: "section-72", title: "Chapter 72: Acceptance and Understanding", level: 0 }
  ];
  
  return tableOfContents;
};

const tableOfContents = createTableOfContents();



export default function NavigationSidebar() {
  const handleNavClick = (id: string) => {
    console.log(`Clicking navigation item: ${id}`);
    
    // First try to find exact ID match
    let element = document.getElementById(id);
    console.log(`Found element by ID: ${!!element}`);
    
    // If not found, try to find the content by searching text
    if (!element) {
      const titleMap: { [key: string]: string } = {
        "section-1": "A friend of mine, a New York entertainment executive in her fifties, does not look her age",
        "section-2": "As a culture we are increasingly concerned with and insecure about looking good",
        "section-3": "In this country, 11.9 million cosmetic procedures were performed in 2004",
        "section-4": "It's a plastic surgery odyssey that I had never imagined undertaking",
        "section-5": "Five days later I was back at Zenaida's office",
        "section-6": "Plastic surgery today is fueled by a technology that advances faster than its ethics",
        "section-7": "Television is the heroin of the beauty industry",
        "section-8": "Beauty, in the twenty-first century, is largely defined by the mass media",
        "section-9": "The relationship between patient and plastic surgeon is a complicated one",
        "section-10": "The business model of the cosmetic surgery industry is similar to that of the fashion",
        "section-11": "I know a lot of women-intelligent, accomplished women",
        "section-12": "The relationship between image and reality is complex",
        "section-13": "There's something about television that makes the plastic surgery phenomenon",
        "section-14": "In April of 2004, I underwent my first cosmetic procedure",
        "section-15": "Five months after the lip injection, I went to see Dr. Gerstner",
        "section-16": "In December 2004, I had the Fraxel laser procedure",
        "section-17": "My second Restylane injection was done by a different doctor",
        "section-18": "The funny thing about all the procedures I had, looking back",
        "section-19": "A few weeks after the Restylane injection, I decided to try Botox",
        "section-20": "In January 2005, I returned to see Dr. Gerstner",
        "section-21": "The beauty industry preys on women's dissatisfaction",
        "section-22": "I know a woman who has spent more than $100,000 on cosmetic surgery",
        "section-23": "The most disturbing aspect of the beauty industry",
        "section-24": "For many women, cosmetic surgery becomes an addiction",
        "section-25": "The psychological profile of the cosmetic surgery patient",
        "section-26": "Body dysmorphic disorder affects an estimated 1 to 2 percent",
        "section-27": "The most successful plastic surgeons are skilled not just in surgery",
        "section-28": "Marketing in the cosmetic surgery industry has become increasingly sophisticated",
        "section-29": "The beauty industry has created a culture of perpetual dissatisfaction",
        "section-30": "The financial cost of cosmetic surgery addiction can be staggering"
      };
      
      const searchText = titleMap[id];
      console.log(`Searching for text: ${searchText}`);
      
      if (searchText) {
        // Find all elements containing this text in the document content area
        const contentArea = document.querySelector('[data-document-content]');
        if (contentArea) {
          const allElements = contentArea.querySelectorAll('h1, h2, h3, h4, h5, h6, p');
          for (let i = 0; i < allElements.length; i++) {
            const el = allElements[i];
            const textContent = el.textContent || '';
            
            // Skip table of contents sections - look for actual lecture content
            // We want to skip the TOC entries and find the actual lecture headings/content
            if (textContent.includes(searchText) && 
                !textContent.includes('Table of Contents') && 
                !el.closest('.table-of-contents') &&
                // Skip short entries that are likely table of contents
                textContent.length > 100) {
              element = el as HTMLElement;
              console.log(`Found element by text search: ${el.tagName} - ${textContent.substring(0, 50)}...`);
              break;
            }
          }
        }
      }
    }
    
    if (element) {
      console.log(`Scrolling to element: ${element.tagName}#${element.id || 'no-id'}`);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      
      // Add a temporary highlight to show the user where they landed
      element.style.backgroundColor = '#fef3c7';
      setTimeout(() => {
        element.style.backgroundColor = '';
      }, 2000);
    } else {
      console.log(`No element found for navigation ID: ${id}`);
    }
  };

  return (
    <aside className="w-48 bg-card shadow-sm border-r border-border sticky top-16 h-[calc(100vh-160px)]">
      <div className="p-3 h-full flex flex-col">
        <h3 className="font-inter font-semibold text-sm text-foreground mb-3 flex-shrink-0">
          Table of Contents
        </h3>
        <ScrollArea className="flex-1 h-full">
          <div className="pr-2">
            <nav className="space-y-1">
              {tableOfContents.map((entry) => (
                <button
                  key={entry.id}
                  onClick={() => handleNavClick(entry.id)}
                  className={`block w-full text-left px-2 py-1.5 text-xs hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 rounded transition-colors font-normal ${
                    entry.level === 0 ? 'text-slate-800 dark:text-slate-200' : 
                    entry.level === 1 ? 'pl-4 text-slate-700 dark:text-slate-300' : 
                    'pl-6 text-slate-700 dark:text-slate-300'
                  }`}
                  title={entry.title}
                >
                  <span className="block text-xs leading-tight whitespace-normal">
                    {entry.title}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </ScrollArea>
      </div>
    </aside>
  );
}
