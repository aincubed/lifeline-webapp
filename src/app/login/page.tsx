"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const supabase = createClientComponentClient();

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    }

    getUser();
  }, []);

  useEffect(() => {
    if (user) {
      // Redirect the user to the root or home page
      router.push("/");
    }
  }, [user]);

  const handleSignUp = async () => {
    const res = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    setUser(res.data.user);
    router.refresh();
    setEmail("");
    setPassword("");
  };

  const handleSignIn = async () => {
    const res = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setUser(res.data.user);
    router.refresh();
    setEmail("");
    setPassword("");
  };
  console.log({ loading, user });

  if (loading) {
    return <h1>loading..</h1>;
  }

  return (
    <main className="flex h-screen items-center justify-center bg-gray-800 p-6">
      <div className="w-96 rounded-lg bg-gray-900 p-8 shadow-md">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="focus:border-blue-500 mb-4 w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-500 focus:outline-none"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="focus:border-blue-500 mb-4 w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-500 focus:outline-none"
        />
        <button
          onClick={handleSignUp}
          className="bg-blue-600 hover:bg-blue-700 mb-2 w-full rounded-md p-3 text-white focus:outline-none"
        >
          Sign Up
        </button>
        <button
          onClick={handleSignIn}
          className="w-full rounded-md bg-gray-700 p-3 text-white hover:bg-gray-600 focus:outline-none"
        >
          Sign In
        </button>
      </div>
    </main>
  );
}
