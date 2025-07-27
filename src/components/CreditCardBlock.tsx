import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Star, Shield, Plane, Gift, TrendingUp } from "lucide-react";

interface CreditCardProps {
  name: string;
  category: string;
  joiningBonus: string;
  annualFee: string;
  rewardRate: string;
  loungeAccess: boolean;
  rating: number;
  highlight?: string;
  isPopular?: boolean;
  className?: string;
}

const CreditCardBlock = ({ 
  name, 
  category, 
  joiningBonus, 
  annualFee, 
  rewardRate, 
  loungeAccess, 
  rating,
  highlight,
  isPopular = false,
  className = ""
}: CreditCardProps) => {
  return (
    <Card className={`relative group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card ${className}`}>
      {isPopular && (
        <div className="absolute -top-3 left-4 z-10">
          <Badge variant="accent" className="font-medium px-3 py-1 shadow-sm">
            <TrendingUp className="w-3 h-3 mr-1" />
            Most Popular
          </Badge>
        </div>
      )}
      
      {highlight && (
        <div className="absolute -top-3 right-4 z-10">
          <Badge variant="outline" className="bg-primary text-primary-foreground font-medium px-3 py-1">
            {highlight}
          </Badge>
        </div>
      )}

      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div>
            <Badge variant="secondary" className="mb-2 text-xs font-medium">
              {category}
            </Badge>
            <h3 className="font-semibold text-lg text-foreground leading-tight">
              {name}
            </h3>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-foreground">{rating}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="py-0">
        <div className="space-y-3">
          {/* Key Benefits */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-accent" />
                <span className="text-xs text-muted-foreground font-medium">Joining Bonus</span>
              </div>
              <p className="font-semibold text-foreground">{joiningBonus}</p>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground font-medium">Annual Fee</span>
              </div>
              <p className="font-semibold text-foreground">{annualFee}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground font-medium">Reward Rate</span>
              <p className="font-semibold text-accent">{rewardRate}</p>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Plane className="w-4 h-4 text-cta" />
                <span className="text-xs text-muted-foreground font-medium">Lounge Access</span>
              </div>
              <p className="font-semibold text-foreground">
                {loungeAccess ? "Included" : "Not included"}
              </p>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <div className="flex w-full gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 font-medium border-border hover:bg-secondary transition-all duration-200"
          >
            View Details
          </Button>
          <Button 
            variant="cta"
            size="sm" 
            className="flex-1 font-medium"
          >
            Apply Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CreditCardBlock;