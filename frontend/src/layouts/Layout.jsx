import { Outlet } from "react-router-dom";
import FloatingBar from "../components/FloatingBar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* 🔹 Main Content */}
      <div className="flex-1 p-6">
        {children || <Outlet />}
      </div>
      <FloatingBar />
    </div>
  );
}