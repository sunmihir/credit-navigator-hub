import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Search, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const FeatureTiles = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary-blue-light/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold mb-6">
            Discover Your Perfect
            <span className="text-gradient block">Credit Card Match</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're a first-time user or looking to optimize your rewards, 
            we've got the perfect solution for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* First Tile - Card Finder */}
          <div className="card-gradient rounded-2xl p-8 group cursor-pointer">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary-blue rounded-xl">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Find Your Perfect Card</h3>
                <p className="text-muted-foreground">
                  Answer a few questions about your spending habits and discover 
                  credit cards tailored specifically for you.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-primary-blue" />
                <span className="text-sm font-medium">Personalized Results</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary-blue" />
                <span className="text-sm font-medium">Maximum Rewards</span>
              </div>
            </div>
            
            <Link to="/selection">
              <Button className="btn-primary text-white w-full group-hover:scale-105 transition-transform">
                Find the Best Credit Card
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Second Tile - Savings Calculator */}
          <div className="card-gradient rounded-2xl p-8 group cursor-pointer">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-accent rounded-xl">
                <Calculator className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Calculate Your Savings</h3>
                <p className="text-muted-foreground">
                  See how much money you could save by switching to a better 
                  credit card based on your current spending.
                </p>
              </div>
            </div>
            
            <div className="bg-accent/20 rounded-lg p-4 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-foreground">$847</div>
                <div className="text-sm text-muted-foreground">Average annual savings</div>
              </div>
            </div>
            
            <Link to="/calculator">
              <Button 
                variant="outline" 
                className="w-full border-2 border-accent text-accent-foreground hover:bg-accent group-hover:scale-105 transition-transform"
              >
                Calculate Savings on Current Card
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-blue mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Credit Cards</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-blue mb-2">19</div>
            <div className="text-sm text-muted-foreground">Smart Questions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-blue mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-blue mb-2">2min</div>
            <div className="text-sm text-muted-foreground">Average Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTiles;