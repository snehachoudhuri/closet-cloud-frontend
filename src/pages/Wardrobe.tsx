import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";

const Wardrobe = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const filters = ["All", "Tops", "Bottoms", "Dresses", "Outerwear", "Accessories"];
  
  const items = [
    { id: 1, name: "White Linen Shirt", category: "Tops", available: true },
    { id: 2, name: "Black Wool Coat", category: "Outerwear", available: false },
    { id: 3, name: "Beige Trousers", category: "Bottoms", available: true },
    { id: 4, name: "Silk Dress", category: "Dresses", available: true },
    { id: 5, name: "Leather Bag", category: "Accessories", available: true },
    { id: 6, name: "Gray Sweater", category: "Tops", available: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">My Wardrobe</h1>
          <Link to="/add-item">
            <Button className="rounded-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Item
            </Button>
          </Link>
        </div>

        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant="outline"
              className="rounded-full whitespace-nowrap"
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <Link key={item.id} to={`/item/${item.id}`}>
              <Card className="group overflow-hidden border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all hover:-translate-y-1">
                <div className="aspect-square bg-muted relative overflow-hidden rounded-t-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    item.available 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {item.available ? 'Available' : 'In Use'}
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Wardrobe;
