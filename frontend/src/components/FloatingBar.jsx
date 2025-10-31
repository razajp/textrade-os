import { motion } from "framer-motion";
import { Bell, Home, Settings, User } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import NavItem from "./NavItem";
import NotificationMenu from "./NotificationMenu";
import ProfileMenu from "./ProfileMenu";

export default function FloatingBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user } = useAuth();
  const { addToast } = useToast();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = () => {
    logout();
    addToast("Logged out successfully!", "success");
    navigate("/");
  };

  return (
    <motion.div
      className="absolute bottom-0 right-0 p-5 w-full flex justify-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white shadow-md border border-gray-200 rounded-2xl flex items-center gap-1.5 p-1 z-50 backdrop-blur-md">

        {/* Dashboard */}
        <NavItem
          icon={<Home size={20} />}
          label="Dashboard"
          tooltip="Dashboard"
          active={location.pathname === "/dashboard"}
          onClick={() => navigate("/dashboard")}
        />

        {/* Settings */}
        <NavItem
          icon={<Settings size={20} />}
          label="Settings"
          tooltip="Settings"
          active={location.pathname === "/settings"}
          onClick={() => navigate("/settings")}
        />

        {/* Notifications */}
        <div className="relative">
          <NavItem
            icon={<Bell size={20} />}
            label="Notifications"
            tooltip="Notifications"
            active={showNotifications}
            onClick={() => {
              setShowNotifications((prev) => !prev);
              setShowProfile(false);
            }}
          />
          {showNotifications && (
            <NotificationMenu onClose={() => setShowNotifications(false)} />
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          <NavItem
            icon={<User size={20} />}
            label="Profile"
            tooltip="Profile"
            active={showProfile}
            onClick={() => {
              setShowProfile((prev) => !prev);
              setShowNotifications(false);
            }}
          />
          {showProfile && (
            <ProfileMenu
              user={user}
              onLogout={handleLogout}
              onClose={() => setShowProfile(false)}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
