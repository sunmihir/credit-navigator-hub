import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

// Categories for the category-based flow
const categories = [
  {
    id: "travel",
    title: "Travel & Miles",
    description: "Earn miles and travel rewards",
    icon: "✈️",
    color: "bg-blue-100 text-blue-700"
  },
  {
    id: "cashback",
    title: "Cash Back",
    description: "Earn cash on every purchase",
    icon: "💰",
    color: "bg-green-100 text-green-700"
  },
  {
    id: "dining",
    title: "Dining & Food",
    description: "Rewards for restaurants & groceries",
    icon: "🍽️",
    color: "bg-orange-100 text-orange-700"
  },
  {
    id: "shopping",
    title: "Shopping",
    description: "Online and retail rewards",
    icon: "🛍️",
    color: "bg-purple-100 text-purple-700"
  },
  {
    id: "gas",
    title: "Gas & Transportation",
    description: "Save on fuel and commuting",
    icon: "⛽",
    color: "bg-red-100 text-red-700"
  },
  {
    id: "business",
    title: "Business",
    description: "Business expenses & rewards",
    icon: "💼",
    color: "bg-gray-100 text-gray-700"
  }
];

// Sample questions for the step-by-step flow
const questions = [
  {
    id: 1,
    question: "What's your current annual income?",
    type: "range",
    options: ["Under $30k", "$30k-$50k", "$50k-$75k", "$75k-$100k", "Over $100k"]
  },
  {
    id: 2,
    question: "How much do you typically spend per month?",
    type: "range",
    options: ["Under $1,000", "$1,000-$2,500", "$2,500-$5,000", "$5,000+"]
  },
  {
    id: 3,
    question: "What's your current credit score range?",
    type: "range",
    options: ["Poor (300-579)", "Fair (580-669)", "Good (670-739)", "Very Good (740-799)", "Excellent (800+)"]
  }
];

const Selection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleAnswerSelect = (questionId: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-blue-light via-background to-background">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12 fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's Find Your
              <span className="text-gradient block">Perfect Credit Card</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred way to discover credit cards tailored to your needs
            </p>
          </div>

          {/* Tabs */}
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="questions" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 h-12">
                <TabsTrigger value="questions" className="text-lg">
                  Step-by-Step Questions
                </TabsTrigger>
                <TabsTrigger value="categories" className="text-lg">
                  Browse by Category
                </TabsTrigger>
              </TabsList>

              {/* Step-by-step Questions Tab */}
              <TabsContent value="questions">
                <div className="card-gradient rounded-2xl p-8">
                  {/* Progress bar */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        Question {currentQuestion + 1} of {questions.length}
                      </span>
                      <span className="text-sm font-medium text-primary-blue">
                        {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
                      </span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div 
                        className="bg-primary-blue h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Current Question */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-6 text-center">
                      {questions[currentQuestion].question}
                    </h3>
                    
                    <div className="grid gap-3 max-w-2xl mx-auto">
                      {questions[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(questions[currentQuestion].id, option)}
                          className={`p-4 rounded-xl border-2 transition-all text-left hover:scale-105 ${
                            answers[questions[currentQuestion].id] === option
                              ? 'border-primary-blue bg-primary-blue-light text-primary-blue'
                              : 'border-border hover:border-primary-blue/50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              answers[questions[currentQuestion].id] === option
                                ? 'border-primary-blue bg-primary-blue'
                                : 'border-muted-foreground'
                            }`}>
                              {answers[questions[currentQuestion].id] === option && (
                                <CheckCircle className="w-3 h-3 text-white" />
                              )}
                            </div>
                            <span className="font-medium">{option}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between items-center">
                    <Button
                      variant="outline"
                      onClick={prevQuestion}
                      disabled={currentQuestion === 0}
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Previous
                    </Button>

                    {currentQuestion === questions.length - 1 ? (
                      <Link to="/results">
                        <Button 
                          className="btn-primary text-white flex items-center gap-2"
                          disabled={!answers[questions[currentQuestion].id]}
                        >
                          View Results
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        onClick={nextQuestion}
                        disabled={!answers[questions[currentQuestion].id]}
                        className="btn-primary text-white flex items-center gap-2"
                      >
                        Next
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </TabsContent>

              {/* Category Selection Tab */}
              <TabsContent value="categories">
                <div className="card-gradient rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    What type of rewards matter most to you?
                  </h3>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`p-6 rounded-xl border-2 transition-all hover:scale-105 ${
                          selectedCategory === category.id
                            ? 'border-primary-blue bg-primary-blue-light'
                            : 'border-border hover:border-primary-blue/50'
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-3xl mb-3">{category.icon}</div>
                          <h4 className="font-bold mb-2">{category.title}</h4>
                          <p className="text-sm text-muted-foreground">{category.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  {selectedCategory && (
                    <div className="text-center">
                      <Link to={`/category/${selectedCategory}`}>
                        <Button className="btn-primary text-white text-lg px-8 py-3">
                          Continue with {categories.find(c => c.id === selectedCategory)?.title}
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;