import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeatureTiles from "@/components/FeatureTiles";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeatureTiles />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
