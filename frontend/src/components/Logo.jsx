import { AppWindow } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 mr-2">
      <AppWindow size={22} className="text-blue-500" />
      <span className="font-semibold text-gray-800 text-sm">TexTradeOS</span>
    </div>
  );
}
