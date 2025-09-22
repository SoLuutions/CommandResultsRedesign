import { CheckCircle, BookOpen, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutGary() {
  return (
    <section className="py-20" data-testid="section-about-gary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6" data-testid="text-about-title">
            About the Founder
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative" data-testid="gary-image-container">
            <div className="w-full max-w-md mx-auto">
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="w-32 h-32 bg-primary/30 rounded-full flex items-center justify-center">
                  <Users className="w-16 h-16 text-primary" />
                </div>
              </div>
            </div>
          </div>
          
          <div data-testid="gary-bio">
            <h3 className="text-3xl font-bold mb-6" data-testid="text-gary-name">Cecil 'Gary' Rupp</h3>
            <p className="text-xl text-muted-foreground mb-8" data-testid="text-gary-title">
              Project Recovery & Lean‑Agile Expert
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3" data-testid="achievement-specialists">
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-primary mt-0.5" />
                <p className="text-muted-foreground">
                  <strong>600+ specialists</strong> trained to apply Lean‑Agile practices the BVA Program way — situational, results‑focused, and practical
                </p>
              </div>
              
              <div className="flex items-start space-x-3" data-testid="achievement-professionals">
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-primary mt-0.5" />
                <p className="text-muted-foreground">
                  <strong>5,000+ professionals</strong> guided in blending Lean discipline with Agile adaptability across 300+ organizations
                </p>
              </div>
              
              <div className="flex items-start space-x-3" data-testid="achievement-recoveries">
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-primary mt-0.5" />
                <p className="text-muted-foreground">
                  <strong>8 failing software programs</strong> successfully recovered
                </p>
              </div>
              
              <div className="flex items-start space-x-3" data-testid="achievement-books">
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-primary mt-0.5" />
                <p className="text-muted-foreground">
                  Author of <strong>5 books</strong> on SDLC, traditional PM and Agile Methods and Tools, integrating Lean-Agile practices, VSM, DevOps, and methods to scale Scrum
                </p>
              </div>
              
              <div className="flex items-start space-x-3" data-testid="achievement-experience">
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-primary mt-0.5" />
                <p className="text-muted-foreground">
                  <strong>15+ years</strong> leading successful organizational change
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid="button-schedule-consultation"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                data-testid="button-view-publications"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                View Publications
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
