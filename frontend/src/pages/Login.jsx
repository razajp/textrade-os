import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import Input from "../components/Input";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const { addToast } = useToast();

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosClient.post("/users/login", form);
      login(res.data);
      navigate("/dashboard");
      addToast("Login Successfully!", "success");
    } catch (err) {
      addToast(err.response?.data?.message || "Login failed", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#d7f5f5] via-[#eaf4f4] to-[#c8e6e6] p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl border border-gray-300 overflow-hidden mx-auto flex w-[70rem] h-[40rem] shadow-xl relative"
      >
        {/* 🔹 Left Side - Image */}
        <div className="left w-[55%] h-[40rem] relative p-15">
          <div className="h-full w-full rounded-xl overflow-hidden flex items-center">
            <img
              src="https://i.pinimg.com/1200x/3b/4d/c2/3b4dc268587f3bd530a5b231af4f6565.jpg"
              alt="Login illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 🔹 Right Side - Login Form */}
        <div className="right flex items-center justify-center rounded-xl w-[45%]">
          <form onSubmit={handleSubmit} className="space-y-5 w-80">
            <h1 className="text-center text-2xl font-semibold text-gray-800 mb-2">
              Login
            </h1>
            <Input
              label="Username"
              name="username"
              type="text"
              placeholder="Enter your username"
              value={form.username}
              onChange={handleChange}
              required
            />
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
