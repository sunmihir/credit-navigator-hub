import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Filter, SlidersHorizontal, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import CreditCardBlock from "./CreditCardBlock";

const CreditCardListing = () => {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFeeRange, setSelectedFeeRange] = useState("");
  const [visibleCards, setVisibleCards] = useState(6);

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

  // Filter logic
  const filteredCards = useMemo(() => {
    return creditCards.filter(card => {
      const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           card.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || !selectedCategory || 
                             card.category.toLowerCase().includes(selectedCategory.toLowerCase());
      const matchesFee = selectedFeeRange === "any" || !selectedFeeRange || (
        selectedFeeRange === "no-fee" && card.annualFee === "$0" ||
        selectedFeeRange === "low" && card.annualFee !== "$0" && parseInt(card.annualFee.replace('$', '')) < 100 ||
        selectedFeeRange === "mid" && parseInt(card.annualFee.replace('$', '')) >= 100 && parseInt(card.annualFee.replace('$', '')) <= 300 ||
        selectedFeeRange === "high" && parseInt(card.annualFee.replace('$', '')) > 300
      );
      
      return matchesSearch && matchesCategory && matchesFee;
    });
  }, [searchTerm, selectedCategory, selectedFeeRange]);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-primary-blue-light text-primary-blue border-accent/20 px-6 py-2 text-sm font-bold">
            Premium Credit Cards
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-premium tracking-tight">
            Find Your Perfect Credit Card
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Compare the best credit cards with detailed information on rewards, fees, and benefits.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search credit cards..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-background border-border"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12 card-premium rounded-xl border border-accent/10 p-8 bg-gradient-to-r from-background to-primary-blue-light/30">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Basic Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Card Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="travel">Travel Rewards</SelectItem>
                  <SelectItem value="cashback">Cashback</SelectItem>
                  <SelectItem value="dining">Dining Rewards</SelectItem>
                  <SelectItem value="business">Business Cards</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={selectedFeeRange} onValueChange={setSelectedFeeRange}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Annual Fee" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Fee</SelectItem>
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
            Showing <span className="font-medium text-foreground">{filteredCards.slice(0, visibleCards).length}</span> of{" "}
            <span className="font-medium text-foreground">{filteredCards.length}</span> credit cards
            {searchTerm && (
              <span> matching "<span className="font-medium text-foreground">{searchTerm}</span>"</span>
            )}
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
          {filteredCards.slice(0, visibleCards).map((card, index) => (
            <CreditCardBlock key={`${card.name}-${index}`} {...card} />
          ))}
        </div>

        {/* No Results */}
        {filteredCards.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">No credit cards match your search criteria</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedFeeRange("any");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredCards.length > visibleCards && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 font-medium"
              onClick={() => setVisibleCards(prev => prev + 6)}
            >
              Load More Cards ({filteredCards.length - visibleCards} remaining)
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CreditCardListing;