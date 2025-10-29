import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { AuthModal } from "@/components/AuthModal";
import aiOutfitImage from "@/assets/ai-outfit-rec.jpeg";
import smartPlanningImage from "@/assets/smart-planning.jpeg";
import wardrobeImage from "@/assets/wardrobe-management.jpeg";
import heroBg from "@/assets/hero-bg.jpeg";

const Index = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [redirectTo, setRedirectTo] = useState("");
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const features = [
    {
      title: "AI Outfit Recommendation",
      image: aiOutfitImage,
      link: "/ai-recommendation",
    },
    {
      title: "Digital Wardrobe Management",
      image: wardrobeImage,
      link: "/wardrobe",
    },
    {
      title: "Smart Planning",
      image: smartPlanningImage,
      link: "/smart-planning",
    },
  ];

  const handleFeatureClick = (link: string) => {
    if (isAuthenticated) {
      navigate(link);
    } else {
      setRedirectTo(link);
      setAuthModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section - Split Background */}
        <section className="relative pt-20">
          {/* Top Half with Background */}
          <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${heroBg})`,
                filter: "blur(10px) brightness(0.6)",
              }}
            />
          </div>

          {/* Tagline at boundary */}
          <div className="absolute left-0 right-0 top-[50vh] transform -translate-y-1/2 z-20 text-center px-6">
            <h1 className="text-5xl md:text-6xl font-light tracking-wide text-white animate-fade-in" style={{ fontFamily: 'Ubuntu, sans-serif', fontWeight: 300 }}>
              Your Intelligent Fashion Assistant
            </h1>
          </div>

          {/* Bottom Half - White Background with Feature Cards */}
          <div className="bg-white py-32">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    onClick={() => handleFeatureClick(feature.link)}
                    className="group overflow-hidden border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all hover:-translate-y-2 hover:scale-105 cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="aspect-square overflow-hidden rounded-t-2xl">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 text-center bg-white">
                      <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} redirectTo={redirectTo} />
    </div>
  );
};

export default Index;
