import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Filter, SlidersHorizontal } from "lucide-react";
import CreditCardBlock from "./CreditCardBlock";

const CreditCardListing = () => {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const creditCards = [
    {
      name: "Chase Sapphire Preferred",
      category: "Best for Travel",
      joiningBonus: "80,000 pts",
      annualFee: "$95",
      rewardRate: "2X on Travel",
      loungeAccess: true,
      rating: 4.8,
      highlight: "Best Value",
      isPopular: true
    },
    {
      name: "Capital One Venture X",
      category: "Premium Travel",
      joiningBonus: "75,000 miles", 
      annualFee: "$395",
      rewardRate: "2X on All",
      loungeAccess: true,
      rating: 4.7,
      highlight: "Premium"
    },
    {
      name: "American Express Gold",
      category: "Best for Dining",
      joiningBonus: "60,000 pts",
      annualFee: "$250",
      rewardRate: "4X Dining",
      loungeAccess: false,
      rating: 4.6
    },
    {
      name: "Citi Double Cash",
      category: "Best for Cashback",
      joiningBonus: "$200 Cash",
      annualFee: "$0",
      rewardRate: "2% on All",
      loungeAccess: false,
      rating: 4.5
    },
    {
      name: "Chase Freedom Unlimited",
      category: "No Annual Fee",
      joiningBonus: "$200 Cash",
      annualFee: "$0",
      rewardRate: "1.5% on All",
      loungeAccess: false,
      rating: 4.4
    },
    {
      name: "American Express Platinum",
      category: "Ultra Premium",
      joiningBonus: "100,000 pts",
      annualFee: "$695",
      rewardRate: "5X on Flights",
      loungeAccess: true,
      rating: 4.9,
      highlight: "Luxury"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary-blue-light text-primary-blue border-primary-blue/20">
            Credit Cards
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Find Your Perfect Credit Card
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare the best credit cards with detailed information on rewards, fees, and benefits.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 bg-card rounded-lg border border-border p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Basic Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Card Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="travel">Travel Rewards</SelectItem>
                  <SelectItem value="cashback">Cashback</SelectItem>
                  <SelectItem value="dining">Dining Rewards</SelectItem>
                  <SelectItem value="business">Business Cards</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Annual Fee" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no-fee">No Annual Fee</SelectItem>
                  <SelectItem value="low">Under $100</SelectItem>
                  <SelectItem value="mid">$100 - $300</SelectItem>
                  <SelectItem value="high">$300+</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Credit Score" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">Excellent (750+)</SelectItem>
                  <SelectItem value="good">Good (670-749)</SelectItem>
                  <SelectItem value="fair">Fair (580-669)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Advanced Filters Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Advanced Filters
            </Button>
          </div>

          {/* Advanced Filters */}
          {showAdvancedFilters && (
            <div className="mt-6 pt-6 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Reward Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="points">Points</SelectItem>
                    <SelectItem value="miles">Miles</SelectItem>
                    <SelectItem value="cashback">Cashback</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sign-up Bonus" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">$500+ Value</SelectItem>
                    <SelectItem value="medium">$200-$500</SelectItem>
                    <SelectItem value="low">Under $200</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Lounge Access" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Included</SelectItem>
                    <SelectItem value="no">Not Required</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Card Network" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visa">Visa</SelectItem>
                    <SelectItem value="mastercard">Mastercard</SelectItem>
                    <SelectItem value="amex">American Express</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-medium text-foreground">{creditCards.length}</span> credit cards
          </p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="bonus">Best Sign-up Bonus</SelectItem>
              <SelectItem value="fee">Lowest Annual Fee</SelectItem>
              <SelectItem value="rewards">Best Reward Rate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Credit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creditCards.map((card, index) => (
            <CreditCardBlock key={index} {...card} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 font-medium"
          >
            Load More Cards
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CreditCardListing;