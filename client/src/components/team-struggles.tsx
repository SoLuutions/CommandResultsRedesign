import { AlertCircle, Zap, Smartphone, TrendingUp } from 'lucide-react';

export default function TeamStruggles() {
  return (
    <section className="py-20" data-testid="section-team-struggles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6" data-testid="text-struggles-title">
            Why Teams Struggle
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-struggles-subtitle">
            Even with Agile tools, most teams face these challenges
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="flex items-start space-x-4" data-testid="struggle-misaligned">
              <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Misaligned Goals</h3>
                <p className="text-muted-foreground">Product, ops, support, and delivery teams working towards different objectives.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-testid="struggle-hidden-waste">
              <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Hidden Waste</h3>
                <p className="text-muted-foreground">Delays and rework hidden in plain sight, reducing efficiency.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-testid="struggle-overwhelmed">
              <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Overwhelmed Teams</h3>
                <p className="text-muted-foreground">Too much process, not enough results leading to burnout.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-testid="struggle-roi">
              <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">ROI Concerns</h3>
                <p className="text-muted-foreground">Leaders want ROI but don't see traction from current approaches.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Frustrated business team in meeting" 
              className="rounded-2xl shadow-lg w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-lg font-semibold">"You don't need more tools"</p>
              <p className="text-sm opacity-90">You need a smarter way to deliver value.</p>
            </div>
          </div>
        </div>
        
        {/* Solutions Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="text-solutions-title">
            How BVA Cuts Complexity
          </h2>
          <p className="text-xl text-muted-foreground">Practical solutions for measurable results</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center" data-testid="solution-90day">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">90</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">90-Day Results</h3>
            <p className="text-muted-foreground">Measurable productivity gains in just three months</p>
          </div>
          
          <div className="text-center" data-testid="solution-no-bloat">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-secondary">30%</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">No Framework Bloat</h3>
            <p className="text-muted-foreground">30% faster implementation without unnecessary processes</p>
          </div>
          
          <div className="text-center" data-testid="solution-app-learning">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">App-Based Learning</h3>
            <p className="text-muted-foreground">Learn at your own pace with our mobile-friendly app</p>
          </div>
          
          <div className="text-center" data-testid="solution-roi">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">60%</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">ROI-Focused</h3>
            <p className="text-muted-foreground">Up to 60% profit increases through smarter prioritization</p>
          </div>
        </div>
      </div>
    </section>
  );
}
