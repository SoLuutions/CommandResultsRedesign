import { Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const handleStartFree = () => {
    const element = document.querySelector('#programs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative hero-gradient text-primary-foreground overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&h=1080')"
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" data-testid="text-hero-title">
              Business Value
              <span className="text-accent"> Accelerator</span>
              Program
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90" data-testid="text-hero-description">
              Drive measurable business improvement with the Lean-Agile Way. 
              <strong> Build improvement plans in 30 days</strong>, see results in 90.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4 transform hover:scale-105 shadow-lg transition-all"
                onClick={handleStartFree}
                data-testid="button-start-free-course"
              >
                Start Free Course
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4"
                data-testid="button-watch-demo"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch 90-Second Demo
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span data-testid="text-feature-free">Free 30-min foundations</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span data-testid="text-feature-mobile">Mobile-friendly PWA</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span data-testid="text-feature-specialists">600+ specialists trained</span>
              </div>
            </div>
          </div>
          
          {/* Video Preview */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="aspect-video bg-black/20 rounded-xl flex items-center justify-center cursor-pointer hover:bg-black/30 transition-colors group" data-testid="video-preview">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-accent-foreground ml-1" />
                  </div>
                  <p className="text-lg font-medium">Watch BVA Program Overview</p>
                  <p className="text-sm text-primary-foreground/70">90 seconds • HD Quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
