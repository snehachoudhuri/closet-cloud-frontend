import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, TrendingUp, Clock, Shirt } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { title: "Total Items", value: "124", icon: Shirt, change: "+12 this month" },
    { title: "Items Rented", value: "18", icon: TrendingUp, change: "3 active" },
    { title: "Items in Use", value: "32", icon: Clock, change: "Available soon" },
    { title: "Categories", value: "8", icon: Package, change: "Organized" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border shadow-[var(--shadow-soft)]">
          <CardHeader>
            <CardTitle>Recent Uploads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-square bg-muted rounded-2xl" />
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
