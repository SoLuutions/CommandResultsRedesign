import { Star } from 'lucide-react';

export default function Testimonials() {
  const renderStars = () => (
    <div className="flex text-accent">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="py-20" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6" data-testid="text-testimonials-title">
            Real Stories. Real Results.
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-testimonials-subtitle">
            From leaders who know how to deliver—and never stop learning
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* BVA Program Testimonials */}
          <div className="space-y-8" data-testid="testimonials-bva">
            <h3 className="text-2xl font-bold text-center mb-8">BVA Program App</h3>
            
            <div className="bg-card border border-border rounded-xl p-6" data-testid="testimonial-bva-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150" 
                    alt="Business executive testimonial" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-muted-foreground mb-4 italic">
                    "A revelation—within 90 days, you'll see material organizational improvements and a pipeline for ongoing value growth."
                  </p>
                  {renderStars()}
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6" data-testid="testimonial-bva-2">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">JM</span>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground mb-4 italic">
                    "By applying the BVA methodology, we avoided a 3–4 month delay and <strong className="text-secondary">saved $1.4M</strong>."
                  </p>
                  {renderStars()}
                </div>
              </div>
            </div>
          </div>
          
          {/* Foundations App Testimonials */}
          <div className="space-y-8" data-testid="testimonials-foundations">
            <h3 className="text-2xl font-bold text-center mb-8">Lean-Agile Foundations App</h3>
            
            <div className="bg-card border border-border rounded-xl p-6" data-testid="testimonial-foundations-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150" 
                    alt="Business professional testimonial" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-muted-foreground mb-4 italic">
                    "One of the best 30-minute Lean/Agile overviews I've seen. Practical, flexible, and results-driven."
                  </p>
                  {renderStars()}
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6" data-testid="testimonial-foundations-2">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150" 
                    alt="Executive testimonial" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-muted-foreground mb-4 italic">
                    "For anyone looking to deepen their Lean and Agile understanding on a tight schedule, this app makes the learning both accessible and impactful."
                  </p>
                  {renderStars()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
