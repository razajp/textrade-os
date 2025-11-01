import { useState } from "react";
import { Menu } from "lucide-react";
import MenuModal from "./MenuModal";
import { AnimatePresence } from "framer-motion";

export default function MainMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="main-menu bg-[#f8fbfb] shadow-md border border-gray-300 p-1 rounded-2xl">
        <button
          onClick={() => setOpen(true)}
          className="menu-button p-2 rounded-xl hover:bg-[#127475]/15 text-gray-700"
        >
          <Menu size={20} />
        </button>

      </div>
      
      <AnimatePresence>
        {open && <MenuModal onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
