import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#programs', label: 'Programs' },
    { href: '#workshops', label: 'Workshops' },
    { href: '#testimonials', label: 'Success Stories' },
    { href: '#faq', label: 'FAQ' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" data-testid="navigation-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">CR</span>
            </div>
            <span className="font-bold text-xl text-foreground">CommandResults</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`link-${item.label.toLowerCase().replace(' ', '-')}`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('#programs')}
              data-testid="button-get-started-nav"
            >
              Get Started Free
            </Button>
          </div>
          
          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" data-testid="button-mobile-menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-mobile-${item.label.toLowerCase().replace(' ', '-')}`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button 
                    className="w-full mt-4"
                    onClick={() => scrollToSection('#programs')}
                    data-testid="button-get-started-mobile"
                  >
                    Get Started Free
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
