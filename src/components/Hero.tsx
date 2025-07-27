import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-credit-card.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-blue-light via-background to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content Section */}
          <div className="text-center lg:text-left fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary-blue-light border border-primary-blue/20 rounded-full px-4 py-2 mb-6">
              <CreditCard className="w-4 h-4 text-primary-blue" />
              <span className="text-sm font-medium text-primary-blue">Trusted by 50,000+ users</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Find Your
              <span className="text-gradient block">Perfect Credit Card</span>
              in Minutes
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Discover the best credit cards tailored to your spending habits. 
              Smart recommendations, real savings, zero hassle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/selection">
                <Button 
                  size="lg" 
                  className="btn-primary text-white px-8 py-4 text-lg font-semibold group"
                >
                  Find Your First Credit Card
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
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
          
          {/* Hero Image */}
          <div className="relative scale-in">
            <div className="relative">
              <img 
                src={heroImage}
                alt="Premium Credit Card"
                className="credit-card-float w-full max-w-lg mx-auto drop-shadow-2xl"
              />
              
              {/* Floating cards effect */}
              <div className="absolute -top-4 -left-4 w-20 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-80 credit-card-float delay-1000"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg opacity-80 credit-card-float delay-2000"></div>
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