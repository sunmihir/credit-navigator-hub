import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeatureTiles from "@/components/FeatureTiles";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import CreditCardListing from "@/components/CreditCardListing";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeatureTiles />
      <CreditCardListing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
