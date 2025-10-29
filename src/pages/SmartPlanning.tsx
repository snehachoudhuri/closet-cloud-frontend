import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SmartPlanning = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-4 text-center animate-fade-in">Weekly Outfit Planner</h1>
        <p className="text-muted-foreground text-center mb-12 animate-fade-in">
          Plan your outfits for the week ahead
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {days.map((day, index) => (
            <Card 
              key={day}
              className="group overflow-hidden border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all hover:border-primary cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[3/4] bg-muted relative overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <Plus className="w-12 h-12 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">{day}</h3>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full rounded-full mt-2"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Outfit
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SmartPlanning;
