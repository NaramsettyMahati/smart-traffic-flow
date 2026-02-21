const techs = [
  { name: "Apache Spark", role: "Data Processing & Analysis", category: "Processing" },
  { name: "Apache Kafka", role: "Real-time Data Streaming", category: "Streaming" },
  { name: "Python", role: "ML Model Development", category: "Language" },
  { name: "Hadoop HDFS", role: "Distributed Storage", category: "Storage" },
  { name: "TensorFlow", role: "Deep Learning Models", category: "ML" },
  { name: "Scikit-learn", role: "Classical ML Algorithms", category: "ML" },
];

const TechStackSection = () => {
  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-px w-12 bg-primary" />
          <span className="font-mono text-sm text-primary tracking-widest uppercase">Technology</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Tech Stack</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techs.map((tech) => (
            <div key={tech.name} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground font-bold font-mono text-sm shrink-0">
                {tech.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{tech.name}</h3>
                <p className="text-xs text-muted-foreground">{tech.role}</p>
              </div>
              <span className="ml-auto text-xs font-mono text-muted-foreground px-2 py-1 bg-secondary rounded">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
