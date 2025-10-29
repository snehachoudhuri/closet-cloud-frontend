import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-16 max-w-3xl animate-fade-in">
        <h1 className="text-4xl font-bold mb-8">Profile Settings</h1>
        
        <Card className="border-border shadow-[var(--shadow-soft)]">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center">
              <div className="relative">
                <Avatar className="w-32 h-32">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-2xl">
                    {user.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  className="absolute bottom-0 right-0 rounded-full w-10 h-10"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue={user.name} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue={user.email} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>

            <div className="flex gap-4 pt-4">
              <Button className="flex-1 rounded-full">Save Changes</Button>
              <Button variant="outline" className="rounded-full" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Profile;
