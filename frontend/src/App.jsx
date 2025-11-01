import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import DeveloperDashboard from "./pages/developer/DeveloperDashboard";
import PrivateRoute from "./routes/PrivateRoute";
import Layout from "./layouts/Layout";

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
          
          <Route element={<Layout />}>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DeveloperDashboard />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}
