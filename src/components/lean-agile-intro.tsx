import { Zap, Trash2, TrendingUp } from 'lucide-react';

export default function LeanAgileIntro() {
  return (
    <section className="py-20 bg-muted/30" data-testid="section-lean-agile-intro">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8" data-testid="text-lean-agile-title">
          What is the Lean-Agile Way?
        </h2>
        <div className="prose prose-lg mx-auto text-muted-foreground">
          <p className="text-xl mb-6" data-testid="text-lean-agile-description">
            The <em>Lean-Agile Way</em> is a simple approach to driving business improvement—combining{' '}
            <strong>Lean</strong> (cutting waste) and <strong>Agile</strong> (small teams working in short cycles) 
            to deliver maximum value.
          </p>
          <p className="text-lg" data-testid="text-lean-agile-methods">
            At its core, the <em>Lean-Agile Way</em> provides seven proven, practical methods that improve 
            business performance across product, program, and project teams.
          </p>
        </div>
        
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center" data-testid="card-work-smarter">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Work Smarter</h3>
            <p className="text-muted-foreground">Focus on what matters most with proven prioritization methods</p>
          </div>
          
          <div className="text-center" data-testid="card-cut-waste">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Cut Waste</h3>
            <p className="text-muted-foreground">Eliminate effort that doesn't add customer value</p>
          </div>
          
          <div className="text-center" data-testid="card-see-results">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">See Results Fast</h3>
            <p className="text-muted-foreground">Improvements show up in weeks, not months</p>
          </div>
        </div>
      </div>
    </section>
  );
}
