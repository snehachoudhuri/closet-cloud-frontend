import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, Bell, ShoppingCart, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";

export const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  
  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border animate-fade-in">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold hover:opacity-80 transition-opacity">
          <span>☀</span>
          <span>Closet Cloud</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/") ? "text-primary" : "text-foreground"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/wardrobe" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/wardrobe") ? "text-primary" : "text-foreground"
            }`}
          >
            Wardrobe
          </Link>
          <Link 
            to="/profile" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/profile") ? "text-primary" : "text-foreground"
            }`}
          >
            Profile
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search Fashion Items..." 
              className="pl-10 w-64 rounded-full border-border"
            />
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ShoppingCart className="w-5 h-5" />
          </Button>
          {isAuthenticated && (
            <Button variant="ghost" size="icon" className="rounded-full" onClick={handleLogout}>
              <LogOut className="w-5 h-5" />
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};
