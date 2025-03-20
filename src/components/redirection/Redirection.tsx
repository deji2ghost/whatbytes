"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectToDashboard() {
  const router = useRouter();

  useEffect(() => {
    if (window.location.pathname === "/") {
      router.replace("/dashboard");
    }
  }, [router]);

  return null;
}
