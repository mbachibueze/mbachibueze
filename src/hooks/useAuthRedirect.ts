"use client";

import { useEffect, useRef } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/src/lib/firebase";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const isAdmin = (email?: string | null) => {
  if (!email) return false;

  return (
    email.toLowerCase() ===
    process.env.NEXT_PUBLIC_ADMIN_EMAIL?.toLowerCase()
  );
};

export const useAuthRedirect = () => {
  const router = useRouter();
  const handled = useRef(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user || handled.current) return;

      handled.current = true;

      if (!isAdmin(user.email)) {
        toast.error("Unauthorized access");
        await auth.signOut();
        return;
      }

      toast.success("Signed in successfully");
      router.replace("/admin");
    });

    return () => unsubscribe();
  }, [router]);
};
