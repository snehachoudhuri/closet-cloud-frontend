import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";

const AddItem = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/wardrobe");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-16 max-w-3xl animate-fade-in">
        <h1 className="text-4xl font-bold mb-8">Add New Item</h1>
        
        <Card className="border-border shadow-[var(--shadow-soft)]">
          <CardHeader>
            <CardTitle>Item Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-2 border-dashed border-border rounded-2xl p-12 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground mb-2">Drop image here or click to upload</p>
                <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Item Name</Label>
                <Input id="name" placeholder="e.g., White Linen Shirt" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tops">Tops</SelectItem>
                    <SelectItem value="bottoms">Bottoms</SelectItem>
                    <SelectItem value="dresses">Dresses</SelectItem>
                    <SelectItem value="outerwear">Outerwear</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="size">Size</Label>
                  <Input id="size" placeholder="e.g., M" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <Input id="price" type="number" placeholder="0.00" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Add details about the item..." rows={4} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="condition">Condition</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" className="flex-1 rounded-full">Save Item</Button>
                <Button type="button" variant="outline" className="rounded-full" onClick={() => navigate("/wardrobe")}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AddItem;
