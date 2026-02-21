import HeroSection from "@/components/HeroSection";
import PipelineSection from "@/components/PipelineSection";
import DashboardSection from "@/components/DashboardSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechStackSection from "@/components/TechStackSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PipelineSection />
      <DashboardSection />
      <FeaturesSection />
      <TechStackSection />

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            Traffic Congestion Prediction System — Smart City Big Data Analytics
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
