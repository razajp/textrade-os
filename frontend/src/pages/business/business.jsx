import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

export default function Businesses() {
  const navigate = useNavigate(); // ✅ initialize

  useEffect(() => {
    document.title = "Businesses | TexTradeOS";
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Businesses</h1>
      <Button
        onClick={() => navigate("/businesses/add")} // ✅ navigate on click
      >
        Add Business
      </Button>
    </div>
  );
}
