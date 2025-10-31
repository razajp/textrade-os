import { createContext, useState, useContext, useEffect } from "react";
import axiosClient from "../api/axiosClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("sessionId", data.sessionId); // 👈 important
    setUser(data);
  };

  const logout = async () => {
    const sessionId = localStorage.getItem("sessionId");

    if (sessionId) {
      try {
        await axiosClient.post("/users/logout", { sessionId }); // 👈 this is key
      } catch (err) {
        console.log("Logout failed:", err.message);
      }
    }

    localStorage.clear();
    setUser(null);
  };


  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
