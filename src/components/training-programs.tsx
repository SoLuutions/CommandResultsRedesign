import { useState } from 'react';
import { CheckCircle, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function TrainingPrograms() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [reviewToken, setReviewToken] = useState('');

  return (
    <section id="programs" className="py-20" data-testid="section-training-programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6" data-testid="text-programs-title">
            Training Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-programs-description">
            Affordable, flexible learning options for professionals seeking recognized continuing education and real-world results.
          </p>
        </div>
        
        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted rounded-xl p-1 flex" data-testid="toggle-pricing">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                !isAnnual 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              data-testid="button-monthly"
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                isAnnual 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              data-testid="button-annual"
            >
              Annual <span className="text-secondary text-sm">Save 15%</span>
            </button>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Free Course */}
          <div className="card-hover bg-card border border-border rounded-2xl p-8 relative" data-testid="card-free-course">
            <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full font-medium">
              Available Now
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2" data-testid="text-free-course-title">
                Lean-Agile Foundations App
              </h3>
              <div className="text-4xl font-bold text-secondary mb-4" data-testid="text-free-price">Free</div>
              <p className="text-muted-foreground">Essential knowledge for teams starting their Lean-Agile journey</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Self-paced audio-video training</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Mobile-friendly PWA access</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Certificate of Completion</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Tools, templates & exercises</span>
              </li>
            </ul>
            
            <Button 
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
              data-testid="button-get-free-course"
            >
              Get Started Free
            </Button>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">No credit card required</p>
            </div>
          </div>
          
          {/* BVA Program */}
          <div className="card-hover bg-card border border-border rounded-2xl p-8 relative transform scale-105 shadow-xl" data-testid="card-bva-program">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full font-medium">
              Available Now
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2" data-testid="text-bva-program-title">
                BVA Program App
              </h3>
              <div className="text-4xl font-bold text-primary mb-4" data-testid="text-bva-price">
                ${isAnnual ? '40' : '47'}<span className="text-lg text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground">Complete training program for measurable business improvement</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>60+ hours of guided training</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Professional CE credits</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Complete BVA methodology</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Advanced tools & templates</span>
              </li>
            </ul>
            
            <Button 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all"
              data-testid="button-get-program"
            >
              Get Program Access
            </Button>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">Cancel anytime</p>
            </div>
          </div>
          
          {/* Reviewer Access */}
          <div className="card-hover bg-card border border-border rounded-2xl p-8 relative" data-testid="card-reviewer-access">
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full font-medium">
              Reviewer Only
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2" data-testid="text-reviewer-title">Reviewer Access</h3>
              <div className="text-4xl font-bold text-accent mb-4" data-testid="text-token-price">Token</div>
              <p className="text-muted-foreground">Complimentary access for invited reviewers and partners</p>
            </div>
            
            <div className="mb-8">
              <Input
                type="text"
                placeholder="Enter Review Token"
                value={reviewToken}
                onChange={(e) => setReviewToken(e.target.value)}
                data-testid="input-review-token"
              />
            </div>
            
            <Button 
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              disabled={!reviewToken.trim()}
              data-testid="button-unlock-access"
            >
              Unlock Access
            </Button>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">For invited reviewers only</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
