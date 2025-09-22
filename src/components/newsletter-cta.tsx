import { useState } from 'react';
import { CheckCircle, Zap, TrendingUp, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive our latest Lean-Agile insights and productivity tips.",
    });
    
    setEmail('');
    setIsSubmitting(false);
  };

  const scrollToPrograms = () => {
    const element = document.querySelector('#programs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 bg-muted/30" data-testid="section-newsletter-cta">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="text-cta-title">
            Ready to Accelerate Your Business Value?
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-cta-subtitle">
            Join thousands of organizations that have transformed their productivity and profitability with BVA
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Newsletter Signup */}
          <div className="bg-card border border-border rounded-2xl p-8" data-testid="newsletter-signup">
            <h3 className="text-2xl font-bold mb-4" data-testid="text-newsletter-title">
              Stay Updated with Lean-Agile Insights
            </h3>
            <p className="text-muted-foreground mb-6" data-testid="text-newsletter-description">
              Subscribe for exclusive content, productivity tips, and program updates.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-testid="input-newsletter-email"
              />
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isSubmitting}
                data-testid="button-newsletter-subscribe"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
              </Button>
            </form>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-3" data-testid="newsletter-benefit-1">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">Exclusive productivity tips</span>
              </div>
              <div className="flex items-center space-x-3" data-testid="newsletter-benefit-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">Early access to new features</span>
              </div>
              <div className="flex items-center space-x-3" data-testid="newsletter-benefit-3">
                <Gift className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">Special subscriber discounts</span>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              I agree to receive emails and accept the{' '}
              <a href="#" className="underline hover:no-underline">privacy policy</a>
            </p>
          </div>
          
          {/* Main CTAs */}
          <div className="space-y-6" data-testid="main-ctas">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4" data-testid="text-get-started-title">Get Started Today</h3>
              <p className="text-muted-foreground mb-8" data-testid="text-get-started-subtitle">
                Choose the path that fits your needs
              </p>
            </div>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg py-4 transform hover:scale-105 shadow-lg transition-all"
                onClick={scrollToPrograms}
                data-testid="button-get-started-free"
              >
                Get Started Free
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg py-4"
                data-testid="button-schedule-consultation"
              >
                Schedule Consultation
              </Button>
            </div>
            
            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground" data-testid="text-social-proof">
                Join 600+ specialists already using BVA methods
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
