export default function SuccessMetrics() {
  return (
    <section className="py-20 bg-muted/30" data-testid="section-success-metrics">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="text-success-title">
            Backed by Real-World Success
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-success-subtitle">
            Organizations implementing Lean-Agile practices (2020-2025)
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center" data-testid="metric-productivity">
            <div className="text-6xl lg:text-7xl font-bold text-primary mb-4">20-50%</div>
            <div className="text-xl font-semibold mb-2">Productivity Gains</div>
            <p className="text-muted-foreground">Across organizations implementing BVA methods</p>
          </div>
          
          <div className="text-center" data-testid="metric-efficiency">
            <div className="text-6xl lg:text-7xl font-bold text-secondary mb-4">30-60%</div>
            <div className="text-xl font-semibold mb-2">Efficiency Improvements</div>
            <p className="text-muted-foreground">Depending on industry and implementation scope</p>
          </div>
          
          <div className="text-center" data-testid="metric-profit">
            <div className="text-6xl lg:text-7xl font-bold text-accent mb-4">60%</div>
            <div className="text-xl font-semibold mb-2">Profit Increases</div>
            <p className="text-muted-foreground">Through smarter prioritization and waste reduction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
