'use client'

import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { auth, googleProvider } from '@/src/lib/firebase';
import { signInWithPopup, signInWithRedirect, getRedirectResult, User, AuthError } from 'firebase/auth';
import { ThemeContext } from '@/src/context/themeContext';
import { CircleX } from 'lucide-react';

type SignInModalProps = {
  onClose: () => void;
};

const SignInModal: React.FC<SignInModalProps> = ({ onClose }) => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const bg = theme === 'dark' ? 'bg-[#274f63] text-[#b0b0b0]' : 'bg-[#d8f1f5] text-[#4f4f4f]';

  const [loading, setLoading] = useState(false);

  // Disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Utility: Check if user is admin
  const isAdmin = (email: string | null) => email === process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  // Handle login result
  const handleSignInResult = async (user: User) => {
    if (!isAdmin(user.email)) {
      toast.error('Unauthorized!');
      await auth.signOut();
      return;
    }
    toast.success('Signed in successfully!');
    onClose();
    router.push('/admin');
  };

  // Google Sign-In with popup / redirect
  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await handleSignInResult(result.user);
    } catch (error) {
      const authError = error as AuthError;

      // Fallback for mobile / unsupported environments
      if (
        authError.code === 'auth/operation-not-supported-in-this-environment' ||
        authError.code === 'auth/popup-blocked'
      ) {
        try {
          await signInWithRedirect(auth, googleProvider);
        } catch (redirectError) {
          console.error(redirectError);
          toast.error('Google sign-in via redirect failed.');
        }
      } else {
        console.error(authError);
        toast.error('Google sign-in failed. Try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle redirect result on mount (for mobile)
  useEffect(() => {
    getRedirectResult(auth)
      .then(result => {
        if (result?.user) {
          handleSignInResult(result.user);
        }
      })
      .catch(err => {
        console.error(err);
        toast.error('Redirect login failed.');
      });
  }, []);

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed z-40 bg-black/90 h-full w-full grid place-items-center p-5">
        {/* Close Button */}
        <div
          onClick={onClose}
          className="absolute top-5 right-5 cursor-pointer text-gray-400 hover:text-white transition"
        >
          <CircleX size={24} />
        </div>

        <main
          className={`${bg} p-6 px-10 rounded-xl text-center flex flex-col items-center gap-5`}
        >
          <h2 className="text-lg font-semibold">Admin Sign-In</h2>
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Sign in with Google'}
          </button>
          <p className="text-xs text-gray-400 mt-2">
            Use your admin Google account to access the dashboard.
          </p>
        </main>
      </div>
    </div>
  );
};

export default SignInModal;
