"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession, clearSession } from "@/src/auth/session";
import { ADMIN_EMAIL } from "@/src/auth/adminConfig";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const session = getSession();

    if (!session || session.email !== ADMIN_EMAIL) {
      clearSession();
      router.replace("/about");
    }
  }, [router]);

  return <>{children}</>;
}
