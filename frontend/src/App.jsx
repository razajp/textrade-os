import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import DeveloperDashboard from "./pages/DeveloperDashboard";
import PrivateRoute from "./routes/PrivateRoute";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* 🔹 Default redirect to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* 🔹 Public route */}
          <Route path="/login" element={<Login />} />

          {/* 🔹 Protected route */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DeveloperDashboard />
              </PrivateRoute>
            }
          />

          {/* 🔹 Catch-all (optional): redirect any unknown route to login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
