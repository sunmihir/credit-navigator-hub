import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-credit-card.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-blue-light via-background to-background">
      {/* Premium animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-80 h-80 bg-accent rounded-full blur-3xl animate-pulse hero-glow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cta rounded-full blur-3xl animate-pulse delay-1000 hero-glow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-[100px] opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content Section */}
          <div className="text-center lg:text-left fade-in-premium">
            <div className="inline-flex items-center gap-2 bg-primary-blue-light border border-accent/20 rounded-full px-6 py-3 mb-8 premium-border">
              <CreditCard className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-primary tracking-wide">Trusted by 50,000+ users</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight font-premium tracking-tight">
              Find Your
              <span className="text-gradient block">Perfect Credit Card</span>
              in Minutes
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Discover the best credit cards tailored to your spending habits. 
              Smart recommendations, real savings, zero hassle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/selection">
                <Button 
                  size="lg" 
                  className="btn-premium text-white px-10 py-6 text-lg font-bold group shadow-xl"
                >
                  Find Your Perfect Card
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="px-10 py-6 text-lg font-bold border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
              >
                Calculate Savings
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-6 mt-12 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-blue">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Users</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-blue">$2M+</div>
                <div className="text-sm text-muted-foreground">Saved Annually</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-blue">4.9★</div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
            </div>
          </div>
          
          {/* Premium Hero Image */}
          <div className="relative scale-in-premium">
            <div className="relative">
              <img 
                src={heroImage}
                alt="Premium Credit Card"
                className="credit-card-premium w-full max-w-lg mx-auto"
              />
              
              {/* Premium floating cards effect */}
              <div className="absolute -top-6 -left-6 w-24 h-16 bg-gradient-to-r from-accent to-cta rounded-xl opacity-90 credit-card-premium delay-1000 shadow-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-16 bg-gradient-to-r from-cta to-primary rounded-xl opacity-90 credit-card-premium delay-2000 shadow-xl"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-cta/20 rounded-2xl blur-xl scale-110 opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-blue rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;