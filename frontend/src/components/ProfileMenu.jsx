import { LogOut, Settings } from "lucide-react";

export default function ProfileMenu({ user, onLogout, onClose }) {
  return (
    <div
      className="absolute bottom-12 right-0 bg-white border shadow-md rounded-lg w-52 z-50"
      onMouseLeave={onClose}
    >
      <div className="p-3 border-b">
        <p className="font-semibold text-gray-700">{user?.name}</p>
        <p className="text-xs text-gray-500">{user?.username}</p>
      </div>
      <button
        onClick={() => {
          onClose();
          onLogout();
        }}
        className="flex items-center w-full text-left px-3 py-2 hover:bg-gray-100 text-gray-700 gap-2"
      >
        <LogOut size={16} /> Logout
      </button>
      <button
        onClick={() => {
          onClose();
        }}
        className="flex items-center w-full text-left px-3 py-2 hover:bg-gray-100 text-gray-700 gap-2"
      >
        <Settings size={16} /> Settings
      </button>
    </div>
  );
}
