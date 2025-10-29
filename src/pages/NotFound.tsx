import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="mb-4 text-8xl font-bold">404</h1>
        <p className="mb-8 text-2xl text-muted-foreground">Page not found</p>
        <Link to="/">
          <Button className="rounded-full">Return to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
