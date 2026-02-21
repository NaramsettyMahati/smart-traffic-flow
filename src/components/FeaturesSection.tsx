import { Database, Cpu, Radio, Brain, BarChart3, MapPin } from "lucide-react";

const features = [
  {
    icon: Radio,
    title: "Real-time Streaming",
    description: "Apache Kafka handles high-throughput data ingestion from thousands of traffic sensors and GPS devices simultaneously.",
  },
  {
    icon: Cpu,
    title: "Distributed Processing",
    description: "Apache Spark enables large-scale data cleaning and analysis of historical traffic patterns across the entire city.",
  },
  {
    icon: Brain,
    title: "ML Predictions",
    description: "Machine learning models predict congestion levels during peak and non-peak hours with high accuracy.",
  },
  {
    icon: Database,
    title: "Big Data Storage",
    description: "Efficiently handles high-volume datasets from multiple sources including sensors, GPS, and open city data.",
  },
  {
    icon: MapPin,
    title: "Hotspot Detection",
    description: "Identifies congestion-prone areas and corridors to support proactive traffic management strategies.",
  },
  {
    icon: BarChart3,
    title: "Smart City Integration",
    description: "Supports effective traffic management decisions for smart city infrastructure and urban planning.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="font-mono text-sm text-primary tracking-widest uppercase">Capabilities</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-muted-foreground">
            A comprehensive system combining Big Data technologies and machine learning for intelligent traffic management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:box-glow-primary transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
