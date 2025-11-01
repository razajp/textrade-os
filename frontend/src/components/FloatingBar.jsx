import { motion } from "framer-motion";
import { Building2, LayoutDashboard, Settings } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import NavItem from "./NavItem";

export default function FloatingBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigations = [
    {icon: LayoutDashboard, label: "Dashboard", link: "/dashboard"},
    {icon: Building2, label: "Business", link: "/businesses"},
  ]

  return (
    <motion.div
      className="absolute bottom-0 right-0 p-5 w-full flex justify-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-[#f8fbfb] shadow-md border border-gray-300 rounded-2xl flex items-center gap-1 p-1 z-50 backdrop-blur-md">

        {navigations.map((item) => (
          <NavItem
            key={item.label}
            icon={<item.icon size={20} />}
            label={item.label}
            active={location.pathname === item.link}
            onClick={() => navigate(item.link)}
          />
        ))}
        
      </div>
    </motion.div>
  );
}
