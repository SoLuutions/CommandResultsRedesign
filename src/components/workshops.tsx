import { CheckCircle, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Workshops() {
  return (
    <section id="workshops" className="py-20 bg-muted/30" data-testid="section-workshops">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6" data-testid="text-workshops-title">
            Facilitated Workshops
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-workshops-description">
            Expert-guided sessions that blend instruction with hands-on exercises connecting methods to real-world challenges.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* 4-Hour Workshop */}
          <div className="card-hover bg-card border border-border rounded-2xl p-8 relative" data-testid="card-4hour-workshop">
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
              Best Value!
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2" data-testid="text-4hour-title">4-Hour Facilitated Workshop</h3>
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-4hour-price">$325</div>
              <p className="text-muted-foreground text-sm mb-4">per student • 8 student minimum</p>
              <p className="text-muted-foreground">Team-based session introducing the seven methods of the Lean-Agile Way.</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Introduction to 7 Lean-Agile methods</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Hands-on team exercises</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Productivity & efficiency focus</span>
              </li>
            </ul>
            
            <Button 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-contact-4hour"
            >
              Contact Us
            </Button>
          </div>
          
          {/* 8-Hour Workshop */}
          <div className="card-hover bg-card border border-border rounded-2xl p-8 relative" data-testid="card-8hour-workshop">
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
              Best Value!
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2" data-testid="text-8hour-title">8-Hour Facilitated Workshop</h3>
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-8hour-price">$500</div>
              <p className="text-muted-foreground text-sm mb-4">per student • 8 student minimum</p>
              <p className="text-muted-foreground">Deep dive into value stream identification and management.</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Full Lean-Agile foundations</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Value stream mapping</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Practical application exercises</span>
              </li>
            </ul>
            
            <Button 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-contact-8hour"
            >
              Contact Us
            </Button>
          </div>
          
          {/* 3-Day Workshop */}
          <div className="card-hover bg-card border border-border rounded-2xl p-8 relative transform scale-105 shadow-xl" data-testid="card-3day-workshop">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-secondary text-secondary-foreground px-6 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                <Crown className="w-4 h-4" />
                COMPREHENSIVE
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
              Best Value!
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2" data-testid="text-3day-title">3-Day Facilitated Workshop</h3>
              <div className="text-4xl font-bold text-secondary mb-2" data-testid="text-3day-price">$1,150</div>
              <p className="text-muted-foreground text-sm mb-4">per student • 8 student minimum</p>
              <p className="text-muted-foreground">Build complete value stream improvement plan with 90-day results.</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>30-day improvement plan</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>90-day measurable progress</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Skills for sustained excellence</span>
              </li>
            </ul>
            
            <Button 
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transform hover:scale-105 transition-all"
              data-testid="button-contact-3day"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
