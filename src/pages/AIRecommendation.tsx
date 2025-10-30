import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { EventQuestionnaire, EventQuestionnaireData } from "@/components/EventQuestionnaire";
import { useToast } from "@/components/ui/use-toast";

interface OutfitRecommendation {
  id: number;
  title: string;
  description: string;
  clothingItems: string[];
  accessories: string[];
  weatherConditions: {
    temperature: string;
    conditions: string;
    suitable: string;
  };
}

const AIRecommendation = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showQuestionnaire, setShowQuestionnaire] = useState(true);
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<OutfitRecommendation[]>([]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleQuestionnaireSubmit = async (data: EventQuestionnaireData) => {
    setLoading(true);
    try {
      // TODO: Call your API to get recommendations based on event data
      console.log('Getting recommendations for event:', data);
      
      // Simulated API response
      const mockRecommendations: OutfitRecommendation[] = [
        {
          id: 1,
          title: "Professional Event Ensemble",
          description: "A polished and sophisticated outfit perfect for your formal business event. This combination strikes the right balance between professionalism and comfort, ensuring you make a strong impression.",
          clothingItems: [
            "Navy blue tailored suit",
            "Crisp white dress shirt",
            "Charcoal grey dress pants",
            "Black leather Oxford shoes"
          ],
          accessories: [
            "Silver tie clip",
            "Black leather belt",
            "Silver cufflinks",
            "Classic analog watch"
          ],
          weatherConditions: {
            temperature: "Indoor climate-controlled environment",
            conditions: "Not weather dependent",
            suitable: "Appropriate for all-day indoor business events"
          }
        },
        {
          id: 2,
          title: "Business Casual Look",
          description: "A versatile business casual ensemble that maintains professionalism while offering comfort. Perfect for presentations, client meetings, or important office days.",
          clothingItems: [
            "Navy blazer",
            "Light blue Oxford shirt",
            "Khaki chinos",
            "Brown suede loafers"
          ],
          accessories: [
            "Brown leather belt",
            "Leather messenger bag",
            "Silver-tone watch",
            "Classic sunglasses"
          ],
          weatherConditions: {
            temperature: "Moderate (18-24°C / 65-75°F)",
            conditions: "Suitable for mild weather",
            suitable: "Good for spring/fall conditions"
          }
        },
        {
          id: 3,
          title: "Smart Casual Ensemble",
          description: "A refined yet relaxed combination that works well for various semi-formal occasions. This outfit offers flexibility while maintaining a put-together appearance.",
          clothingItems: [
            "Grey merino wool sweater",
            "White crew neck t-shirt",
            "Dark wash jeans",
            "Brown Chelsea boots"
          ],
          accessories: [
            "Leather strap watch",
            "Brown leather belt",
            "Silver minimal bracelet",
            "Classic wayfarers"
          ],
          weatherConditions: {
            temperature: "Cool to mild (15-20°C / 59-68°F)",
            conditions: "Suitable for variable weather",
            suitable: "Adaptable for indoor/outdoor activities"
          }
        }
      ];
      
      setRecommendations(mockRecommendations);
      setShowQuestionnaire(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get outfit recommendations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSkip = async () => {
    setLoading(true);
    try {
      // TODO: Call your API to get recommendations based on weather/calendar
      console.log('Getting general recommendations');
      
      // Simulated API response
      const mockRecommendations: OutfitRecommendation[] = [
        {
          id: 1,
          title: "Weather-Appropriate Casual",
          description: "A comfortable and adaptable outfit that's perfect for today's weather and casual activities. This ensemble provides both style and functionality for your day.",
          clothingItems: [
            "Light cotton sweater",
            "White crew neck t-shirt",
            "Dark wash jeans",
            "White leather sneakers"
          ],
          accessories: [
            "Silver minimal watch",
            "Canvas tote bag",
            "Leather card holder",
            "Classic sunglasses"
          ],
          weatherConditions: {
            temperature: "Mild (16-22°C / 61-72°F)",
            conditions: "Partly cloudy with light breeze",
            suitable: "Perfect for transitional weather"
          }
        },
        {
          id: 2,
          title: "Smart Casual for Meetings",
          description: "A polished yet comfortable outfit suitable for your upcoming meetings and daily activities. Combines professionalism with modern casual elements.",
          clothingItems: [
            "Navy knit blazer",
            "Grey cotton chinos",
            "Light blue Oxford shirt",
            "Brown leather sneakers"
          ],
          accessories: [
            "Brown leather belt",
            "Silver mesh watch",
            "Laptop sleeve",
            "Minimalist pen"
          ],
          weatherConditions: {
            temperature: "Indoor office environment",
            conditions: "Climate-controlled setting",
            suitable: "Appropriate for air-conditioned spaces"
          }
        },
        {
          id: 3,
          title: "Versatile Weekend Wear",
          description: "An adaptable outfit perfect for various weekend activities. Balances style with practicality for both indoor and outdoor settings.",
          clothingItems: [
            "Olive field jacket",
            "Grey merino wool sweater",
            "Dark indigo jeans",
            "Tan suede boots"
          ],
          accessories: [
            "Brown leather watch",
            "Wool beanie",
            "Crossbody bag",
            "Polarized sunglasses"
          ],
          weatherConditions: {
            temperature: "Variable (12-18°C / 54-64°F)",
            conditions: "Mixed conditions expected",
            suitable: "Layered for changing weather"
          }
        }
      ];
      
      setRecommendations(mockRecommendations);
      setShowQuestionnaire(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get outfit recommendations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const placeholderOutfits = recommendations.length ? recommendations : Array(6).fill(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-4 text-center animate-fade-in">Your AI Outfit Suggestions</h1>
        <p className="text-muted-foreground text-center mb-12 animate-fade-in">
          {loading 
            ? "Getting your personalized recommendations..."
            : recommendations.length 
              ? "Here are your personalized outfit suggestions."
              : "Your personalized outfit suggestions will appear here."
          }
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderOutfits.map((outfit, index) => (
            <Card 
              key={index} 
              className="group border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold mb-4">{outfit?.title || `Suggested Outfit ${index + 1}`}</h3>

                <div className="space-y-4">
                  <section>
                    <h4 className="font-medium text-sm text-primary uppercase tracking-wide mb-2">Description</h4>
                    <p className="text-sm text-muted-foreground">
                      {outfit?.description || "Personalized outfit description will appear here"}
                    </p>
                  </section>

                  <section>
                    <h4 className="font-medium text-sm text-primary uppercase tracking-wide mb-2">Clothing Items</h4>
                    {outfit?.clothingItems ? (
                      <ul className="list-disc pl-4 space-y-1">
                        {outfit.clothingItems.map((item, i) => (
                          <li key={i} className="text-sm">{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-muted-foreground">Clothing items will appear here</p>
                    )}
                  </section>

                  <section>
                    <h4 className="font-medium text-sm text-primary uppercase tracking-wide mb-2">Accessories</h4>
                    {outfit?.accessories ? (
                      <ul className="list-disc pl-4 space-y-1">
                        {outfit.accessories.map((item, i) => (
                          <li key={i} className="text-sm">{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-muted-foreground">Accessories will appear here</p>
                    )}
                  </section>

                  <section className="pt-2 border-t">
                    <h4 className="font-medium text-sm text-primary uppercase tracking-wide mb-2">Weather Conditions</h4>
                    {outfit?.weatherConditions ? (
                      <div className="space-y-1">
                        <p className="text-sm">
                          <span className="font-medium">Temperature: </span>
                          <span className="text-muted-foreground">{outfit.weatherConditions.temperature}</span>
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Conditions: </span>
                          <span className="text-muted-foreground">{outfit.weatherConditions.conditions}</span>
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Suitability: </span>
                          <span className="text-muted-foreground">{outfit.weatherConditions.suitable}</span>
                        </p>
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">Weather conditions will appear here</p>
                    )}
                  </section>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <EventQuestionnaire
        open={showQuestionnaire}
        onOpenChange={setShowQuestionnaire}
        onSubmit={handleQuestionnaireSubmit}
        onSkip={handleSkip}
      />
    </div>
  );
};

export default AIRecommendation;
