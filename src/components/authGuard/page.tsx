'use client'

import { auth } from "@/src/lib/firebase";
import { useRouter } from "next/navigation";
import { useEffect, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminAuthGuard = ({ children }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user && user.email === "mbachibueze27@gmail.com") {
        setAuthorized(true);
      } else {
        router.push("/admin/login"); // redirect if not admin
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) return <div className="w-full h-full grid place-items-center">
    <p className="font-semibold">Loading Admin...</p>
  </div>;
  if (!authorized) return null;

  return <>{children}</>;
};

export default AdminAuthGuard;
