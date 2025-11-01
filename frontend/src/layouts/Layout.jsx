import { Outlet } from "react-router-dom";
import FloatingBar from "../components/FloatingBar";
import AppLogo from "../components/AppLogo";
import MainMenu from "../components/MainMenu";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#eef5f5]">
      {/* 🔹 Main Content */}
      <div className="flex-1 p-6">
        {children || <Outlet />}
      </div>
      {/* <FloatingBar /> */}
      <div className="fixed bottom-0 left-0 p-3 flex gap-3">
        {/* <AppLogo /> */}
        <MainMenu />
      </div>
    </div>
  );
}