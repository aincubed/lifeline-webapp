"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Logout() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [user, setUser] = useState(null);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      router.refresh();
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <button onClick={handleLogout} className="">
      Logout
    </button>
  );
}
