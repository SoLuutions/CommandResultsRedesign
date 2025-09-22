import { Link } from 'wouter';

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-muted border-t border-border py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div data-testid="footer-brand">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">CR</span>
              </div>
              <span className="font-bold text-xl text-foreground">CommandResults</span>
            </div>
            <p className="text-muted-foreground text-sm" data-testid="text-footer-description">
              Accelerating business value through proven Lean-Agile methods and practical training solutions.
            </p>
          </div>
          
          <div data-testid="footer-programs">
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('#programs')}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left"
                  data-testid="link-footer-foundations"
                >
                  Lean-Agile Foundations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#programs')}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left"
                  data-testid="link-footer-bva-program"
                >
                  BVA Program App
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#workshops')}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left"
                  data-testid="link-footer-workshops"
                >
                  Facilitated Workshops
                </button>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="link-footer-implementation"
                >
                  Implementation Support
                </a>
              </li>
            </ul>
          </div>
          
          <div data-testid="footer-resources">
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('#testimonials')}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left"
                  data-testid="link-footer-success-stories"
                >
                  Success Stories
                </button>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="link-footer-maturity-checklist"
                >
                  Maturity Checklist
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#faq')}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left"
                  data-testid="link-footer-faq"
                >
                  FAQ
                </button>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="link-footer-contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div data-testid="footer-connect">
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="link-footer-linkedin"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="link-footer-newsletter"
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="link-footer-schedule-call"
                >
                  Schedule Call
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="link-footer-privacy"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm" data-testid="text-footer-copyright">
            © 2025 CommandResults. All rights reserved. | Accelerating business value through Lean-Agile excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
