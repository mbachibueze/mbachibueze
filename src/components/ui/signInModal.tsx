"use client";

import React, { useContext, useEffect, useState } from "react";
import {toast} from 'sonner'
import { ThemeContext } from "@/src/context/themeContext";
import { CircleX } from "lucide-react";
import { useRouter } from "next/navigation";
import { ADMIN_EMAIL, ADMIN_PASSWORD } from "@/src/auth/adminConfig";
import { createSession } from "@/src/auth/session";

type SignInModalProps = {
  onClose: () => void;
};

const SignInModal: React.FC<SignInModalProps> = ({ onClose }) => {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();

  const bg =
    theme === "dark"
      ? "bg-[#274f63] text-[#b0b0b0]"
      : "bg-[#d8f1f5] text-[#4f4f4f]";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleLogin = () => {
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      toast.error("Unauthorized access");
      setError("Unauthorized access");
      return;
    }

    toast.success("Successfully signed in");
    createSession(email);
    onClose();
    router.push("/admin");
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed bg-black/90 h-full w-full grid place-items-center p-5">
        <div
          onClick={onClose}
          className="absolute top-5 right-5 cursor-pointer text-gray-400 hover:text-white"
        >
          <CircleX size={24} />
        </div>

        <main className={`${bg} p-6 px-10 rounded-xl text-center w-full max-w-sm`}>
          <h2 className="text-lg font-semibold mb-4">Admin Sign-In</h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 px-3 py-2 rounded text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-3 py-2 rounded text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

          <button
            onClick={handleLogin}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded w-full"
          >
            Sign In
          </button>
        </main>
      </div>
    </div>
  );
};

export default SignInModal;
