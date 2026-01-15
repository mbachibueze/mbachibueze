

import React, { useContext, useEffect, useState } from "react";
// import { signInWithRedirect } from "firebase/auth";
// import { auth, googleProvider } from "@/src/lib/firebase";
import { ThemeContext } from "@/src/context/themeContext";
import { CircleX } from "lucide-react";

type SignInModalProps = {
  onClose: () => void;
};

const SignInModal: React.FC<SignInModalProps> = ({ onClose }) => {
  const { theme } = useContext(ThemeContext);
  const bg =
    theme === "dark"
      ? "bg-[#274f63] text-[#b0b0b0]"
      : "bg-[#d8f1f5] text-[#4f4f4f]";

  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

//   const handleGoogleSignIn = async () => {
//   try {
//     setLoading(true);
//     await signInWithRedirect(auth, googleProvider);
//   } catch (err) {
//     console.error(err);
//     setLoading(false);
//   }
// };


  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed bg-black/90 h-full w-full grid place-items-center p-5">
        <div
          onClick={onClose}
          className="absolute top-5 right-5 cursor-pointer text-gray-400 hover:text-white"
        >
          <CircleX size={24} />
        </div>

        <main className={`${bg} p-6 px-10 rounded-xl text-center`}>
          <h2 className="text-lg font-semibold mb-4">Admin Sign-In</h2>
          <button
            // onClick={handleGoogleSignIn}
            // disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded disabled:opacity-50"
          >
            {/* {loading ? "Redirecting..." : "Sign in with Google"} */}
            Sign in with Google
          </button>
        </main>
      </div>
    </div>
  );
};

export default SignInModal;
