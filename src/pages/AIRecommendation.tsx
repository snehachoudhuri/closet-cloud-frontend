import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AIRecommendation = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const placeholderOutfits = Array(6).fill(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-4 text-center animate-fade-in">Your AI Outfit Suggestions</h1>
        <p className="text-muted-foreground text-center mb-12 animate-fade-in">
          Your personalized outfit suggestions will appear here.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderOutfits.map((_, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[3/4] bg-muted relative overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <p className="text-sm">Outfit {index + 1}</p>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">Suggested Outfit {index + 1}</h3>
                <p className="text-sm text-muted-foreground">Personalized for your style</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AIRecommendation;
