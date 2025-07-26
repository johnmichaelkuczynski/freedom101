import { ScrollArea } from "@/components/ui/scroll-area";
import { bookContent as paperContent } from "@shared/book-content";

// Create a table of contents based on "The Analysis of Analysis" content
const createTableOfContents = () => {
  const tableOfContents: Array<{ id: string; title: string; level: number }> = [
    // Introduction to Analytic Philosophy
    { id: "section-1", title: "Philosophy as Categorical Analysis", level: 0 },
    { id: "section-2", title: "Frege's Logical Form Principle", level: 0 },
    { id: "section-3", title: "Grammatical vs. Logical Structure", level: 0 },
    { id: "section-4", title: "Ontological Conservatism", level: 0 },
    
    // Intentionality and Representation
    { id: "section-5", title: "Brentano and Intentionality", level: 0 },
    { id: "section-6", title: "Epistemological Problems", level: 0 },
    { id: "section-7", title: "Propositions vs. Sentences", level: 0 },
    { id: "section-8", title: "The Picture Theory", level: 0 },
    
    // Language and Meaning
    { id: "section-9", title: "Wittgenstein's Early Philosophy", level: 0 },
    { id: "section-10", title: "Logical Atomism", level: 0 },
    { id: "section-11", title: "Elementary Propositions", level: 0 },
    { id: "section-12", title: "Truth Functions", level: 0 },
    
    // Formal Logic and Mathematics
    { id: "section-13", title: "Formal Systems", level: 0 },
    { id: "section-14", title: "Consistency and Completeness", level: 0 },
    { id: "section-15", title: "Gödel's Theorems", level: 0 },
    { id: "section-16", title: "Mathematical Logic", level: 0 },
    
    // Advanced Topics
    { id: "section-17", title: "Semantic Theory", level: 0 },
    { id: "section-18", title: "Empiricism and Pictures", level: 0 },
    { id: "section-19", title: "Formal Entailment", level: 0 },
    { id: "section-20", title: "Geometric Axioms", level: 0 },
    
    // Metaphysical Questions
    { id: "section-21", title: "Logic of Non-existence", level: 0 },
    { id: "section-22", title: "Religion and Morality", level: 0 },
    { id: "section-23", title: "Geometry and Space", level: 0 }
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
        "section-1": "Philosophy as the analysis of the categories in terms of which understand the world",
        "section-2": "(FL) When people have an obviously correct belief that seems to have an absurd consequence",
        "section-3": "What all this shows is that \"someone\" isn't in the same category as \"John\" and \"Ethel.\"",
        "section-4": "As a general rule, analytic philosophers do not try to solve philosophical problems by \"ontologizing\"",
        "section-5": "Your visual perception of yesterday, unlike your visual perception of today, encoded a true existence-claim",
        "section-6": "Here's an example from epistemology. You couldn't see the book in front of you",
        "section-7": "Even though Frege's work inspired many to identify philosophy with sentence-analysis",
        "section-8": "According to the picture-theory, to understand a proposition is to know what would be the case",
        "section-9": "The TLP holds that there is a class of propositions-elementary propositions",
        "section-10": "According to the TLP, every proposition that isn't elementary is a truth-function",
        "section-11": "Consider the sentence-type: \"x is red.\" Obviously, depending on the value assigned to \"x,\"",
        "section-12": "But the truth-functional analysis of logical connectives doesn't give us the whole story",
        "section-13": "Let's consider what it is for a statement to be formally valid",
        "section-14": "But what does it mean to say that a formal system is consistent or complete?",
        "section-15": "In 1931, Kurt Gödel proved that any formal system capable of expressing arithmetic",
        "section-16": "The fact that D1 is a picture of a smiling person may obviously make it easier",
        "section-17": "L. The fact that D1 is a picture of a smiling person may obviously make it easier for people",
        "section-18": "But there couldn't possibly be any strictly perceptual way of knowing that those conversions",
        "section-19": "One of the main contentions of the TLP is that all entailment is formal entailment",
        "section-20": "(HA98) If x's length is one unit, and y's length is 2 units, then there is no length L",
        "section-21": "Are inferences concerning the non-existent (e.g., \"if Zeus is tall, then at least one god is tall\")",
        "section-22": "What is the relationship between religion and morality? Can there be valid moral codes",
        "section-23": "In (1)-(5), the words \"line\" and 'space' are functioning as variables, not as constants"
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
