import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Travel Blogger",
    content: "CardGenius helped me find the perfect travel rewards card. I've earned enough points for three free flights this year alone!",
    rating: 5,
    avatar: "SC",
    savings: "$2,400"
  },
  {
    name: "Michael Rodriguez", 
    role: "Small Business Owner",
    content: "Finally found a business credit card that actually works for my spending patterns. The cash back rewards are incredible.",
    rating: 5,
    avatar: "MR",
    savings: "$1,850"
  },
  {
    name: "Emily Johnson",
    role: "Graduate Student",
    content: "As someone new to credit cards, CardGenius made the whole process less intimidating. Great for beginners like me!",
    rating: 5,
    avatar: "EJ", 
    savings: "$680"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-blue-light via-background to-accent/5 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 right-16 w-80 h-80 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 left-16 w-96 h-96 bg-cta rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20 fade-in-premium">
          <Badge className="mb-8 bg-accent/10 text-accent border-accent/20 px-8 py-3 text-base font-bold">
            Customer Success Stories
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 font-premium tracking-tight">
            Trusted by <span className="text-gradient">50,000+</span> Users
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            See how CardGenius has helped users save thousands and optimize their financial rewards
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="card-premium relative overflow-hidden group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute top-6 right-6">
                <Quote className="w-10 h-10 text-accent/20 group-hover:text-accent/40 transition-colors duration-500" />
              </div>
              
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-8 leading-relaxed text-lg font-medium">
                  "{testimonial.content}"
                </p>

                {/* Author & Savings */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent to-cta rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                      <div className="text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  <Badge variant="accent" className="text-white font-bold px-4 py-2 shadow-lg">
                    Saved {testimonial.savings}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Premium overall rating display */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 card-premium rounded-2xl px-10 py-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-2xl text-foreground">4.9 out of 5</span>
              <div className="w-px h-6 bg-border"></div>
              <span className="text-muted-foreground text-lg">from 2,847 reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;