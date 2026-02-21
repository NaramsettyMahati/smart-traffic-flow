import heroImage from "@/assets/hero-traffic.jpg";
import { Activity, Wifi, Database, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Smart city traffic" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-6 animate-slide-in-up">
            <div className="h-px w-12 bg-primary" />
            <span className="font-mono text-sm text-primary tracking-widest uppercase">Smart City Analytics</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-slide-in-up-delay-1">
            Traffic Congestion{" "}
            <span className="text-primary text-glow-primary">Prediction</span>{" "}
            System
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-slide-in-up-delay-2">
            Leveraging Big Data technologies to analyze large-scale traffic data from sensors, GPS devices, and open datasets for intelligent congestion prediction.
          </p>

          <div className="flex flex-wrap gap-4 animate-slide-in-up-delay-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border">
              <Activity className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-secondary-foreground">Apache Spark</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border">
              <Zap className="w-4 h-4 text-accent" />
              <span className="font-mono text-sm text-secondary-foreground">Apache Kafka</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border">
              <Database className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-secondary-foreground">Machine Learning</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border">
              <Wifi className="w-4 h-4 text-success" />
              <span className="font-mono text-sm text-secondary-foreground">Real-time Streaming</span>
            </div>
          </div>
        </div>

        {/* Floating stats */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6">
          {[
            { value: "2.5M+", label: "Data Points/hr", color: "text-primary" },
            { value: "94.7%", label: "Accuracy", color: "text-success" },
            { value: "<50ms", label: "Latency", color: "text-accent" },
          ].map((stat) => (
            <div key={stat.label} className="text-right animate-float">
              <div className={`text-3xl font-bold font-mono ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
