import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const faqItems: FAQItem[] = [
    {
      question: "Why is the Lean-Agile Foundations App free?",
      answer: "The app is free because it delivers essential knowledge your team needs before diving into the more advanced BVA Program. It introduces foundational principles critical to making smarter decisions."
    },
    {
      question: "Do I need a technical background to use the app?",
      answer: "Not at all. The program is designed for operations, product, program, and project leaders regardless of technical expertise. Our content focuses on business processes and outcomes, not technical implementation."
    },
    {
      question: "How fast can we expect to see results?",
      answer: "Most teams build a focused improvement plan in 30 days and see measurable gains in 60-90 days. They also develop skills to sustain excellence beyond initial wins."
    },
    {
      question: "Do you offer team licensing?",
      answer: "Yes. We provide licensing options for departments, business units, or full enterprise teams. Contact us for custom quotes tailored to your organization's needs."
    },
    {
      question: "What makes BVA different from other Agile frameworks?",
      answer: "BVA focuses on situational application of Lean-Agile methods without framework bloat. We emphasize rapid results and measurable business value over process compliance, making it 30% faster to implement."
    }
  ];

  const filteredFAQs = faqItems.filter(
    item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className="py-20 bg-muted/30" data-testid="section-faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-faq-subtitle">
            Everything you need to know about BVA
          </p>
        </div>
        
        {/* FAQ Search */}
        <div className="mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12"
              data-testid="input-faq-search"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>
        </div>
        
        <div className="space-y-4" data-testid="faq-container">
          {filteredFAQs.map((item, index) => (
            <Collapsible
              key={index}
              open={openItems.has(index)}
              onOpenChange={() => toggleItem(index)}
            >
              <div className="bg-card border border-border rounded-lg overflow-hidden" data-testid={`faq-item-${index}`}>
                <CollapsibleTrigger className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/30 transition-colors">
                  <span className="font-semibold pr-4">{item.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transform transition-transform duration-200 flex-shrink-0 ${
                      openItems.has(index) ? 'rotate-180' : ''
                    }`} 
                  />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
          
          {filteredFAQs.length === 0 && (
            <div className="text-center py-8" data-testid="faq-no-results">
              <p className="text-muted-foreground">No FAQs found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
