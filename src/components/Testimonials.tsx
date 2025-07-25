import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Digital Marketing Manager",
    content: "CardGenius helped me find a travel card that saves me over $1,200 annually. The recommendations were spot-on!",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "Small Business Owner",
    content: "Finally found a business credit card that actually works for my spending patterns. The process was incredibly smooth.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Emily Johnson",
    role: "Graduate Student", 
    content: "As someone new to credit cards, CardGenius made the whole process less intimidating. Great for beginners!",
    rating: 5,
    avatar: "EJ"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary-blue-light/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold mb-6">
            Trusted by Thousands of
            <span className="text-gradient block">Smart Spenders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our users are saying about their CardGenius experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-gradient rounded-2xl p-6 scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating display */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-6 py-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-semibold text-accent-foreground">4.9 out of 5</span>
            <span className="text-muted-foreground">from 2,847 reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;