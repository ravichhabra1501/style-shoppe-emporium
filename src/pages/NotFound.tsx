
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8">
        <h1 className="text-7xl font-bold text-shop-purple mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-6">Page Not Found</p>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button 
          className="bg-shop-purple hover:bg-shop-purple/90"
          onClick={() => navigate('/')}
        >
          Return to Homepage
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
