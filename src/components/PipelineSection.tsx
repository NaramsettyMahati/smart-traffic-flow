import { ArrowRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Data Collection",
    description: "Traffic sensors, GPS devices, and open datasets feed real-time data into the system.",
    tech: "IoT Sensors & APIs",
    colorClass: "text-success",
    borderClass: "border-success/30",
  },
  {
    id: "02",
    title: "Stream Processing",
    description: "Apache Kafka manages high-throughput real-time traffic data streaming and ingestion.",
    tech: "Apache Kafka",
    colorClass: "text-accent",
    borderClass: "border-accent/30",
  },
  {
    id: "03",
    title: "Data Analysis",
    description: "Apache Spark performs large-scale data cleaning and historical traffic pattern analysis.",
    tech: "Apache Spark",
    colorClass: "text-primary",
    borderClass: "border-primary/30",
  },
  {
    id: "04",
    title: "ML Prediction",
    description: "Machine learning models predict congestion levels during peak and non-peak hours.",
    tech: "ML Models",
    colorClass: "text-primary",
    borderClass: "border-primary/30",
  },
];

const PipelineSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-px w-12 bg-primary" />
          <span className="font-mono text-sm text-primary tracking-widest uppercase">Architecture</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Data Pipeline</h2>
        <p className="text-muted-foreground max-w-xl mb-16">
          End-to-end Big Data pipeline for traffic congestion prediction using distributed computing.
        </p>

        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div key={step.id} className="relative">
              <div className={`p-6 rounded-xl bg-card border ${step.borderClass} hover:box-glow-primary transition-all duration-300 h-full`}>
                <span className={`font-mono text-xs ${step.colorClass} mb-3 block`}>STEP {step.id}</span>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono ${step.colorClass} bg-secondary`}>
                  {step.tech}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PipelineSection;
