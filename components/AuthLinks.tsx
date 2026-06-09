"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AuthLinks() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  const { data: session, isPending } = authClient.useSession();

  async function handleLogout() {
    setIsLoading(true);
    try {
      await authClient.signOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
    setIsLoading(false);
  }

  return (
    <div className="border-app-primary hover:text-app-background hover:bg-app-primary text-app-primary rounded-full border-2 px-2 py-1 font-bold duration-200">
      {isLoading || isPending ? (
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          <span>Loading...</span>
        </div>
      ) : session ? (
        <button onClick={handleLogout} disabled={isLoading}>
          Logout
        </button>
      ) : pathname !== "/login" ? (
        <Link href="/login">Login</Link>
      ) : (
        <Link href="/signup">Sign up</Link>
      )}
    </div>
  );
}
