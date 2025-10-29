import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Calendar } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const ItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-16">
        <Button 
          variant="ghost" 
          className="mb-8 rounded-full"
          onClick={() => navigate("/wardrobe")}
        >
          ← Back to Wardrobe
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="aspect-square bg-muted rounded-3xl mb-4" />
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-muted rounded-2xl" />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">White Linen Shirt</h1>
                <Badge className="rounded-full">Available</Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <Card className="mb-6 border-border shadow-[var(--shadow-soft)]">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-medium">Tops</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Size</span>
                  <span className="font-medium">M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Condition</span>
                  <span className="font-medium">Excellent</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Price</span>
                  <span className="font-medium">$89.00</span>
                </div>
              </CardContent>
            </Card>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                Premium linen shirt perfect for summer. Breathable fabric with a relaxed fit. 
                Features mother-of-pearl buttons and a classic collar design.
              </p>
            </div>

            <Button className="w-full rounded-full mb-3">
              <Calendar className="w-4 h-4 mr-2" />
              Rent Now
            </Button>
            <Button variant="outline" className="w-full rounded-full">
              Add to Collection
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ItemDetails;
