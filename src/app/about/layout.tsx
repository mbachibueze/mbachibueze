"use client";

import { useAuthRedirect } from "@/src/hooks/useAuthRedirect";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useAuthRedirect();
  return <>{children}</>;
}
