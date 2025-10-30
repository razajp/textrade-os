import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* 🔹 Header */}
      <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <h1 className="text-lg font-bold text-gray-800">Developer Dashboard</h1>
        <div>
          {/* Optional: add logout or profile menu here */}
        </div>
      </header>

      {/* 🔹 Main Content */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-1 p-6"
      >
        {children || <Outlet />}
      </motion.main>

      {/* 🔹 Footer (optional) */}
      <footer className="bg-white py-3 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} My App. All rights reserved.
      </footer>
    </div>
  );
}
