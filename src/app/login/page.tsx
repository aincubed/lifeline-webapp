"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  // const supabase = createClient();

  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();

  // if (session) {
  //   return redirect("/");
  // }

  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/");
  };

  return (
    <div className="flex h-[80vh] items-center justify-center">
      <div className="mx-auto w-full px-8 sm:max-w-md">
        <form
          className="mb-4 flex w-full flex-1 flex-col justify-center gap-2 text-foreground animate-in"
          action={signIn}
        >
          <label className="text-md" htmlFor="email">
            Admin
          </label>
          <input
            className="mb-6 rounded-md border bg-inherit px-4 py-2"
            name="email"
            placeholder="admin@example.com"
            required
          />
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input
            className="mb-6 rounded-md border bg-inherit px-4 py-2"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <button className="mb-2 rounded-md bg-red px-4 py-2 text-foreground text-white">
            Sign In
          </button>

          {searchParams?.message && (
            <p className="mt-4 bg-foreground/10 p-4 text-center text-foreground">
              {searchParams.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
